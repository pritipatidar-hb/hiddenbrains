"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { TESTIMONIALS_DATA, TestimonialVideo } from "@/lib/testimonials-data";
import { VideoModal } from "@/components/shared/VideoModal";

export default function TestimonialsPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayVideo = (url: string) => {
        setSelectedVideo(url);
        setIsModalOpen(true);
    };

    return (
        <main className="pt-20">
            {/* Page Header */}
            <section className="bg-[#14133b] py-16 md:py-20 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-4xl md:text-[50px] font-semibold leading-tight mb-6">
                                Video Testimonial | Our Valuable Clients
                            </h1>
                            <nav className="flex items-center text-sm md:text-base text-gray-300">
                                <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white">Video Testimonial | Our Valuable Clients</span>
                            </nav>
                        </div>
                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex lg:justify-end">
                            <ul className="flex space-x-6 text-sm font-medium uppercase tracking-wider">
                                <li><Link href="/our-clients" className="hover:text-orange-500 transition-colors">Our Clients</Link></li>
                                <li><Link href="/client-speak" className="hover:text-orange-500 transition-colors">Client Speak</Link></li>
                                <li><span className="text-orange-500 border-b-2 border-orange-500 pb-1">Video Testimonial</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Decorative background element overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#14133b] to-transparent opacity-50"></div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS_DATA.map((testimonial) => (
                            <div key={testimonial.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Thumbnail with Play Button Overlay */}
                                <div
                                    className="relative aspect-video cursor-pointer overflow-hidden"
                                    onClick={() => handlePlayVideo(testimonial.videoUrl)}
                                >
                                    <Image
                                        src={testimonial.thumbnailUrl}
                                        alt={testimonial.clientName}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                            <Play size={28} className="text-orange-500 fill-orange-500 ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 text-center">
                                    <h6 className="text-xl font-semibold text-[#14133b] mb-2">{testimonial.clientName}</h6>
                                    <p className="text-[#6a7c92] text-sm leading-relaxed">
                                        {testimonial.projectName}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={selectedVideo || ""}
            />
        </main>
    );
}
