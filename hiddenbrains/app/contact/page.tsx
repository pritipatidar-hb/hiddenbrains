import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Trophy,
  User,
  Handshake,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Play,
  CheckCircle2,
  ChevronRight,
  Search
} from "lucide-react";
import {
  CONTACT_HIGHLIGHTS,
  GLOBAL_OFFICES,
  CONTACT_CHANNELS,
  CONTACT_TESTIMONIAL
} from "@/lib/contact-data";
import { getData } from "@/lib/data";
import ReCaptchaCheckbox from "@/components/layout/ReCaptchaCheckbox";
import bannerBg from "../../images/bg-titlebar.jpg";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Testimonial } from "@/components/HomeView";

export const metadata = {
  title: "Contact Us | Hidden Brains",
  description: "Get in touch with Hidden Brains for your next web or mobile development project. Reach out to our global offices for a free quote.",
};

export default async function ContactPage() {
  const { TESTIMONIALS } = await getData();

  return (
    <main className="pt-20 bg-white">
      {/* Page Header */}
      <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
        <Image
          src={bannerBg}
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#14133b]/80"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white">
          <h1 className="text-4xl md:text-[50px] font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-300">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Inquiry Section (Highlights & Form) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Highlights */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#14133b] mb-6 leading-tight">
                  Hire Best Developers for Your Project!
                </h2>
                <p className="text-[#6a7c92] text-lg leading-relaxed">
                  We digitally transform your business while maximising efficiency and improving agility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {CONTACT_HIGHLIGHTS.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      {highlight.icon === "suitcase" && <Briefcase size={24} />}
                      {highlight.icon === "trophy" && <Trophy size={24} />}
                      {highlight.icon === "user" && <User size={24} />}
                      {highlight.icon === "handshake" && <Handshake size={24} />}
                    </div>
                    <div>
                      <h6 className="text-lg font-bold text-[#14133b] mb-1">{highlight.title}</h6>
                      <p className="text-[#6a7c92] text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#14133b] mb-2">Get a FREE Quote!</h3>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>

              <form className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-[#14133b] focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-[#14133b] focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <textarea
                    placeholder="Brief Project Description"
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-[#14133b] focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-[#6a7c92] focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                    <option>Interested Service</option>
                    <option>Web Application Development</option>
                    <option>Mobile Apps Development</option>
                    <option>Hire Dedicated Developers</option>
                  </select>
                  <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-[#6a7c92] focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                    <option>Select Project Budget</option>
                    <option>Below $10K</option>
                    <option>$10K - $25K</option>
                    <option>$25K - $75K</option>
                    <option>$75K+</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="newsletter" className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                  <label htmlFor="newsletter" className="text-sm text-[#6a7c92]">
                    I would like to receive information about Hidden Brains news and events.
                    By submitting this form, you agree to our <Link href="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <ReCaptchaCheckbox />

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 uppercase tracking-wider"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14133b]">Our Global Offices</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GLOBAL_OFFICES.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <MapPin size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#14133b] mb-4">{office.country}</h4>
                <p className="text-[#6a7c92] text-sm leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_CHANNELS.map((channel, index) => (
              <Link
                href={channel.href}
                key={index}
                className="group flex items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:bg-orange-50/10 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#14133b] text-white flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  {channel.icon === "phone" && <Phone size={24} />}
                  {channel.icon === "mail" && <Mail size={24} />}
                  {channel.icon === "teams" && <Image src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/05/Microsoft-Teams.svg" width={24} height={24} alt="Teams" />}
                  {channel.icon === "hangout" && <MessageSquare size={24} />}
                </div>
                <div className="min-w-0">
                  <h6 className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-1">{channel.title}</h6>
                  <p className="text-[#14133b] font-bold truncate group-hover:text-orange-600 transition-colors">
                    {channel.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection testimonials={TESTIMONIALS} />
    </main>
  );
}
