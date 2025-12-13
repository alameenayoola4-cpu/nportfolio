"use client";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 pt-24 pb-8 px-4 print:py-0">
            <div className="max-w-[800px] mx-auto bg-white print:max-w-none">
                {/* Header */}
                <header className="text-center border-b-2 border-primary pb-6 mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        AYOOLA ADEDEJI
                    </h1>
                    <p className="text-xl text-primary font-medium mb-4">
                        Full Stack Developer
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        <span>📧 alameenayoola4@gmail.com</span>
                        <span>📱 +234 806 478 4246</span>
                        <span>📍 Kwara State, Nigeria</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-primary mt-2">
                        <a href="https://github.com/alameenayoola4-cpu" className="hover:underline">
                            github.com/alameenayoola4-cpu
                        </a>
                        <a href="https://linkedin.com/in/ayoola-adedeji-a0648537b" className="hover:underline">
                            LinkedIn
                        </a>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Passionate Full Stack Developer with 2+ years of experience building scalable web applications
                        using modern technologies. Specialized in the MERN stack and Next.js ecosystem, with a strong
                        focus on creating exceptional user experiences and clean, maintainable code. Successfully
                        delivered 20+ projects ranging from e-commerce platforms to admin dashboards.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                            <span className="font-semibold">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS, Framer Motion
                        </div>
                        <div>
                            <span className="font-semibold">Backend:</span> Node.js, Express.js, MongoDB, PostgreSQL
                        </div>
                        <div>
                            <span className="font-semibold">Tools:</span> Git, GitHub, VS Code, Docker, Vercel
                        </div>
                        <div>
                            <span className="font-semibold">Other:</span> REST APIs, NextAuth, Paystack Integration, 2FA
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
                        Experience
                    </h2>

                    <div className="mb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-900">Freelance Full-Stack Developer</h3>
                            <span className="text-sm text-gray-600">2023 - Present</span>
                        </div>
                        <p className="text-primary text-sm mb-2">Remote</p>
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            <li>Developing end-to-end web applications for clients using Next.js and Node.js</li>
                            <li>Managing entire development lifecycle from database design to frontend implementation</li>
                            <li>Implementing secure authentication systems with 2FA and payment integrations</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-900">Open Source Contributor & Self-Learner</h3>
                            <span className="text-sm text-gray-600">2021 - 2023</span>
                        </div>
                        <p className="text-primary text-sm mb-2">Remote</p>
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            <li>Intensive study of modern web technologies, data structures, and algorithms</li>
                            <li>Built multiple full-stack projects to master the MERN stack and TypeScript</li>
                            <li>Contributed to open source projects and engaged in code reviews</li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
                        Featured Projects
                    </h2>

                    <div className="mb-3">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-900">Samkaf E-Commerce Store</h3>
                            <a href="https://github.com/alameenayoola4-cpu/samkaf-ecommerce-store"
                                className="text-primary text-sm hover:underline">
                                GitHub
                            </a>
                        </div>
                        <p className="text-gray-700 text-sm">
                            Full-stack e-commerce platform for phone accessories with Next.js 14, MongoDB, NextAuth
                            with email OTP 2FA, Paystack payment integration, and real-time purchase notifications.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-900">Samkaf Admin Dashboard</h3>
                            <a href="https://github.com/alameenayoola4-cpu/samkaf-ecommerce-store"
                                className="text-primary text-sm hover:underline">
                                GitHub
                            </a>
                        </div>
                        <p className="text-gray-700 text-sm">
                            Comprehensive admin panel with real-time analytics, inventory management, order processing,
                            flash sales management, coupons system, and product categories.
                        </p>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
                        Education
                    </h2>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-gray-900">Kwara State University</h3>
                            <p className="text-gray-700 text-sm">Undergraduate Degree</p>
                        </div>
                        <span className="text-sm text-gray-600">Expected 2026</span>
                    </div>
                </section>

                {/* Print Button - Hidden on print */}
                <div className="text-center mt-8 print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Download as PDF (Print)
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                        Click the button and select "Save as PDF" in the print dialog
                    </p>
                </div>
            </div>
        </div>
    );
}
