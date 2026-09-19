"use client";

import { useState } from "react";
import { differenceInYears, differenceInDays, isValid, isFuture } from "date-fns";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [asOf, setAsOf] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const reset = () => {
    setDob("");
    setAsOf("");
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    if (!dob) {
      setError("Enter your date of birth.");
      setResult(null);
      return;
    }

    const birthDate = new Date(dob);
    const targetDate = asOf ? new Date(asOf) : new Date();

    if (!isValid(birthDate)) {
      setError("Enter a valid date of birth.");
      setResult(null);
      return;
    }
    if (asOf && !isValid(targetDate)) {
      setError("Enter a valid comparison date.");
      setResult(null);
      return;
    }
    if (isFuture(birthDate)) {
      setError("Date of birth can't be in the future.");
      setResult(null);
      return;
    }
    if (birthDate > targetDate) {
      setError("Date of birth must be before the comparison date.");
      setResult(null);
      return;
    }

    setError("");

    const years = differenceInYears(targetDate, birthDate);
    const afterYears = new Date(birthDate);
    afterYears.setFullYear(afterYears.getFullYear() + years);

    let months = 0;
    const cursor = new Date(afterYears);
    while (true) {
      const next = new Date(cursor);
      next.setMonth(next.getMonth() + 1);
      if (next > targetDate) break;
      cursor.setTime(next.getTime());
      months++;
    }

    const days = differenceInDays(targetDate, cursor);
    const totalDays = differenceInDays(targetDate, birthDate);

    setResult(`${years} years, ${months} months, ${days} days`);
    setSubValue(`Total: ${totalDays.toLocaleString()} days`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Date of birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
        />
        <Input
          label="Calculate age as of (optional)"
          type="date"
          value={asOf}
          onChange={(e) => setAsOf(e.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={calculate}>Calculate Age</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox
        label="Age"
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
