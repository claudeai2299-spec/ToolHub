import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | ToolHub",
  description: "ToolHub's privacy policy — what data we collect and how our tools work.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="mt-6 flex flex-col gap-6 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">How our tools work</h2>
          <p className="mt-2">
            All calculators and tools on ToolHub run entirely in your web browser. Numbers,
            dates, text, or any other input you type into a tool are processed on your device
            and are never sent to, transmitted to, or stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Data we collect</h2>
          <p className="mt-2">
            ToolHub does not currently use analytics, tracking scripts, cookies, or advertising
            of any kind. We do not require account creation, and we do not collect or store
            personal information through the use of our tools.
          </p>
          <p className="mt-2">
            If this changes in the future — for example, if we add analytics or advertising —
            this policy will be updated first, and the update will clearly describe what is
            collected and why.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact information you send us</h2>
          <p className="mt-2">
            If you email us directly (for example, via our Contact page), we receive whatever
            information you choose to include in that email. We use it only to respond to you
            and do not share it with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Hosting</h2>
          <p className="mt-2">
            This website is hosted on Vercel. Standard web server logs (such as IP address and
            browser type) may be processed by our hosting provider as part of normal
            infrastructure operation, independent of anything ToolHub itself collects.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Children&apos;s privacy</h2>
          <p className="mt-2">
            ToolHub does not knowingly collect personal information from anyone, including
            children, because our tools do not collect personal information in the first place.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Changes to this policy</h2>
          <p className="mt-2">
            We may update this policy as ToolHub grows. Material changes — such as adding
            analytics or advertising — will be reflected here with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact us</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
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
