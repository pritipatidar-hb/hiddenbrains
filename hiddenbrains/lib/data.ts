import slide1 from "../images/slide1.webp";
import slide2 from "../images/slide2.webp";
import slide3 from "../images/slide3.webp";

export async function getData() {
    return {
        SITE_CONFIG: {
            name: "Hidden Brains UK",
            email: "biz@hiddenbrains.com",
            phone: "+44 207 993 2188",
            address: "Unit P Hunting Gate, East Portway, Andover, Hampshire,\nSP10 3ER, United Kingdom (UK)",
        },
        HOME_CONTENT: {
            SERVICES_SECTION: {
                title: "Web & Mobile Development Services to Build Future-Ready Apps",
            },
            PORTFOLIO_SECTION: {
                subtitle: "Our Work",
                title: "Delivered Web & Mobile Projects Across 30+ Industries",
                description: "Hidden Brains UK’s Web and Mobile App Development portfolio spans diverse industries, companies & geography with adherence to high quality and time.",
            },
            AWARDS_SECTION: {
                // subtitle: "Recognition & Awards",
                title: "Awards & Accolades",
                description: "Technology drives the modern world and at Hidden Brains UK, we envision the future of technology and create new possibilities for the connected world. Hidden Brains leverage latest and emerging technologies to stimulate our urge for creating excellence in designing and developing world class web and mobile app development solutions & services. Over the years, we have won awards and recognized by various industry associations and forums for outstanding contribution in the field of web and mobile application development. We combine technology and our deep industry knowledge to unlock actionable insights.",
            },
            BLOG_SECTION: {
                subtitle: "Latest Insights",
                title: "Get The Latest Insights",
            },
            CONTACT_SECTION: {
                subtitle: "Get in Touch",
                title: "Are you looking to digitally transform your business?",
                description: "We offer technical expertise, global footprints and insights to take your app idea to the next level. Let's discuss.",
            },
            WHO_WE_ARE: {
                title: "Mobile and Web Application Development Company",
                description: [
                    "Hidden Brains is one of the leading web and mobile app development company UK, providing custom solutions. We believe in building long-term partnerships with our clients by exceeding expectations and maintaining a great level of transparency.",
                    "Our team of designers, developers, and QAs create high-quality, scalable web and mobile solutions for clients across diverse industry domains. Whether you need to hire an expert developer with specialized knowledge or a team with diverse skills, Hidden Brains UK has a talent pool of more than 500+ professionals to meet your business requirements."
                ]
            },
            WHY_CHOOSE_US: [
                {
                    icon: "mic", // Replaced microphone with mic for consistency, or I'll just keep the SVGs in HomeView for now as they are complex
                    title: "Futuristic Solutions",
                    description: "Innovative technologies to deliver breakthrough solutions for dynamic businesses."
                },
                {
                    icon: "cube",
                    title: "Technical Expertise",
                    description: "Technology expertise to reimagine the potential of the intelligent enterprise."
                },
                {
                    icon: "academic",
                    title: "Domain Knowledge",
                    description: "Deep domain knowledge to leverage the right technology and address critical challenges."
                },
                {
                    icon: "users",
                    title: "Skilled Resources",
                    description: "Dedicated & skilled resources to develop and deploy technology-ahead solutions."
                }
            ],
            INNOVATIVE_THINKERS: {
                subtitle: "Innovative Thinkers",
                title: "Hidden Brains Infotech Helps You Succeed…",
                description: "Hidden Brains UK is a team of innovative thinkers who aspire to do incredible things. Hidden Brains Top app developers team endeavors to deliver Web and Mobile App Development solutions adhering to quality and excellence.",
                stats: [
                    { count: "22", symbol: "+", label: "Years of experience", icon: "stat-building" },
                    { count: "1000", symbol: "+", label: "Mobile applications", icon: "stat-mobile" },
                    { count: "30", symbol: "+", label: "Web Applications", icon: "stat-desktop" },
                    { count: "125", symbol: "+", label: "Expert Professionals", icon: "stat-users" },
                    { count: "2400", symbol: "+", label: "Client Base", icon: "stat-user" },
                    { count: "42", symbol: "+", label: "Industries Served", icon: "stat-industry" }
                ]
            },
            HOW_WE_WORK: {
                title: "How We Work",
                subtitle: "20+ YEARS OF EXPERIENCE",
                description: "Hidden Brains UK have 20+ years of experience providing Web and Mobile App Development solutions & services UK.\n We focus on developing a clear understanding of client’s needs and providing strategic, sustainable solutions,\n and follow a collaborative approach to enhance business performance.",
                steps: [
                    {
                        title: "Analyze",
                        description: "Industry expertise and research techniques to provide insights and develop clear strategy.",
                        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-Analyasis-02.png",
                        color: "blue"
                    },
                    {
                        title: "Design",
                        description: "Create a beautiful, highly functional and intuitive design with your specific users in mind.",
                        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-Design.png.png",
                        color: "purple"
                    },
                    {
                        title: "Develop",
                        description: "Fast, fluid and error-free development for web and mobile, any platform or technical stack.",
                        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-Development-02.png",
                        color: "dark"
                    },
                    {
                        title: "Deliver",
                        description: "We bring best products to market, ensuring proper support and optimization for final launch.",
                        image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-deliver-02.png",
                        color: "red"
                    }
                ]
            }
        },
        ABOUT_CONTENT: {
            title: "About",
            description: "This is the about page for the corporate IT services website. Use this space to introduce your organization, its history, leadership, and the principles that guide how you work with clients.",
        },
        CONTACT_CONTENT: {
            title: "Contact Us",
            description: "Ready to discuss your next initiative? Share a few details about your organization and we'll connect you with the right experts.",
        },
        SERVICES_CONTENT: {
            title: "Services",
            description: "This is the services page for the corporate IT services website. Outline your core offerings here, such as cloud, infrastructure, security, application development, and managed services.",
        },
        PORTFOLIO_CONTENT: {
            title: "Portfolio",
            description: "This is the portfolio page for the corporate IT services website. Use this section to showcase case studies, client success stories, and representative projects that demonstrate your capabilities.",
        },
        INDUSTRIES_CONTENT: {
            title: "Industries",
            description: "This is the industries page for the corporate IT services website. Describe the key sectors you serve, such as financial services, healthcare, manufacturing, and retail, and highlight typical use cases.",
        },
        SERVICES_MENU: [
            {
                title: "Mobile App Development",
                url: "/mobile-application-development.html",
                children: [
                    {
                        title: "iOS App Development",
                        url: "/ios-apps-development.html",
                        children: [
                            { title: "iPhone App Development", url: "/iphone-apps-development.html" },
                            { title: "iPad App Development", url: "/ipad-apps-development.html" },
                        ],
                    },
                    {
                        title: "Android App Development",
                        url: "/android-app-development.html",
                        children: [
                            { title: "Kotlin App Development", url: "/kotlin-app-development-company.html" },
                        ],
                    },
                    { title: "Swift Development", url: "/swift-app-development.html" },
                    {
                        title: "Cross Platform App Development",
                        url: "/cross-platform-app-development.html",
                        children: [
                            { title: "Xamarin Application Development", url: "/xamarin-app-development.html" },
                            { title: "Ionic App Development", url: "/ionic-app-development.html" },
                            { title: "Flutter App Development", url: "/flutter-app-development-company.html" },
                            { title: "React Native App Development", url: "/react-native-app-development-company.html" },
                        ],
                    },
                ],
            },
            {
                title: "Web Development",
                url: "/web-design-development.html",
                children: [
                    { title: "PHP Web Development", url: "/php-web-development.html" },
                    { title: "ASP.NET Development", url: "/asp-dot-net-web-development.html" },
                    { title: "ASP Net MVC Development", url: "/asp-net-mvc-development-company.html" },
                    { title: "ASP Net Core Development", url: "/asp-net-core-development-company.html" },
                    { title: "Angular Development", url: "/angularjs-development.html" },
                    { title: "Node.JS Development", url: "/node-js-development.html" },
                    { title: "CodeIgniter Development", url: "/codeigniter-development-services.html" },
                    { title: "C Sharp Development", url: "/c-sharp-development-company.html" },
                    { title: "Laravel Development", url: "/laravel-development.html" },
                    { title: "Java Development", url: "/java-development-company.html" },
                ],
            },
            {
                title: "Front End Development",
                url: "/front-end-development-company.html",
                children: [
                    { title: "React JS Development", url: "/react-js-development-company.html" },
                    { title: "Vue JS Development", url: "/vue-js-development-company.html" },
                    { title: "Express JS Development", url: "/express-js-development-company.html" },
                ],
            },
            {
                title: "Open Source Customization",
                url: "/open-source-customization.html",
                children: [
                    { title: "Magento Development", url: "/magento-development.html" },
                    { title: "WordPress Development", url: "/wordpress-development-company-uk.html" },
                    { title: "Shopify Development", url: "/shopify-development.html" },
                ],
            },
            {
                title: "Hire Developers In UK",
                url: "/hire-dedicated-developers.html",
                children: [
                    {
                        title: "Hire Mobile Developers",
                        url: "/hire-mobile-apps-developer.html",
                        children: [
                            { title: "Hire iPhone Apps Developers", url: "/hire-iphone-developer.html" },
                            { title: "Hire iPad Apps Developers", url: "/hire-ipad-developer.html" },
                            { title: "Hire Android App Developers", url: "/hire-android-app-developers.html" },
                            { title: "Hire Kotlin Developers", url: "/hire-kotlin-developers.html" },
                            { title: "Hire Xamarin Developers", url: "/hire-xamarin-developers.html" },
                        ],
                    },
                    {
                        title: "Hire Web Developer",
                        url: "/hire-web-developers.html",
                        children: [
                            { title: "Hire PHP Developers", url: "/hire-php-developer.html" },
                            { title: "Hire ASP.NET Developers", url: "/hire-asp-net-developer.html" },
                            { title: "Hire HTML5 Developers", url: "/hire-html5-developer.html" },
                        ],
                    },
                    { title: "Hire Web Designers UK", url: "/hire-web-designers.html" },
                    {
                        title: "Hire Open Source Developer",
                        url: "/hire-open-source-developers.html",
                        children: [
                            { title: "Hire Magento Developer", url: "/hire-magento-developer.html" },
                            { title: "Hire Shopify Developer", url: "/hire-shopify-developer.html" },
                            { title: "Hire WordPress Developer", url: "/hire-wordpress-developers.html" },
                        ],
                    },
                    { title: "Hire QA Engineers", url: "/hire-qa-engineers.html" },
                ],
            },
            {
                title: "Ecommerce Solutions",
                url: "/ecommerce-solutions.html",
                children: [
                    { title: "Shopping Cart Development Services", url: "/shopping-cart-development.html" },
                    { title: "Payment Gateway Services", url: "/payment-gateway-integration.html" },
                    { title: "B2B eCommerce Solutions", url: "/b2b-ecommerce-solutions.html" },
                    { title: "B2C eCommerce Solutions", url: "/b2c-ecommerce-solutions.html" },
                ],
            },
            {
                title: "Software Development",
                url: "/software-development.html",
                children: [
                    { title: "Enterprise Business Solutions", url: "/enterprise-business-solutions.html" },
                ],
            },
            {
                title: "Emerging Technology Services",
                url: "/emerging-technology-services.html",
                children: [
                    { title: "Internet Of Things", url: "/internet-of-things.html" },
                    { title: "AR App Development", url: "/augmented-reality-development.html" },
                ],
            },
            {
                title: "Business Technology Consulting",
                url: "/it-technology-consultancy.html",
            },
            {
                title: "Quality Testing Services",
                url: "/qa-testing-services.html",
            },
            {
                title: "Application Maintenance",
                url: "/application-maintenance-services.html",
            },
        ],
        SOLUTIONS_MENU: [
            {
                title: "Warehouse Management",
                url: "/warehouse-management-system.html",
            },
            {
                title: "Smart Estate",
                url: "/gated-community.html",
            },
            {
                title: "SOS App Development",
                url: "/sos-solution.html",
            },
            {
                title: "Vehicle Tracking",
                url: "/vehicle-tracking-solutions.html",
            },
            {
                title: "Visitor Management System",
                url: "/visitor-management-system.html",
            },
            {
                title: "Time and Attendance System",
                url: "/time-attendance-tracking-software-development.html",
            },
            {
                title: "CMMS Solution",
                url: "/cmms.html",
            },
            {
                title: "Smart Gas Station Solution",
                url: "/smart-gas-solutions.html",
            },
        ],
        INDUSTRIES_MENU: [
            { title: "Healthcare", url: "/healthcare.html" },
            { title: "Retail", url: "/retail.html" },
            { title: "Logistics", url: "/logistics.html" },
            { title: "Media & Entertainment", url: "/media-and-entertainment.html" },
            { title: "Real Estate", url: "/real-estate.html" },
            { title: "eCommerce", url: "/ecommerce.html" },
            { title: "Online Booking", url: "/online-booking.html" },
            { title: "Social Networking", url: "/social-networking.html" },
            { title: "Manufacturing", url: "/manufacturing.html" },
            { title: "Education / eLearning", url: "/elearning.html" },
            { title: "Energy", url: "/energy.html" },
            { title: "Fintech", url: "/fintech.html" },
            { title: "Banking & Finance", url: "/banking-finance.html" },
            { title: "Insurance", url: "/insurance.html" },
            { title: "Travel & Hospitality", url: "/travel-hospitality.html" },
        ],
        HERO_SLIDES: [
            {
                title: "Hire Expert Developers\nFor Your Project",
                subtitle: "Multi-disciplinary resources to work on hourly, part-time or full-time basis. Rapid team scaling to match your IT and business needs.",
                image: slide1,
                link: "/hire-dedicated-developers",
            },
            {
                title: "We Help Companies Grow\nIn Digital World",
                subtitle: "We build business-critical websites and web applications that are fluid, easy-to-navigate and exciting to use.",
                image: slide2,
                link: "/web-design-development",
            },
            {
                title: "Award-Winning Mobile App\nDevelopment Company",
                subtitle: "We’ve done everything from enterprise apps to innovative consumer-focused apps and multiplayer.",
                image: slide3,
                link: "/mobile-application-development",
            },
        ],
        SERVICES: [
            {
                id: "01",
                title: "Web Application Development",
                description: "Hidden Brains UK offers Website Development Services UK for diverse industry verticals to simplify complex business workflows.",
                icon: "window",
                link: "/web-design-development",
                iconBgColor: "bg-orange-50",
            },
            {
                id: "02",
                title: "Mobile Apps Development",
                description: "A leading mobile application development company hidden brains UK offers a wide range of mobile app services.",
                icon: "mobile",
                link: "/mobile-application-development",
                iconBgColor: "bg-pink-50",
            },
            {
                id: "03",
                title: "Hire Dedicated Developers",
                description: "Hidden Brains is one of the most trusted names in the tech industry to hire dedicated developers.",
                icon: "users",
                link: "/hire-dedicated-developers",
                iconBgColor: "bg-purple-50",
            },
            {
                id: "04",
                title: "Emerging Technologies Services",
                description: "Leverage the power of wearables, big data, IoT, iBeacon, AWS & Augmented Reality to gain first-mover advantage.",
                icon: "cpu",
                link: "/emerging-technology-services",
                iconBgColor: "bg-yellow-50",
            },
            {
                id: "05",
                title: "Game Development Services",
                description: "Highly interactive games with stunning animations for all platforms including Android, iOS, iPad & Windows.",
                icon: "gamepad",
                link: "/game-development",
                iconBgColor: "bg-red-50",
            },
            {
                id: "06",
                title: "Open Source Customization",
                description: "Custom CMS, Open Source & E-Commerce solutions delivering high-performance and scalable digital platforms.",
                icon: "shopping-cart",
                link: "/open-source-customization",
                iconBgColor: "bg-blue-50",
            },
        ],
        PROJECTS: [
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/08/catwalk-v2.webp",
                title: "Catwalk88",
                category: "ecommerce",
                link: "https://www.hiddenbrains.com/womens-clothing-website-development.html"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/08/dublin_convention.webp",
                title: "Dublin Convention Bureau",
                category: "travel-tourism",
                link: "https://www.hiddenbrains.com/dublin-convention-bureau.html"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/08/evilescape.webp",
                title: "Evil Escape Game",
                category: "game",
                link: "https://www.hiddenbrains.com/evil-escape-game-app.html"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/08/foodexpress.webp",
                title: "Food Express",
                category: "restaurant",
                link: "https://www.hiddenbrains.com/food-express.html"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/08/guesstheprice.webp",
                title: "Guess The Price",
                category: "entertainment",
                link: "https://www.hiddenbrains.com/guess-the-price-gaming-app.html"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2016/08/cayguide-v2.webp",
                title: "Cay Guide",
                category: "travel-tourism",
                link: "https://www.hiddenbrains.com/cayguide.html"
            },
        ],
        TESTIMONIALS: [
            {
                quote: "“We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!”",
                author: " Daniel Vant, UK",
            }
        ],
        AWARDS: [
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2019/12/tv9_gujarati_ace_achievers_award-1.png",
                title: "TV9 Gujarati ACE Achievers Award 2019",
                subtitle: "‘Ace Achievers : Making a Difference’"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/desktop/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/excellence-award-17.png.orig",
                title: "ICTIS Global Industry & Academic Excellence Award 2017",
                subtitle: "‘IoT Innovation’"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/excellence-award-17-1.png",
                title: "ICTIS Global Industry & Academic Excellence Award 2017",
                subtitle: "‘Corporate Excellence’"
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2017/07/award1.png",
                title: "ICT4SD's ICT Awards The EXCELLENCIA",
                subtitle: "Best ICT Company of the Year, 2016"
            }
        ],
        BLOG_POSTS: [
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/08/Offshore-Software-Development.webp",
                title: "Why Offshore Software Development Is the Future of Software Delivery for UK Businesses",
                excerpt: "Discover how UK businesses can cut costs, boost speed, and scale smartly with offshore software development. Your global tech advantage starts here.",
                link: "https://www.hiddenbrains.co.uk/blog/why-offshore-software-development-is-the-future-of-software-delivery-for-uk-businesses.html",
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2025/06/How-to-hire-react-native-developers-in-the-uk.webp",
                title: "How to Hire React Native Developers in the UK",
                excerpt: "Good news for UK business owners thinking about creating a mobile app: you don’t need to do it twice. With React Native, you can make both iOS and Android apps with one codebase.",
                link: "https://www.hiddenbrains.co.uk/blog/how-to-hire-react-native-developers.html",
            },
            {
                image: "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2023/10/Tricks-Tips-To-Hire-Full-Stack-Developers_-What-You-Need-To-Focus__Thumbnail.png",
                title: "Tricks & Tips To Hire Full-Stack Developers: What You Need To Focus?",
                excerpt: "Planning to hire full-stack developers to fill the tech and cost gaps? Here you can discover tips to hire full-stack developers with the right skills and expertise.",
                link: "https://www.hiddenbrains.co.uk/blog/tips-to-hire-full-stack-developer.html",
            },
        ],
        CLIENT_LOGOS: [
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-omv-old.webp",
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-02.webp",
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-03-1.webp",
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-04.webp",
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-05.webp",
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-06.webp",
            "https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-07.webp",

        ],
    };
}
