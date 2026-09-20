import type { Tool } from "@/lib/types";
import WordCharacterCounter from "./index";

export const wordCharacterCounterMeta: Tool = {
  name: "Word & Character Counter",
  slug: "word-character-counter",
  category: "writing-text-tools",
  shortDescription: "Count words, characters, sentences, and paragraphs in any text instantly.",
  icon: "TextCursorInput",
  component: WordCharacterCounter,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["case-converter"],
  seo: {
    title: "Word & Character Counter - Free Online Tool | ToolHub",
    metaDescription:
      "Count words, characters, sentences, and paragraphs in your text instantly. Useful for essays, tweets, meta descriptions, and more.",
    h1: "Word & Character Counter",
  },
  content: {
    whatIsIt:
      "This tool counts words, characters (with and without spaces), sentences, and paragraphs in any text as you type — useful for essays, social media posts, and meta descriptions with length limits.",
    howToUse: [
      "Paste or type your text into the box.",
      "Counts update automatically as you type.",
      "Use Clear to start over.",
    ],
    examples: [
      "A tweet-length draft can be checked against a 280 character limit",
      "An essay can be checked against a required word count",
    ],
    faqs: [
      {
        question: "Does this count spaces as characters?",
        answer:
          "Both totals are shown separately: 'Characters' includes spaces, and 'Characters (no spaces)' excludes them.",
      },
      {
        question: "How is reading time estimated?",
        answer: "Reading time is estimated at 200 words per minute, a commonly used average adult reading speed.",
      },
    ],
  },
};
