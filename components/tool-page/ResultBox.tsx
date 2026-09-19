"use client";

import { useState } from "react";
import { Copy, Check, RotateCcw } from "lucide-react";
import Button from "@/components/ui/Button";

interface ResultBoxProps {
  label: string;
  value: string | null;
  subValue?: string;
  onReset?: () => void;
  copyText?: string;
}

export default function ResultBox({
  label,
  value,
  subValue,
  onReset,
  copyText,
}: ResultBoxProps) {
  const [copied, setCopied] = useState(false);

  if (value === null) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API can fail silently — value is already visible on screen.
    }
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900 break-words">{value}</p>
        {subValue && <p className="mt-1 text-sm text-slate-600">{subValue}</p>}
      </div>
      <div className="flex gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={handleCopy}
          aria-label="Copy result"
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
        {onReset && (
          <Button
            type="button"
            variant="secondary"
            onClick={onReset}
            aria-label="Reset"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
    </div>
  );
}
