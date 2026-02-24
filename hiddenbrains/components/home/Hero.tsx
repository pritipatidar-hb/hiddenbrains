import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

import { HeroSlide, SiteConfig } from "../HomeView";

interface HeroSectionProps {
    slides: HeroSlide[];
    siteConfig: SiteConfig;
}

export const HeroSection = ({ slides, siteConfig }: HeroSectionProps) => {
    // Note: This is now a static version without auto-play slider as per pure SSR requirements
    const slide = slides[0];
    return (
        <section className="relative w-full h-[700px] overflow-hidden">
            <div className="absolute inset-0">
                <Image src={slide.image} alt="Hero Background" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
                <div>
                    <h1 className="md:text-[65px] text-white font-semibold md:text-7xl font-extrabold leading-[1.1] whitespace-pre-line mb-8 drop-shadow-lg ">{slide.title}</h1>
                    <p className="max-w-2xl mx-auto text-2xl text-white md:text-2xl mb-10 text-center leading-relaxed font-medium md:max-w-[713px]">{slide.subtitle}</p>
                    <div className="flex items-center gap-8 justify-center flex-wrap">
                        <Link href={slide.link} className="bg-[#f39223] text-white px-[30px] py-[10px] rounded-md font-medium md:text-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f39223] hover:scale-105 shadow-xl">Let&apos;s Explore</Link>
                        <div className="flex items-center gap-4 group">
                            <div className="bg-white w-[40px] h-[40px] p-3 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><PhoneIcon className=" w-[19px] h-[19px] text-[#f39223]" /></div>
                            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-white font-medium text-xl md:text-[15px] hover:text-[#f39223] transition-colors tracking-tight">{siteConfig.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
