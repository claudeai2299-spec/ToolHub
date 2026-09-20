"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { RotateCcw, Zap, Target, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog while the sun sets behind the mountains.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Technology grows faster than wisdom, and that gap is where most of our problems tend to hide.",
  "A good tool makes a hard job easy, but a great tool makes you forget it was ever hard.",
  "Every expert was once a beginner who refused to give up when things got difficult.",
];

type Status = "idle" | "running" | "finished";

export default function TypingSpeedTest() {
  const [sampleText, setSampleText] = useState(SAMPLE_TEXTS[0]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedMs, setElapsedMs] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (status !== "running") return;
    const interval = setInterval(() => {
      if (startTime) setElapsedMs(Date.now() - startTime);
    }, 100);
    return () => clearInterval(interval);
  }, [status, startTime]);

  const startTest = useCallback(() => {
    const random = SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
    setSampleText(random);
    setInput("");
    setStatus("idle");
    setStartTime(null);
    setElapsedMs(0);
    setTimeout(() => textareaRef.current?.focus(), 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (status === "idle" && value.length > 0) {
      setStatus("running");
      setStartTime(Date.now());
    }

    if (value.length > sampleText.length) return;

    setInput(value);

    if (value === sampleText) {
      setStatus("finished");
      setElapsedMs(Date.now() - (startTime ?? Date.now()));
    }
  };

  const correctChars = input
    .split("")
    .filter((char, i) => char === sampleText[i]).length;

  const accuracy = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100;

  const elapsedMinutes = elapsedMs / 1000 / 60;
  const wordsTyped = input.trim().split(/\s+/).filter(Boolean).length;
  const wpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;

  const progress = Math.round((input.length / sampleText.length) * 100);

  const strengthLabel =
    wpm >= 70 ? "Blazing fast! ⚡" : wpm >= 50 ? "Great pace 🔥" : wpm >= 30 ? "Solid effort 👍" : "Keep practicing 💪";

  return (
    <div className="flex flex-col gap-5">
      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Zap className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <p className="text-2xl font-bold text-slate-900">{wpm}</p>
          <p className="text-xs text-slate-500">WPM</p>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Target className="h-5 w-5 text-green-600" aria-hidden="true" />
          <p className="text-2xl font-bold text-slate-900">{accuracy}%</p>
          <p className="text-xs text-slate-500">Accuracy</p>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Clock className="h-5 w-5 text-amber-600" aria-hidden="true" />
          <p className="text-2xl font-bold text-slate-900">{(elapsedMs / 1000).toFixed(1)}s</p>
          <p className="text-xs text-slate-500">Time</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Sample text with live highlighting */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-lg leading-relaxed">
        {sampleText.split("").map((char, i) => {
          let className = "text-slate-400";
          if (i < input.length) {
            className = char === input[i] ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50";
          } else if (i === input.length) {
            className = "text-slate-900 bg-blue-100 animate-pulse";
          }
          return (
            <span key={i} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      <textarea
        ref={textareaRef}
        value={input}
        onChange={handleChange}
        disabled={status === "finished"}
        placeholder="Start typing here to begin..."
        rows={3}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
      />

      {status === "finished" && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
          <p className="text-lg font-bold text-green-800">{strengthLabel}</p>
          <p className="mt-1 text-sm text-green-700">
            {wpm} WPM · {accuracy}% accuracy · {(elapsedMs / 1000).toFixed(1)}s
          </p>
        </div>
      )}

      <Button onClick={startTest} variant={status === "finished" ? "primary" : "secondary"}>
        <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" />
        {status === "idle" ? "New Text" : status === "finished" ? "Try Again" : "Restart"}
      </Button>
    </div>
  );
}
