import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer | ToolHub",
  description: "Disclaimer regarding the accuracy and use of ToolHub's tools.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>

      <div className="mt-6 flex flex-col gap-6 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">General informational use only</h2>
          <p className="mt-2">
            Tools on ToolHub are intended for general, everyday, informational use. They are not
            a substitute for professional financial, legal, medical, or academic advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Accuracy of calculations</h2>
          <p className="mt-2">
            Each tool is built and tested to calculate correctly for its stated method. For
            example, the GPA Calculator explicitly uses the standard US 4.0 scale — institutions
            using a different grading scale will get different real-world results and should
            adjust accordingly. Where a tool makes a specific assumption like this, it is stated
            on that tool&apos;s page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Independent verification</h2>
          <p className="mt-2">
            You should independently verify any result before relying on it for an important
            decision. We are not responsible for outcomes resulting from the use of, or reliance
            on, any tool on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact us</h2>
          <p className="mt-2">
            If you believe a tool is producing an incorrect result, please let us know at{" "}
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
