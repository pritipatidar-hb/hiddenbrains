import { getData } from "@/lib/data";
import Contact from "@/components/layout/Contact";

export default async function AboutPage() {
  const data = await getData();
  const { ABOUT_CONTENT } = data;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {ABOUT_CONTENT.title}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        {ABOUT_CONTENT.description}
      </p>
      <Contact data={data} />
    </div>
  );
}
