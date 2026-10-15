import type { Metadata } from "next";
import { IeltsView } from "@/components/ielts/ielts-view";

export const metadata: Metadata = {
  title: "60-Day IELTS Intensive Roadmap",
  description:
    "৬০ দিনের আইইএলটিএস নিবিড় প্রস্তুতি রোডম্যাপ — ব্যান্ড ৭.০ থেকে ৭.৫ লক্ষ্যমাত্রার পূর্ণাঙ্গ গাইড।",
};

export default function Ielts60Page() {
  return <IeltsView />;
}
