import type { Tool } from "@/lib/types";
import TimezoneConverter from "./index";

export const timezoneConverterMeta: Tool = {
  name: "Time Zone Converter",
  slug: "timezone-converter",
  category: "date-time-tools",
  shortDescription: "Convert a date and time between time zones around the world.",
  icon: "Globe",
  component: TimezoneConverter,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["age-calculator", "date-difference-calculator"],
  seo: {
    title: "Time Zone Converter - Convert Time Between Cities | ToolHub",
    metaDescription:
      "Convert any date and time from one time zone to another. Useful for scheduling calls and meetings across countries. Free and instant.",
    h1: "Time Zone Converter",
  },
  content: {
    whatIsIt:
      "This tool converts a specific date and time from one time zone to another, using your browser's built-in time zone database so results stay accurate as daylight saving rules change.",
    howToUse: [
      "Enter the date and time you want to convert.",
      "Select the source time zone and the target time zone.",
      "Click Convert to see the equivalent local time.",
    ],
    notes: [
      "Daylight saving time is handled automatically based on the selected date.",
      "Time zone list is a curated set of major cities/regions for usability; more can be added on request.",
    ],
    examples: [
      "3:00 PM in New York converts to 8:00 PM in London (during standard time alignment)",
    ],
    faqs: [
      {
        question: "Does this account for daylight saving time?",
        answer:
          "Yes. The conversion uses the browser's time zone database, which applies the correct daylight saving rules for the specific date you enter.",
      },
    ],
  },
};
