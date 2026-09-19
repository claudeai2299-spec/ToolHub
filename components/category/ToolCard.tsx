import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tool } from "@/lib/types";
import { resolveIcon } from "@/lib/resolve-icon";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {resolveIcon(tool.icon, "h-5 w-5")}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{tool.name}</h3>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{tool.shortDescription}</p>
      </div>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-blue-600">
        Open Tool
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
