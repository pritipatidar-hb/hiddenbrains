import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Award } from "../HomeView";

interface AwardsSectionProps {
    subtitle?: string;
    title: string;
    description: string;
    awards: Award[];
}

export const AwardsSection = ({ subtitle, title, description, awards }: AwardsSectionProps) => {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <div className="text-[#f49b1e] font-bold tracking-widest mb-4 uppercase text-xs">{subtitle}</div>
                <h2 className="text-3xl md:text-[36px] font-[600] text-[#14133b] mb-[18px] leading-tight max-w-2xl mx-auto">{title}</h2>
                <p className="text-gray-500 max-w-5xl mx-auto leading-relaxed text-[16px] font-[400] text-[#6a7c92] mb-16 text-center">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {awards.map((award, index) => (
                        <div key={index} className="group relative flex flex-col items-center text-center bg-[#f9f9f9] rounded-2xl p-[35px] border border-gray-100">
                            <div className="relative w-full aspect-square mb-6 overflow-hidden flex items-center justify-center">
                                <Image src={award.image} alt={award.title} fill className="object-contain" />
                            </div>
                            <div className="flex flex-col flex-grow"><div className="text-sm font-medium  text-[#6a7c92] leading-relaxed">{award.title}: <strong className="font-bold">{award.subtitle}</strong></div></div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="https://www.hiddenbrains.co.uk/awards-accolades.html" className="inline-flex items-center px-10 py-3 bg-[#f49b1e] text-white font-bold rounded-lg shadow-sm hover:bg-[#e08b1a] transition-all duration-300">View Our Awards</Link>
                </div>
            </div>
        </section>
    );
};
