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
import { jsonFormatterMeta } from "@/tools/json-formatter/meta";
import { uuidGeneratorMeta } from "@/tools/uuid-generator/meta";
import { timestampConverterMeta } from "@/tools/timestamp-converter/meta";
import { gstTaxCalculatorMeta } from "@/tools/gst-tax-calculator/meta";
import { jpgPngConverterMeta } from "@/tools/jpg-png-converter/meta";
import { imageResizerMeta } from "@/tools/image-resizer/meta";

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
  jsonFormatterMeta,
  uuidGeneratorMeta,
  timestampConverterMeta,
  gstTaxCalculatorMeta,
  jpgPngConverterMeta,
  imageResizerMeta,
];

const configuredTools: Tool[] = rawTools.map((tool) => ({
  ...tool,
  category: TOOL_CATEGORIES[tool.slug] ?? tool.category,
  popular: POPULAR_TOOLS.includes(tool.slug),
  featured: FEATURED_TOOLS.includes(tool.slug),
}));

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
