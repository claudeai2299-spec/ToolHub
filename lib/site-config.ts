/**
 * SITE CONTROL PANEL
 * ===================
 * Edit this file to control what shows where on the site.
 * No other file needs to change for these kinds of edits.
 *
 * HOW TO USE:
 *
 * 1. To change a tool's category:
 *    Find the tool's slug below and change its `category` value.
 *    Valid categories: "math-tools", "date-time-tools", "writing-text-tools", "everyday-tools"
 *
 * 2. To show/hide a tool on the homepage "Popular Tools" section:
 *    Add or remove its slug from POPULAR_TOOLS below.
 *    Order in the list = order shown on the homepage.
 *
 * 3. To show/hide a tool in "Featured" (used for future homepage sections):
 *    Add or remove its slug from FEATURED_TOOLS below.
 *
 * 4. To add a brand new tool:
 *    You still need to create tools/<slug>/index.tsx and tools/<slug>/meta.ts,
 *    and add ONE import + ONE array line in lib/tools-registry.ts.
 *    This file only controls category/popular/featured for EXISTING tools —
 *    it overrides whatever is set inside each tool's own meta.ts.
 *
 * 5. To remove a tool from the site entirely:
 *    Go to lib/tools-registry.ts and delete its import + array line.
 *    (Deleting it from this file alone does not remove its page.)
 */

// Order here = order shown in the homepage "Popular Tools" section.
export const POPULAR_TOOLS: string[] = [
  "percentage-calculator",
  "age-calculator",
  "word-character-counter",
  "gpa-calculator",
  "password-generator",
  "qr-code-generator",
  "unit-converter",
  "typing-speed-test",
];

// Reserved for future use (e.g. a "Featured" homepage section).
export const FEATURED_TOOLS: string[] = [
  "percentage-calculator",
  "age-calculator",
  "word-character-counter",
  "gpa-calculator",
  "password-generator",
  "qr-code-generator",
  "unit-converter",
  "emi-loan-calculator",
];

// Which category each tool belongs to. Change the value to move a tool
// to a different category — nothing else needs to change.
export const TOOL_CATEGORIES: Record<string, string> = {
  "percentage-calculator": "math-tools",
  "average-calculator": "math-tools",
  "ratio-calculator": "math-tools",
  "age-calculator": "date-time-tools",
  "date-difference-calculator": "date-time-tools",
  "timezone-converter": "date-time-tools",
  "word-character-counter": "writing-text-tools",
  "case-converter": "writing-text-tools",
  "gpa-calculator": "everyday-tools",
  "random-number-generator": "everyday-tools",
  "password-generator": "everyday-tools",
  "qr-code-generator": "everyday-tools",
  "unit-converter": "everyday-tools",
  "typing-speed-test": "everyday-tools",
  "emi-loan-calculator": "everyday-tools",
};
