"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { toolsRegistry } from "@/lib/tools-registry";
import ToolCard from "@/components/category/ToolCard";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];
    return toolsRegistry.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.shortDescription.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
    );
  }, [query]);

  if (!query) {
    return <p className="mt-8 text-slate-500">Type a tool name above to search.</p>;
  }

  return (
    <div className="mt-8">
      <p className="text-sm text-slate-500">
        {results.length} result{results.length === 1 ? "" : "s"} for &quot;{query}&quot;
      </p>
      {results.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-slate-500">No tools found. Try a different search term.</p>
      )}
    </div>
  );
}
