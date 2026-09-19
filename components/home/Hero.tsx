import SearchBar from "@/components/search/SearchBar";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Free Online Tools
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Make Life Easier
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Simple, fast, and useful tools for students, professionals, and everyday tasks.
          All in one place, free, with no sign-up required.
        </p>
        <div className="mt-6 flex justify-center">
          <SearchBar placeholder="Search for a tool (e.g. percentage, age, password)" />
        </div>
      </div>
    </section>
  );
}
