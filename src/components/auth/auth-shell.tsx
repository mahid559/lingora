"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, MailCheck } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { Toaster, useToast } from "@/components/ui/toaster";
import {
  forgotPasswordAction,
  loginAction,
  registerAction,
  resetPasswordAction,
} from "@/actions/auth";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { validateDisplayName, validateEmail, validatePassword } from "@/lib/validators";

export type AuthMode = "login" | "register" | "forgot-password" | "reset-password";

const COPY: Record<
  AuthMode,
  { heading: string; sub: string; submit: string; footnote?: React.ReactNode }
> = {
  login: {
    heading: "আবার ফিরে আসুন",
    sub: "আপনার অগ্রগতি, স্ট্রিক আর শব্দভান্ডার আপনার জন্য অপেক্ষা করছে।",
    submit: "লগইন করুন",
  },
  register: {
    heading: "আজই শুরু করুন",
    sub: "বিনামূল্যে অ্যাকাউন্ট খুলুন — ৬০ দিনের যাত্রা এখান থেকেই শুরু।",
    submit: "অ্যাকাউন্ট খুলুন",
  },
  "forgot-password": {
    heading: "পাসওয়ার্ড ভুলে গেছেন?",
    sub: "আপনার ইমেইল ঠিকানা দিন — পাসওয়ার্ড রিসেটের লিংক পাঠিয়ে দেবো।",
    submit: "রিসেট লিংক পাঠান",
  },
  "reset-password": {
    heading: "নতুন পাসওয়ার্ড দিন",
    sub: "কমপক্ষে ৮ অক্ষর, সাথে একটি অক্ষর ও একটি সংখ্যা।",
    submit: "পাসওয়ার্ড পরিবর্তন করুন",
  },
};

export interface AuthShellProps {
  mode: AuthMode;
  next?: string;
  recoveryCode?: string;
  authError?: string;
  children?: React.ReactNode;
}

