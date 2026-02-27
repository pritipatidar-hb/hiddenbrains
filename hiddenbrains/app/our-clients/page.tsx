import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/Testimonial-Banner.webp";
import { CLIENTS_DATA } from "@/lib/clients-data";
import { getData } from "@/lib/data";
import Contact from "@/components/layout/Contact";

export default async function OurClientsPage() {
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
                                Our Clients
                            </h1>
                            <nav className="flex items-center text-sm md:text-base font-medium">
                                <Link href="/" className="text-white hover:text-orange-500 transition-colors">Home</Link>
                                <span className="mx-2 text-white/60">/</span>
                                <span className="text-white/90">Our Clients</span>
                            </nav>
                        </div>
                        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 flex lg:justify-end items-center">
                            <ul className="flex flex-wrap lg:flex-nowrap items-center gap-6 text-[13px] font-bold uppercase tracking-wider">
                                <li>
                                    <span className="border border-white/40 px-6 py-4 block whitespace-nowrap text-white bg-black/10">
                                        Our Clients
                                    </span>
                                </li>
                                <li>
                                    <Link href="/client-speak" className="hover:text-orange-500 transition-colors py-2 block whitespace-nowrap text-white">
                                        Client Speak
                                    </Link>
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

            {/* Clients Grid Section */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#14133b] mb-4">
                            Without our clients, our work would have no meaning!
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t border-l border-gray-200">
                        {CLIENTS_DATA.map((client) => (
                            <div
                                key={client.id}
                                className="bg-white border-r border-b border-gray-200 aspect-[2/1] flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 group"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={client.url}
                                        alt={client.alt}
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    />
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
