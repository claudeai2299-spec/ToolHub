import Link from "next/link";
import type { Tool } from "@/lib/types";
import { resolveIcon } from "@/lib/resolve-icon";

export default function RelatedTools({ tools }: { tools: Tool[] }) {
  if (tools.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="font-semibold text-slate-900">Related Tools</h2>
      <ul className="mt-3 flex flex-col divide-y divide-slate-100">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={`/tools/${tool.slug}`}
              className="flex items-center gap-3 py-3 text-sm text-slate-600 hover:text-blue-600"
            >
              {resolveIcon(tool.icon, "h-4 w-4 shrink-0")}
              {tool.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
