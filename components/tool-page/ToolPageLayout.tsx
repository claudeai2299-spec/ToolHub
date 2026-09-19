import type { Tool } from "@/lib/types";
import { getRelatedTools } from "@/lib/tools-registry";
import { getCategoryBySlug } from "@/lib/categories";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentTabs from "./ContentTabs";
import RelatedTools from "./RelatedTools";
import ToolSchema from "./ToolSchema";
import AdSlot from "@/components/ads/AdSlot";

export default function ToolPageLayout({ tool }: { tool: Tool }) {
  const category = getCategoryBySlug(tool.category);
  const related = getRelatedTools(tool);
  const ToolComponent = tool.component;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <ToolSchema tool={tool} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
          { label: tool.name },
        ]}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <main>
          <h1 className="text-3xl font-bold text-slate-900">{tool.seo.h1}</h1>
          <p className="mt-2 text-slate-600">{tool.shortDescription}</p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <ToolComponent />
          </div>

          <div className="my-8">
            <AdSlot placement="below-tool" />
          </div>

          <ContentTabs content={tool.content} />

          {related.length > 0 && (
            <div className="mt-10 lg:hidden">
              <RelatedTools tools={related} />
            </div>
          )}
        </main>

        <aside className="flex flex-col gap-6">
          <AdSlot placement="sidebar" />
          <div className="hidden lg:block">
            <RelatedTools tools={related} />
          </div>
        </aside>
      </div>
    </div>
  );
}
