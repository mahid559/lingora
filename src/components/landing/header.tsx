"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/roadmap", label: "60-Day Course" },
  { href: "/roadmap-90", label: "90-Day Advanced" },
  { href: "/ielts", label: "IELTS Prep" },
  { href: "/vocabulary", label: "Vocabulary" },
  { href: "/#method", label: "Method" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "border-brand-navy-800/10 bg-brand-cream/90 backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <nav aria-label="Main Navigation" className="container-page flex h-16 items-center justify-between gap-4">
        <Logo withTagline />

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy-700 transition-colors hover:bg-brand-navy/5 hover:text-brand-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/login" variant="ghost" size="sm">
            Log In
          </ButtonLink>
          <ButtonLink href="/dashboard" variant="primary" size="sm">
            Start Free
          </ButtonLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-navy-800/10 bg-brand-surface px-4 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-navy-800 hover:bg-brand-mint-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <ButtonLink href="/login" variant="outline" size="sm" className="flex-1">
                Log In
              </ButtonLink>
              <ButtonLink href="/dashboard" variant="primary" size="sm" className="flex-1">
                Start Free
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}