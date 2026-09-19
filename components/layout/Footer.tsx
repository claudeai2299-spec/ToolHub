import Link from "next/link";
import { categories } from "@/lib/categories";

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-bold text-slate-900">ToolHub</p>
            <p className="mt-2 text-sm text-slate-500">Free, useful tools. No sign-up required.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Categories</p>
            <ul className="mt-3 flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/categories/${cat.slug}`} className="text-sm text-slate-500 hover:text-blue-600">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Company</p>
            <ul className="mt-3 flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} ToolHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
