"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

export default function EmiLoanCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const reset = () => {
    setPrincipal("");
    setRate("");
    setTenure("");
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    const p = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const years = parseFloat(tenure);

    if (
      principal.trim() === "" ||
      rate.trim() === "" ||
      tenure.trim() === "" ||
      isNaN(p) ||
      isNaN(annualRate) ||
      isNaN(years)
    ) {
      setError("Enter valid numbers for all fields.");
      setResult(null);
      return;
    }
    if (p <= 0 || years <= 0) {
      setError("Loan amount and tenure must be greater than zero.");
      setResult(null);
      return;
    }
    if (annualRate < 0) {
      setError("Interest rate can't be negative.");
      setResult(null);
      return;
    }

    setError("");

    const n = years * 12; // total months
    const monthlyRate = annualRate / 12 / 100;

    let emi: number;
    if (monthlyRate === 0) {
      // 0% interest — simple division, avoids divide-by-zero in the formula below.
      emi = p / n;
    } else {
      const factor = Math.pow(1 + monthlyRate, n);
      emi = (p * monthlyRate * factor) / (factor - 1);
    }

    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    setResult(`$${emi.toFixed(2)}`);
    setSubValue(
      `Total payment: $${totalPayment.toFixed(2)} · Total interest: $${totalInterest.toFixed(2)}`
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Loan amount"
        type="number"
        inputMode="decimal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="e.g. 20000"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Annual interest rate (%)"
          type="number"
          inputMode="decimal"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="e.g. 8.5"
        />
        <Input
          label="Loan tenure (years)"
          type="number"
          inputMode="decimal"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          placeholder="e.g. 5"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={calculate}>Calculate EMI</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox
        label="Monthly Payment (EMI)"
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
}
