"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function UuidGenerator() {
  const [count, setCount] = useState("5");
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const generate = () => {
    const num = Math.min(Math.max(parseInt(count, 10) || 1, 1), 100);
    const newUuids = Array.from({ length: num }, () => crypto.randomUUID());
    setUuids(newUuids);
  };

  const copyOne = async (uuid: string, index: number) => {
    try {
      await navigator.clipboard.writeText(uuid);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      // Clipboard failures are non-fatal.
    }
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(uuids.join("\n"));
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1500);
    } catch {
      // Clipboard failures are non-fatal.
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end gap-3">
        <div className="w-32">
          <Input
            label="How many"
            type="number"
            inputMode="numeric"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <Button onClick={generate} className="mb-0.5">
          <RefreshCw className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Generate
        </Button>
      </div>

      {uuids.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">{uuids.length} UUID(s)</p>
            <Button variant="secondary" onClick={copyAll}>
              {copiedAll ? "Copied all!" : "Copy all"}
            </Button>
          </div>
          <div className="flex flex-col divide-y divide-slate-100 rounded-xl border border-slate-200 bg-slate-50">
            {uuids.map((uuid, i) => (
              <div key={i} className="flex items-center justify-between gap-3 px-4 py-2.5">
                <code className="truncate font-mono text-sm text-slate-800">{uuid}</code>
                <button
                  type="button"
                  onClick={() => copyOne(uuid, i)}
                  aria-label={`Copy UUID ${i + 1}`}
                  className="shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  {copiedIndex === i ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
