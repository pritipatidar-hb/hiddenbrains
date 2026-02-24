import React from "react";
import { IconMap } from "./Icons";

import { Service } from "../HomeView";

export const ServiceCard = ({ icon, title, description, iconBgColor }: Service) => {
    const Icon = IconMap[icon];
    return (
        <div className="bg-white pt-[20px] px-[26px] pb-[30px] !min-h-[280px] mt-[15px] mb-[15px] rounded-[4px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left">
            <div className={`w-[71px] h-[71px] rounded-full flex items-center justify-center  transition-transform duration-500 group-hover:scale-110 ${iconBgColor}`}>
                <div className="w-[35px] h-[35px] flex items-center justify-center text-[#f29111]">
                    {Icon ? <Icon /> : null}
                </div>
            </div>
            <h3 className="text-xl font-[600] text-[#14133b] mb-[10px] mt-[10px] group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-[10px] flex-grow text-[14px] font-[400] text-[#6a7c92] font-sans">
                {description}
            </p>
        </div>
    );
};

interface ServicesSectionProps {
    title: string;
    services: Service[];
}

export const ServicesSection = ({ title, services }: ServicesSectionProps) => {
    return (
        <section className="py-10 bg-white overflow-hidden text-[#14133b]">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-[18px] leading-tight">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => <ServiceCard key={index} {...service} />)}
                </div>
            </div>
        </section>
    );
};
