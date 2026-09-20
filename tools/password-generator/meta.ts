import type { Tool } from "@/lib/types";
import PasswordGenerator from "./index";

export const passwordGeneratorMeta: Tool = {
  name: "Password Generator",
  slug: "password-generator",
  category: "everyday-tools",
  shortDescription: "Generate a strong, random password with customizable length and character types.",
  icon: "KeyRound",
  component: PasswordGenerator,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["random-number-generator"],
  seo: {
    title: "Password Generator - Create Strong Random Passwords | ToolHub",
    metaDescription:
      "Generate strong, random passwords with customizable length and character types. Uses a cryptographically secure random source. Free and instant.",
    h1: "Password Generator",
  },
  content: {
    whatIsIt:
      "This tool generates strong, random passwords using a cryptographically secure random number generator, with control over length and which character types to include.",
    howToUse: [
      "Adjust the length slider.",
      "Choose which character types to include (lowercase, uppercase, numbers, symbols).",
      "Click Generate Password, then copy the result.",
    ],
    notes: [
      "Passwords are generated entirely in your browser using the Web Crypto API and are never sent to a server or stored.",
      "Longer passwords with more character types are exponentially harder to guess.",
    ],
    examples: ["A 16-character password with all character types enabled is rated 'Very strong'"],
    faqs: [
      {
        question: "Are generated passwords stored anywhere?",
        answer:
          "No. Passwords are generated locally in your browser and are never transmitted or saved by ToolHub.",
      },
      {
        question: "What makes a password 'strong'?",
        answer:
          "Strength depends on length and character variety. This tool estimates strength based on entropy (bits of randomness) calculated from your chosen length and character set.",
      },
    ],
  },
};
