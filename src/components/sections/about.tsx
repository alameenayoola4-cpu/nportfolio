"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section
            id="about"
            className="container flex scroll-mt-28 flex-col items-center justify-center gap-10 py-24 sm:py-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                {/* Profile Image (Placeholder) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative mx-auto"
                >
                    <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-background shadow-2xl sm:h-96 sm:w-96">
                        {/* Replace with actual image */}
                        <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                            <span className="text-4xl">👋</span>
                        </div>
                        {/* <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            /> */}
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-4 -z-10 rounded-full border border-primary/20" />
                </motion.div>

                {/* Bio Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-lg text-muted-foreground"
                >
                    <p>
                        Hello! I&apos;m Ayoola, a passionate software engineer with a strong focus on full-stack development.
                        I&apos;ve dedicated my time to mastering the MERN stack and Next.js, building complex applications
                        independently to solve real-world problems.
                    </p>
                    <p>
                        My expertise lies in the React ecosystem, where I love pushing the boundaries of what&apos;s possible
                        on the web. I&apos;m a strong advocate for clean code, accessibility, and user-centric design.
                        When I&apos;m not coding, you can find me hiking, reading sci-fi novels, or experimenting with new coffee brewing methods.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex flex-col p-4 rounded-xl bg-secondary/30 border border-border">
                            <span className="text-3xl font-bold text-foreground">5+</span>
                            <span className="text-sm">Years Experience</span>
                        </div>
                        <div className="flex flex-col p-4 rounded-xl bg-secondary/30 border border-border">
                            <span className="text-3xl font-bold text-foreground">50+</span>
                            <span className="text-sm">Projects Completed</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
