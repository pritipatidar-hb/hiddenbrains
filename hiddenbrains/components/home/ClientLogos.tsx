import React from "react";
import Image from "next/image";

interface ClientLogosProps {
    logos: string[];
}

export const ClientLogos = ({ logos }: ClientLogosProps) => {
    return (
        <section className="relative z-20 -mt-24 px-6">
            <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 md:px-[15px] py-[25px]">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-10 md:gap-2">
                    {logos.map((logo, index) => (
                        <div key={index} className="group relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105">
                            <Image src={logo} alt={`Client Logo ${index + 1}`} width={140} height={40} className="h-10 md:h-[82px] md:[162px] w-auto object-contain opacity-70 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
