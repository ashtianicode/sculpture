import { DayPlan } from '../types/fitness';

interface DailyPlanSectionProps {
  dayPlans: DayPlan[];
  onToggleTask: (date: string, taskId: string) => void;
  onUpdateMacros: (date: string, newCals: number, newProtein: number) => void;
}

export function DailyPlanSection({ dayPlans, onToggleTask, onUpdateMacros }: DailyPlanSectionProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Daily Schedule & Tasks</h2>
      <div className="space-y-6">
        {dayPlans.map((dp) => (
          <div key={dp.date} className="border-b pb-4 mb-4">
            <h3 className="font-semibold mb-2">
              {dp.date} — Planned Cals: {dp.plannedCalories}, Protein: {dp.plannedProtein}g
            </h3>
            <ul className="space-y-2 ml-4">
              {dp.tasks.map((task) => (
                <li key={task.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleTask(dp.date, task.id)}
                  />
                  <span className={`${task.completed ? "line-through text-gray-500" : ""}`}>
                    {task.description}
                  </span>
                </li>
              ))}
            </ul>
            {/* Actual Macros Input */}
            <div className="mt-2 flex space-x-4 items-center">
              <label className="text-sm">
                Actual Cals:{" "}
                <input
                  type="number"
                  className="w-20 border p-1 rounded"
                  placeholder="0"
                  value={dp.actualCalories ?? ""}
                  onChange={(e) => onUpdateMacros(dp.date, +e.target.value, dp.actualProtein ?? 0)}
                />
              </label>
              <label className="text-sm">
                Actual Protein:{" "}
                <input
                  type="number"
                  className="w-20 border p-1 rounded"
                  placeholder="0"
                  value={dp.actualProtein ?? ""}
                  onChange={(e) => onUpdateMacros(dp.date, dp.actualCalories ?? 0, +e.target.value)}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 