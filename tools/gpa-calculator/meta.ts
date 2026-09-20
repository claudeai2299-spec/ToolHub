import type { Tool } from "@/lib/types";
import GpaCalculator from "./index";

export const gpaCalculatorMeta: Tool = {
  name: "GPA Calculator",
  slug: "gpa-calculator",
  category: "everyday-tools",
  shortDescription: "Calculate your GPA on the standard US 4.0 scale from your grades and credit hours.",
  icon: "GraduationCap",
  component: GpaCalculator,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["average-calculator", "percentage-calculator"],
  seo: {
    title: "GPA Calculator - Calculate Your GPA on a 4.0 Scale | ToolHub",
    metaDescription:
      "Calculate your Grade Point Average (GPA) on the standard US 4.0 scale. Add courses with grades and credit hours for an instant weighted GPA.",
    h1: "GPA Calculator",
  },
  content: {
    whatIsIt:
      "GPA (Grade Point Average) summarizes academic performance as a single number, weighted by how many credit hours each course is worth. This calculator uses the standard US 4.0 scale.",
    howToUse: [
      "Select a letter grade for each course.",
      "Enter the credit hours for that course.",
      "Add more courses as needed, then click Calculate GPA.",
    ],
    formula: "GPA = (Sum of grade points × credit hours for each course) ÷ (Total credit hours)",
    examples: ["An A (4.0) in a 3-credit course and a B+ (3.3) in a 3-credit course gives a 3.65 GPA"],
    notes: [
      "This calculator uses the standard US 4.0 scale (A=4.0 down to F=0.0). Institutions using a different scale (e.g. plus/minus variations, weighted/honors scales, or scales out of 5.0) will get different results — check your institution's specific scale if it differs.",
    ],
    faqs: [
      {
        question: "Does this account for weighted or honors courses?",
        answer:
          "No — this calculator uses the standard unweighted US 4.0 scale. Institutions with weighted scales for honors/AP courses will need to adjust manually.",
      },
    ],
  },
};
