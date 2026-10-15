/**
 * Local-first data layer verifier.
 * Run with: npm run verify:local
 *
 * Exercises the anonymous localStorage store end-to-end without a browser:
 * unlock rules, idempotent lesson completion, quiz grading + attempt
 * persistence, derived achievements, dashboard/progress snapshots, vocabulary
 * and settings mutations, persistence round-trips, and resilience to corrupt
 * or outdated stored data. Exits non-zero on the first failed expectation.
 */
import { allVocabulary, getLessonByDaySafe } from "@/data/lessons/index";
import { gradeQuiz } from "@/lib/quiz-grading";
import {
  type LocalState,
  applyCompleteLesson,
  applyDeleteWord,
  applyQuizAttempt,
  applySettingsUpdate,
  applyWordState,
  buildDashboardLocal,
  buildProgressLocal,
  defaultLocalState,
  deriveAchievements,
  getCompletedDays,
  getCurrentLessonDay,
  getSavedWordsMap,
  getStreak,
  isLessonCompleted,
  isLessonUnlocked,
  loadLocalState,
  saveLocalState,
} from "@/lib/local-store";

let passed = 0;
const failures: string[] = [];

function check(name: string, cond: boolean, extra?: unknown) {
  if (cond) {
    passed += 1;
  } else {
    failures.push(`${name}${extra === undefined ? "" : ` — ${JSON.stringify(extra)}`}`);
  }
}

const TODAY = "2026-10-10";

// 1. Fresh default state
let state: LocalState = defaultLocalState();
check("fresh: currentLesson is 1", getCurrentLessonDay(state) === 1);
check("fresh: streak 0", getStreak(state).current === 0 && getStreak(state).longest === 0);
check("fresh: day1 unlocked", isLessonUnlocked(state, 1) === true);
check("fresh: day2 locked", isLessonUnlocked(state, 2) === false);
check("fresh: day3 locked", isLessonUnlocked(state, 3) === false);
check("fresh: no completed days", getCompletedDays(state).length === 0);

// 2. Cannot complete a locked lesson
const locked = applyCompleteLesson(state, 3, TODAY);
check("locked lesson rejected", locked.success === false);

// 3. Complete day 1
const d1 = applyCompleteLesson(state, 1, TODAY);
check("day1 completes", d1.success === true);
if (d1.success) {
  check("day1 marked completed", d1.result.completed === true);
  check("day1 count = 1", d1.result.completedCount === 1);
  check("day1 nextDay = 2", d1.result.nextDay === 2);
  check("day1 awards first-lesson", d1.result.newlyAwarded.includes("first-lesson"));
  state = d1.state;
}
check("after day1: day2 unlocked", isLessonUnlocked(state, 2) === true);
check("after day1: day3 still locked", isLessonUnlocked(state, 3) === false);
const lesson1Minutes = getLessonByDaySafe(1)?.durationMinutes ?? 0;
check(
  "after day1: activity minutes == lesson duration",
  state.activityByDate[TODAY]?.minutes === lesson1Minutes,
  state.activityByDate[TODAY]
);
check("after day1: activity lessons == 1", state.activityByDate[TODAY]?.lessons === 1);

// 4. Idempotent completion does not double count
const d1again = applyCompleteLesson(state, 1, TODAY);
if (d1again.success) {
  check("re-complete reports completed:false", d1again.result.completed === false);
  check(
    "re-complete does not bump minutes",
    d1again.state.activityByDate[TODAY]?.minutes === lesson1Minutes
  );
  check("re-complete keeps count 1", d1again.result.completedCount === 1);
  state = d1again.state;
}

// 5. Quiz grading + attempt persistence
const lesson1 = getLessonByDaySafe(1);
if (lesson1) {
  const perfectAnswers = lesson1.quiz.map((q) => ({ questionId: q.id, value: q.answer }));
  const graded = gradeQuiz(lesson1.quiz, perfectAnswers);
  check("quiz all-correct => 100%", graded.percent === 100, graded.percent);
  check("quiz all-correct => passed", graded.passed === true);
  check("quiz results length matches", graded.results.length === lesson1.quiz.length);
  check(
    "quiz wrong answer flagged",
    gradeQuiz(lesson1.quiz, [{ questionId: lesson1.quiz[0].id, value: "___definitely_wrong___" }])
      .results[0].correct === false
  );

  const before = state.activityByDate[TODAY]?.quizzes ?? 0;
  state = applyQuizAttempt(
    state,
    { lessonDay: 1, score: graded.score, total: graded.total, percent: graded.percent, passed: graded.passed },
    TODAY
  );
  check("attempt recorded", state.quizAttempts.length === 1);
  check("attempt passed flag", state.quizAttempts[0].passed === true);
  check("quiz bumps activity quizzes", (state.activityByDate[TODAY]?.quizzes ?? 0) === before + 1);
  check(
    "quiz adds 10 minutes",
    (state.activityByDate[TODAY]?.minutes ?? 0) === lesson1Minutes + 10
  );
}

// 6. Achievements derived from real state
const ach = deriveAchievements(state);
check("achievement first-lesson earned", typeof ach["first-lesson"] === "string");
check("achievement quiz-pass earned", typeof ach["quiz-pass"] === "string");

// 7. Dashboard snapshot
const dash = buildDashboardLocal(state, TODAY);
check("dashboard completedCount = 1", dash.completedCount === 1);
check("dashboard currentLesson = 2", dash.currentLesson === 2);
check("dashboard todayLesson day = 2", dash.todayLesson?.day === 2);
check("dashboard quiz attempts = 1", dash.quiz.attempts === 1);
check("dashboard quiz passedAttempts = 1", dash.quiz.passedAttempts === 1);
check("dashboard weekly has 7 days", dash.weekly.length === 7);
check("dashboard checklist has 3 items", dash.checklist.length === 3);
check("dashboard recent non-empty", dash.recent.length > 0);
check("dashboard nextMilestone day 10", dash.nextMilestone?.day === 10);

