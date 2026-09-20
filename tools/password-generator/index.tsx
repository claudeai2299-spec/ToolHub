"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

const CHAR_SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function secureRandomInt(maxExclusive: number): number {
  const array = new Uint32Array(1);
  const limit = Math.floor(0xffffffff / maxExclusive) * maxExclusive;
  let value: number;
  do {
    crypto.getRandomValues(array);
    value = array[0];
  } while (value >= limit);
  return value % maxExclusive;
}

function generatePassword(
  length: number,
  options: { lowercase: boolean; uppercase: boolean; numbers: boolean; symbols: boolean }
): string {
  const pool = Object.entries(options)
    .filter(([, enabled]) => enabled)
    .map(([key]) => CHAR_SETS[key as keyof typeof CHAR_SETS])
    .join("");

  if (!pool) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += pool[secureRandomInt(pool.length)];
  }
  return password;
}

function estimateStrength(length: number, poolSize: number): { label: string; color: string } {
  const bits = length * Math.log2(poolSize || 1);
  if (bits < 40) return { label: "Weak", color: "text-red-600" };
  if (bits < 64) return { label: "Fair", color: "text-amber-600" };
  if (bits < 100) return { label: "Strong", color: "text-green-600" };
  return { label: "Very strong", color: "text-green-700" };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const poolSize = Object.entries(options)
    .filter(([, v]) => v)
    .reduce((sum, [k]) => sum + CHAR_SETS[k as keyof typeof CHAR_SETS].length, 0);

  const generate = () => {
    if (!Object.values(options).some(Boolean)) {
      setError("Select at least one character type.");
      setResult(null);
      return;
    }
    setError("");
    setResult(generatePassword(length, options));
  };

  const strength = estimateStrength(length, poolSize);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="length" className="text-sm font-medium text-slate-700">
          Length: {length} characters
        </label>
        <input
          id="length"
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-sm font-medium text-slate-700">Include</legend>
        {(
          [
            ["lowercase", "Lowercase (a-z)"],
            ["uppercase", "Uppercase (A-Z)"],
            ["numbers", "Numbers (0-9)"],
            ["symbols", "Symbols (!@#$...)"],
          ] as const
        ).map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="h-4 w-4 accent-blue-600"
            />
            {label}
          </label>
        ))}
      </fieldset>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <Button onClick={generate}>Generate Password</Button>

      <ResultBox
        label="Password"
        value={result}
        subValue={result ? `Strength: ${strength.label}` : undefined}
      />
    </div>
  );
}
