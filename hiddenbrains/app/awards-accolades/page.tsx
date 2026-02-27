import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_AWARD, AWARDS_DATA } from "@/lib/awards-data";
import { getData } from "@/lib/data";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";

import bannerImg from "../../images/awards-accolades-Banner.jpg";

export const metadata = {
    title: "Awards & Accolades | Hidden Brains",
    description: "Discover the awards and recognitions earned by Hidden Brains over 22+ years of excellence in the IT industry.",
};

export default async function AwardsAccoladesPage() {
    const data = await getData();

    return (
        <main className="pt-20 bg-white">
            {/* Page Header */}
            <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
                <Image
                    src={bannerImg}
                    alt="Awards & Accolades Banner"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white">
                    <h1 className="text-4xl md:text-[50px] font-bold leading-tight mb-2">
                        Awards & Accolades
                    </h1>
                    <nav className="flex items-center text-sm md:text-base text-white/90">
                        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span>Awards & Accolades</span>
                    </nav>
                </div>
                <div className="absolute inset-0 bg-blue-900/10"></div>
            </section>

            {/* Intro Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl">
                        <p className="text-[#6a7c92] text-lg leading-relaxed mb-8">
                            Incepted in 2003, Hidden Brains is a successful business icon in the Information Technology industry. Credibility and recognition of Hidden Brains can be gauged from several awards and accolades it has earned in its tenure of <strong>22+</strong> years in the industry. Our proven competency in delivering innovative business solutions and consistent quality standards has not gone unnoticed. Hidden Brains has bagged several prestigious awards for excellent performance in the IT domain and these recognitions strongly motivate us to challenge our own limits.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Award Section */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="relative aspect-[16/6] rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={FEATURED_AWARD.image}
                                    alt={FEATURED_AWARD.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <h6 className="text-xl font-bold text-[#14133b] mb-4 leading-tight">
                                {FEATURED_AWARD.title}
                            </h6>
                            <p className="text-[#6a7c92] text-base leading-relaxed">
                                {FEATURED_AWARD.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {AWARDS_DATA.map((award, index) => (
                            <div key={index} className="group flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-2xl transition-all duration-500">
                                <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-lg">
                                    <Image
                                        src={award.image}
                                        alt={award.title}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="mb-4">
                                    {/* Cup Icon SVG */}
                                    <div className="w-12 h-12 mx-auto mb-4 text-orange-500">
                                        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10">
                                            <path d="M16,27c0,4.418,6.059,8,16,8s16-3.582,16-8V1H16V27z" />
                                            <path d="M20,63L44,63" />
                                            <path d="M32,35L32,63" />
                                            <path d="M16,7H7c0,0,0,9,9,9" />
                                            <path d="M48,7h9c0,0,0,9-9,9" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#14133b] mb-4 line-clamp-3">
                                        {award.title}
                                    </h3>
                                </div>
                                <p className="text-[#6a7c92] text-sm leading-relaxed line-clamp-4">
                                    {award.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            {/* <Contact data={data} /> */}
        </main>
    );
}
