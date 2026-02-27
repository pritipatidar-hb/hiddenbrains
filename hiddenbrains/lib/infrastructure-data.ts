export interface InfraHighlight {
    text: string;
}

export interface InfraDetail {
    title: string;
    icon?: string;
    image?: string;
    items?: string[];
    content?: string;
}

export const INFRA_INTRO = {
    title: "State-of-the-Art Infrastructure. Latest Workstation. Secure Working Environment",
    content: [
        "Hidden Brains being a much recognized and reputed IT Company, has built a global clientele increasing at an unprecedented rate. The company’s footprints span across 2 major cities of India and offices in the USA and Norway. We have one development centre in the business hub of India, Ahmedabad and another in the IT dominant city, Hyderabad. With Head Office in Ahmedabad that functions separately from the development centre, Hidden Brains boasts state-of-the-art infrastructure with high-tech systems and the latest technologies.",
        "A widespread area of 35500 Sq Ft. secured with CCTV surveillance is house to 500+ human capital working dedicatedly on client projects. Moreover, IBM high-end cluster servers and IBM Storage with dedicated cloud-based demo servers can be trusted for connectivity and uptime.",
        "We ensure a conducive, favourable and professional working environment for members to work efficiently for increased productivity."
    ],
    image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-office-infrastructure.webp"
};

export const INFRA_HIGHLIGHTS: InfraHighlight[] = [
    { text: "Powerful backup system for recovery of lost or misplaced data" },
    { text: "Use of latest software as per the project requirement and market trend" },
    { text: "Round the clock CCTV surveillance for enhanced security and 24/7 power availability" },
    { text: "High-tech and fully scalable network architecture models and systems" },
    { text: "Configuration, management and maintenance of client’s server" },
    { text: "Use of multiple servers to create a secured cluster network environment" },
    { text: "Fully equipped workstations with up-to-date & licensed software packages" },
    { text: "Real-time protection from virus and regular data backup" },
    { text: "Data protection using Sonic Wall Firewall & pre-installed gateway" }
];

export const INFRA_CATEGORIES: InfraDetail[] = [
    {
        title: "Servers",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/05/icon-servers.png",
        items: [
            "IBM High-end cluster servers & IBM Storage",
            "Dedicated cloud based demo servers for application demonstration"
        ]
    },
    {
        title: "Network",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/05/icon-network.png",
        items: [
            "CISCO’s manageable switches L2 and L3 for secured network",
            "CAT6 network cables",
            "VLAN for secured network traffic"
        ]
    },
    {
        title: "Server OS Environment",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/05/icon-server-network.png",
        items: [
            "VMWARE ESXi",
            "CentOS",
            "Ubuntu"
        ]
    },
    {
        title: "Databases",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/05/icon-db.png",
        items: [
            "MySQL",
            "MsSQL",
            "PostgreSQL",
            "NoSQL"
        ]
    }
];

export const IT_INFRA_DETAILS: InfraDetail[] = [
    {
        title: "Hardware for Desktops",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/infrastructure-hardware.webp",
        content: "Highly configured processors\n\nFirewall: Sonic Wall as firewall with tpre-installed Gateway anti-virus"
    },
    {
        title: "Desktops",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/infrastructure-desktop.webp",
        items: [
            "Windows",
            "Ubuntu",
            "Mac OS X",
            "Mac OS X Mavericks"
        ]
    },
    {
        title: "Devices",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/infrastructure-devices.webp",
        items: [
            "iPhone",
            "iPad",
            "All Android Devices",
            "Windows Wi-Fi Based secured network"
        ]
    },
    {
        title: "Communication tools",
        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/infrastructure-communication-tools.webp",
        items: [
            "Skype",
            "Gtalk",
            "MSN Messenger",
            "Yahoo Messenger",
            "Go To Meeting",
            "Team Viewer",
            "Cisco WebX",
            "LogMein",
            "Projector Based Conferencing"
        ]
    }
];
