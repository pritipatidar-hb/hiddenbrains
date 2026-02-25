import Image from "next/image";
import Link from "next/link";
import { Eye, Target, Medal, Lightbulb, FileText, Award } from "lucide-react";
import companyProfileImg from "../../images/companyprofile-img.webp";
import { StatsSection } from "@/components/home/StatsSection";
import { getData } from "@/lib/data";

export const metadata = {
    title: "Company Profile | Hidden Brains",
    description: "Learn more about Hidden Brains, our core values, and our business philosophy.",
};

export default async function CompanyProfilePage() {
    const data = await getData();
    const { COMPANY_PROFILE } = data;

    // Helper to map icon names to Lucide components
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "eye": return <Eye className="text-[#29b2fe] w-[35px] h-[35px]" />;
            case "target": return <Target className="text-[#f29111] w-[35px] h-[35px]" />;
            case "medal": return <Medal className="text-[#14133b] w-[35px] h-[35px]" />;
            case "lightbulb": return <Lightbulb className="text-white w-10 h-10" />;
            case "file-text": return <FileText className="text-white w-10 h-10" />;
            case "award": return <Award className="text-white w-10 h-10" />;
            default: return null;
        }
    };

    return (
        <main className="pt-20">
            {/* About Us Section */}
            <section className="py-16 md:py-[70px] bg-white overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-wrap -mx-4 items-center">
                        {/* Left Column - Image */}
                        <div className="w-full lg:w-[620px] h-[500px]  mb-12 lg:mb-0 pr-[50px]">
                            <div className="relative group">
                                <div className="relative overflow-hidden rounded-lg ">
                                    <Image
                                        src={companyProfileImg}
                                        alt="Company Profile"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-xl">
                                <nav className="flex mb-[18px] text-sm md:text-base md:font-normal text-[#6a7c92]">
                                    <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                                    <span className="mx-2">/</span>
                                    <span className="mb-[18px] text-sm md:text-base md:font-normal text-[#6a7c92]">Company Profile</span>
                                </nav>
                                <h1 className="text-4xl md:text-[48px] font-semibold  text-[#14133b] mb-[27px] relative inline-block">
                                    ABOUT US
                                    <span className="absolute bottom-0 left-0 w-24 h-1 bg-orange-500 -mb-2"></span>
                                </h1>
                                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                    <p className="mb-[10px]">
                                        <strong className="text-[#6a7c92] text-base font-[700] ">
                                            Harnessing the power of innovation in the IT industry and empowering growth with strong skill sets, Hidden Brains has emerged as a global mobile and web app development company.
                                        </strong>{" "}
                                        <span className="text-[#6a7c92] text-base font-normal">Our next-generation solutions and the hands-on latest technology enable us to deliver the best possible outcome. With our cutting-edge solutions, we shape our clients’ future so that they emerge as high performing businesses.</span>
                                    </p>
                                    <p className="text-[#6a7c92] text-base font-normal">
                                        We provide a strategic perspective to solve dynamic business challenges faced by our clients. At Hidden Brains, we cultivate a culture of innovation where members are motivated to think out-of-the-box and develop creative ideas and strategic solutions. With an aim to generate high ROI for our clients, we believe in building long-lasting business relationships. We strike a perfect balance of business and technology to utilize our technical expertise for implementing industry-specific solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DNA of Our Values Section */}
            <section className="py-[50px] bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center ">
                        <div className="inline-flex items-center justify-center bg-pink-100 py-[4px] px-[15px] rounded-full mb-[18px]">
                            <h5 className="text-[#f29111] text-[13px] font-medium uppercase tracking-wider">
                                {COMPANY_PROFILE.CORE_VALUES.subtitle}
                            </h5>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#14133b] mb-[18px]">{COMPANY_PROFILE.CORE_VALUES.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left Values */}
                        <div className="space-y-12">
                            {COMPANY_PROFILE.CORE_VALUES.leftValues.map((val: any, idx: number) => (
                                <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-4">
                                    <div className="order-1 md:order-2 flex-shrink-0">
                                        <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-3">
                                            <Image src={val.icon} alt={val.title} width={40} height={40} className="object-contain" />
                                        </div>
                                    </div>
                                    {/* <div className="order-2 md:order-1">
                                        <h6 className="text-[22px] font-semibold text-[#14133b] mb-[11px]">{val.title}</h6>
                                        <p className="text-[#6a7c92]  font-normal text-base leading-relaxed">{val.desc}</p>
                                    </div> */}
                                    <div className="order-2 md:order-1 text-center">
                                        <h6 className="text-[22px] md:text-[24px] font-semibold 
                 text-[#14133b] 
                 mb-[14px]">
                                            {val.title}
                                        </h6>

                                        <p className="text-[#5f6f86] 
                text-[15px] md:text-[16px] 
                leading-[26px] 
                font-normal 
                max-w-[520px] 
                mx-auto">
                                            {val.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center DNA Image */}
                        <div className="hidden md:flex justify-center">
                            <Image
                                src={COMPANY_PROFILE.CORE_VALUES.dnaImage}
                                alt="DNA"
                                width={157}
                                height={532}
                                className="h-auto"
                            />
                        </div>

                        {/* Right Values */}
                        <div className="space-y-12">
                            {COMPANY_PROFILE.CORE_VALUES.rightValues.map((val: any, idx: number) => (
                                <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-3">
                                            <Image src={val.icon} alt={val.title} width={40} height={40} className="object-contain" />
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="text-lg font-bold text-[#14133b] mb-2">{val.title}</h6>
                                        <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Business Philosophy Section */}
            <section className="py-[40px] bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center ">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#14133b] mb-[18px]">{COMPANY_PROFILE.PHILOSOPHY.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px]">
                        {COMPANY_PROFILE.PHILOSOPHY.items.map((item: any, idx: number) => (
                            <div key={idx} className="group bg-white  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                                <div className="relative h-[250px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 ${item.color === 'blue' ? 'bg-[#0047AB]/20 group-hover:bg-[#0047AB]/40' : item.color === 'orange' ? 'bg-[#F29111]/20 group-hover:bg-[#F29111]/40' : 'bg-[#333]/20 group-hover:bg-[#333]/40'} transition-colors`} />
                                </div>
                                <div className="p-[40px] relative">
                                    <div className="w-[70px] h-[70px] bg-[#fff] rounded-full  shadow-lg flex items-center justify-center -mt-16 relative z-10 mb-6 group-hover:-translate-y-2 transition-transform right-[-256px]">
                                        {getIcon(item.icon)}
                                    </div>
                                    <h6 className="text-2xl md:text-[22px] font-semibold text-[#14133b] mb-[11px]">{item.title}</h6>
                                    <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A Few Reasons Why We’re Different Section */}
            <section className="py-10 md:py-12 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h5 className="text-[#f29111] text-[13px] font-semibold uppercase mb-3">{COMPANY_PROFILE.DIFFERENTIATORS.subtitle}</h5>
                        <h2 className="text-2xl md:text-[36px] font-semibold text-[#14133b] max-w-4xl mx-auto tracking-[-0.3px] leading-[46px]">{COMPANY_PROFILE.DIFFERENTIATORS.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COMPANY_PROFILE.DIFFERENTIATORS.items.map((item: any, idx: number) => (
                            <div key={idx} className={`${item.bgColor} p-10 md:p-12 rounded-lg transition-all duration-300 hover:shadow-xl group`}>
                                <div className="w-20 h-20 bg-[#14133b] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                                    {getIcon(item.icon)}
                                </div>
                                <h3 className="text-2xl font-semibold text-[#14133b] mb-5">{item.title}</h3>
                                <p className="text-[#6a7c92] text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection
                title={COMPANY_PROFILE.STATS.title}
                description={COMPANY_PROFILE.STATS.description}
                stats={COMPANY_PROFILE.STATS.stats}
                isLight={true}
            />
        </main>
    );
}
