import type { Tool } from "@/lib/types";
import DateDifferenceCalculator from "./index";

export const dateDifferenceCalculatorMeta: Tool = {
  name: "Date Difference Calculator",
  slug: "date-difference-calculator",
  category: "date-time-tools",
  shortDescription: "Find the number of days, weeks, months, and years between any two dates.",
  icon: "CalendarRange",
  component: DateDifferenceCalculator,
  featured: false,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["age-calculator", "timezone-converter"],
  seo: {
    title: "Date Difference Calculator - Days Between Two Dates | ToolHub",
    metaDescription:
      "Calculate the exact number of days, weeks, months, and years between any two dates. Free, instant, and handles leap years correctly.",
    h1: "Date Difference Calculator",
  },
  content: {
    whatIsIt:
      "This tool calculates the total time span between two dates, showing the result in days as well as an approximate breakdown in weeks, months, and years.",
    howToUse: [
      "Enter a start date and an end date.",
      "Click Calculate.",
      "The total days and a years/months/weeks breakdown appear instantly.",
    ],
    examples: [
      "Jan 1, 2025 to Dec 31, 2025 is 364 days",
      "Jan 1, 2024 to Jan 1, 2025 is 366 days (2024 is a leap year)",
    ],
    faqs: [
      {
        question: "What if I enter the end date before the start date?",
        answer:
          "The calculator automatically treats the earlier date as the start, so the result is always a positive number of days, with a note that the dates were reversed.",
      },
    ],
  },
};
