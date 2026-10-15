import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrackSelectorSection } from "@/components/landing/track-selector";
import { MethodSection } from "@/components/landing/method";
import { RoadmapPreview } from "@/components/landing/roadmap-preview";
import { FeaturesSection } from "@/components/landing/features";
import { SampleLessonSection } from "@/components/landing/sample-lesson";
import { FaqSection } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "LINGORA — Learn English from Bengali: 60-Day, 90-Day & IELTS",
  description:
    "বাংলাভাষীদের জন্য শূন্য থেকে অ্যাডভান্সড ইংরেজি শেখার প্ল্যাটফর্ম — ৬০ দিনের স্পোকেন কোর্স, ৯০ দিনের অ্যাডভান্সড রোডম্যাপ ও আইইএলটিএস ব্যান্ড ৭.৫+ প্রস্তুতি হাব।",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrackSelectorSection />
        <MethodSection />
        <RoadmapPreview />
        <FeaturesSection />
        <SampleLessonSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}