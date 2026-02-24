"use client";

import { useState } from "react";

interface NavDropdownProps {
    label: string;
    children: React.ReactNode;
    trigger?: "hover" | "click";
}

export default function NavDropdown({
    label,
    children,
    trigger = "hover",
}: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handlers =
        trigger === "hover"
            ? {
                onMouseEnter: () => setIsOpen(true),
                onMouseLeave: () => setIsOpen(false),
            }
            : {
                onClick: () => setIsOpen(!isOpen),
            };

    return (
        <div className="relative" {...handlers}>
            <button className="flex items-center text-[#14133b] hover:text-orange-500 py-4 h-full transition-colors text-[15px] font-medium
">
                {label}
                <svg
                    className={`w-3 h-3 ml-1.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {isOpen && <div className="absolute top-full left-0">{children}</div>}
        </div>
    );
}
