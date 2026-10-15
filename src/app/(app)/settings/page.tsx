import type { Metadata } from "next";
import { SettingsView } from "@/components/settings/settings-view";

export const metadata: Metadata = {
  title: "সেটিংস",
  description: "প্রোফাইল ও শেখার লক্ষ্য পরিচালনা করুন।",
};

export default function SettingsPage() {
  return <SettingsView />;
}