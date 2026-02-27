export interface ContactHighlight {
    title: string;
    description: string;
    icon: string;
}

export interface GlobalOffice {
    country: string;
    address: string;
}

export interface ContactChannel {
    title: string;
    value: string;
    href: string;
    icon?: string;
}

export const CONTACT_HIGHLIGHTS: ContactHighlight[] = [
    {
        title: "6000 Projects Delivered",
        description: "Extensive experience in building web & mobile development applications.",
        icon: "suitcase"
    },
    {
        title: "18+ Awards",
        description: "Recognized with Awards & Accolades for highest quality and innovation.",
        icon: "trophy"
    },
    {
        title: "700+ Experts",
        description: "Team of skilled, professional and committed professionals.",
        icon: "user"
    },
    {
        title: "2400+ Clients",
        description: "Served clients across the globe from diverse domains.",
        icon: "handshake"
    }
];

export const GLOBAL_OFFICES: GlobalOffice[] = [
    {
        country: "UK Office",
        address: "Unit P Hunting Gate, East Portway, Andover, Hampshire, SP10 3ER, UK"
    },
    {
        country: "Norway Office",
        address: "Overlege Cappelens Gate. 35 4011 Stavanger, Norway"
    },
    {
        country: "India - Head Office",
        address: "301, Sachet-4, Opp. Balaji Garden Restaurant, Nr.Prernatirth Derasar, Satellite, Ahmedabad-15, Gujarat, INDIA."
    },
    {
        country: "India Development Center",
        address: "2A, 2nd Floor, Inwinex Tower, Door No. 8-2-277 B, Banjara Hills, Road No – 2, Hyderabad- 500 034, Telangana, INDIA."
    }
];

export const CONTACT_CHANNELS: ContactChannel[] = [
    {
        title: "Phone Number",
        value: "+44 (0)20-7993-2188",
        href: "tel:+442079932188",
        icon: "phone"
    },
    {
        title: "Email",
        value: "biz@hiddenbrains.com",
        href: "mailto:biz@hiddenbrains.com",
        icon: "mail"
    },
    {
        title: "Microsoft Teams",
        value: "hiddenbrains",
        href: "https://teams.microsoft.com/l/chat/0/0?users=hiddenbrains",
        icon: "teams"
    },
    {
        title: "Hangout",
        value: "biz@hiddenbrains.com",
        href: "https://chat.google.com/?email=biz@hiddenbrains.com",
        icon: "hangout"
    }
];

export const CONTACT_TESTIMONIAL = {
    quote: "“We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!”",
    author: "Daniel Vant, UK",
    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/06/dnaiel-vant.jpg",
    videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
};
