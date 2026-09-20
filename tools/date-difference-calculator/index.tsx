"use client";

import { useState } from "react";
import { differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears, isValid } from "date-fns";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

export default function DateDifferenceCalculator() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const reset = () => {
    setStart("");
    setEnd("");
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    if (!start || !end) {
      setError("Enter both dates.");
      setResult(null);
      return;
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (!isValid(startDate) || !isValid(endDate)) {
      setError("Enter valid dates.");
      setResult(null);
      return;
    }

    setError("");

    const [earlier, later] = startDate <= endDate ? [startDate, endDate] : [endDate, startDate];
    const totalDays = differenceInDays(later, earlier);
    const weeks = differenceInWeeks(later, earlier);
    const months = differenceInMonths(later, earlier);
    const years = differenceInYears(later, earlier);

    setResult(`${totalDays.toLocaleString()} days`);
    setSubValue(
      `${years} years · ${months} months · ${weeks} weeks${
        startDate > endDate ? " (dates were reversed)" : ""
      }`
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Start date" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        <Input label="End date" type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
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
        label="Difference"
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
