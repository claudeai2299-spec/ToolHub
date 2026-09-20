import type { Tool } from "@/lib/types";
import QrCodeGenerator from "./index";

export const qrCodeGeneratorMeta: Tool = {
  name: "QR Code Generator",
  slug: "qr-code-generator",
  category: "everyday-tools",
  shortDescription: "Generate a downloadable QR code from any text, URL, or content.",
  icon: "QrCode",
  component: QrCodeGenerator,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["password-generator", "random-number-generator"],
  seo: {
    title: "QR Code Generator - Create Free QR Codes Online | ToolHub",
    metaDescription:
      "Generate a QR code from any text, URL, or message. Adjustable size, instant preview, and free PNG download. No sign-up required.",
    h1: "QR Code Generator",
  },
  content: {
    whatIsIt:
      "A QR code is a scannable barcode that stores text, a URL, or other data. Scanning it with a phone camera instantly opens or displays the encoded content.",
    howToUse: [
      "Type or paste the text or URL you want to encode.",
      "Adjust the size if needed using the slider.",
      "Click Download PNG to save the QR code image.",
    ],
    notes: [
      "The QR code is generated entirely in your browser — nothing you type is sent to a server.",
      "Larger QR codes are easier to scan from a distance; smaller ones work fine up close.",
    ],
    examples: [
      "Encode a website URL so people can scan and visit it instantly",
      "Encode a Wi-Fi password or contact info for quick sharing",
    ],
    faqs: [
      {
        question: "Does the QR code expire?",
        answer:
          "No. The QR code directly encodes your text or link — there's no server-side redirect, so it works indefinitely as long as the encoded content itself is still valid.",
      },
      {
        question: "What's the maximum amount of text I can encode?",
        answer:
          "QR codes can hold a few thousand characters, but shorter content (like a URL) scans faster and more reliably. Very long text will produce a denser, harder-to-scan code.",
      },
    ],
  },
};
