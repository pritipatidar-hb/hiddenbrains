import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Project } from "../HomeView";

export const PortfolioItem = ({ image, title, category, link }: Project) => (
    <div className="group relative overflow-hidden  bg-gray-100 aspect-[4/4] min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover transition-all duration-700 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center pb-8 px-4">
            <div className="bg-[#f49b1e] w-full py-4 px-3 text-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <h5 className="text-white text-lg md:text-xl font-bold uppercase mb-1">
                    <Link href={link} target="_blank" rel="nofollow noopener">
                        {title}
                    </Link>
                </h5>
                <p className="text-white/90 text-[10px] font-medium uppercase tracking-widest">
                    {category}
                </p>
            </div>
        </div>
    </div>
);

interface PortfolioSectionProps {
    subtitle: string;
    title: string;
    description: string;
    projects: Project[];
}

export const PortfolioSection = ({ subtitle, title, description, projects }: PortfolioSectionProps) => {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto px-6 text-center">
                        <div className="text-[#f29111] py-1 px-3 font-[500] uppercase tracking-wider text-sm mb-4 font-family: 'Roboto'">{subtitle}</div>
                        <h2 className="text-m md:text-[36px] font-[600] text-[#14133b] mb-4 max-w-4xl mx-auto leading-tight">{title}</h2>
                        <p className="text-[#6a7c92]  text-base font-[400] max-w-2xl mx-auto leading-relaxed font-['Roboto']">{description} </p>
                    </div>
                </div>
                <div className="relative group/slider">
                    <div className="flex overflow-hidden no-scrollbar">
                        <div className="flex gap-8 px-4 animate-infinite-scroll hover:[animation-play-state:paused]">
                            {[...projects, ...projects].map((project, index) => (
                                <PortfolioItem key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[30px]">
                <Link href="/our-work" className="group flex items-center space-x-3 text-gray-900 font-bold hover:text-blue-600 transition-colors duration-300">
                    <span className="uppercase tracking-widest text-[13px] font-[500] text-[#14133b] ">View Our Work</span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                </Link>
            </div>
        </section>
    );
};
