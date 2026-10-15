import type { Metadata } from "next";
import { ProgressView } from "@/components/progress/progress-view";

export const metadata: Metadata = {
  title: "প্রগ্রেস",
  description: "আপনার পাঠ সম্পূর্ণতা, স্ট্রিক, কুইজ ফলাফল ও অর্জিত ব্যাজের বিস্তারিত।",
};

export default function ProgressPage() {
  return <ProgressView />;
}