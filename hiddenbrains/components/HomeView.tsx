import React from "react";
import { StaticImageData } from "next/image";
import { HeroSection } from "./home/Hero";
import { ClientLogos } from "./home/ClientLogos";
import { AboutSection } from "./home/AboutSection";
import { ServicesSection } from "./home/ServicesSection";
import { PortfolioSection } from "./home/PortfolioSection";
import { ProcessSection } from "./home/ProcessSection";
import { TestimonialsSection } from "./home/TestimonialsSection";
import { AwardsSection } from "./home/AwardsSection";
import { StatsSection } from "./home/StatsSection";
import { BlogSection } from "./home/BlogSection";

// --- Main Component ---

export interface HeroSlide {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
    link: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    iconBgColor: string;
    link: string;
}

export interface Project {
    image: string | StaticImageData;
    title: string;
    category: string;
    link: string;
}

export interface Testimonial {
    quote: string;
    author: string;
}

export interface Award {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
}

export interface BlogPost {
    image: string | StaticImageData;
    title: string;
    link: string;
    excerpt: string;
}

export interface SiteConfig {
    name: string;
    phone: string;
    address: string;
    email: string;
}

export interface HomeContent {
    SERVICES_SECTION: {
        title: string;
    };
    PORTFOLIO_SECTION: {
        subtitle: string;
        title: string;
        description: string;
    };
    AWARDS_SECTION: {
        title: string;
        description: string;
        subtitle?: string;
    };
    BLOG_SECTION: {
        subtitle: string;
        title: string;
    };
    CONTACT_SECTION: {
        subtitle: string;
        title: string;
        description: string;
    };
    WHO_WE_ARE: {
        title: string;
        description: string[];
    };
    WHY_CHOOSE_US: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    INNOVATIVE_THINKERS: {
        subtitle: string;
        title: string;
        description: string;
        stats: Array<{
            count: string;
            symbol: string;
            label: string;
            icon: string;
        }>;
    };
    HOW_WE_WORK: {
        title: string;
        subtitle: string;
        description: string;
        steps: Array<{
            title: string;
            description: string;
            image: string;
            color: string;
        }>;
    };
}

export default function HomeView({ data }: {
    data: {
        SITE_CONFIG: SiteConfig;
        HOME_CONTENT: HomeContent;
        HERO_SLIDES: HeroSlide[];
        CLIENT_LOGOS: string[];
        SERVICES: Service[];
        PROJECTS: Project[];
        TESTIMONIALS: Testimonial[];
        AWARDS: Award[];
        BLOG_POSTS: BlogPost[];
    };
}) {
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

            <ClientLogos logos={CLIENT_LOGOS} />

            <AboutSection
                whoWeAre={HOME_CONTENT.WHO_WE_ARE}
                whyChooseUs={HOME_CONTENT.WHY_CHOOSE_US}
            />

            <ServicesSection
                title={HOME_CONTENT.SERVICES_SECTION.title}
                services={SERVICES}
            />

            <PortfolioSection
                subtitle={HOME_CONTENT.PORTFOLIO_SECTION.subtitle}
                title={HOME_CONTENT.PORTFOLIO_SECTION.title}
                description={HOME_CONTENT.PORTFOLIO_SECTION.description}
                projects={PROJECTS}
            />

            <ProcessSection
                title={HOME_CONTENT.HOW_WE_WORK.title}
                subtitle="20+ YEARS OF EXPERIENCE"
                description={HOME_CONTENT.HOW_WE_WORK.description}
                steps={HOME_CONTENT.HOW_WE_WORK.steps}
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            <AwardsSection
                subtitle={HOME_CONTENT.AWARDS_SECTION.subtitle}
                title={HOME_CONTENT.AWARDS_SECTION.title}
                description={HOME_CONTENT.AWARDS_SECTION.description}
                awards={AWARDS}
            />

            <StatsSection
                subtitle={HOME_CONTENT.INNOVATIVE_THINKERS.subtitle}
                title={HOME_CONTENT.INNOVATIVE_THINKERS.title}
                description={HOME_CONTENT.INNOVATIVE_THINKERS.description}
                stats={HOME_CONTENT.INNOVATIVE_THINKERS.stats}
            />

            <BlogSection
                subtitle={HOME_CONTENT.BLOG_SECTION.subtitle}
                title={HOME_CONTENT.BLOG_SECTION.title}
                posts={BLOG_POSTS}
            />
        </main>
    );
}
