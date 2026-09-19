import type { Tool } from "@/lib/types";
import AgeCalculator from "./index";

export const ageCalculatorMeta: Tool = {
  name: "Age Calculator",
  slug: "age-calculator",
  category: "date-time-tools",
  shortDescription: "Calculate your exact age in years, months, and days from your date of birth.",
  icon: "Cake",
  component: AgeCalculator,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["date-difference-calculator", "timezone-converter"],
  seo: {
    title: "Age Calculator - Calculate Exact Age in Years, Months & Days | ToolHub",
    metaDescription:
      "Find your exact age in years, months, and days from your date of birth. Accounts for leap years automatically. Free and instant.",
    h1: "Age Calculator",
  },
  content: {
    whatIsIt:
      "This tool calculates the exact time elapsed between a date of birth and a chosen date (today, by default), broken down into years, months, and days, including leap years.",
    howToUse: [
      "Enter your date of birth.",
      "Optionally set a different 'as of' date instead of today.",
      "Click Calculate Age.",
    ],
    examples: [
      "Someone born on Feb 29, 2000 turns exactly 24 on Feb 29, 2024 (a leap year)",
      "Born Jan 15, 1995, calculated as of today gives years, months, and days elapsed",
    ],
    notes: [
      "Leap years are handled automatically using calendar-accurate date math.",
      "Date of birth cannot be in the future.",
    ],
    faqs: [
      {
        question: "How is age calculated for people born on February 29?",
        answer:
          "The calculator uses calendar-accurate date arithmetic, so leap-year birthdays are handled correctly whether or not the target year is itself a leap year.",
      },
    ],
  },
};
