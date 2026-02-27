"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Testimonial } from "../HomeView";
import { VideoModal } from "../shared/VideoModal";

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/watch?v=yMc4s7lEt8w"; // Daniel Vant's video from the provided list

    return (
        <section className="py-[50px] bg-white overflow-hidden ">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-2xl md:text-[36px] font-[600] text-[#14133b] mb-[18px] text-left">Our Clients Speak For Us</h2>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div
                        className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl w-full md:w-[560px] md:h-[332px] cursor-pointer group"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Image
                            src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/Daniel-Vant-1.webp"
                            alt="Daniel Vant Testimonial"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <Play size={28} className="text-orange-500 fill-orange-500 ml-1" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="relative mb-12 last:mb-0">
                                <p className="text-xl md:text-[22px] text-[#6a7c92] leading-relaxed mb-[10px] font-[400] text-left">“{testimonial.quote}”</p>
                                <p className="text-xl text-[#14133b] font-[600]">Daniel Vant, UK</p>
                            </div>
                        ))}
                        <div className="">
                            <Link href="/testimonials" className="inline-flex items-center py-[10px] px-[30px] bg-[#f29111] !text-[#fff] font-bold rounded-lg shadow-sm hover:bg-[#e08b1a] transition-all duration-300 text-[15px] font-[500 ]">View All</Link>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={videoUrl}
            />
        </section>
    );
};
