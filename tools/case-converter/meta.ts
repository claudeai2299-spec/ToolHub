import type { Tool } from "@/lib/types";
import CaseConverter from "./index";

export const caseConverterMeta: Tool = {
  name: "Case Converter",
  slug: "case-converter",
  category: "writing-text-tools",
  shortDescription: "Convert text to UPPERCASE, lowercase, Title Case, or Sentence case instantly.",
  icon: "CaseSensitive",
  component: CaseConverter,
  featured: false,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["word-character-counter"],
  seo: {
    title: "Case Converter - UPPERCASE, lowercase, Title Case Online | ToolHub",
    metaDescription:
      "Convert any text to UPPERCASE, lowercase, Title Case, or Sentence case instantly. Free online case converter with one-click copy.",
    h1: "Case Converter",
  },
  content: {
    whatIsIt:
      "This tool converts text between four common letter-case styles: UPPERCASE, lowercase, Title Case (capitalizing each word), and Sentence case (capitalizing the first letter of each sentence).",
    howToUse: [
      "Type or paste your text.",
      "All four case versions appear automatically.",
      "Click Copy next to the version you want.",
    ],
    examples: [
      "'hello world' → Title Case: 'Hello World'",
      "'HELLO WORLD.' → Sentence case: 'Hello world.'",
    ],
    faqs: [
      {
        question: "Does Title Case capitalize small words like 'the' or 'of'?",
        answer:
          "This tool capitalizes every word for simplicity and predictability. Editorial title-case rules that lowercase small words are not applied.",
      },
    ],
  },
};
