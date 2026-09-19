import type { Tool } from "@/lib/types";
import RatioCalculator from "./index";

export const ratioCalculatorMeta: Tool = {
  name: "Ratio Calculator",
  slug: "ratio-calculator",
  category: "math-tools",
  shortDescription: "Simplify a ratio between two whole numbers to its lowest terms.",
  icon: "Divide",
  component: RatioCalculator,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["percentage-calculator", "average-calculator"],
  seo: {
    title: "Ratio Calculator - Simplify Ratios to Lowest Terms | ToolHub",
    metaDescription:
      "Simplify any ratio between two whole numbers to its lowest terms instantly, plus see the equivalent decimal value.",
    h1: "Ratio Calculator",
  },
  content: {
    whatIsIt:
      "A ratio compares two quantities. Simplifying a ratio means dividing both numbers by their greatest common divisor so the ratio is expressed in the smallest possible whole numbers.",
    howToUse: [
      "Enter two whole numbers.",
      "Click Simplify.",
      "See the simplified ratio and its decimal equivalent.",
    ],
    formula: "Simplified ratio = A ÷ GCD(A,B) : B ÷ GCD(A,B)",
    examples: ["20 : 30 simplifies to 2 : 3", "50 : 100 simplifies to 1 : 2"],
    faqs: [
      {
        question: "Does this work with decimal numbers?",
        answer:
          "This calculator simplifies ratios between whole numbers. For decimal ratios, multiply both values by 10 (or 100) until they're whole numbers, then simplify.",
      },
    ],
  },
};
