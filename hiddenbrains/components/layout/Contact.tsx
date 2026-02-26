import Link from 'next/link';
import React from 'react'
import ReCaptchaCheckbox from './ReCaptchaCheckbox';

const ContactForm = () => (
    <div className="w-full">
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name *" required className="w-full bg-white/60 border border-gray-200 rounded-lg py-4 px-4 text-sm md:[15px] text-[#6a7c92] font-medium focus:outline-none focus:border-[#f49b1e] focus:bg-white transition-all" />
                <input type="email" placeholder="Email *" required className="w-full bg-white/60 border border-gray-200 rounded-lg py-4 px-4 text-sm md:[15px] text-[#6a7c92] font-medium  focus:outline-none focus:border-[#f49b1e] focus:bg-white transition-all" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex relative">
                    <div className="flex items-center bg-white/60 border border-gray-200 border-r-0 rounded-l-lg px-4 py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-3 bg-blue-800 rounded-sm"></div>
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <input type="tel" placeholder="07400 123456" required className="w-full bg-white/60 border border-gray-200 rounded-r-lg px-4 py-4 text-sm md:[15px] text-[#6a7c92] focus:outline-none focus:border-[#f49b1e] focus:bg-white transition-all" />
                </div>
                <div className="relative">
                    <select className="w-full bg-white/60 border border-gray-200 rounded-lg px-6 py-4 text-sm md:[15px] text-[#6a7c92]  focus:outline-none focus:border-[#f49b1e] focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select Country</option><option>United Kingdom</option><option>United States</option><option>India</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div>
                </div>
            </div>
            <textarea placeholder="Project Description" rows={6} className="w-full bg-white/60 border border-gray-200 rounded-lg px-6 py-4 text-sm  md:[15px] text-[#6a7c92] focus:outline-none focus:border-[#f49b1e] focus:bg-white transition-all resize-none"></textarea>
            <ReCaptchaCheckbox />
            <div className="pt-2">
                <button type="submit" className="w-full py-[10px] px-[30px] bg-[#f49b1e] text-white font-medium rounded-sm hover:bg-[#e08b1a] transition-all duration-300 shadow-lg shadow-orange-500/20 uppercase text-[15px] tracking-wider">Send Message</button>
            </div>
        </form>
    </div>
);

import { SiteConfig, HomeContent } from "../HomeView";

const Contact = ({ data }: {
    data: {
        SITE_CONFIG: SiteConfig;
        HOME_CONTENT: HomeContent;
    };
}) => {
    const {
        SITE_CONFIG,
        HOME_CONTENT,
    } = data;
    const sectionData = HOME_CONTENT?.CONTACT_SECTION;

    return (
        <section className="py-[50px] bg-gradient-to-b from-[#f7f8fd] to-[#d6daec] overflow-hidden text-[#14133b]">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="opacity-100">
                        <div className="text-[#f29111] font-[500] tracking-widest uppercase text-xs md:text-sm py-1 px-3">{sectionData?.subtitle}</div>
                        <h2 className="text-4xl md:text-[36px] font-extrabold mb-[18px] leading-tight">{sectionData?.title || "Let&apos;s talk about your project"}</h2>
                        <p className="text-gray-500 text-lg text-[#6a7c92] md:text-base font-[400] leading-relaxed mb-16 max-w-xl">{sectionData?.description}</p>
                        <div className="space-y-12">
                            <div className="flex items-start space-x-6">
                                <div className="text-[#f49b1e] flex-shrink-0 pt-1">
                                    <svg className="w-[50px] h-[50.67px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h6 className="text-[22px] text-[#14133b] mt-[10px] mb-[10px] font-bold ">Office Address</h6>
                                    <p className="text-gray-500 text-[14px] font-[400] text-[#6a7c92] leading-relaxed whitespace-pre-line mb-[10px]">{SITE_CONFIG?.address}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex items-start space-x-5">
                                    <div className="text-[#f49b1e] flex-shrink-0 pt-1"><svg className="w-[50px] h-[50px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                                    <div><h6 className="text-[22px] text-[#14133b] mt-[10px] mb-[10px] font-bold ">Email Address</h6><Link href={`mailto:${SITE_CONFIG?.email}`} className="text-[#14133b] text-[14px] font-bold hover:text-[#f49b1e] transition-colors duration-300">{SITE_CONFIG?.email}</Link></div>
                                </div>
                                <div className="flex items-start space-x-5">
                                    <div className="text-[#f49b1e] flex-shrink-0 pt-1"><svg className="w-[50px] h-[50px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                                    <div><h6 className="text-[22px] text-[#14133b] mt-[10px] mb-[10px]  font-bold ">Call Us</h6><Link href={`tel:${SITE_CONFIG?.phone?.replace(/\s+/g, '')}`} className="text-[#14133b] text-[14px]  font-bold hover:text-[#f49b1e] transition-colors duration-300 ">{SITE_CONFIG?.phone}</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact