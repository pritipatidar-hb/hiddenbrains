import { getData } from "@/lib/data";

export default async function IndustriesPage() {
  const { INDUSTRIES_CONTENT } = await getData();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {INDUSTRIES_CONTENT.title}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        {INDUSTRIES_CONTENT.description}
      </p>
    </div>
  );
}
