import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { DayPlan, WeighIn } from "../types/fitness";
import { GoalSection } from "./GoalSection";
import { DailyPlanSection } from "./DailyPlanSection";
import { ProgressTracker } from "./ProgressTracker";
import { TipsSection } from "./TipsSection";

// MAIN COMPONENT (One-Page App)
export default function TahaOnePageFitnessPlan() {
  // === 1) Overall GOAL & Weekly Targets ===
  const bigGoal = {
    targetBF: 15,
    startBF: 30,
    weeks: 12,
    startWeight: 180,
  };

  // === 2) Day-by-day plan stored in localStorage ===
  const initialPlan: DayPlan[] = [
    {
      date: "2025-01-15", // example "today"
      tasks: [
        { id: "task1", description: "1 hr HIIT lifting session", completed: false },
        { id: "task2", description: "30 min sauna", completed: false },
        { id: "task3", description: "1 hr total walking (errands)", completed: false },
        { id: "task4", description: "Track macros (aim 1600-1700 kcal, 200g protein)", completed: false },
      ],
      plannedCalories: 1700,
      plannedProtein: 200,
    },
    {
      date: "2025-01-16",
      tasks: [
        { id: "task1", description: "30 min Swim + 20 min sauna (Recovery Day)", completed: false },
        { id: "task2", description: "Check body measurements if scheduled", completed: false },
        { id: "task3", description: "Hit daily macro targets", completed: false },
      ],
      plannedCalories: 1700,
      plannedProtein: 200,
    },
  ];

  const [dayPlans, setDayPlans] = useLocalStorage<DayPlan[]>("taha-day-plans", initialPlan);

  // === 3) Weigh-Ins & BF% tracking for the chart ===
  const initialWeighIns: WeighIn[] = [
    { date: "2025-01-13", weight: 180, bodyFat: 30 }, // Starting point
    { date: "2025-01-20", weight: 177, bodyFat: 29 }, // Example after 1 week
  ];
  const [weighIns, setWeighIns] = useLocalStorage<WeighIn[]>("taha-weighins", initialWeighIns);

  // Helper to toggle task completion
  const toggleTask = (date: string, taskId: string) => {
    setDayPlans((prevPlans) =>
      prevPlans.map((dp) => {
        if (dp.date === date) {
          return {
            ...dp,
            tasks: dp.tasks.map((t) =>
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ),
          };
        }
        return dp;
      })
    );
  };

  // Helper to update actual macros (calories/protein)
  const updateMacros = (date: string, newCals: number, newProtein: number) => {
    setDayPlans((prevPlans) =>
      prevPlans.map((dp) =>
        dp.date === date
          ? { ...dp, actualCalories: newCals, actualProtein: newProtein }
          : dp
      )
    );
  };

  // Helper to add weigh-in
  const addWeighIn = (weight: number, bodyFat?: number) => {
    const newWeigh: WeighIn = {
      date: new Date().toISOString().slice(0, 10), // today's date (YYYY-MM-DD)
      weight,
      bodyFat,
    };
    setWeighIns((prev) => [...prev, newWeigh]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-6">
      {/* Header / Big Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Taha's Fitness Plan (One-Page)</h1>
        <p className="text-sm text-gray-600">
          Goal: Go from ~30% BF to 15% BF in 12 weeks
        </p>
      </div>

      <GoalSection goal={bigGoal} />
      <DailyPlanSection 
        dayPlans={dayPlans}
        onToggleTask={toggleTask}
        onUpdateMacros={updateMacros}
      />
      <ProgressTracker 
        weighIns={weighIns}
        onAddWeighIn={addWeighIn}
      />
      <TipsSection />
    </div>
  );
}

