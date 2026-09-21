"use client";

import { useState, useEffect } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

export default function TimestampConverter() {
  const [nowTimestamp, setNowTimestamp] = useState<number | null>(null);
  const [timestampInput, setTimestampInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timestampResult, setTimestampResult] = useState<string | null>(null);
  const [dateResult, setDateResult] = useState<string | null>(null);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  useEffect(() => {
    setNowTimestamp(Math.floor(Date.now() / 1000));
  }, []);

  const convertTimestampToDate = () => {
    const num = parseInt(timestampInput, 10);
    if (timestampInput.trim() === "" || isNaN(num)) {
      setError1("Enter a valid Unix timestamp (seconds).");
      setTimestampResult(null);
      return;
    }
    setError1("");
    const date = new Date(num * 1000);
    if (isNaN(date.getTime())) {
      setError1("This timestamp produces an invalid date.");
      setTimestampResult(null);
      return;
    }
    setTimestampResult(date.toUTCString());
  };

  const convertDateToTimestamp = () => {
    if (!dateInput) {
      setError2("Select a date and time.");
      setDateResult(null);
      return;
    }
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
      setError2("Enter a valid date.");
      setDateResult(null);
      return;
    }
    setError2("");
    setDateResult(`${Math.floor(date.getTime() / 1000)}`);
  };

  return (
    <div className="flex flex-col gap-8">
      {nowTimestamp !== null && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
          <p className="text-sm font-medium text-slate-500">Current Unix timestamp</p>
          <p className="text-2xl font-bold text-slate-900">{nowTimestamp}</p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-slate-900">Timestamp → Date</h3>
        <Input
          label="Unix timestamp (seconds)"
          type="number"
          inputMode="numeric"
          value={timestampInput}
          onChange={(e) => setTimestampInput(e.target.value)}
          placeholder="e.g. 1700000000"
        />
        {error1 && (
          <p role="alert" className="text-sm text-red-600">
            {error1}
          </p>
        )}
        <Button onClick={convertTimestampToDate}>Convert</Button>
        <ResultBox label="Date (UTC)" value={timestampResult} />
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
        <h3 className="font-semibold text-slate-900">Date → Timestamp</h3>
        <Input
          label="Date & time"
          type="datetime-local"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        />
        {error2 && (
          <p role="alert" className="text-sm text-red-600">
            {error2}
          </p>
        )}
        <Button onClick={convertDateToTimestamp}>Convert</Button>
        <ResultBox label="Unix timestamp (seconds)" value={dateResult} />
      </div>
    </div>
  );
}
