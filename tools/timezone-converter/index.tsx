"use client";

import { useMemo, useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

const TIMEZONES = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Moscow",
  "Africa/Cairo",
  "Africa/Lagos",
  "Asia/Dubai",
  "Asia/Karachi",
  "Asia/Kolkata",
  "Asia/Dhaka",
  "Asia/Bangkok",
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Asia/Singapore",
  "Australia/Sydney",
  "Pacific/Auckland",
];

function formatInZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function TimezoneConverter() {
  const [dateTime, setDateTime] = useState("");
  const [fromZone, setFromZone] = useState("UTC");
  const [toZone, setToZone] = useState("America/New_York");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const browserZone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );

  const reset = () => {
    setDateTime("");
    setResult(null);
    setError("");
  };

  const calculate = () => {
    if (!dateTime) {
      setError("Enter a date and time.");
      setResult(null);
      return;
    }

    const naive = new Date(dateTime);
    if (isNaN(naive.getTime())) {
      setError("Enter a valid date and time.");
      setResult(null);
      return;
    }

    setError("");

    const utcGuess = new Date(naive.toLocaleString("en-US", { timeZone: "UTC" }));
    const zoneGuess = new Date(naive.toLocaleString("en-US", { timeZone: fromZone }));
    const offsetMs = utcGuess.getTime() - zoneGuess.getTime();
    const actualUtc = new Date(naive.getTime() + offsetMs);

    setResult(formatInZone(actualUtc, toZone));
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Date & time"
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Select label="From time zone" value={fromZone} onChange={(e) => setFromZone(e.target.value)}>
          {TIMEZONES.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </Select>
        <Select label="To time zone" value={toZone} onChange={(e) => setToZone(e.target.value)}>
          {TIMEZONES.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </Select>
      </div>

      <p className="text-sm text-slate-500">Your device time zone: {browserZone}</p>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={calculate}>Convert</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox
        label={`Time in ${toZone}`}
        value={result}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
