import Image from "next/image";
import Link from "next/link";
import {
    PhoneIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    BuildingOfficeIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    UserIcon as HeroUserIcon,
    UsersIcon as HeroUsersIcon,
    BriefcaseIcon
} from "@heroicons/react/24/outline";

// --- Sub-components (Pure Static) ---

const RowOverlay = () => (
    <div className="mo-vc-row-ovelay pointer-events-none absolute inset-0 z-[1] opacity-50"></div>
);

const ANALYZE_SVG = ({ color }: { color: string }) => (
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

const DESIGN_SVG = ({ color }: { color: string }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 64 64">
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1 1 L63 1 L63 15 L1 15 Z"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1 15 L63 15 L63 63 L1 63 Z"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M42,15L42,63"></path>
        <path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M1,38L42,38"></path>
    </svg>
);

const DEVELOP_SVG = ({ color }: { color: string }) => (
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

const DELIVER_SVG = ({ color }: { color: string }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);

const StepIcon = ({ index, color }: { index: number, color: string }) => {
    switch (index) {
        case 0: return <ANALYZE_SVG color={color} />;
        case 1: return <DESIGN_SVG color={color} />;
        case 2: return <DEVELOP_SVG color={color} />;
        case 3: return <DELIVER_SVG color={color} />;
        default: return null;
    }
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-white border border-gray-100 rounded-lg p-[15px] mt-[15px] mb-[15px]  shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[250px]">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-[41px] h-[41px]">
            {icon}
        </div>
        <h3 className="text-xl md:text-[22px] md:font-[600] font-bold text-gray-900 mb-[10px] mt-[10px] group-hover:text-blue-600 transition-colors">
            {title}
        </h3>
        <p className="text-[#6a7c92] text-sm leading-relaxed md:text-[14px] font-[medium] mb-[10px] ">
            {description}
        </p>
    </div>
);

const WindowIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
);

const MobileIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3M12 18.75h.007v.008H12v-.008z" />
    </svg>
);

const UsersIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-3.833-6.242 4.125 4.125 0 01-4.415-4.415 4.125 4.125 0 00-6.242-3.833 9.337 9.337 0 00-.952 4.121 9.38 9.38 0 00.372 2.625m9.75 8.25l.3-.3m0 0l-3-3m3 3l3-3m-12 6c0 1.5.75 2.5 1.5 2.5s1.5-1 1.5-2.5-1.5-2.5-1.5-2.5-1.5 1-1.5 2.5zm15-4.372a15.223 15.223 0 00-6.13a15.223 15.223 0 00-6.13 0m12.26 0A15.422 15.422 0 0112 11.25c-1.85 0-3.59.33-5.2 0.938m10.4 0a15.422 15.422 0 01-5.2 2.188 15.422 15.422 0 01-5.2-2.188" />
    </svg>
);

const CpuIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
);

const GamepadIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H16.5M7.5 7.5H4.125C3.504 7.5 3 8.004 3 8.625v6.75c0 .621.504 1.125 1.125 1.125H7.5m9-9h-9m9 0v9.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.25V7.5m9 0V5.25c0-.621-.504-1.125-1.125-1.125h-6.75A1.125 1.125 0 007.5 5.25V7.5m3 3.75H9m3 0h1.5m-3 0v1.5m0-3V11.25m6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);

const ShoppingCartIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.235 1.851-2.903 1.851-4.75 0-3.175-2.575-5.75-5.75-5.75H7.5V11.25m0 3V6.75m0 7.5l-1.5 4.5m10.5-4.5V18a3 3 0 11-6 0v-3.75" />
    </svg>
);

const FactoryIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
);

