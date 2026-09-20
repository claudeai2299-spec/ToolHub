import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PopularTools from "@/components/home/PopularTools";
import CategoryGrid from "@/components/home/CategoryGrid";
import { getPopularTools } from "@/lib/tools-registry";

export const metadata: Metadata = {
  title: "ToolHub - Free Online Tools & Calculators",
  description:
    "Free, fast, browser-based tools and calculators for math, dates, writing, and everyday tasks. No sign-up required.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const popularTools = getPopularTools();

  return (
    <>
      <Hero />
      <PopularTools tools={popularTools} />
      <CategoryGrid />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">Why use ToolHub?</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-4">
            <p>✓ Free, always</p>
            <p>✓ Fast, no waiting</p>
            <p>✓ Accurate results</p>
            <p>✓ No sign-up required</p>
          </div>
        </div>
      </section>
    </>
  );
}
