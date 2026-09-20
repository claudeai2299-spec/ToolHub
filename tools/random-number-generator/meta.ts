import type { Tool } from "@/lib/types";
import RandomNumberGenerator from "./index";

export const randomNumberGeneratorMeta: Tool = {
  name: "Random Number Generator",
  slug: "random-number-generator",
  category: "everyday-tools",
  shortDescription: "Generate a random whole number between any two values.",
  icon: "Dices",
  component: RandomNumberGenerator,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["password-generator"],
  seo: {
    title: "Random Number Generator - Pick a Random Number Online | ToolHub",
    metaDescription:
      "Generate a random whole number between any minimum and maximum value. Free, instant, and uses a cryptographically secure random source.",
    h1: "Random Number Generator",
  },
  content: {
    whatIsIt:
      "This tool generates a random whole number within a range you specify, useful for games, raffles, sampling, or any situation needing an unbiased random pick.",
    howToUse: ["Enter a minimum and maximum value.", "Click Generate.", "A random number in that range appears."],
    notes: [
      "Uses the Web Crypto API (crypto.getRandomValues) rather than Math.random for a higher-quality, unbiased random source.",
    ],
    examples: ["Min 1, Max 6 simulates a six-sided die roll", "Min 1, Max 100 picks a number for a raffle"],
    faqs: [
      {
        question: "Is the random number truly random?",
        answer:
          "It uses your browser's cryptographically secure random number generator, which is suitable for contests, raffles, and games. It is not a hardware random source.",
      },
    ],
  },
};
