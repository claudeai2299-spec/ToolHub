import ToolCard from "@/components/category/ToolCard";
import type { Tool } from "@/lib/types";

export default function PopularTools({ tools }: { tools: Tool[] }) {
  if (tools.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="text-xl font-bold text-slate-900">Popular Tools</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
