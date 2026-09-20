"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

function countStats(text: string) {
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed === "" ? 0 : (trimmed.match(/[.!?]+(\s|$)/g) ?? []).length || (trimmed ? 1 : 0);
  const paragraphs = trimmed === "" ? 0 : trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length || 1;
  const readingTimeMin = Math.max(1, Math.ceil(words / 200));

  return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTimeMin };
}

export default function WordCharacterCounter() {
  const [text, setText] = useState("");
  const stats = useMemo(() => countStats(text), [text]);

  const statCards = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "Characters (no spaces)", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading time", value: `${stats.readingTimeMin} min` },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="text-input" className="text-sm font-medium text-slate-700">
          Paste or type your text
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          rows={8}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <Button variant="secondary" onClick={() => setText("")} disabled={!text}>
        Clear
      </Button>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
          >
            <p className="text-2xl font-bold text-slate-900">{card.value}</p>
            <p className="text-sm text-slate-500">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
