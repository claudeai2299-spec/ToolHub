import Link from "next/link";
import { categories } from "@/lib/categories";
import { getToolsByCategory } from "@/lib/tools-registry";
import { resolveIcon } from "@/lib/resolve-icon";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="text-xl font-bold text-slate-900">Tool Categories</h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((cat) => {
          const count = getToolsByCategory(cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-5 text-center transition-all hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {resolveIcon(cat.icon, "h-5 w-5")}
              </div>
              <p className="font-semibold text-slate-900">{cat.name}</p>
              <p className="text-sm text-slate-500">{count} tools</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
