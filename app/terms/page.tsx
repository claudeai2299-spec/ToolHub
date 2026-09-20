import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use | ToolHub",
  description: "Terms of use for ToolHub's free online tools.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="mt-6 flex flex-col gap-6 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Using ToolHub</h2>
          <p className="mt-2">
            ToolHub provides free, browser-based tools and calculators. By using this website,
            you agree to these terms. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">No professional advice</h2>
          <p className="mt-2">
            ToolHub&apos;s tools are general-purpose calculators intended for everyday,
            informational use. They do not constitute financial, legal, medical, academic, or
            other professional advice. You should independently verify any result before relying
            on it for an important decision, and consult a qualified professional where
            appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">No warranty</h2>
          <p className="mt-2">
            Tools are provided &quot;as is,&quot; free of charge, without warranties of any kind,
            express or implied. While we aim for accuracy and test our calculations, we do not
            guarantee that results will always be error-free, complete, or suitable for every
            use case.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Limitation of liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, ToolHub is not liable for any loss or damage
            arising from your use of, or reliance on, any tool or content on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Acceptable use</h2>
          <p className="mt-2">
            You agree not to misuse ToolHub — for example, by attempting to disrupt the site,
            scraping it at abusive volume, or using it for any unlawful purpose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Changes to the site or terms</h2>
          <p className="mt-2">
            We may update these terms, and may add, change, or remove tools, at any time. The
            current version of these terms is the one that applies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact us</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href="mailto:syedadeelshah2299@gmail.com" className="text-blue-600 hover:underline">
              syedadeelshah2299@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
