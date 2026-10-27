export const resume = {
    // ─── Identity ────────────────────────────────────────
    name: 'Serli Gharapetian',
    firstName: 'Serli',
    lastName: 'Gharapetian',
    role: 'Frontend Developer',
    tagline: 'I build fast, delightful interfaces with Vue & Nuxt.',
    location: 'Tehran',
    // availableForWork: true,

    // Badge variants — swap to whichever fits the moment
    // availableForWork: 'Available for work',
    // availableForWork: 'Open to opportunities',
    // availableForWork: 'Available for freelance',
    // Set to `false` to hide the badge entirely
    availableForWork: 'Available for work',

    // ─── Contact ─────────────────────────────────────────
    email: 'serligharapetianwork@gmail.com',
    // phone: '+989123456789', 
    socials: {
        github: 'https://github.com/serlikarapetian',
        linkedin: 'https://linkedin.com/in/serli-gharapetian',
    },
    repoUrl: "https://github.com/serlikarapetian/resume-2026",

    // ─── Assets (in /public) ─────────────────────────────
    avatar: '/avatar.jpg',
    resumePdf: '/resume.pdf',

    // ─── About ───────────────────────────────────────────
    about: [
        `Frontend developer with a strong eye for design and a passion for building interfaces that feel effortless. I specialize in Vue and Nuxt, and I care deeply about the small details — spacing, motion, accessibility, and performance.`,
        `When I'm not shipping features, I'm exploring UI patterns, refining design systems, and learning whatever helps me build better products.`,
    ],

    // ─── Experience ──────────────────────────────────────
    // Order: newest → oldest
    experience: [
        {
            company: 'Mahan Pardaz Borna',
            role: 'Documenter & Front-End Developer',
            period: '2024 — 2025',
            location: 'Hybrid',
            bullets: [
                'Developed and implemented frontend components across multiple software projects, focusing on UI quality and performance.',
                'Designed and built modern, responsive pages with an emphasis on user experience and visual consistency.',
                'Collaborated directly with backend developers to integrate and consume APIs, ensuring accurate data exchange.',
                'Participated in UI/UX design discussions and code reviews to improve interface consistency and code quality.',
                'Used Git for version control and team collaboration, tracking tasks through project management tools.',
                'Contributed to software documentation and coordinated with teammates to support development goals.',
            ],
            tech: ['Vue', 'Nuxt', 'Vuetify', 'Tailwind', 'Pinia', 'Git'],
        },
        {
            company: 'Rojan Language Institute',
            role: 'English Tutor',
            period: '2021 — present',
            location: 'On-site',
            bullets: [
                'Taught students across different age groups, adapting teaching methods to suit individual learning styles.',
                'Strengthened communication, planning, and organizational skills by designing customized educational programs.',
            ],
            tech: [],
        },
    ],

    // ─── Education ───────────────────────────────────────
    education: [
        {
            school: 'Tehran North Branch Azad University',
            degree: ' Bachelor’s in Computer Engineering',
            period: '2021 — 2025',
            location: '', // optional
            notes: '', // optional — GPA, honors, focus
        },
    ],

    // ─── Courses & Certificates ──────────────────────────
    courses: [
        // {
        //     name: 'Course Name Here', 
        //     provider: 'Provider (e.g. Coursera, Udemy)', 
        //     year: '2023',
        //     link: '', // optional
        // },
        // {
        //   name: 'Advanced Vue.js',
        //   provider: 'Vue Mastery',
        //   year: '2022',
        //   link: 'https://...',
        // },
    ],


    // ─── Projects ────────────────────────────────────────
    projects: [
        {
            name: 'BadmintonPro',
            context: "team",
            subtitle: 'Team Project · badmintonpro.ir',
            description:
                'A full-featured platform for a badminton academy. I designed and implemented the landing, login, blog, and About Us pages, plus a session management calendar with weekly and monthly views, and a video upload & analysis system with commenting and coach feedback.',
            role: 'Front-End Developer (Team)',
            tech: ['Nuxt 3', 'Tailwind CSS'],
            link: '',
            live: 'https://badmintonpro.ir',
            featured: true,
            status: 'Live', // 'Live' | 'In development' | 'Archived'
        },

        {
            name: 'Crochet Productivity Web App',
            context: "personal",
            subtitle: 'Nuxt 3 + Vuetify',
            description:
                'A productivity tool for crochet enthusiasts. Features a creation gallery, pattern storage, yarn and supplies inventory management, stitch counters, project tracking, and task lists — all in a clean, responsive interface.',
            role: 'Solo project',
            tech: ['Nuxt 3', 'Vuetify'],
            link: '',
            live: '',
            featured: true,
            status: 'In development',
        },
        {
            name: 'Personal Crochet Website',
            context: "personal",
            subtitle: 'Multilingual + themeable',
            description:
                'A personal site with Persian/English support via i18n, light and dark themes, a dynamic gallery with image filtering and zoom, product categories, and a sidebar navigation with ordering guidance — fully responsive across devices.',
            role: 'Solo project',
            tech: ['Nuxt 3', 'Tailwind CSS', 'i18n'],
            link: '',
            live: '',
            featured: false,
            status: 'Live',
        },
        {
            name: 'Business Management System',
            context: "company",
            subtitle: 'Contribution to development',
            description:
                'A business management system where I implemented real-time product search and inventory management with stock indicators, a multi-method payment system (cash, card, credit, split payments), item- and invoice-level discounts, invoice drafts, a bilingual virtual keyboard, and a hierarchical tree view of accounts and subaccounts for accounting data.',
            role: 'Front-End Developer',
            tech: ['Vue', 'Nuxt', 'Pinia'],
            link: '',
            live: '',
            featured: true,
            status: 'Archived',
        },
        {
            name: 'Software Product Landing Pages',
            context: "company",
            subtitle: 'Responsive marketing sites',
            description:
                'Designed and developed responsive landing pages to showcase software products and present product information clearly to users.',
            role: 'Solo project',
            tech: ['Nuxt 3', 'Tailwind CSS'],
            link: '',
            live: '',
            featured: false,
            status: 'Live',
        },
    ],
    // ─── Skills ──────────────────────────────────────────
    skills: {
        Languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        Frameworks: ['Vue.js', 'Nuxt.js', 'Vuetify'],
        'State & Data': ['Pinia', 'REST APIs', 'API Integration'],
        Styling: ['Tailwind CSS', 'Responsive Design', 'UI/UX Fundamentals'],
        Tools: ['Git', 'GitHub', 'Vite'],
    },
}

export type Resume = typeof resume