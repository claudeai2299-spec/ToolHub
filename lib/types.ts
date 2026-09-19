import type { ComponentType } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolContent {
  whatIsIt: string;
  howToUse: string[];
  formula?: string;
  examples: string[];
  notes?: string[];
  faqs: FAQItem[];
}

export interface ToolSEO {
  title: string;
  metaDescription: string;
  h1: string;
}

/**
 * Structured data is opt-in per tool, never applied blindly.
 * Only set a schemaType when the content genuinely satisfies Google's
 * requirements for that type:
 * - "SoftwareApplication": the tool page describes a usable web application
 * - "FAQPage": the page has genuine, visible question/answer content
 *   (do not combine FAQPage with SoftwareApplication on the same page
 *   unless both blocks are real and distinct on the rendered page)
 * Leave undefined if unsure — no schema is safer than incorrect schema.
 */
export type SchemaType = "SoftwareApplication" | "FAQPage" | undefined;

export interface Tool {
  name: string;
  slug: string;
  category: string; // matches Category.slug
  shortDescription: string;
  icon: string; // lucide-react icon name, resolved in ToolCard
  component: ComponentType;
  seo: ToolSEO;
  content: ToolContent;
  schemaType?: SchemaType;
  relatedTools: string[]; // slugs
  featured: boolean;
  popular: boolean;
  /**
   * Controls indexing (noindex meta + sitemap inclusion) only.
   * Does NOT control routing — a tool with indexable:false still
   * resolves normally at /tools/[slug]; it is simply marked
   * noindex and excluded from the sitemap.
   */
  indexable: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}
