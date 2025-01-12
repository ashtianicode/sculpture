import { BigGoal } from '../types/fitness';

interface GoalSectionProps {
  goal: BigGoal;
}

export function GoalSection({ goal }: GoalSectionProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-2">Overall Goal</h2>
      <p className="text-sm text-gray-700 mb-2">
        Current BF: {goal.startBF}% → Target BF: {goal.targetBF}% in {goal.weeks} weeks.
        <br />
        Start Weight: {goal.startWeight} lbs
      </p>
      <p className="text-sm text-gray-700">
        Aggressive approach (~2.25 lb fat loss/week). Aim for ~1,600–1,700 kcal/day, 200+ g
        protein, consistent workouts, minimal slip-ups.
      </p>
    </div>
  );
} 