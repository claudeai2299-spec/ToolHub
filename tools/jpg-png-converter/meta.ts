import type { Tool } from "@/lib/types";
import JpgPngConverter from "./index";

export const jpgPngConverterMeta: Tool = {
  name: "JPG to PNG Converter",
  slug: "jpg-png-converter",
  category: "everyday-tools",
  shortDescription: "Convert images between JPG and PNG format, right in your browser.",
  icon: "ImageIcon",
  component: JpgPngConverter,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["image-to-pdf", "image-resizer"],
  seo: {
    title: "JPG to PNG Converter (and PNG to JPG) - Free Online | ToolHub",
    metaDescription:
      "Convert images between JPG and PNG formats instantly. Upload any image and download it as either format. Free, private, no upload to a server.",
    h1: "JPG to PNG Converter",
  },
  content: {
    whatIsIt:
      "This tool converts an uploaded image into either JPG or PNG format and lets you download the result. Conversion happens entirely in your browser using the Canvas API.",
    howToUse: [
      "Upload an image (any common format).",
      "Click 'Download as PNG' or 'Download as JPG'.",
      "The converted file downloads immediately.",
    ],
    notes: [
      "Your image never leaves your device — conversion happens locally using your browser's built-in image rendering.",
      "PNG supports transparency; JPG does not, so transparent areas are filled with white when converting to JPG.",
    ],
    faqs: [
      {
        question: "Will I lose image quality converting to JPG?",
        answer:
          "JPG uses lossy compression, so converting from PNG to JPG can introduce minor quality loss, especially on images with sharp edges or text. PNG is lossless.",
      },
      {
        question: "Is my image uploaded to a server?",
        answer:
          "No. The entire conversion happens in your browser using the Canvas API — the image file never leaves your device.",
      },
    ],
  },
};
