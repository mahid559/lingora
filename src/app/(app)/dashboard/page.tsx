import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard/dashboard-view";

export const metadata: Metadata = {
  title: "ড্যাশবোর্ড",
  description: "আপনার দৈনিক পাঠ, স্ট্রিক, কুইজ গড় ও অর্জনের সারসংক্ষেপ।",
};

export default function DashboardPage() {
  return <DashboardView />;
}