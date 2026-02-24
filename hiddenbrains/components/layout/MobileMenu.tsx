"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-800"
            >
                ☰
            </button>

            {/* Mobile Menu Content */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-4 space-y-4 md:hidden">
                    <Link href="#" className="block">Company</Link>
                    <Link href="#" className="block">Services</Link>
                    <Link href="#" className="block">Solutions</Link>
                    <Link href="#" className="block">Industries</Link>
                    <Link href="#" className="block">Our Clients</Link>
                    <Link href="#" className="block">Our Work</Link>
                    <Link href="#" className="block">Blog</Link>
                    <Link
                        href="/contact"
                        className="block bg-orange-500 text-white px-4 py-2 rounded text-center"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </>
    );
}
