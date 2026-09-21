"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

type Mode = "add" | "remove";

export default function GstTaxCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState<Mode>("add");
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const reset = () => {
    setAmount("");
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    const num = parseFloat(amount);
    const taxRate = parseFloat(rate);

    if (amount.trim() === "" || isNaN(num) || num < 0) {
      setError("Enter a valid, positive amount.");
      setResult(null);
      return;
    }
    if (rate.trim() === "" || isNaN(taxRate) || taxRate < 0) {
      setError("Enter a valid, positive tax rate.");
      setResult(null);
      return;
    }

    setError("");

    if (mode === "add") {
      const taxAmount = (num * taxRate) / 100;
      const total = num + taxAmount;
      setResult(`$${total.toFixed(2)}`);
      setSubValue(`Original: $${num.toFixed(2)} + Tax: $${taxAmount.toFixed(2)}`);
    } else {
      const original = num / (1 + taxRate / 100);
      const taxAmount = num - original;
      setResult(`$${original.toFixed(2)}`);
      setSubValue(`Tax-inclusive: $${num.toFixed(2)} − Tax: $${taxAmount.toFixed(2)}`);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Calculation mode">
        <button
          role="tab"
          aria-selected={mode === "add"}
          onClick={() => {
            setMode("add");
            reset();
          }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            mode === "add" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Add tax (exclusive → inclusive)
        </button>
        <button
          role="tab"
          aria-selected={mode === "remove"}
          onClick={() => {
            setMode("remove");
            reset();
          }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            mode === "remove" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Remove tax (inclusive → exclusive)
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label={mode === "add" ? "Amount (before tax)" : "Amount (tax-inclusive)"}
          type="number"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 1000"
        />
        <Select label="Tax rate" value={rate} onChange={(e) => setRate(e.target.value)}>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="17">17% (Pakistan standard GST)</option>
          <option value="18">18% (India standard GST)</option>
          <option value="20">20%</option>
        </Select>
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
        label={mode === "add" ? "Total (with tax)" : "Original amount (before tax)"}
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
