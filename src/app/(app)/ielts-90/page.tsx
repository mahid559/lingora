import type { Metadata } from "next";
import { IeltsView } from "@/components/ielts/ielts-view";

export const metadata: Metadata = {
  title: "90-Day IELTS Master Blueprint",
  description:
    "৯০ দিনের আইইএলটিএস মাস্টার ব্লুপ্রিন্ট — ব্যান্ড ৮.০ থেকে ৮.৫+ লক্ষ্যমাত্রার এলিট প্রস্তুতি।",
};

export default function Ielts90Page() {
  return <IeltsView />;
}
