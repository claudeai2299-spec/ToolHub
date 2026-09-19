"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

type Mode = "percent-of" | "is-what-percent" | "percent-change";

const modes: { id: Mode; label: string }[] = [
  { id: "percent-of", label: "X% of Y" },
  { id: "is-what-percent", label: "X is what % of Y" },
  { id: "percent-change", label: "% increase / decrease" },
];

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("percent-of");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const reset = () => {
    setX("");
    setY("");
    setResult(null);
    setError("");
  };

  const calculate = () => {
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    if (x.trim() === "" || y.trim() === "" || isNaN(numX) || isNaN(numY)) {
      setError("Enter valid numbers in both fields.");
      setResult(null);
      return;
    }

    setError("");

    if (mode === "percent-of") {
      const raw = (numX / 100) * numY;
      setResult(`${parseFloat(raw.toFixed(6))}`);
    } else if (mode === "is-what-percent") {
      if (numY === 0) {
        setError("The second number can't be zero.");
        setResult(null);
        return;
      }
      setResult(`${((numX / numY) * 100).toFixed(2)}%`);
    } else {
      if (numX === 0) {
        setError("The original value can't be zero.");
        setResult(null);
        return;
      }
      const change = ((numY - numX) / numX) * 100;
      const direction = change >= 0 ? "increase" : "decrease";
      setResult(`${Math.abs(change).toFixed(2)}% ${direction}`);
    }
  };

  const fields: Record<Mode, { xLabel: string; yLabel: string }> = {
    "percent-of": { xLabel: "Percentage (%)", yLabel: "Of number" },
    "is-what-percent": { xLabel: "Number", yLabel: "Out of" },
    "percent-change": { xLabel: "Original value", yLabel: "New value" },
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Calculation mode">
        {modes.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => {
              setMode(m.id);
              reset();
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              mode === m.id
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label={fields[mode].xLabel}
          type="number"
          inputMode="decimal"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="e.g. 25"
        />
        <Input
          label={fields[mode].yLabel}
          type="number"
          inputMode="decimal"
          value={y}
          onChange={(e) => setY(e.target.value)}
          placeholder="e.g. 100"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={calculate}>Calculate</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox label="Result" value={result} onReset={result ? reset : undefined} />
    </div>
  );
}
