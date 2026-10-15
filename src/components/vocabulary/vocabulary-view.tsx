"use client";

import * as React from "react";
import { Search, Star, Heart, BookMarked, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { FlatVocabWord } from "@/data/lessons/index";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toaster";
import { useLearning } from "@/lib/learning-context";
import { cn } from "@/lib/utils";

type Filter = "all" | "saved" | "learned" | "favorite";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Words" },
  { key: "saved", label: "Saved" },
  { key: "learned", label: "Mastered" },
  { key: "favorite", label: "Favorites" },
];

const PAGE_SIZE = 24;

export function VocabularyView({ words }: { words: FlatVocabWord[] }) {
  const { toast } = useToast();
  const { savedWords: saved, setWordState, deleteWord } = useLearning();
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<Filter>("all");
  const [phase, setPhase] = React.useState<number | "all">("all");
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return words.filter((w) => {
      if (phase !== "all" && w.phase !== phase) return false;
      const state = saved[w.key];
      if (filter === "saved" && !state) return false;
      if (filter === "learned" && !state?.learned) return false;
      if (filter === "favorite" && !state?.favorite) return false;
      if (!q) return true;
      return (
        w.word.toLowerCase().includes(q) ||
        w.meaningBn.toLowerCase().includes(q) ||
        w.exampleEn.toLowerCase().includes(q)
      );
    });
  }, [words, saved, query, filter, phase]);

  // Reset to first page whenever the result set changes shape.
  React.useEffect(() => {
    setPage(1);
  }, [query, filter, phase]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageWords = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const savedCount = Object.keys(saved).length;
  const learnedCount = Object.values(saved).filter((s) => s.learned).length;

  function toggleFavorite(word: FlatVocabWord) {
    const state = saved[word.key];
    if (state?.favorite) {
      const res = deleteWord(word.key);
      if (!res.success) toast(res.error ?? "Failed to remove word.", "error");
    } else {
      const res = setWordState(word.key, { favorite: true });
      if (!res.success) toast(res.error ?? "Failed to save word.", "error");
    }
  }

  function toggleLearned(word: FlatVocabWord) {
    const state = saved[word.key];
    const learned = !state?.learned;
    const res = setWordState(word.key, { learned, favorite: state?.favorite ?? true });
    if (!res.success) toast(res.error ?? "Failed to update status.", "error");
  }

  function resetFilters() {
    setQuery("");
    setFilter("all");
    setPhase("all");
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy-900 sm:text-3xl">
            Vocabulary Notebook
          </h1>
          <p className="mt-1 text-sm text-brand-navy-600">
            {words.length} core vocabulary words with Bengali definitions, audio cues, and contextual example sentences.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="mint" className="px-3 py-1 font-semibold">
            <BookMarked className="h-3.5 w-3.5" /> {savedCount} Saved
          </Badge>
          <Badge variant="blue" className="px-3 py-1 font-semibold">
            <Heart className="h-3.5 w-3.5" /> {learnedCount} Mastered
          </Badge>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-4 shadow-card">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-navy-600" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search word, Bengali meaning, or English example…"
            aria-label="Search words"
            className="pl-10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-brand-navy-600 hover:text-brand-navy-900"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors",
                filter === f.key
                  ? "bg-brand-mint text-white"
                  : "bg-brand-navy/5 text-brand-navy-700 hover:bg-brand-navy/10"
              )}
            >
              {f.label}
            </button>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-brand-navy-800/10 sm:block" aria-hidden />
          <select
            value={String(phase)}
            onChange={(e) => setPhase(e.target.value === "all" ? "all" : Number(e.target.value))}
            aria-label="Filter by Phase"
            className="h-8 rounded-lg border border-brand-navy-800/15 bg-white px-2.5 text-xs font-semibold text-brand-navy-700 focus:border-brand-mint focus:outline-none"
          >
            <option value="all">All Phases</option>
            {[1, 2, 3, 4, 5, 6].map((p) => (
              <option key={p} value={p}>
                Phase {p}
              </option>
            ))}
          </select>
          {(query || filter !== "all" || phase !== "all") && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-brand-mint-700 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      <p className="text-xs font-semibold text-brand-navy-600" aria-live="polite">
        Showing {filtered.length} words
      </p>

      {/* Words Grid */}
      {pageWords.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-brand-navy-800/20 bg-brand-surface px-6 py-12 text-center">
          <p className="text-base font-bold text-brand-navy-900">No words found</p>
          <p className="mt-1 text-xs text-brand-navy-600">
            Try adjusting your search query or reset active filters.
          </p>
        </div>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pageWords.map((word) => {
            const state = saved[word.key];
            return (
              <li
                key={word.key}
                className={cn(
                  "flex flex-col rounded-xl border p-4 transition-colors",
                  state?.learned
                    ? "border-brand-mint-200 bg-brand-mint-50/60"
                    : "border-brand-navy-800/10 bg-brand-surface"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="break-words text-base font-bold text-brand-navy-900">{word.word}</p>
                    <p className="font-bangla text-sm font-semibold text-brand-mint-700">{word.meaningBn}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button
                      type="button"
                      aria-label={`Favorite ${word.word}`}
                      aria-pressed={Boolean(state?.favorite)}
                      onClick={() => toggleFavorite(word)}
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                        state?.favorite
                          ? "bg-brand-rose-100 text-brand-rose"
                          : "bg-brand-navy/5 text-brand-navy-600 hover:bg-brand-navy/10"
                      )}
                    >
                      <Star className={cn("h-4 w-4", state?.favorite && "fill-current")} aria-hidden />
                    </button>
                    <button
                      type="button"
                      aria-label={`Mark ${word.word} as Mastered`}
                      aria-pressed={Boolean(state?.learned)}
                      onClick={() => toggleLearned(word)}
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                        state?.learned
                          ? "bg-brand-mint text-white"
                          : "bg-brand-navy/5 text-brand-navy-600 hover:bg-brand-navy/10"
                      )}
                    >
                      <Heart className={cn("h-4 w-4", state?.learned && "fill-current")} aria-hidden />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-xs font-semibold text-brand-navy-900">{word.exampleEn}</p>
                <p className="font-bangla text-xs leading-5 text-brand-navy-600 mt-0.5">{word.exampleBn}</p>
                <div className="mt-3 flex items-center justify-between border-t border-brand-navy-800/10 pt-2.5">
                  <Badge variant="neutral" className="text-[0.65rem] font-semibold">
                    Day {word.day}
                  </Badge>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-navy-600">
                    Phase {word.phase}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-3 pt-2" aria-label="Pagination">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <span className="text-xs font-bold text-brand-navy-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </nav>
      )}
    </div>
  );
}
