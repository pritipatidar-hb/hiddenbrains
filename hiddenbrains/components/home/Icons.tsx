import React from "react";
import {
    BuildingOfficeIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    UserIcon as HeroUserIcon,
    UsersIcon as HeroUsersIcon,
} from "@heroicons/react/24/outline";

export const ANALYZE_SVG = ({ color }: { color: string }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 64 64">
        <g>
            <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M23,1L55,1L55,63L9,63L9,15Z"></path>
            <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M9,15L23,15L23,1"></path>
        </g>
        <g>
            <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M23,35A6,6 0,1,1 35,35A6,6 0,1,1 23,35"></path>
            <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M33,39L41,47"></path>
        </g>
    </svg>
);

export const DESIGN_SVG = ({ color }: { color: string }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 64 64">
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1 1 L63 1 L63 15 L1 15 Z"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1 15 L63 15 L63 63 L1 63 Z"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M42,15L42,63"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1,38L42,38"></path>
    </svg>
);

export const DEVELOP_SVG = ({ color }: { color: string }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 64 64">
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1 7 L63 7 L63 57 L1 57 Z"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1,15L63,15"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M10,11L6,11"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M18,11L14,11"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M26,11L22,11"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M6,25L33,25"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M6,33L33,33"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M6,41L33,41"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M38 25 L57 25 L57 41 L38 41 Z"></path>
    </svg>
);

export const DELIVER_SVG = ({ color }: { color: string }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);

export const WindowIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
);

export const MobileIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3M12 18.75h.007v.008H12v-.008z" />
    </svg>
);

export const UsersIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-3.833-6.242 4.125 4.125 0 01-4.415-4.415 4.125 4.125 0 00-6.242-3.833 9.337 9.337 0 00-.952 4.121 9.38 9.38 0 00.372 2.625m9.75 8.25l.3-.3m0 0l-3-3m3 3l3-3m-12 6c0 1.5.75 2.5 1.5 2.5s1.5-1 1.5-2.5-1.5-2.5-1.5-2.5-1.5 1-1.5 2.5zm15-4.372a15.223 15.223 0 00-6.13a15.223 15.223 0 00-6.13 0m12.26 0A15.422 15.422 0 0112 11.25c-1.85 0-3.59.33-5.2 0.938m10.4 0a15.422 15.422 0 01-5.2 2.188 15.422 15.422 0 01-5.2-2.188" />
    </svg>
);

export const CpuIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
);

export const GamepadIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H16.5M7.5 7.5H4.125C3.504 7.5 3 8.004 3 8.625v6.75c0 .621.504 1.125 1.125 1.125H7.5m9-9h-9m9 0v9.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.25V7.5m9 0V5.25c0-.621-.504-1.125-1.125-1.125h-6.75A1.125 1.125 0 007.5 5.25V7.5m3 3.75H9m3 0h1.5m-3 0v1.5m0-3V11.25m6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);

export const ShoppingCartIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.235 1.851-2.903 1.851-4.75 0-3.175-2.575-5.75-5.75-5.75H7.5V11.25m0 3V6.75m0 7.5l-1.5 4.5m10.5-4.5V18a3 3 0 11-6 0v-3.75" />
    </svg>
);

export const FactoryIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconMap: Record<string, React.ComponentType<any>> = {
    window: WindowIcon,
    mobile: MobileIcon,
    users: UsersIcon,
    cpu: CpuIcon,
    gamepad: GamepadIcon,
    "shopping-cart": ShoppingCartIcon,
    "stat-building": BuildingOfficeIcon,
    "stat-mobile": DevicePhoneMobileIcon,
    "stat-desktop": ComputerDesktopIcon,
    "stat-users": HeroUsersIcon,
    "stat-user": HeroUserIcon,
    "stat-industry": FactoryIcon,
};
