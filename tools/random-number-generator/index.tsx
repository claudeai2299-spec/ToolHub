"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

function secureRandomInt(min: number, max: number): number {
  const range = max - min + 1;
  const maxUint32 = 0xffffffff;
  const limit = maxUint32 - (maxUint32 % range);
  const array = new Uint32Array(1);

  let value: number;
  do {
    crypto.getRandomValues(array);
    value = array[0];
  } while (value > limit);

  return min + (value % range);
}

export default function RandomNumberGenerator() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const reset = () => {
    setResult(null);
    setError("");
  };

  const generate = () => {
    const numMin = parseInt(min, 10);
    const numMax = parseInt(max, 10);

    if (min.trim() === "" || max.trim() === "" || isNaN(numMin) || isNaN(numMax)) {
      setError("Enter valid whole numbers for both min and max.");
      setResult(null);
      return;
    }
    if (numMin > numMax) {
      setError("Minimum must be less than or equal to maximum.");
      setResult(null);
      return;
    }

    setError("");
    setResult(`${secureRandomInt(numMin, numMax)}`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Minimum"
          type="number"
          inputMode="numeric"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <Input
          label="Maximum"
          type="number"
          inputMode="numeric"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={generate}>Generate</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox label="Random Number" value={result} onReset={result ? reset : undefined} />
    </div>
  );
}
