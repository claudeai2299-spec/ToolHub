"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type CaseType = "upper" | "lower" | "title" | "sentence";

function toTitleCase(text: string): string {
  return text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

function toSentenceCase(text: string): string {
  const lower = text.toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
}

function convert(text: string, type: CaseType): string {
  switch (type) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return toTitleCase(text);
    case "sentence":
      return toSentenceCase(text);
  }
}

const options: { id: CaseType; label: string }[] = [
  { id: "upper", label: "UPPERCASE" },
  { id: "lower", label: "lowercase" },
  { id: "title", label: "Title Case" },
  { id: "sentence", label: "Sentence case" },
];

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard failures are non-fatal.
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="case-input" className="text-sm font-medium text-slate-700">
          Your text
        </label>
        <textarea
          id="case-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text to convert..."
          rows={6}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={() => setText("")} disabled={!text}>
          Clear
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {options.map((opt) => {
          const converted = convert(text, opt.id);
          return (
            <div
              key={opt.id}
              className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">{opt.label}</p>
                <p className="truncate text-base text-slate-900" title={converted}>
                  {converted || <span className="text-slate-400">—</span>}
                </p>
              </div>
              <Button
                variant="secondary"
                onClick={() => handleCopy(converted)}
                disabled={!text}
                className="shrink-0"
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
