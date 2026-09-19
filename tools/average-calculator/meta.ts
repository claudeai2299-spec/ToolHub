import type { Tool } from "@/lib/types";
import AverageCalculator from "./index";

export const averageCalculatorMeta: Tool = {
  name: "Average Calculator",
  slug: "average-calculator",
  category: "math-tools",
  shortDescription: "Find the average (mean) of any list of numbers instantly.",
  icon: "Calculator",
  component: AverageCalculator,
  featured: false,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["percentage-calculator", "ratio-calculator", "gpa-calculator"],
  seo: {
    title: "Average Calculator - Find the Mean of a Number List | ToolHub",
    metaDescription:
      "Calculate the average (mean) of any set of numbers. Just enter numbers separated by commas or spaces and get an instant result.",
    h1: "Average Calculator",
  },
  content: {
    whatIsIt:
      "The average (or mean) of a set of numbers is the sum of all values divided by how many values there are. It's the most common way to summarize a data set with a single number.",
    howToUse: [
      "Enter your numbers separated by commas or spaces.",
      "Click Calculate.",
      "The average, sum, and count are shown instantly.",
    ],
    formula: "Average = (Sum of all numbers) ÷ (Count of numbers)",
    examples: ["Average of 4, 8, 15, 16, 23, 42 = 18", "Average of 10, 20, 30 = 20"],
    faqs: [
      {
        question: "What's the difference between average and median?",
        answer:
          "The average (mean) sums all values and divides by the count. The median is the middle value when numbers are sorted. This tool calculates the average, not the median.",
      },
    ],
  },
};
