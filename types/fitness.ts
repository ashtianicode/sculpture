export interface DailyTask {
  id: string;
  description: string;
  completed: boolean;
}

export interface DayPlan {
  date: string; // e.g. "2025-01-15"
  tasks: DailyTask[];
  plannedCalories: number;
  actualCalories?: number;      // user can fill in
  plannedProtein: number;
  actualProtein?: number;       // user can fill in
}

export interface WeighIn {
  date: string;    // e.g. "2025-01-15"
  weight: number;  // e.g. 180
  bodyFat?: number; // e.g. 29.5
}

export interface BigGoal {
  targetBF: number;
  startBF: number;
  weeks: number;
  startWeight: number;
} 