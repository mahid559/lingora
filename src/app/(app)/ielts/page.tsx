import type { Metadata } from "next";
import { IeltsView } from "@/components/ielts/ielts-view";

export const metadata: Metadata = {
  title: "IELTS Preparation Masterclass",
  description:
    "বাংলাভাষীদের জন্য আইইএলটিএস (IELTS) পূর্ণাঙ্গ প্রস্তুতি হাব — স্পিকিং, রাইটিং, রিডিং, লিসেনিং, ব্যান্ড ক্যালকুলেটর ও ভোকেবুলারি ব্যাংক।",
};

export default function IeltsPage() {
  return <IeltsView />;
}
