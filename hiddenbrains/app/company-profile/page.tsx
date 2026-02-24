import Image from "next/image";
import Link from "next/link";
import { Eye, Target, Medal, Lightbulb, FileText, Award } from "lucide-react";
import companyProfileImg from "../../images/companyprofile-img.webp";

export const metadata = {
    title: "Company Profile | Hidden Brains",
    description: "Learn more about Hidden Brains, our core values, and our business philosophy.",
};

export default function CompanyProfilePage() {
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
                                DNA of Our Values
                            </h5>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#14133b] mb-[18px]">Our Core Values Describe How We Conduct Business</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left Values */}
                        <div className="space-y-12">
                            {[
                                {
                                    title: "Operational Excellence",
                                    desc: "High-performance technology solutions for operational excellence.",
                                    icon: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/operational-icon.png",
                                },
                                {
                                    title: "Eye for Innovation",
                                    desc: "Embrace new tools to drive innovation and path-breaking solutions.",
                                    icon: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/eye-innovation-icon.png",
                                },
                                {
                                    title: "Industry Differentiation",
                                    desc: "Leverage latest emerging technologies to create differentiated positioning.",
                                    icon: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/industry-diff-icon.png",
                                },
                            ].map((val, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-4">
                                    <div className="order-1 md:order-2 flex-shrink-0">
                                        <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-3">
                                            <Image src={val.icon} alt={val.title} width={40} height={40} className="object-contain" />
                                        </div>
                                    </div>
                                    <div className="order-2 md:order-1">
                                        <h6 className="text-[22px] font-semibold text-[#14133b] mb-[11px]">{val.title}</h6>
                                        <p className="text-[#6a7c92]  font-normal text-base leading-relaxed">{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center DNA Image */}
                        <div className="hidden md:flex justify-center">
                            <Image
                                src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/06/DNA-image.png"
                                alt="DNA"
                                width={157}
                                height={532}
                                className="h-auto"
                            />
                        </div>

                        {/* Right Values */}
                        <div className="space-y-12">
                            {[
                                {
                                    title: "Quality Centric Work",
                                    desc: "Providing clients with services of the highest quality standards.",
                                    icon: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/qualitywork-icon.png",
                                },
                                {
                                    title: "Integrated Workflow",
                                    desc: "Streamlined workflow to respond to clients’ needs today & tomorrow.",
                                    icon: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/integrated-workflow-icon.png",
                                },
                                {
                                    title: "Transparency in Work",
                                    desc: "Complete transparency and accountability throughout development.",
                                    icon: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/transparencywork-icon.png",
                                },
                            ].map((val, idx) => (
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#14133b] mb-[18px]">Our Business Philosophy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px]">
                        {/* Vision */}
                        <div className="group bg-white  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                            <div className="relative h-[250px]">
                                <Image
                                    src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/11/Vision-img.jpg"
                                    alt="Vision"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#0047AB]/20 group-hover:bg-[#0047AB]/40 transition-colors" />
                            </div>
                            <div className="p-[40px] relative">
                                <div className="w-[70px] h-[70px] bg-[#fff] rounded-full  shadow-lg flex items-center justify-center -mt-16 relative z-10 mb-6 group-hover:-translate-y-2 transition-transform right-[-256px]">
                                    <Eye className="text-[#29b2fe] w-[35px] h-[35px]" />
                                </div>
                                <h6 className="text-2xl md:text-[22px] font-semibold text-[#14133b] mb-[11px]">Vision</h6>
                                <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed">
                                    “Our vision is to be a global leader in IT solutions and services with impetus on Innovation, Productivity, and implementation of ethical Business Strategies – with the ultimate aim of giving back to the society.”
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="group bg-white  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                            <div className="relative h-[250px]">
                                <Image
                                    src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/11/Mission-img.jpg"
                                    alt="Mission"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#F29111]/20 group-hover:bg-[#F29111]/40 transition-colors" />
                            </div>
                            <div className="p-[40px] relative">
                                <div className="w-[70px] h-[70px] bg-[#fff] rounded-full  shadow-lg flex items-center justify-center -mt-16 relative z-10 mb-6 group-hover:-translate-y-2 transition-transform right-[-256px]">
                                    <Target className="text-[#f29111] w-[35px] h-[35px]" />
                                </div>
                                <h6 className="text-2xl md:text-[22px] font-semibold text-[#14133b] mb-[11px]">Mission</h6>
                                <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed">
                                    “Our mission is to create innovative products and deliver excellence in services with constant emphasis on engineering, process quality and customer satisfaction – We add value to your business.”
                                </p>
                            </div>
                        </div>

                        {/* Quality Policy */}
                        <div className="group bg-white  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                            <div className="relative h-[250px]">
                                <Image
                                    src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/11/Qualitypolicy-img.jpg"
                                    alt="Quality Policy"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#333]/20 group-hover:bg-[#333]/40 transition-colors" />
                            </div>
                            <div className="p-[40px] relative">
                                <div className="w-[70px] h-[70px] bg-[#fff] rounded-full  shadow-lg flex items-center justify-center -mt-16 relative z-10 mb-6 group-hover:-translate-y-2 transition-transform right-[-256px]">
                                    <Medal className="text-[#14133b] w-[35px] h-[35px]" />
                                </div>
                                <h6 className="text-2xl md:text-[22px] font-semibold text-[#14133b] mb-[11px]">Quality Policy</h6>
                                <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed">
                                    “We DELIVER effective quality solutions and services to our customers – meeting project requirements and achieving continual excellence in all our solutions and services – guided by defined global standards in quality management.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Few Reasons Why We’re Different Section */}
            <section className="py-10 md:py-12 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h5 className="text-[#f29111] text-[13px] font-semibold uppercase mb-3">A Few Reasons Why We’re Different</h5>
                        <h2 className="text-2xl md:text-[36px] font-semibold text-[#14133b] max-w-4xl mx-auto tracking-[-0.3px] leading-[46px]">With 22+ years of experience, Hidden Brains will surpass your expectations.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Latest Technology */}
                        <div className="bg-[#eef8ff] p-10 md:p-12 rounded-lg transition-all duration-300 hover:shadow-xl group">
                            <div className="w-20 h-20 bg-[#14133b] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                                <Lightbulb className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#14133b] mb-5">Latest Technology, Diversified Talent</h3>
                            <p className="text-[#6a7c92] text-base leading-relaxed">
                                We are backed by the latest technologies proficiently utilized by talented and highly experienced resources with expertise in diverse fields.
                            </p>
                        </div>

                        {/* Technical Requirement */}
                        <div className="bg-[#fdf3e8] p-10 md:p-12 rounded-lg transition-all duration-300 hover:shadow-xl group">
                            <div className="w-20 h-20 bg-[#14133b] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                                <FileText className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#14133b] mb-5">Technical Requirement, Our Expertise</h3>
                            <p className="text-[#6a7c92] text-base leading-relaxed">
                                We work on your project in a consultative manner by keeping your requirements and feedback the topmost priority. Client satisfaction is an achievement for us.
                            </p>
                        </div>

                        {/* Meticulous Work */}
                        <div className="bg-[#ededf5] p-10 md:p-12 rounded-lg transition-all duration-300 hover:shadow-xl group">
                            <div className="w-20 h-20 bg-[#14133b] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                                <Award className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#14133b] mb-5">Meticulous Work, Innovative Ideas</h3>
                            <p className="text-[#6a7c92] text-base leading-relaxed">
                                Experienced developers working for our company have an eye for innovation and assure meticulous development work, thus earning us repetitive business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