const IconMap: { [key: string]: any } = {
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

const ServiceCard = ({ icon, title, description, link, iconBgColor }: any) => {
    const Icon = IconMap[icon] || WindowIcon;
    return (
        <div className="bg-white pt-[20px] px-[26px] pb-[30px] !min-h-[280px] mt-[15px] mb-[15px] rounded-[4px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left">
            <div className={`w-[71px] h-[71px] rounded-full flex items-center justify-center  transition-transform duration-500 group-hover:scale-110 ${iconBgColor}`}>
                <div className="w-[35px] h-[35px] flex items-center justify-center text-[#f29111]">
                    <Icon />
                </div>
            </div>
            <h3 className="text-xl font-[600] text-[#14133b] mb-[10px] mt-[10px] group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-[10px] flex-grow text-[14px] font-[400] text-[#6a7c92] font-sans">
                {description}
            </p>
        </div>
    );
};

const PortfolioItem = ({ image, title, category, link }: any) => (
    <div className="group relative overflow-hidden  bg-gray-100 aspect-[4/4] min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover transition-all duration-700 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center pb-8 px-4">
            <div className="bg-[#f49b1e] w-full py-4 px-3 text-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <h5 className="text-white text-lg md:text-xl font-bold uppercase mb-1">
                    <Link href={link} target="_blank" rel="nofollow noopener">
                        {title}
                    </Link>
                </h5>
                <p className="text-white/90 text-[10px] font-medium uppercase tracking-widest">
                    {category}
                </p>
            </div>
        </div>
    </div>
);

const HeroSection = ({ slides, siteConfig }: { slides: any[], siteConfig: any }) => {
    // Note: This is now a static version without auto-play slider as per pure SSR requirements
    const slide = slides[0];
    return (
        <section className="relative w-full h-[700px] overflow-hidden">
            <div className="absolute inset-0">
                <Image src={slide.image} alt="Hero Background" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
                <div>
                    <h1 className="md:text-[65px] text-white font-semibold md:text-7xl font-extrabold leading-[1.1] whitespace-pre-line mb-8 drop-shadow-lg ">{slide.title}</h1>
                    <p className="max-w-2xl mx-auto text-2xl text-white md:text-2xl mb-10 text-center leading-relaxed font-medium md:max-w-[713px]">{slide.subtitle}</p>
                    <div className="flex items-center gap-8 justify-center flex-wrap">
                        <Link href={slide.link} className="bg-[#f39223] text-white px-[30px] py-[10px] rounded-md font-medium md:text-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f39223] hover:scale-105 shadow-xl">Let's Explore</Link>
                        <div className="flex items-center gap-4 group">
                            <div className="bg-white w-[40px] h-[40px] p-3 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><PhoneIcon className=" w-[19px] h-[19px] text-[#f39223]" /></div>
                            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-white font-medium text-xl md:text-[15px] hover:text-[#f39223] transition-colors tracking-tight">{siteConfig.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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
            <div className="bg-[#f9f9f9] border border-gray-200 p-4 rounded-lg flex items-center justify-between max-w-[300px]">
                <div className="flex items-center">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded mr-3 bg-white"></div>
                    <span className="text-sm font-medium text-gray-600">I'm not a robot</span>
                </div>
                <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-1"><svg viewBox="0 0 24 24" className="w-full h-full text-blue-500"><path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Z" /></svg></div>
                    <div className="text-[10px] text-gray-400 leading-none">reCAPTCHA</div>
                    <div className="text-[8px] text-gray-400 leading-none">Privacy - Terms</div>
                </div>
            </div>
            <div className="pt-2">
                <button type="submit" className="w-full py-[10px] px-[30px] bg-[#f49b1e] text-white font-medium rounded-sm hover:bg-[#e08b1a] transition-all duration-300 shadow-lg shadow-orange-500/20 uppercase text-[15px] tracking-wider">Send Message</button>
            </div>
        </form>
    </div>
);

// --- Main Component ---

export default function HomeView({ data }: { data: any }) {
    const {
        SITE_CONFIG,
        HOME_CONTENT,
        HERO_SLIDES,
        CLIENT_LOGOS,
        SERVICES,
        PROJECTS,
        TESTIMONIALS,
        AWARDS,
        BLOG_POSTS
    } = data;

    return (
        <main>
            <HeroSection slides={HERO_SLIDES} siteConfig={SITE_CONFIG} />

            <section className="relative z-20 -mt-24 px-6">
                <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 md:px-[15px] py-[25px]">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-10 md:gap-2">
                        {CLIENT_LOGOS.map((logo: any, index: number) => (
                            <div key={index} className="group relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105">
                                <Image src={logo} alt={`Client Logo ${index + 1}`} width={140} height={40} className="h-10 md:h-[82px] md:[162px] w-auto object-contain opacity-70 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-20 lg:py-15 overflow-hidden bg-white">
                <RowOverlay />
                <div className="relative z-10 max-w-screen-xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-[36px] font-bold md:font-[600] text-gray-900 leading-tight mb-[18px]">{HOME_CONTENT.WHO_WE_ARE.title}</h2>
                            <div className="space-y-6 text-gray-500 leading-relaxed text-lg md:text-[16px] text-[#6a7c92] mt-[10px] mb-[20px] mr-[20px]">
                                {HOME_CONTENT.WHO_WE_ARE.description.map((para: string, idx: number) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {HOME_CONTENT.WHY_CHOOSE_US.map((item: any, index: number) => {
                                // Define icons based on the data index or a map
                                const icons = [
                                    <svg key="0" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>,
                                    <svg key="1" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25L12 3.75L3 8.25L12 12.75L21 8.25Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V15.75L12 20.25L21 15.75V8.25" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V20.25" /></svg>,
                                    <svg key="2" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M12 14.25v-9m0 0l-3.375 3.375M12 5.25l3.375 3.375" /></svg>,
                                    <svg key="3" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0h1.5m-1.5 0a6.75 6.75 0 10-13.5 0m13.5 0a6.75 6.75 0 11-13.5 0m13.5 0l3 3m-3-3l3-3m-16.5 3l-3 3m3-3l-3-3" /></svg>
                                ];
                                return (
                                    <FeatureCard
                                        key={index}
                                        icon={icons[index % icons.length]}
                                        title={item.title}
                                        description={item.description}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white overflow-hidden text-[#14133b]">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-[18px] leading-tight">{HOME_CONTENT.SERVICES_SECTION.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service: any, index: number) => <ServiceCard key={index} {...service} />)}
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="py-10 bg-white">
                        <div className="max-w-screen-xl mx-auto px-6 text-center">
                            <div className="text-[#f29111] py-1 px-3 font-[500] uppercase tracking-wider text-sm mb-4 font-family: 'Roboto'">{HOME_CONTENT.PORTFOLIO_SECTION.subtitle}</div>
                            <h2 className="text-m md:text-[36px] font-[600] text-[#14133b] mb-4 max-w-4xl mx-auto leading-tight">{HOME_CONTENT.PORTFOLIO_SECTION.title}</h2>
                            <p className="text-[#6a7c92]  text-base font-[400] max-w-2xl mx-auto leading-relaxed font-['Roboto']">{HOME_CONTENT.PORTFOLIO_SECTION.description} </p>
                        </div>
                    </div>
                    <div className="relative group/slider">
                        <div className="flex overflow-hidden no-scrollbar">
                            <div className="flex gap-8 px-4 animate-infinite-scroll hover:[animation-play-state:paused]">
                                {[...PROJECTS, ...PROJECTS].map((project: any, index: number) => (
                                    <PortfolioItem key={index} {...project} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-[30px]">
                    <Link href="/our-work" className="group flex items-center space-x-3 text-gray-900 font-bold hover:text-blue-600 transition-colors duration-300">
                        <span className="uppercase tracking-widest text-[13px] font-[500] text-[#14133b] ">View Our Work</span>
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="py-[50px] bg-[#f8faff] overflow-hidden text-[#14133b]">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-[#f29111] py-1 px-3 font-[500] uppercase tracking-wider text-sm mb-4 font-family: 'Roboto'">20+ YEARS OF EXPERIENCE</div>
                        <h2 className="text-4xl md:text-[36px] font-[600] text-[#14133b] md:text-[#14133b] mb-[18px] leading-tight">
                            {HOME_CONTENT.HOW_WE_WORK.title}
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-4">
                            <p className=" text-base leading-relaxed font-[400] text-[#6a7c92] ">
                                Hidden Brains UK have 20+ years of experience providing Web and Mobile App Development solutions & services UK.
                                We focus on developing a clear understanding of client's needs and providing strategic, sustainable solutions,
                                and follow a collaborative approach to enhance business performance.

                            </p>


                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {HOME_CONTENT.HOW_WE_WORK.steps.map((step: any, index: number) => {
                            const colors = ["#2196f3", "#9c27b0", "#455a64", "#e91e63"];
                            return (
                                <div key={index} className="flex flex-col  rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-visible group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                                    </div>
                                    <div className="relative p-[40px] flex flex-col items-start text-left ">
                                        <div className="absolute -top-10 left-[75%] -translate-x-1/2 w-[70px] h-[70px] text-[#29b2fe] bg-white rounded-full flex items-center justify-center shadow-lg z-10 border border-gray-50 transform group-hover:scale-110 transition-transform duration-500">
                                            <StepIcon index={index} color={colors[index]} />
                                        </div>
                                        <h3 className="text-[22px] font-[600] text-[#14133b] mb-[11px] pt-[15px]">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#6a7c92] text-[15px] leading-relaxed font-[400]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-[50px] bg-white overflow-hidden ">
                <div className="max-w-screen-xl mx-auto px-6">
                    <h2 className="text-2xl md:text-[36px] font-[600] text-[#14133b] mb-[18px] text-left">Our Clients Speak For Us</h2>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl w-[560px] h-[332px]">
                            <Image src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/Daniel-Vant-1.webp" alt="Daniel Vant Testimonial" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col pt-4">
                            {TESTIMONIALS.map((testimonial: any, index: number) => (
                                <div key={index} className="relative mb-12 last:mb-0">
                                    <p className="text-xl md:text-[22px] text-[#6a7c92] leading-relaxed mb-[10px] font-[400] text-left">“{testimonial.quote}”</p>
                                    <p className="text-xl text-[#14133b] font-[600]">Daniel Vant, UK</p>
                                </div>
                            ))}
                            <div className="">
                                <Link href="https://www.hiddenbrains.co.uk/video-testimonial.html" className="inline-flex items-center py-[10px] px-[30px] bg-[#f29111] !text-[#fff] font-bold rounded-lg shadow-sm hover:bg-[#e08b1a] transition-all duration-300 text-[15px] font-[500 ]">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <div className="text-[#f49b1e] font-bold tracking-widest mb-4 uppercase text-xs">{HOME_CONTENT.AWARDS_SECTION.subtitle}</div>
                    <h2 className="text-3xl md:text-[36px] font-[600] text-[#14133b] mb-[18px] leading-tight max-w-2xl mx-auto">{HOME_CONTENT.AWARDS_SECTION.title}</h2>
                    <p className="text-gray-500 max-w-5xl mx-auto leading-relaxed text-[16px] font-[400] text-[#6a7c92] mb-16 text-center">{HOME_CONTENT.AWARDS_SECTION.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {AWARDS.map((award: any, index: number) => (
                            <div key={index} className="group relative flex flex-col items-center text-center bg-[#f9f9f9] rounded-2xl p-[35px] border border-gray-100">
                                <div className="relative w-full aspect-square mb-6 overflow-hidden flex items-center justify-center">
                                    <img src={award.image} alt={award.title} className="max-h-full max-w-full object-contain" />
                                </div>
                                <div className="flex flex-col flex-grow"><div className="text-sm font-medium  text-[#6a7c92] leading-relaxed">{award.title}: <strong className="font-bold">{award.subtitle}</strong></div></div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link href="https://www.hiddenbrains.co.uk/awards-accolades.html" className="inline-flex items-center px-10 py-3 bg-[#f49b1e] text-white font-bold rounded-lg shadow-sm hover:bg-[#e08b1a] transition-all duration-300">View Our Awards</Link>
                    </div>
                </div>
            </section>

            <section className="py-[50px] bg-[#14133b] relative overflow-hidden text-white">
                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="text-[#f29111] py-1 px-3  font-bold uppercase tracking-widest text-xs  md:text-sm font-[500]">
                            {HOME_CONTENT.INNOVATIVE_THINKERS.subtitle}
                        </div>
                        <h2 className="text-4xl md:text-[36px] font-semibold text-white mb-8 leading-tight max-w-4xl mx-auto mb-[18px]">
                            {HOME_CONTENT.INNOVATIVE_THINKERS.title}
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-white/80 text-lg md:text-base font-normal text-center leading-relaxed whitespace-pre-line ">
                                {HOME_CONTENT.INNOVATIVE_THINKERS.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {HOME_CONTENT.INNOVATIVE_THINKERS.stats.map((stat: any, index: number) => {
                            const Icon = IconMap[stat.icon] || HeroUserIcon;
                            return (
                                <div key={index} className="flex flex-col items-start  group">
                                    <div className="text-[#f29111] mb-[15px] transform group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <div className="flex items-baseline mb-2">
                                        <h3 className="text-5xl md:text-[48px] font-bold  text-white tracking-tighter">
                                            {stat.count}
                                        </h3>
                                        <span className="text-4xl md:text-[48px] font-bold text-[#f29111] ml-[5px]">
                                            {stat.symbol}
                                        </span>
                                    </div>
                                    <h6 className="text-white text-base font-bold uppercase tracking-tight">
                                        {stat.label}
                                    </h6>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50 overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-20">
                    <div className="text-center ">
                        <div className="text-[#f49b1e] font-bold py-1 px-3 uppercase text-xs">{HOME_CONTENT.BLOG_SECTION.subtitle}</div>
                        <h2 className="text-4xl md:text-4xl text-[#14133b] font-semibold mb-5">{HOME_CONTENT.BLOG_SECTION.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                        {BLOG_POSTS.map((post: any, index: number) => (
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

            <section className="py-[50px] bg-gradient-to-b from-[#f7f8fd] to-[#d6daec] overflow-hidden text-[#14133b]">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="opacity-100">
                            <div className="text-[#f29111] font-[500] tracking-widest uppercase text-xs md:text-sm py-1 px-3">{HOME_CONTENT.CONTACT_SECTION.subtitle}</div>
                        <h2 className="text-4xl md:text-[36px] md:[600] text:[#14133b] font-extrabold mb-[18px] leading-tight">{HOME_CONTENT.CONTACT_SECTION.title}</h2>
                            <p className="text-gray-500 text-lg text-[#6a7c92] md:text-base font-[400] leading-relaxed mb-16 max-w-xl">{HOME_CONTENT.CONTACT_SECTION.description}</p>
                            <div className="space-y-12">
                                <div className="flex items-start space-x-6">
                                    <div className="text-[#f49b1e] flex-shrink-0 pt-1">
                                        <svg className="w-[50px] h-[50.67px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h6 className="text-2xl md:[22px] md:[600] text-[#14133b] mt-[10px] mb-[10px] font-bold ">Office Address</h6>
                                        <p className="text-gray-500 text-[14px] font-[400] text-[#6a7c92] leading-relaxed whitespace-pre-line mb-[10px]">{SITE_CONFIG.address}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex items-start space-x-5">
                                        <div className="text-[#f49b1e] flex-shrink-0 pt-1"><svg className="w-[50px] h-[50px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                                        <div><h6 className="text-2xl md:[22px] md:[600] text-[#14133b] mt-[10px] mb-[10px] font-bold ">Email Address</h6><Link href={`mailto:${SITE_CONFIG.email}`} className="text-[#14133b] text-[14px] font-bold hover:text-[#f49b1e] transition-colors duration-300">{SITE_CONFIG.email}</Link></div>
                                    </div>
                                    <div className="flex items-start space-x-5">
                                        <div className="text-[#f49b1e] flex-shrink-0 pt-1"><svg className="w-[50px] h-[50px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                                        <div><h6 className="text-2xl md:[22px] md:[600] text-[#14133b] mt-[10px] mb-[10px]  font-bold ">Call Us</h6><Link href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="text-[#14133b] text-[14px]  font-bold hover:text-[#f49b1e] transition-colors duration-300 ">{SITE_CONFIG.phone}</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
