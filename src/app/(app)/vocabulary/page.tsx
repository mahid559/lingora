import type { Metadata } from "next";
import { allVocabulary } from "@/data/lessons/index";
import { VocabularyView } from "@/components/vocabulary/vocabulary-view";

export const metadata: Metadata = {
  title: "শব্দভান্ডার",
  description: "৬০ দিনের কোর্সের সব শব্দ — খুঁজুন, সংরক্ষণ করুন ও মুখস্থ করুন।",
};

export default function VocabularyPage() {
  return <VocabularyView words={allVocabulary} />;
}