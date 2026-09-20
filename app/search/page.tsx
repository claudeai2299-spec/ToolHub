import type { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "@/components/search/SearchBar";

export const metadata: Metadata = {
  title: "Search Tools | ToolHub",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Search Tools</h1>
      <div className="mt-4 max-w-md">
        <SearchBar />
      </div>
      <Suspense fallback={null}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
