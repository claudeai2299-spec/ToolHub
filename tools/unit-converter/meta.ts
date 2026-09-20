import type { Tool } from "@/lib/types";
import UnitConverter from "./index";

export const unitConverterMeta: Tool = {
  name: "Unit Converter",
  slug: "unit-converter",
  category: "everyday-tools",
  shortDescription: "Convert between length, weight, and temperature units instantly.",
  icon: "ArrowLeftRight",
  component: UnitConverter,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["percentage-calculator", "average-calculator"],
  seo: {
    title: "Unit Converter - Length, Weight & Temperature | ToolHub",
    metaDescription:
      "Convert between meters, feet, kilograms, pounds, Celsius, Fahrenheit, and more. Free, instant unit conversion for length, weight, and temperature.",
    h1: "Unit Converter",
  },
  content: {
    whatIsIt:
      "This tool converts values between common units of length, weight, and temperature — such as meters to feet, kilograms to pounds, or Celsius to Fahrenheit.",
    howToUse: [
      "Choose a category: Length, Weight, or Temperature.",
      "Enter a value and select the units to convert from and to.",
      "The converted result appears instantly.",
    ],
    formula:
      "Length/Weight: value × (from unit's base factor) ÷ (to unit's base factor)\nTemperature: converted via Celsius as a common reference point",
    examples: [
      "1 meter = 3.28084 feet",
      "1 kilogram = 2.204623 pounds",
      "0°C = 32°F = 273.15 K",
    ],
    faqs: [
      {
        question: "How accurate are the conversions?",
        answer:
          "Conversions use standard, internationally recognized conversion factors and are accurate to 6 decimal places.",
      },
    ],
  },
};