function AuthShellScreen({ mode, next, recoveryCode, authError, children }: AuthShellProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [name, setName] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
  const [sessionReady, setSessionReady] = React.useState(!recoveryCode);
  const [pageError, setPageError] = React.useState<string | null>(authError ?? null);
  const [deferredNotice, setDeferredNotice] = React.useState(false);

  // Reset-password flow: exchange the recovery code for a session first.
  React.useEffect(() => {
    if (!recoveryCode || !isSupabaseConfigured) return;
    let cancelled = false;
    (async () => {
      try {
        const supabase = createSupabaseBrowserClient();
        const { error } = await supabase.auth.exchangeCodeForSession(recoveryCode);
        if (cancelled) return;
        if (error) {
          setPageError("রিসেট লিংকটি বৈধ নয় বা মেয়াদ শেষ হয়েছে। নতুন লিংক নিন।");
        } else {
          setSessionReady(true);
        }
      } catch {
        if (!cancelled) setPageError("Supabase সংযোগ পাওয়া যায়নি।");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [recoveryCode]);

  const copy = COPY[mode];

  function validate(): boolean {
    const nextErrors: Record<string, string> = {};
    if (mode === "login" || mode === "forgot-password") {
      const e = validateEmail(email);
      if (e) nextErrors.email = e;
      if (mode === "login" && !password) nextErrors.password = "পাসওয়ার্ড লিখুন।";
    }
    if (mode === "register") {
      const e = validateEmail(email);
      if (e) nextErrors.email = e;
      const p = validatePassword(password);
      if (p) nextErrors.password = p;
      const n = validateDisplayName(name);
      if (n) nextErrors.name = n;
      if (confirm && confirm !== password) nextErrors.confirm = "দুটি পাসওয়ার্ড মিলছে না।";
    }
    if (mode === "reset-password") {
      const p = validatePassword(password);
      if (p) nextErrors.password = p;
      if (confirm !== password) nextErrors.confirm = "দুটি পাসওয়ার্ড মিলছে না।";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Authentication is deferred until Supabase is configured. Rather than
    // firing a request that would only fail, tell the learner the honest
    // status and point them at the (account-free) learning experience.
    if (!isSupabaseConfigured) {
      setDeferredNotice(true);
      setPageError(null);
      setSuccessMessage(null);
      return;
    }

    setLoading(true);
    setSuccessMessage(null);

    try {
      if (mode === "login") {
        const res = await loginAction(email, password);
        if (res.success) {
          toast("লগইন সফল!");
          router.push(res.data?.redirectTo ?? next ?? "/dashboard");
          router.refresh();
        } else {
          setPageError(res.error);
        }
      } else if (mode === "register") {
        const res = await registerAction(email, password, name);
        if (res.success) {
          setSuccessMessage(res.message ?? null);
          setPageError(null);
          if (res.data?.needsEmailConfirmation === false) {
            router.push("/dashboard");
            router.refresh();
          }
        } else {
          setPageError(res.error);
        }
      } else if (mode === "forgot-password") {
        const res = await forgotPasswordAction(email);
        if (res.success) {
          setSuccessMessage(res.message ?? "ইমেইল চেক করুন।");
          setPageError(null);
        } else {
          setPageError(res.error);
        }
      } else if (mode === "reset-password") {
        const res = await resetPasswordAction(password);
        if (res.success) {
          setSuccessMessage(res.message ?? "পাসওয়ার্ড পরিবর্তিত হয়েছে।");
          setPassword("");
          setConfirm("");
          setPageError(null);
        } else {
          setPageError(res.error);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  const showPasswordFields = mode === "login" || mode === "register" || mode === "reset-password";

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <header className="container-page flex h-16 items-center justify-between">
        <Logo withTagline />
        <ButtonLink href="/" variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" /> হোম
        </ButtonLink>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 pb-16 pt-6">
        <div className="w-full max-w-md">
          {children}
          <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
            <div className="mb-6">
              <h1 className="font-bangla text-2xl font-bold tracking-tight text-brand-navy-900">
                {copy.heading}
              </h1>
              <p className="mt-1.5 font-bangla text-sm leading-6 text-brand-navy-600">{copy.sub}</p>
            </div>

            {successMessage && (
              <div
                role="status"
                className="mb-5 flex items-start gap-2.5 rounded-xl bg-brand-mint-100 px-4 py-3 text-sm font-medium leading-6 text-brand-mint-800"
              >
                <MailCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                {successMessage}
              </div>
            )}

            {pageError && (
              <div
                role="alert"
                className="mb-5 rounded-xl bg-brand-rose-100 px-4 py-3 text-sm font-medium leading-6 text-brand-rose-600"
              >
                {pageError}
              </div>
            )}

            {deferredNotice && (
              <div
                role="status"
                className="mb-5 rounded-xl bg-brand-amber-100 px-4 py-3 text-sm leading-6 text-brand-navy-700"
              >
                <p className="font-bangla font-bold text-brand-amber-600">
                  অ্যাকাউন্ট ব্যবস্থা এখনো চালু হয়নি
                </p>
                <p className="font-bangla mt-1">
                  এই মুহূর্তে কোনো অ্যাকাউন্ট ছাড়াই পুরো কোর্স শিখতে পারবেন — আপনার অগ্রগতি,
                  স্ট্রিক ও শব্দভান্ডার এই ডিভাইসে সংরক্ষিত থাকবে।
                </p>
              </div>
            )}

            {mode === "forgot-password" && successMessage ? null : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {mode === "register" && (
                  <Field
                    label="আপনার নাম"
                    htmlFor="name"
                    error={errors.name}
                    hint="এটি ড্যাশবোর্ডে ও ব্যাজে দেখানো হবে।"
                  >
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      invalid={Boolean(errors.name)}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="যেমন: রাফসান আহমেদ"
                    />
                  </Field>
                )}

                {mode !== "reset-password" && (
                  <Field label="ইমেইল" htmlFor="email" error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      invalid={Boolean(errors.email)}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                  </Field>
                )}

                {showPasswordFields && (
                  <>
                    <Field
                      label={mode === "reset-password" ? "নতুন পাসওয়ার্ড" : "পাসওয়ার্ড"}
                      htmlFor="password"
                      error={errors.password}
                      hint={
                        mode === "register" || mode === "reset-password"
                          ? "কমপক্ষে ৮ অক্ষর, একটি অক্ষর ও একটি সংখ্যা।"
                          : undefined
                      }
                    >
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete={
                          mode === "register" ? "new-password" : mode === "reset-password" ? "new-password" : "current-password"
                        }
                        value={password}
                        invalid={Boolean(errors.password)}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                      />
                    </Field>

                    {(mode === "register" || mode === "reset-password") && (
                      <Field
                        label="পাসওয়ার্ড আবার লিখুন"
                        htmlFor="confirm"
                        error={errors.confirm}
                      >
                        <Input
                          id="confirm"
                          name="confirm"
                          type="password"
                          autoComplete="new-password"
                          value={confirm}
                          invalid={Boolean(errors.confirm)}
                          onChange={(e) => setConfirm(e.target.value)}
                          placeholder="••••••••"
                        />
                      </Field>
                    )}
                  </>
                )}

                {mode === "login" && (
                  <div className="text-right">
                    <Link
                      href="/forgot-password"
                      className="text-sm font-semibold text-brand-mint-700 hover:text-brand-mint-800"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </Link>
                  </div>
                )}

                <Button type="submit" size="lg" loading={loading} className="w-full">
                  {copy.submit}
                </Button>
              </form>
            )}

            {mode === "forgot-password" && successMessage && (
              <div className="mt-2">
                <ButtonLink href="/login" variant="secondary" size="lg" className="w-full">
                  লগইন পেজে ফিরুন
                </ButtonLink>
              </div>
            )}

            {!isSupabaseConfigured && (
              <div className="mt-4">
                <ButtonLink href="/dashboard" variant="secondary" size="lg" className="w-full">
                  অ্যাকাউন্ট ছাড়াই শেখা শুরু করুন
                </ButtonLink>
              </div>
            )}

            <div className="mt-6 border-t border-brand-navy-800/10 pt-5 text-center text-sm">
              {mode === "login" ? (
                <p className="font-bangla text-brand-navy-600">
                  নতুন এখানে?{" "}
                  <Link href="/register" className="font-bold text-brand-mint-700 hover:underline">
                    বিনামূল্যে অ্যাকাউন্ট খুলুন
                  </Link>
                </p>
              ) : mode === "register" ? (
                <p className="font-bangla text-brand-navy-600">
                  ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                  <Link href="/login" className="font-bold text-brand-mint-700 hover:underline">
                    লগইন করুন
                  </Link>
                </p>
              ) : mode === "reset-password" ? (
                <p className="font-bangla text-brand-navy-600">
                  সেশন ঝুলে গেছে?{" "}
                  <Link href="/forgot-password" className="font-bold text-brand-mint-700 hover:underline">
                    নতুন রিসেট লিংক নিন
                  </Link>
                </p>
              ) : null}
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-brand-navy-600">
            <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 text-brand-mint" aria-hidden />
            নিরাপদ লগইন · আপনার ডেটা কেবল আপনার অ্যাকাউন্টে
          </p>
          {!sessionReady && (
            <p className="mt-6 text-center text-xs font-semibold text-brand-navy-600">
              পাসওয়ার্ড রিসেট সেশন প্রস্তুত হচ্ছে…
            </p>
          )}
        </div>
      </main>
      <footer className="pb-8 text-center text-xs text-brand-navy-600">
        © {new Date().getFullYear()} LINGORA · Learn English, One Day at a Time.
      </footer>
    </div>
  );
}

/** Renders the auth screen inside a toast provider so `useToast()` is available. */
export function AuthShell(props: AuthShellProps) {
  return (
    <Toaster>
      <AuthShellScreen {...props} />
    </Toaster>
  );
}

/** Export a wrapper so pages that need toast context render it once. */
export function AuthPage({ children }: { children: React.ReactNode }) {
  return <Toaster>{children}</Toaster>;
}