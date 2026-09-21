import type { Tool } from "@/lib/types";
import ImageResizer from "./index";

export const imageResizerMeta: Tool = {
  name: "Image Resizer",
  slug: "image-resizer",
  category: "everyday-tools",
  shortDescription: "Resize any image to exact dimensions, with optional aspect ratio lock.",
  icon: "Maximize2",
  component: ImageResizer,
  featured: false,
  popular: false,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["jpg-png-converter", "image-cropper"],
  seo: {
    title: "Image Resizer - Resize Images Online Free | ToolHub",
    metaDescription:
      "Resize any image to custom dimensions in your browser. Lock the aspect ratio or set width and height independently. Free, private, instant.",
    h1: "Image Resizer",
  },
  content: {
    whatIsIt:
      "This tool resizes an image to a custom width and height, either freely or with the original aspect ratio locked to avoid stretching or distortion.",
    howToUse: [
      "Upload an image.",
      "Enter a new width and/or height (aspect ratio is locked by default).",
      "Click Download resized image.",
    ],
    notes: [
      "Resizing happens locally in your browser using the Canvas API — your image is never uploaded to a server.",
      "The downloaded file is always in PNG format regardless of the original file type.",
    ],
    faqs: [
      {
        question: "What happens if I unlock the aspect ratio?",
        answer:
          "With the aspect ratio unlocked, you can set width and height independently, which may stretch or squash the image if the new proportions don't match the original.",
      },
    ],
  },
};
