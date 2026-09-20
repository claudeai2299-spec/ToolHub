import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolsRegistry, getToolBySlug } from "@/lib/tools-registry";
import ToolPageLayout from "@/components/tool-page/ToolPageLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return toolsRegistry.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) return {};

  return {
    title: tool.seo.title,
    description: tool.seo.metaDescription,
    alternates: { canonical: `/tools/${tool.slug}` },
    robots: tool.indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: tool.seo.title,
      description: tool.seo.metaDescription,
      url: `/tools/${tool.slug}`,
      type: "website",
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) notFound();

  return <ToolPageLayout tool={tool} />;
}
