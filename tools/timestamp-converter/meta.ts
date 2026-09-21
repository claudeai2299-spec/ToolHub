import type { Tool } from "@/lib/types";
import TimestampConverter from "./index";

export const timestampConverterMeta: Tool = {
  name: "Timestamp Converter",
  slug: "timestamp-converter",
  category: "date-time-tools",
  shortDescription: "Convert between Unix timestamps and human-readable dates instantly.",
  icon: "Clock3",
  component: TimestampConverter,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["age-calculator", "timezone-converter"],
  seo: {
    title: "Timestamp Converter - Unix Time to Date & Back | ToolHub",
    metaDescription:
      "Convert Unix timestamps to human-readable dates, or dates to Unix timestamps. Free, instant, and shows the current timestamp live.",
    h1: "Timestamp Converter",
  },
  content: {
    whatIsIt:
      "A Unix timestamp counts the number of seconds that have elapsed since January 1, 1970 (UTC), commonly used in programming and databases to represent dates and times.",
    howToUse: [
      "To convert a timestamp to a date: enter the Unix timestamp in seconds and click Convert.",
      "To convert a date to a timestamp: pick a date and time and click Convert.",
    ],
    examples: ["Timestamp 1700000000 converts to Tue, 14 Nov 2023 22:13:20 GMT"],
    notes: [
      "This tool works with timestamps in seconds (the standard Unix format), not milliseconds.",
      "The Date → Timestamp conversion uses your browser's local time zone as the input.",
    ],
    faqs: [
      {
        question: "Why is my timestamp 1000x larger than expected?",
        answer:
          "Some systems (like JavaScript's Date.now()) use milliseconds instead of seconds. If your timestamp looks too large, divide it by 1000 before converting.",
      },
    ],
  },
};
