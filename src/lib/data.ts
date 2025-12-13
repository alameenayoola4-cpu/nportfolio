
export const links = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Projects", hash: "#projects" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
];

export const skillsData = [
    { name: "HTML5", icon: "html", level: 95, category: "Frontend" },
    { name: "CSS3", icon: "css", level: 90, category: "Frontend" },
    { name: "JavaScript", icon: "js", level: 95, category: "Frontend" },
    { name: "TypeScript", icon: "ts", level: 85, category: "Frontend" },
    { name: "React", icon: "react", level: 90, category: "Frontend" },
    { name: "Next.js", icon: "next", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", icon: "tailwind", level: 95, category: "Frontend" },
    { name: "Framer Motion", icon: "framer", level: 80, category: "Frontend" },
    { name: "Node.js", icon: "node", level: 80, category: "Backend" },
    { name: "Express", icon: "express", level: 80, category: "Backend" },
    { name: "MongoDB", icon: "mongo", level: 75, category: "Backend" },
    { name: "PostgreSQL", icon: "postgres", level: 70, category: "Backend" },
    { name: "Git", icon: "git", level: 90, category: "Tools" },
    { name: "Docker", icon: "docker", level: 60, category: "Tools" },
];

export const experiencesData = [
    {
        title: "Freelance Full-Stack Developer",
        location: "Remote",
        description:
            "Developing end-to-end web applications for clients and personal use. Managing the entire development lifecycle from database design to frontend implementation using Next.js and Node.js.",
        icon: "work",
        date: "2023 - Present",
    },
    {
        title: "Open Source Contributor & Learner",
        location: "Remote",
        description:
            "Intensive study of modern web technologies, data structures, and algorithms. Built multiple full-stack projects to master the MERN stack and TypeScript ecosystem.",
        icon: "work",
        date: "2021 - 2023",
    },
];

export const projectsData = [
    {
        title: "Samkaf E-Commerce Store",
        description:
            "Full-stack e-commerce platform for phone accessories with modern UI, Nigerian payment integration via Paystack, user authentication with email OTP 2FA, and real-time purchase notifications.",
        tags: ["Next.js", "MongoDB", "NextAuth", "Paystack"],
        imageUrl: "/projects/samkaf-store.png",
        link: "https://example.com",
        github: "https://github.com/alameenayoola4-cpu/samkaf-ecommerce-store",
        featured: true,
    },
    {
        title: "Samkaf Admin Dashboard",
        description:
            "Comprehensive admin panel for managing the e-commerce store. Features include real-time analytics, inventory management, order processing, flash sales, coupons, and product categories.",
        tags: ["React", "Next.js", "Tailwind", "MongoDB"],
        imageUrl: "/projects/samkaf-dashboard.png",
        link: "https://example.com",
        github: "https://github.com/alameenayoola4-cpu/samkaf-ecommerce-store",
        featured: true,
    },
    {
        title: "TaskFlow Pro",
        description:
            "A modern task management platform with Kanban boards, Pomodoro timer, team collaboration, project management, and real-time updates. Features authentication, subtasks, comments, and drag-and-drop functionality.",
        tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Drizzle ORM"],
        imageUrl: "/projects/taskflow.png",
        link: "#",
        github: "https://github.com/alameenayoola4-cpu/task-management",
        featured: true,
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/alameenayoola4-cpu",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayoola-adedeji-a0648537b",
        icon: "linkedin",
    },
    {
        name: "Twitter",
        url: "https://x.com/ayooladev1",
        icon: "twitter",
    },
    {
        name: "Email",
        url: "mailto:alameenayoola4@gmail.com",
        icon: "mail",
    },
];
