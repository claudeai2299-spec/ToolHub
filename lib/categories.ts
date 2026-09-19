import type { Category } from "./types";

export const categories: Category[] = [
  {
    name: "Math Tools",
    slug: "math-tools",
    description:
      "Fast, accurate calculators for everyday math — percentages, averages, and ratios.",
    icon: "Sigma",
  },
  {
    name: "Date & Time Tools",
    slug: "date-time-tools",
    description:
      "Calculate ages, date differences, and time zones without doing the math yourself.",
    icon: "CalendarClock",
  },
  {
    name: "Writing & Text Tools",
    slug: "writing-text-tools",
    description:
      "Count, convert, and clean up text for essays, posts, and everyday writing.",
    icon: "PenLine",
  },
  {
    name: "Everyday Tools",
    slug: "everyday-tools",
    description:
      "Simple utilities for students and everyday tasks — GPA, random numbers, and passwords.",
    icon: "Wrench",
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
