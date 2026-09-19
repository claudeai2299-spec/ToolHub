"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

export default function AverageCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const reset = () => {
    setInput("");
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    const numbers = input
      .split(/[,\s]+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map(Number);

    if (numbers.length === 0 || numbers.some(isNaN)) {
      setError("Enter numbers separated by commas or spaces (e.g. 4, 8, 15, 16).");
      setResult(null);
      return;
    }

    setError("");
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    setResult(avg.toFixed(2).replace(/\.00$/, ""));
    setSubValue(`Sum: ${sum} · Count: ${numbers.length}`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="numbers" className="text-sm font-medium text-slate-700">
          Numbers (comma or space separated)
        </label>
        <textarea
          id="numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 4, 8, 15, 16, 23, 42"
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

      <ResultBox
        label="Average"
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
