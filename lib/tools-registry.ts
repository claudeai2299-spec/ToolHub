import type { Tool } from "./types";

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

export const toolsRegistry: Tool[] = [
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

export const getToolBySlug = (slug: string): Tool | undefined =>
  toolsRegistry.find((t) => t.slug === slug);

export const getToolsByCategory = (categorySlug: string): Tool[] =>
  toolsRegistry.filter((t) => t.category === categorySlug);

export const getFeaturedTools = (): Tool[] => toolsRegistry.filter((t) => t.featured);

export const getPopularTools = (): Tool[] => toolsRegistry.filter((t) => t.popular);

export const getIndexableTools = (): Tool[] => toolsRegistry.filter((t) => t.indexable);

export const getRelatedTools = (tool: Tool): Tool[] =>
  tool.relatedTools.map(getToolBySlug).filter((t): t is Tool => Boolean(t));
