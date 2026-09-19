import type { ToolContent } from "@/lib/types";

export default function ContentTabs({ content }: { content: ToolContent }) {
  return (
    <div className="flex flex-col gap-10">
      <section aria-labelledby="what-is-it">
        <h2 id="what-is-it" className="text-xl font-bold text-slate-900">
          What is this?
        </h2>
        <p className="mt-3 text-slate-600">{content.whatIsIt}</p>
      </section>

      <section aria-labelledby="how-to-use">
        <h2 id="how-to-use" className="text-xl font-bold text-slate-900">
          How to use it
        </h2>
        <ol className="mt-3 flex flex-col gap-2 text-slate-600">
          {content.howToUse.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {content.formula && (
        <section aria-labelledby="formula">
          <h2 id="formula" className="text-xl font-bold text-slate-900">
            Formula
          </h2>
          <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-slate-50 p-4 font-mono text-sm text-slate-700">
            {content.formula}
          </pre>
        </section>
      )}

      <section aria-labelledby="examples">
        <h2 id="examples" className="text-xl font-bold text-slate-900">
          Examples
        </h2>
        <ul className="mt-3 flex flex-col gap-2 text-slate-600">
          {content.examples.map((ex, i) => (
            <li key={i} className="rounded-lg bg-slate-50 px-4 py-2.5">
              {ex}
            </li>
          ))}
        </ul>
      </section>

      {content.notes && content.notes.length > 0 && (
        <section aria-labelledby="notes">
          <h2 id="notes" className="text-xl font-bold text-slate-900">
            Important notes
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-slate-600">
            {content.notes.map((note, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="faqs">
        <h2 id="faqs" className="text-xl font-bold text-slate-900">
          FAQs
        </h2>
        <div className="mt-3 flex flex-col divide-y divide-slate-100">
          {content.faqs.map((faq, i) => (
            <details key={i} className="group py-3">
              <summary className="cursor-pointer list-none font-medium text-slate-900 marker:content-none">
                {faq.question}
              </summary>
              <p className="mt-2 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
