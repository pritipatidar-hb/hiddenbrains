import React from "react";
import { IconMap } from "./Icons";

import { Service } from "../HomeView";

export const ServiceCard = ({ icon, title, description, iconBgColor, iconColor, accentColor }: Service) => {
    const Icon = IconMap[icon];
    return (
        <div className="bg-white pt-[25px] px-[25px] pb-[25px] min-h-[220px] mt-[15px] mb-[15px] rounded-[4px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left relative overflow-hidden hover:-translate-y-2">
            {/* Icon Container - Fades out and height shrinks on hover */}
            <div className={`flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0 mb-[15px] w-[65px] h-[65px] rounded-full ${iconBgColor}`}>
                <div className={`w-[32px] h-[32px] flex items-center justify-center ${iconColor}`}>
                    {Icon ? <Icon /> : null}
                </div>
            </div>

            <h3 className="text-xl font-[600] text-[#14133b] mb-[8px] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-[15px] text-[14px] font-[400] text-[#6a7c92] font-sans line-clamp-3">
                {description}
            </p>

            {/* Explore Button - Fades in  and slides up on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 h-0 group-hover:h-6 overflow-hidden">
                <span className="text-[12px] font-bold tracking-wider text-[#14133b]">EXPLORE</span>
                <div className={`w-8 h-[2px] ${accentColor}`} />
            </div>

            {/* Bottom accent bar */}
            <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${accentColor}`} />
        </div>
    );
};

interface ServicesSectionProps {
    title: string;
    services: Service[];
}

export const ServicesSection = ({ title, services }: ServicesSectionProps) => {
    return (
        <section className="pt-32 pb-10 bg-white overflow-hidden text-[#14133b]">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-[18px] leading-tight">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => <ServiceCard key={index} {...service} />)}
                </div>
            </div>
        </section>
    );
};
