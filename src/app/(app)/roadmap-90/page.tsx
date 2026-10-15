import type { Metadata } from "next";
import { Roadmap90View } from "@/components/roadmap/roadmap-90-view";

export const metadata: Metadata = {
  title: "90-Day Advanced Roadmap",
  description:
    "৯০ দিনের জিরো টু অ্যাডভান্সড (A1 to C1) পূর্ণাঙ্গ ইংরেজি শেখার রোডম্যাপ ও গাইড।",
};

export default function Roadmap90Page() {
  return <Roadmap90View />;
}
