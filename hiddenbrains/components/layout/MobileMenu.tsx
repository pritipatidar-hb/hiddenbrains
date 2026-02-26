"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, X, Menu } from "lucide-react";

interface MenuItem {
    title: string;
    url: string;
    children?: MenuItem[];
}

interface MobileMenuProps {
    data: {
        SERVICES_MENU: MenuItem[];
        SOLUTIONS_MENU: MenuItem[];
        INDUSTRIES_MENU: MenuItem[];
    };
}

export default function MobileMenu({ data }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const NavItem = ({ item, level = 0 }: { item: MenuItem; level?: number }) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedSections[item.title];

        return (
            <div className="w-full">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <Link
                        href={item.url}
                        className={`text-sm font-medium !text-[#14133b] hover:text-orange-500`}
                        onClick={() => !hasChildren && setIsOpen(false)}
                    >
                        {item.title}
                    </Link>
                    {hasChildren && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSection(item.title);
                            }}
                            className="p-2 text-gray-400"
                        >
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                    )}
                </div>
                {hasChildren && isExpanded && (
                    <div className="pl-4 bg-gray-50/50">
                        {item.children?.map((child, idx) => (
                            <NavItem key={idx} item={child} level={level + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="lg:hidden flex items-center pr-4">
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(true)}
                className="text-gray-800 p-2"
                aria-label="Open Menu"
            >
                <Menu size={28} />
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-right duration-300">
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-xl font-bold text-orange-500">Menu</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-800"
                                aria-label="Close Menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-grow p-4 space-y-1">
                            {/* Simple Links */}
                            <div className="py-2">
                                <button
                                    onClick={() => toggleSection('company')}
                                    className="flex items-center justify-between w-full py-3 border-b border-gray-100 !text-[#14133b] font-medium"
                                >
                                    <span>Company</span>
                                    {expandedSections['company'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {expandedSections['company'] && (
                                    <div className="pl-4 bg-gray-50/50">
                                        {[
                                            { name: "Company Profile", href: "/company-profile" },
                                            { name: "Management Team", href: "#" },
                                            { name: "Media Coverage", href: "#" },
                                            { name: "Awards & Accolades", href: "#" },
                                            { name: "Our Working Infrastructure", href: "#" },
                                            { name: "Contact Us", href: "/contact" },
                                        ].map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block py-3 border-b border-gray-100 text-sm !text-[#14133b]"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Services Section */}
                            <div className="py-2">
                                <button
                                    onClick={() => toggleSection('services')}
                                    className="flex items-center justify-between w-full py-3 border-b border-gray-100 !text-[#14133b] font-medium"
                                >
                                    <span>Services</span>
                                    {expandedSections['services'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {expandedSections['services'] && (
                                    <div className="pl-4 bg-gray-50/50">
                                        {data.SERVICES_MENU.map((item, idx) => (
                                            <NavItem key={idx} item={item} />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Solutions Section */}
                            <div className="py-2">
                                <button
                                    onClick={() => toggleSection('solutions')}
                                    className="flex items-center justify-between w-full py-3 border-b border-gray-100 !text-[#14133b] font-medium"
                                >
                                    <span>Solutions</span>
                                    {expandedSections['solutions'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {expandedSections['solutions'] && (
                                    <div className="pl-4 bg-gray-50/50">
                                        {data.SOLUTIONS_MENU.map((item, idx) => (
                                            <NavItem key={idx} item={item} />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Industries Section */}
                            <div className="py-2">
                                <button
                                    onClick={() => toggleSection('industries')}
                                    className="flex items-center justify-between w-full py-3 border-b border-gray-100 !text-[#14133b] font-medium"
                                >
                                    <span>Industries</span>
                                    {expandedSections['industries'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {expandedSections['industries'] && (
                                    <div className="pl-4 bg-gray-50/50">
                                        {data.INDUSTRIES_MENU.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.url}
                                                className="block py-3 border-b border-gray-100 text-sm !text-[#14133b]"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Additional Links */}
                            <Link href="#" className="block py-3 border-b border-gray-100 !text-[#14133b] font-medium" onClick={() => setIsOpen(false)}>Our Clients</Link>
                            <Link href="#" className="block py-3 border-b border-gray-100 !text-[#14133b] font-medium" onClick={() => setIsOpen(false)}>Our Work</Link>
                            <Link href="#" className="block py-3 border-b border-gray-100 !text-[#14133b] font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
                        </div>

                        {/* Footer Action */}
                        <div className="p-4 bg-gray-50">
                            <Link
                                href="/contact"
                                className="block w-full bg-orange-500 text-white py-4 rounded-lg text-center font-bold uppercase tracking-wider"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
