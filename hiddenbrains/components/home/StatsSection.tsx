import React from "react";
import { IconMap } from "./Icons";

interface Stat {
    icon: string;
    count: string;
    symbol: string;
    label: string;
}

interface StatsSectionProps {
    subtitle?: string;
    title: string;
    description: string;
    stats: Stat[];
    isLight?: boolean;
}

export const StatsSection = ({ subtitle, title, description, stats, isLight = false }: StatsSectionProps) => {
    return (
        <section className={`py-[50px] ${isLight ? 'bg-white text-[#14133b]' : 'bg-[#14133b] text-white'} relative overflow-hidden`}>
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    {subtitle && (
                        <div className="text-[#f29111] py-1 px-3  font-bold uppercase tracking-widest text-xs  md:text-sm font-[500]">
                            {subtitle}
                        </div>
                    )}
                    <h2 className={`text-4xl md:text-[36px] font-semibold ${isLight ? 'text-[#14133b]' : 'text-white'} mb-8 leading-tight max-w-4xl mx-auto mb-[18px]`}>
                        {title}
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className={`${isLight ? 'text-[#6a7c92]' : 'text-white/80'} text-lg md:text-base font-normal text-center leading-relaxed `}>
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {stats.map((stat, index) => {
                        const Icon = IconMap[stat.icon];
                        return (
                            <div key={index} className="flex flex-col items-center text-center  group">
                                <div className="text-[#f29111] mb-[15px] transform group-hover:scale-110 transition-transform duration-300">
                                    {Icon ? <Icon className="w-12 h-12" /> : null}
                                </div>
                                <div className="flex items-baseline mb-2">
                                    <h3 className={`text-5xl md:text-[48px] font-bold ${isLight ? 'text-[#f29111]' : 'text-white'} tracking-tighter`}>
                                        {stat.count}
                                    </h3>
                                    <span className="text-4xl md:text-[48px] font-bold text-[#f29111] ml-[5px]">
                                        {stat.symbol}
                                    </span>
                                </div>
                                <h6 className={`${isLight ? 'text-[#14133b]' : 'text-white'} text-base font-bold uppercase tracking-tight`}>
                                    {stat.label}
                                </h6>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
