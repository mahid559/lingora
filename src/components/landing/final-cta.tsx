import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-brand-cream py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy-800 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-mint/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Start Your Journey to English Fluency & IELTS Success
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-bangla text-base leading-7 text-brand-mint-100/90">
                স্পোকেন ইংলিশের ৬০/৯০ দিনের কোর্স অথবা আইইএলটিএস ব্যান্ড ৭.০-৮.৫+ প্রস্তুতি — আপনার পছন্দের ট্র্যাক বেছে নিয়ে আজই প্রথম পাঠ শুরু করুন।
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/dashboard" size="lg" className="w-full sm:w-auto">
                  Start Learning Free
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/login"
                  size="lg"
                  variant="outline"
                  className="w-full border-brand-mint-100/30 text-brand-mint-100 hover:border-brand-mint-100/60 hover:bg-white/5 sm:w-auto"
                >
                  Log In
                </ButtonLink>
              </div>
              <p className="mt-5 text-xs text-brand-mint-100/70">
                No Credit Card Required · Free Access · Instant Browser Progress Tracking
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}