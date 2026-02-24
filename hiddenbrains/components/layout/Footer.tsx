import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/HB.logo.png";

import { SiteConfig } from "../HomeView";

export const Footer: FC<{ data: { SITE_CONFIG: SiteConfig } }> = ({ data }) => {
  const { SITE_CONFIG } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14133b] text-white pt-16 pb-8 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Top Section: Support & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-10 mb-12">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-white/90">Support</h4>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-300">
              <li><Link href="https://www.hiddenbrains.co.uk/company-profile.html" className="hover:text-[#f49b1e] transition-colors">Company</Link></li>
              <li><Link href="https://www.hiddenbrains.co.uk/management-team.html" className="hover:text-[#f49b1e] transition-colors">Management Team</Link></li>
              <li><Link href="https://www.hiddenbrains.co.uk/video-testimonial.html" className="hover:text-[#f49b1e] transition-colors">Client Testimonial</Link></li>
              <li><Link href="https://www.hiddenbrains.co.uk/portfolio.html" className="hover:text-[#f49b1e] transition-colors">Our Work</Link></li>
            </ul>
          </div>
          <div className="flex space-x-4">
            {[
              { name: 'facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { name: 'twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'linkedin', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z' },
              { name: 'youtube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' }
            ].map((social) => (
              <Link
                key={social.name}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f49b1e] transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <Image
                src={logo}
                alt="Hidden Brains Logo"
                width={180}
                height={40}
                className="brightness-200"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Harnessing the power of innovation in the IT industry and empowering growth, Hidden Brains has emerged as a global mobile and web app development company. Our industry knowledge and forward-looking strategy helps us leverage technology to build intelligent enterprise.
            </p>
          </div>

          {/* Column 2: Main Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide uppercase text-sm">Main Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Mobile Application Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Web Development Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hire Dedicated Developers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Open Source Web Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">eCommerce Website Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Software Development</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Media Coverage</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Awards & Accolades</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide uppercase text-sm">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <strong className="text-white block mb-1">Phone:</strong>
                <Link href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-[#f49b1e] transition-colors">{SITE_CONFIG.phone}</Link>
              </li>
              <li>
                <strong className="text-white block mb-1">Email:</strong>
                <Link href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#f49b1e] transition-colors">{SITE_CONFIG.email}</Link>
              </li>
              <li>
                <strong className="text-white block mb-1">Office Address:</strong>
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Awards & Rating Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-10 border-t border-white/10 gap-8">
          <div className="flex-shrink-0">
            <Link href="/awards-accolades.html">
              <Image
                src="https://www.hiddenbrains.co.uk/wp-content/uploads/2025/09/foot-one-image.jpeg"
                alt="Hidden Brains Awards"
                width={800}
                height={100}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
              />
            </Link>
          </div>

          {/* Rating System */}
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center">
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-[#fdc532] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm font-bold text-white mb-1">Rate us</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Click to rate</div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2003-{currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-white/10 hidden md:inline">|</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Statement</Link>
            <span className="text-white/10 hidden md:inline">|</span>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
