import type { Tool } from "@/lib/types";
import GstTaxCalculator from "./index";

export const gstTaxCalculatorMeta: Tool = {
  name: "GST/Tax Calculator",
  slug: "gst-tax-calculator",
  category: "everyday-tools",
  shortDescription: "Add or remove GST/sales tax from any amount instantly.",
  icon: "Receipt",
  component: GstTaxCalculator,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["percentage-calculator", "emi-loan-calculator"],
  seo: {
    title: "GST/Tax Calculator - Add or Remove Tax Instantly | ToolHub",
    metaDescription:
      "Calculate GST or sales tax: add tax to a price, or find the pre-tax amount from a tax-inclusive price. Free, instant, works with any tax rate.",
    h1: "GST/Tax Calculator",
  },
  content: {
    whatIsIt:
      "This tool calculates GST (Goods and Services Tax) or general sales tax two ways: adding tax to a pre-tax amount, or extracting the original pre-tax amount from a tax-inclusive total.",
    howToUse: [
      "Choose whether you're adding tax or removing tax from an amount.",
      "Enter the amount and select (or note) the tax rate.",
      "Click Calculate to see the result.",
    ],
    formula:
      "Add tax: Total = Amount × (1 + Rate ÷ 100)\nRemove tax: Original = Amount ÷ (1 + Rate ÷ 100)",
    examples: [
      "$1000 + 17% GST = $1170.00",
      "A $1170 tax-inclusive price at 17% GST has an original price of $1000.00",
    ],
    notes: [
      "Common rates are included as presets, but you can select any rate — this calculator is not limited to one country's tax system.",
    ],
    faqs: [
      {
        question: "What's the difference between 'adding' and 'removing' tax?",
        answer:
          "Adding tax starts from a pre-tax price and calculates the total with tax included. Removing tax does the reverse — it starts from a tax-inclusive total and works backward to find the original pre-tax price.",
      },
    ],
  },
};
