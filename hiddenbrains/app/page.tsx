import HomeView from "@/components/HomeView";
import { getData } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getData();
  return <HomeView data={data} />;
}
