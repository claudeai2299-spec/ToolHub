import Link from "next/link";
import { Wrench } from "lucide-react";
import { categories } from "@/lib/categories";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
          <Wrench className="h-5 w-5 text-blue-600" aria-hidden="true" />
          ToolHub
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <Link
          href="/search"
          aria-label="Search tools"
          className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-600 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
