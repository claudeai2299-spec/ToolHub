import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About | ToolHub",
  description: "Learn about ToolHub's mission to provide free, useful, browser-based tools.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <h1 className="text-3xl font-bold text-slate-900">About ToolHub</h1>
      <div className="mt-4 flex flex-col gap-4 text-slate-600">
        <p>
          ToolHub provides free, fast, browser-based tools that solve real everyday problems —
          no sign-up, no installation, and no unnecessary friction.
        </p>
        <p>
          Every tool is built to actually work: real calculations, real validation, and clear
          explanations of how each tool works and how to use it.
        </p>
        <p>
          ToolHub is a growing collection of tools. New tools are added regularly, always with
          the same standard: genuinely useful, accurate, and easy to use.
        </p>
      </div>
    </div>
  );
}
