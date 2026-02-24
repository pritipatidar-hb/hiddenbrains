"use client";

import { ChevronDown } from "lucide-react";
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
                <ChevronDown size={12} color="#97a4b3" />
            </button>

            {isOpen && <div className="absolute top-full left-0">{children}</div>}
        </div>
    );
}
