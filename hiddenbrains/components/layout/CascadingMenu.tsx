"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuItem {
    title: string;
    url: string;
    children?: MenuItem[];
}

interface CascadingMenuProps {
    items: MenuItem[];
    level?: number;
}

export default function CascadingMenu({ items, level = 0 }: CascadingMenuProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative">
            <div className="w-72 bg-white shadow-2xl border-t-2 border-orange-500 py-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <Link
                            href={item.url}
                            className={`flex justify-between items-center px-6 py-3 text-[14px] font-medium
              hover:text-orange-500 transition-colors
              ${activeIndex === index ? "text-orange-500" : "text-gray-700"}`}
                        >
                            {item.title}
                            {item.children && <span className="text-[10px]">▶</span>}
                        </Link>

                        {item.children && activeIndex === index && (
                            <div className="absolute top-0 left-full ml-2">
                                <CascadingMenu items={item.children} level={level + 1} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
