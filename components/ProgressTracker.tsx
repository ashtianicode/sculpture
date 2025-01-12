import { useState } from 'react';
import { WeighIn } from '../types/fitness';
import { CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";

interface ProgressTrackerProps {
  weighIns: WeighIn[];
  onAddWeighIn: (weight: number, bodyFat?: number) => void;
}

export function ProgressTracker({ weighIns, onAddWeighIn }: ProgressTrackerProps) {
  const [weightInput, setWeightInput] = useState("");
  const [bfInput, setBfInput] = useState("");

  const handleAddWeighIn = () => {
    if (!weightInput) return;
    onAddWeighIn(parseFloat(weightInput), bfInput ? parseFloat(bfInput) : undefined);
    setWeightInput("");
    setBfInput("");
  };

  // Sort weighIns by date for the chart
  const sortedWeighIns = [...weighIns].sort((a, b) => a.date.localeCompare(b.date));

  // Prepare data for Recharts
  const chartData = sortedWeighIns.map((wi) => ({
    date: wi.date,
    weight: wi.weight,
    bodyFat: wi.bodyFat ?? null,
  }));

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Progress Tracker (Weight & Body Fat)</h2>
      <div className="flex items-end space-x-2 mb-4">
        <div>
          <label className="text-sm block">Weight (lbs)</label>
          <input
            type="number"
            className="border p-1 rounded w-24"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm block">BF% (optional)</label>
          <input
            type="number"
            className="border p-1 rounded w-24"
            value={bfInput}
            onChange={(e) => setBfInput(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddWeighIn}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add Weigh-In
        </button>
      </div>

      {/* Show Data */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Weight (lbs)</th>
              <th className="p-2 border">BodyFat %</th>
            </tr>
          </thead>
          <tbody>
            {sortedWeighIns.map((wi) => (
              <tr key={wi.date}>
                <td className="p-2 border">{wi.date}</td>
                <td className="p-2 border">{wi.weight}</td>
                <td className="p-2 border">{wi.bodyFat ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" name="Weight (lbs)" />
            <Line type="monotone" dataKey="bodyFat" stroke="#82ca9d" name="BF %" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 