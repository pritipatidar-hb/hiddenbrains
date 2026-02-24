import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "../HomeView";

interface BlogSectionProps {
    subtitle: string;
    title: string;
    posts: BlogPost[];
}

export const BlogSection = ({ subtitle, title, posts }: BlogSectionProps) => {
    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-20">
                <div className="text-center ">
                    <div className="text-[#f49b1e] font-bold py-1 px-3 uppercase text-xs">{subtitle}</div>
                    <h2 className="text-4xl md:text-4xl text-[#14133b] font-semibold mb-5">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white  overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="relative aspect-[16/10] overflow-hidden group">
                                <Image src={post.image} alt={post.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-2 flex flex-col gap-20 bg-[#f4f4f4] ">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold text-[#14133b]  line-clamp-3 pt-5 transition-colors"><Link href={post.link}>{post.title}</Link></h3>
                                    <p className="text-gray-500 text-sm leading-relaxed  ">{post.excerpt}</p>
                                </div>
                                <button className="mt-auto bg-[#f29111] text-white w-fit p-3 rounded text-[12px]">Blog Explore</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center text-base mt-12">
                    <Link href="https://www.hiddenbrains.co.uk/blog.html" className="inline-flex items-center group">
                        <span className="text-[#14133b] font-bold text-sm uppercase tracking-wider mr-4 group-hover:text-[#f49b1e] transition-colors duration-300">View Our Blog</span>
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#f49b1e] group-hover:text-[#f49b1e] transition-all duration-300"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
