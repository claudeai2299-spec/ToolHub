import type { Tool } from "@/lib/types";
import PercentageCalculator from "./index";

export const percentageCalculatorMeta: Tool = {
  name: "Percentage Calculator",
  slug: "percentage-calculator",
  category: "math-tools",
  shortDescription: "Calculate percentages, find what percent one number is of another, or measure percentage change.",
  icon: "Percent",
  component: PercentageCalculator,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["average-calculator", "ratio-calculator"],
  seo: {
    title: "Percentage Calculator - Find % of a Number, Free & Instant | ToolHub",
    metaDescription:
      "Calculate percentages instantly: find X% of Y, what percent X is of Y, or the percentage increase/decrease between two values. Free, no sign-up.",
    h1: "Percentage Calculator",
  },
  content: {
    whatIsIt:
      "A percentage expresses a number as a fraction of 100. This calculator handles the three most common percentage problems: finding a percentage of a number, finding what percent one number is of another, and finding the percentage increase or decrease between two values.",
    howToUse: [
      "Choose the calculation type using the tabs above the form.",
      "Enter the two required numbers.",
      "Click Calculate to see the result instantly.",
    ],
    formula:
      "X% of Y = (X ÷ 100) × Y\nX is what % of Y = (X ÷ Y) × 100\n% change = ((New − Original) ÷ Original) × 100",
    examples: [
      "25% of 200 = 50",
      "40 is 20% of 200",
      "A price rising from $50 to $65 is a 30% increase",
    ],
    faqs: [
      {
        question: "How do I calculate a percentage increase?",
        answer:
          "Subtract the original value from the new value, divide by the original value, then multiply by 100. This calculator does that automatically in the '% increase / decrease' tab.",
      },
      {
        question: "Can this calculator handle negative numbers?",
        answer:
          "Yes, negative numbers are accepted and calculated correctly, though results may be less meaningful depending on context.",
      },
    ],
  },
};
