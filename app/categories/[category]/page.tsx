import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getToolsByCategory } from "@/lib/tools-registry";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ToolCard from "@/components/category/ToolCard";
import SearchBar from "@/components/search/SearchBar";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  return {
    title: `${category.name} - Free Online Tools | ToolHub`,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const tools = getToolsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />

      <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
      <p className="mt-2 max-w-2xl text-slate-600">{category.description}</p>

      <div className="mt-6 max-w-md">
        <SearchBar placeholder={`Search tools in ${category.name}...`} />
      </div>

      {tools.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-slate-500">No tools in this category yet — check back soon.</p>
      )}
    </div>
  );
      }
