import type { Tool } from "./types";
import { POPULAR_TOOLS, FEATURED_TOOLS, TOOL_CATEGORIES } from "./site-config";

import { percentageCalculatorMeta } from "@/tools/percentage-calculator/meta";
import { averageCalculatorMeta } from "@/tools/average-calculator/meta";
import { ratioCalculatorMeta } from "@/tools/ratio-calculator/meta";
import { ageCalculatorMeta } from "@/tools/age-calculator/meta";
import { dateDifferenceCalculatorMeta } from "@/tools/date-difference-calculator/meta";
import { timezoneConverterMeta } from "@/tools/timezone-converter/meta";
import { wordCharacterCounterMeta } from "@/tools/word-character-counter/meta";
import { caseConverterMeta } from "@/tools/case-converter/meta";
import { gpaCalculatorMeta } from "@/tools/gpa-calculator/meta";
import { randomNumberGeneratorMeta } from "@/tools/random-number-generator/meta";
import { passwordGeneratorMeta } from "@/tools/password-generator/meta";
import { qrCodeGeneratorMeta } from "@/tools/qr-code-generator/meta";
import { unitConverterMeta } from "@/tools/unit-converter/meta";
import { typingSpeedTestMeta } from "@/tools/typing-speed-test/meta";
import { emiLoanCalculatorMeta } from "@/tools/emi-loan-calculator/meta";

// Raw list of every tool's own meta.ts (category/popular/featured values here
// are DEFAULTS — they get overridden below by lib/site-config.ts, which is
// the single place to edit for category moves or popular/featured changes).
const rawTools: Tool[] = [
  percentageCalculatorMeta,
  averageCalculatorMeta,
  ratioCalculatorMeta,
  ageCalculatorMeta,
  dateDifferenceCalculatorMeta,
  timezoneConverterMeta,
  wordCharacterCounterMeta,
  caseConverterMeta,
  gpaCalculatorMeta,
  randomNumberGeneratorMeta,
  passwordGeneratorMeta,
  qrCodeGeneratorMeta,
  unitConverterMeta,
  typingSpeedTestMeta,
  emiLoanCalculatorMeta,
];

// Apply site-config.ts overrides on top of each tool's own meta.ts.
const configuredTools: Tool[] = rawTools.map((tool) => ({
  ...tool,
  category: TOOL_CATEGORIES[tool.slug] ?? tool.category,
  popular: POPULAR_TOOLS.includes(tool.slug),
  featured: FEATURED_TOOLS.includes(tool.slug),
}));

// Sort "popular" tools to match the order defined in POPULAR_TOOLS.
export const toolsRegistry: Tool[] = [...configuredTools].sort((a, b) => {
  const aIndex = POPULAR_TOOLS.indexOf(a.slug);
  const bIndex = POPULAR_TOOLS.indexOf(b.slug);
  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});

export const getToolBySlug = (slug: string): Tool | undefined =>
  toolsRegistry.find((t) => t.slug === slug);

export const getToolsByCategory = (categorySlug: string): Tool[] =>
  toolsRegistry.filter((t) => t.category === categorySlug);

export const getFeaturedTools = (): Tool[] =>
  FEATURED_TOOLS.map(getToolBySlug).filter((t): t is Tool => Boolean(t));

export const getPopularTools = (): Tool[] =>
  POPULAR_TOOLS.map(getToolBySlug).filter((t): t is Tool => Boolean(t));

export const getIndexableTools = (): Tool[] => toolsRegistry.filter((t) => t.indexable);

export const getRelatedTools = (tool: Tool): Tool[] =>
  tool.relatedTools.map(getToolBySlug).filter((t): t is Tool => Boolean(t));
