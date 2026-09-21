import type { Tool } from "@/lib/types";
import UuidGenerator from "./index";

export const uuidGeneratorMeta: Tool = {
  name: "UUID Generator",
  slug: "uuid-generator",
  category: "everyday-tools",
  shortDescription: "Generate one or many random UUID v4 identifiers instantly.",
  icon: "Fingerprint",
  component: UuidGenerator,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["json-formatter", "random-number-generator"],
  seo: {
    title: "UUID Generator - Free Online UUID v4 Generator | ToolHub",
    metaDescription:
      "Generate random UUID v4 identifiers instantly, one at a time or in bulk. Free, secure, and runs entirely in your browser.",
    h1: "UUID Generator",
  },
  content: {
    whatIsIt:
      "A UUID (Universally Unique Identifier) is a 128-bit identifier used to uniquely label information, commonly used as database keys or object identifiers. This tool generates standard version 4 (random) UUIDs.",
    howToUse: [
      "Enter how many UUIDs you want (1 to 100).",
      "Click Generate.",
      "Copy an individual UUID or all of them at once.",
    ],
    notes: [
      "Uses the browser's built-in crypto.randomUUID() for a cryptographically strong random source.",
    ],
    examples: ["A generated UUID looks like: 3f2504e0-4f89-41d3-9a0c-0305e82c3301"],
    faqs: [
      {
        question: "Can two generated UUIDs ever be the same?",
        answer:
          "Practically, no. UUID v4 has 122 random bits, making collisions astronomically unlikely even across trillions of generated IDs.",
      },
    ],
  },
};
