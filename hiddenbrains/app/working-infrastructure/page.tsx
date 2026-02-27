import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Server,
    Network,
    Monitor,
    Database,
    Cpu,
    Shield,
    Smartphone,
    Headphones,
    CheckCircle2
} from "lucide-react";
import {
    INFRA_INTRO,
    INFRA_HIGHLIGHTS,
    INFRA_CATEGORIES,
    IT_INFRA_DETAILS
} from "@/lib/infrastructure-data";
import { getData } from "@/lib/data";
import Contact from "@/components/layout/Contact";

import bannerImg from "../../images/infrastructure-Banner.webp";

export const metadata = {
    title: "Our Working Infrastructure | Hidden Brains",
    description: "Explore Hidden Brains' state-of-the-art infrastructure, secure working environment, and latest workstation setups.",
};

export default async function InfrastructurePage() {
    const data = await getData();

    // Mapping for Lucide icons
    const getIcon = (title: string, size = 28) => {
        switch (title.toLowerCase()) {
            case "servers": return <Server size={size} />;
            case "network": return <Network size={size} />;
            case "server os environment": return <Cpu size={size} />;
            case "databases": return <Database size={size} />;
            case "hardware for desktops": return <Shield size={size} />;
            case "desktops": return <Monitor size={size} />;
            case "devices": return <Smartphone size={size} />;
            case "communication tools": return <Headphones size={size} />;
            default: return <CheckCircle2 size={size} />;
        }
    };

    return (
        <main className="pt-20 bg-white">
            {/* Page Header */}
            <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
                <Image
                    src={bannerImg}
                    alt="Our Working Infrastructure Banner"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white">
                    <h1 className="text-4xl md:text-[50px] font-bold leading-tight mb-2">
                        Our Working Infrastructure
                    </h1>
                    <nav className="flex items-center text-sm md:text-base text-white/90">
                        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span>Our Working Infrastructure</span>
                    </nav>
                </div>
                <div className="absolute inset-0 bg-blue-900/10"></div>
            </section>

            {/* Intro Content */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#14133b] mb-8 leading-tight">
                                {INFRA_INTRO.title}
                            </h2>
                            <div className="space-y-6 text-[#6a7c92] text-lg leading-relaxed">
                                {INFRA_INTRO.content.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3]">
                                <Image
                                    src={INFRA_INTRO.image}
                                    alt="Infrastructure"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl -z-10 hidden md:block"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full -z-10 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b]">
                            Highlights of our Infrastructure
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {INFRA_HIGHLIGHTS.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                    <CheckCircle2 size={24} />
                                </div>
                                <p className="text-[#6a7c92] font-medium leading-relaxed">
                                    {highlight.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Categories Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {INFRA_CATEGORIES.map((cat, index) => (
                            <div key={index} className="group p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/10 transition-all duration-300">
                                <div className="w-16 h-16 mb-8 rounded-xl bg-[#14133b] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                                    {getIcon(cat.title)}
                                </div>
                                <h3 className="text-xl font-bold text-[#14133b] mb-4">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.items?.map((item, i) => (
                                        <li key={i} className="text-[#6a7c92] text-sm flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IT Infrastructure Hardware/Software */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b]">
                            IT Infrastructure
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {IT_INFRA_DETAILS.map((detail, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                                <div className="relative aspect-video">
                                    <Image
                                        src={detail.image || ""}
                                        alt={detail.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
                                    <div className="absolute top-4 left-4 bg-white p-2 rounded-lg text-[#14133b] shadow-lg">
                                        {getIcon(detail.title, 20)}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-[#14133b] mb-4">{detail.title}</h3>
                                    {detail.content ? (
                                        <p className="text-[#6a7c92] text-sm leading-relaxed whitespace-pre-line">
                                            {detail.content}
                                        </p>
                                    ) : (
                                        <ul className="grid grid-cols-1 gap-2">
                                            {detail.items?.map((item, i) => (
                                                <li key={i} className="text-[#6a7c92] text-sm flex items-center">
                                                    <span className="w-1 h-1 rounded-full bg-[#14133b] mr-2"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-20 bg-[#14133b] text-white overflow-hidden relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Are you looking to digitally transform your business?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12">
                            We offer technical expertise, global footprints and insights to take your app idea to the next level. Let’s discuss.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block py-4 px-10 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 uppercase tracking-wider"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </section> */}
        </main>
    );
}
