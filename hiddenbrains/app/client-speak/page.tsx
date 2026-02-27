import React from "react";
import { getData } from "@/lib/data";
import Contact from "@/components/layout/Contact";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/Testimonial-Banner.webp";
import { CLIENT_SPEAK_DATA } from "@/lib/client-speak-data";

export default async function ClientSpeakPage() {
    const data = await getData();
    return (
        <main className="pt-20">
            {/* Page Header */}
            <section className="relative py-20 md:py-24 text-white overflow-hidden min-h-[400px] flex items-center">
                <Image
                    src={bannerImg}
                    alt="Testimonial Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-4xl md:text-[50px] font-bold leading-tight mb-4 tracking-tight">
                                Client Speak
                            </h1>
                            <nav className="flex items-center text-sm md:text-base font-medium">
                                <Link href="/" className="text-white hover:text-orange-500 transition-colors">Home</Link>
                                <span className="mx-2 text-white/60">/</span>
                                <span className="text-white/90">Client Speak</span>
                            </nav>
                        </div>
                        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 flex lg:justify-end items-center">
                            <ul className="flex flex-wrap lg:flex-nowrap items-center gap-6 text-[13px] font-bold uppercase tracking-wider">
                                <li>
                                    <Link href="/our-clients" className="hover:text-orange-500 transition-colors py-2 block whitespace-nowrap text-white">
                                        Our Clients
                                    </Link>
                                </li>
                                <li>
                                    <span className="border border-white/40 px-6 py-4 block whitespace-nowrap text-white bg-black/10">
                                        Client Speak
                                    </span>
                                </li>
                                <li>
                                    <Link href="/testimonials" className="hover:text-orange-500 transition-colors py-2 block whitespace-nowrap text-white">
                                        Video Testimonial | Our Valuable Clients
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Speak Grid Section */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {CLIENT_SPEAK_DATA.map((client) => (
                            <div
                                key={client.id}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-8 items-start border border-gray-100"
                            >
                                <div className="relative w-full md:w-32 aspect-square flex-shrink-0 overflow-hidden rounded-lg shadow-inner">
                                    <Image
                                        src={client.imageUrl}
                                        alt={client.author}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 128px"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <div className="text-gray-600 italic mb-6 leading-relaxed relative">
                                        <span className="text-4xl text-orange-200 absolute -left-4 -top-2 select-none">“</span>
                                        {client.quote}
                                        <span className="text-4xl text-orange-200 absolute -bottom-6 select-none">”</span>
                                    </div>
                                    <div className="mt-8 border-t border-gray-100 pt-4">
                                        <p className="font-bold text-[#14133b] text-lg">{client.author}</p>
                                        <p className="text-orange-500 text-sm font-medium">{client.country}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <Contact data={data} /> */}
        </main>
    );
}
