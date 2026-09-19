"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

export default function RatioCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const reset = () => {
    setA("");
    setB("");
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (a.trim() === "" || b.trim() === "" || isNaN(numA) || isNaN(numB)) {
      setError("Enter valid numbers in both fields.");
      setResult(null);
      return;
    }
    if (numA === 0 && numB === 0) {
      setError("Both values can't be zero.");
      setResult(null);
      return;
    }
    if (!Number.isInteger(numA) || !Number.isInteger(numB)) {
      setError("Ratio simplification requires whole numbers.");
      setResult(null);
      return;
    }

    setError("");
    const divisor = gcd(numA, numB);
    setResult(`${numA / divisor} : ${numB / divisor}`);
    setSubValue(`Decimal: ${(numA / numB).toFixed(4)}`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="First value"
          type="number"
          inputMode="numeric"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="e.g. 20"
        />
        <Input
          label="Second value"
          type="number"
          inputMode="numeric"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="e.g. 30"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={calculate}>Simplify</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox
        label="Simplified Ratio"
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
