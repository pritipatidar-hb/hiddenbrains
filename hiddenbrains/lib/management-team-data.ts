export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface FounderDetail {
    name: string;
    role: string;
    image: string;
    bio: string[];
}

export async function getManagementTeamData() {
    return {
        HERO: {
            title: "Management Team",
            breadcrumbs: [
                { label: "Home", href: "/" },
                { label: "Management Team", href: "/management-team", current: true }
            ]
        },
        PATH_FINDERS: {
            subtitle: "Path Finders",
            title: "Meet The Visionary Minds Behind Hidden Brains",
            description: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
            members: [
                {
                    name: "Vikash Chhawchharia",
                    role: "Founder & Chairman",
                    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/09/Vikash-Sir.webp"
                },
                {
                    name: "Vishal Chhawchharia",
                    role: "Founder & Managing Director",
                    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/09/Vishal-Sir.webp"
                },
                {
                    name: "Ram Chhawchharia",
                    role: "Founder & Director",
                    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/09/Ram-Sir.webp"
                },
                {
                    name: "JugalKishore Chhawchharia",
                    role: "Founder & Executive Director",
                    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/09/Jugal-Sir.webp"
                },
                {
                    name: "Vikas Mishra",
                    role: "Executive Director",
                    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/09/Vicky-Sir.webp"
                }
            ]
        },
        FOUNDER_DETAILS: [
            {
                name: "Vikash Chhawchharia",
                role: "Founder, Chairman & CFO",
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/09/Vikash-Sir.webp",
                bio: [
                    "Vikash Chhawchaaria is the guiding force behind Hidden Brains, bringing over 30 years of financial leadership and business acumen. As Chairman, CFO, and Founder, he has successfully steered the company’s operations across diverse verticals with resilience, foresight, and a strong focus on sustainable growth.",
                    "Guided by his belief, “We may not have it all together, but together we have it all,” Vikash exemplifies collaborative leadership. His expertise spans business modeling, financial forecasting, competitive analysis, and building robust financial frameworks that drive long-term value.",
                    "He also believes that sincerity and integrity are the foundation of true service, and actively supports humanitarian causes and NGO fundraising initiatives. Beyond work, he values time with family and friends, whom he considers the true backbone of success."
                ]
            }
        ],
        CONTACT_SECTION: {
            subtitle: "Get in touch",
            title: "Are you looking to digitally transform your business?",
            description: "We offer technical expertise, global footprints and insights to take your app idea to the next level. Let’s discuss.",
            address: "Unit P Hunting Gate, East Portway, Andover, Hampshire, SP10 3ER, United Kingdom (UK)",
            email: "biz@hiddenbrains.com"
        }
    };
}
