import type { Tool } from "@/lib/types";
import JsonFormatter from "./index";

export const jsonFormatterMeta: Tool = {
  name: "JSON Formatter",
  slug: "json-formatter",
  category: "everyday-tools",
  shortDescription: "Format, validate, and minify JSON instantly in your browser.",
  icon: "Braces",
  component: JsonFormatter,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["uuid-generator", "timestamp-converter"],
  seo: {
    title: "JSON Formatter - Format, Validate & Minify JSON Online | ToolHub",
    metaDescription:
      "Free online JSON formatter and validator. Paste any JSON to pretty-print it, check for errors, or minify it. Runs entirely in your browser.",
    h1: "JSON Formatter",
  },
  content: {
    whatIsIt:
      "This tool formats (pretty-prints) JSON with proper indentation, validates it for syntax errors, and can also minify JSON by removing all whitespace.",
    howToUse: [
      "Paste your JSON into the box.",
      "Click 'Format / Validate' to pretty-print it, or 'Minify' to compress it.",
      "If the JSON is invalid, an error message explains what's wrong.",
    ],
    examples: [
      '{"a":1,"b":2} formats to a readable, indented structure',
      "Invalid JSON like {a: 1} (missing quotes) shows a clear syntax error",
    ],
    notes: [
      "All processing happens in your browser. Your JSON is never sent to a server.",
    ],
    faqs: [
      {
        question: "What's the difference between formatting and minifying?",
        answer:
          "Formatting adds indentation and line breaks to make JSON human-readable. Minifying removes all unnecessary whitespace to make the file as small as possible, typically before sending it over a network.",
      },
    ],
  },
};
