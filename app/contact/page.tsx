import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact | ToolHub",
  description: "Get in touch with the ToolHub team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-4 text-slate-600">
        Have feedback, found a bug, or want to suggest a new tool? Reach out at{" "}
        <a href="mailto:syedadeelshah2299@gmail.com" className="text-blue-600 hover:underline">
          syedadeelshah2299@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
