import type { Metadata } from "next";
import { RoadmapView } from "@/components/roadmap/roadmap-view";

export const metadata: Metadata = {
  title: "রোডম্যাপ",
  description: "৬০ দিনের ছয় ধাপের সম্পূর্ণ পাঠ-রোডম্যাপ ও অগ্রগতি।",
};

export default function RoadmapPage() {
  return <RoadmapView />;
}