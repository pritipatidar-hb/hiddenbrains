import { getData } from "@/lib/data";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";

export default async function TestimonialsPage() {
    const data = await getData();
    return <TestimonialsContent data={data} />;
}