// 8. Vocabulary
const word = allVocabulary[0];
const fav = applyWordState(state, word.key, { favorite: true });
check("favorite word saved", fav.success === true);
if (fav.success) {
  state = fav.state;
  check("saved words map has 1", Object.keys(getSavedWordsMap(state)).length === 1);
  const learned = applyWordState(state, word.key, { learned: true });
  if (learned.success) {
    state = learned.state;
    check("learned flag set", state.savedWords[word.key].learned === true);
    check("favorite retained", state.savedWords[word.key].favorite === true);
  }
}
const badWord = applyWordState(state, "not-a-real-key", { favorite: true });
check("invalid word key rejected", badWord.success === false);
state = applyDeleteWord(state, word.key);
check("word deleted", Object.keys(state.savedWords).length === 0);

// 9. Settings
const goodSettings = applySettingsUpdate(state, {
  displayName: "রাফসান",
  nativeLanguage: "en",
  dailyGoalMinutes: 30,
});
check("settings update succeeds", goodSettings.success === true);
if (goodSettings.success) {
  state = goodSettings.state;
  check("settings displayName", state.settings.displayName === "রাফসান");
  check("settings language", state.settings.nativeLanguage === "en");
  check("settings goal", state.settings.dailyGoalMinutes === 30);
}
const badSettings = applySettingsUpdate(state, { displayName: "", nativeLanguage: "bn", dailyGoalMinutes: 20 });
check("invalid display name rejected", badSettings.success === false);
const clamped = applySettingsUpdate(state, { displayName: "ক", nativeLanguage: "bn", dailyGoalMinutes: 9999 });
if (clamped.success) check("goal clamped to 180", clamped.state.settings.dailyGoalMinutes === 180);

// 10. Progress snapshot
const prog = buildProgressLocal(state);
check("progress totalDays 60", prog.totalDays === 60);
check("progress phases length 6", prog.phases.length === 6);
check("progress phase1 completed 1", prog.phases[0].completed === 1 && prog.phases[0].total === 10);
check("progress quizHistory non-empty", prog.quizHistory.length === 1);
check("progress final not done", prog.finalAssessment.done === false);

// 11. Streak over consecutive days
const streakState: LocalState = {
  ...defaultLocalState(),
  activityByDate: {
    "2026-10-09": { lessons: 1, quizzes: 0, minutes: 15 },
    "2026-10-10": { lessons: 1, quizzes: 0, minutes: 15 },
  },
};
check("streak consecutive = 2", getStreak(streakState).current === 2, getStreak(streakState));
const gapState: LocalState = {
  ...defaultLocalState(),
  activityByDate: {
    "2026-10-01": { lessons: 1, quizzes: 0, minutes: 15 },
    "2026-10-10": { lessons: 1, quizzes: 0, minutes: 15 },
  },
};
check("streak with gap = 1", getStreak(gapState).current === 1, getStreak(gapState));

// 12. Persistence round-trip + resilience (mock window.localStorage)
const store = new Map<string, string>();
(globalThis as unknown as { window: unknown }).window = {
  localStorage: {
    getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  },
};

saveLocalState(state);
const reloaded = loadLocalState();
check("persist: completedDays survive", getCompletedDays(reloaded).length === 1);
check("persist: attempts survive", reloaded.quizAttempts.length === 1);
check("persist: settings survive", reloaded.settings.displayName === "রাফসান");
check("persist: version survives", reloaded.version === 1);

store.set("lingora.state.v1", "{ this is not valid json");
const corrupt = loadLocalState();
check("corrupt json -> defaults", getCompletedDays(corrupt).length === 0 && corrupt.quizAttempts.length === 0);

store.set("lingora.state.v1", JSON.stringify({ version: 99, completedLessons: { "1": {} } }));
const wrongVersion = loadLocalState();
check("wrong version -> defaults", getCompletedDays(wrongVersion).length === 0);

store.set(
  "lingora.state.v1",
  JSON.stringify({
    version: 1,
    completedLessons: { "1": { completedAt: "2026-10-10T00:00:00.000Z" }, bad: { nope: true } },
    quizAttempts: [{ id: "x" }, { id: "ok", lessonDay: 1, score: 8, total: 10, percent: 80, passed: true, createdAt: "2026-10-10T00:00:00.000Z" }],
    savedWords: {},
    activityByDate: {},
    settings: { displayName: "ক", nativeLanguage: "zz", dailyGoalMinutes: -5 },
  })
);
const drifted = loadLocalState();
check("drift: keeps valid completion", isLessonCompleted(drifted, 1) === true);
check("drift: drops invalid completion", !Object.prototype.hasOwnProperty.call(drifted.completedLessons, "bad"));
check("drift: keeps valid attempt only", drifted.quizAttempts.length === 1 && drifted.quizAttempts[0].id === "ok");
check("drift: invalid language -> bn", drifted.settings.nativeLanguage === "bn");
check("drift: invalid goal -> default 20", drifted.settings.dailyGoalMinutes === 20);

// Report
console.log(`\n${passed} checks passed, ${failures.length} failed.`);
if (failures.length) {
  for (const f of failures) console.log(`  FAIL: ${f}`);
  process.exit(1);
}
console.log("✅ local-first data layer verified");
