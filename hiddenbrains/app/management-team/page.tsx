import React from 'react';
import banner from "../../images/management-team-Banner-2.jpg";
import { getManagementTeamData } from '@/lib/management-team-data';
import { getData } from '@/lib/data';
import Contact from '@/components/layout/Contact';

const ManagementTeamPage = async () => {
    const [teamData, globalData] = await Promise.all([
        getManagementTeamData(),
        getData()
    ]);

    return (
        <div className="main-content loaded pt-16 bg-white text-slate-900">
            {/* Hero Section */}
            <div className="page-header pagetitle-v2 lazyloaded">
                <div
                    className="hero parallax wrapper mo-title-bar-wrap lazyloaded py-24 text-white bg-cover bg-center bg-no-repeat relative overflow-hidden"
                    style={{ backgroundImage: `url(${banner.src})` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="cd-intro mo-title-bar">
                            <h1 className="text-[48px] leading-[54px] tracking-[0px] font-bold text-white mb-2 ml-[100px]">{teamData.HERO.title}</h1>
                            <div className="mo-path text-[14px] font-medium text-white flex items-center">
                                <div className="mo-path-inner flex items-center ml-[100px]">
                                    {teamData.HERO.breadcrumbs.map((crumb, index) => (
                                        <React.Fragment key={crumb.label}>
                                            {index > 0 && <span className="mx-2 text-white">/</span>}
                                            {crumb.current ? (
                                                <span className="current font-medium text-white opacity-90">{crumb.label}</span>
                                            ) : (
                                                <a href={crumb.href} className="font-bold hover:text-orange-500 transition-colors">{crumb.label}</a>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Path Finders Section */}
            <div className="vc_row wpb_row vc_row-fluid bg-white py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mo-title-box title-box-style2 text-center mb-12">
                        <h5 className="text-[#bdbbb0] text-[12px] font-medium uppercase tracking-[4px] mb-4">{teamData.PATH_FINDERS.subtitle}</h5>
                        <h2 className="text-[36px] md:text-[40px] font-bold text-[#14133b] mb-6 leading-tight">{teamData.PATH_FINDERS.title}</h2>
                        <div className="content max-w-2xl mx-auto text-[#6a7c92] text-[15px] leading-relaxed">
                            {teamData.PATH_FINDERS.description}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {teamData.PATH_FINDERS.members.map((member, idx) => (
                            <div key={idx} className="mo-team tpl3 text-center">
                                <figure className="team-member group cursor-pointer">
                                    <div className="team-img mb-6 bg-[#f2f6f7] overflow-hidden">
                                        <img
                                            alt={member.name}
                                            src={member.image}
                                            className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="team-title px-1">
                                        <h5 className="text-[19px] font-bold text-[#777777] leading-tight mb-2 transition-colors group-hover:text-[#14133b]">{member.name}</h5>
                                        <h6 className="text-[13px] text-[#918f83] font-medium leading-[18px] mb-3">{member.role}</h6>
                                        <div className="w-0 group-hover:w-full h-[1.5px] bg-[#bdbbb0] mx-auto transition-all duration-300"></div>
                                    </div>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Founder Sections */}
            <div className="container mx-auto px-4 py-20 max-w-7xl">
                {teamData.FOUNDER_DETAILS.map((founder, idx) => (
                    <div key={idx} className={`flex flex-wrap lg:flex-nowrap gap-16 mb-24 items-start ${idx % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-full lg:w-[40%]">
                            <div className="relative bg-[#f2f6f7] p-0 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-auto block"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%] pt-4">
                            <h5 className="text-[#f29111] text-[13px] font-bold uppercase tracking-[1px] mb-3">{founder.role}</h5>
                            <h2 className="text-[42px] font-bold text-[#14133b] mb-8 leading-tight">{founder.name}</h2>
                            <div className="space-y-6 text-[#6a7c92] text-[16px] leading-[28px]">
                                {founder.bio.map((para, pIdx) => (
                                    <p key={pIdx}>{para}</p>
                                ))}
                            </div>
                            <div className="mt-12 pt-12 border-t border-gray-100"></div>
                        </div>
                    </div>
                ))}
            </div>
            <Contact data={globalData} />
        </div>
    );
};

export default ManagementTeamPage;
