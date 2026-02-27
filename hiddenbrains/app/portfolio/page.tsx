import { getData } from "@/lib/data";
import Contact from "@/components/layout/Contact";

export default async function PortfolioPage() {
  const data = await getData();
  const { PORTFOLIO_CONTENT } = data;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {PORTFOLIO_CONTENT.title}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        {PORTFOLIO_CONTENT.description}
      </p>
      <Contact data={data} />
    </div>
  );
}
