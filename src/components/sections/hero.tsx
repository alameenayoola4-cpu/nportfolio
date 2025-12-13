"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden flex min-h-[100vh] flex-col items-center justify-center p-4 text-center sm:p-24"
        >
            <div className="relative z-10 flex w-full flex-col items-center gap-6">
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-primary/20 bg-secondary/50 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm"
                >
                    Available for new opportunities
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl"
                >
                    Building digital
                    <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        experiences that matter.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    I&apos;m Ayoola Adedeji, a specific Full-Stack Developer specializing in building exceptional digital
                    experiences. Currently open to new opportunities and collaborations.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Button asChild size="lg" className="h-12 px-8 text-base">
                        <Link href="#projects">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                        <Link href="/resume" target="_blank">
                            Download CV <Download className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex gap-6 text-muted-foreground"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                            aria-label={link.name}
                        >
                            {link.icon === "github" && <Github className="h-6 w-6" />}
                            {link.icon === "linkedin" && <Linkedin className="h-6 w-6" />}
                            {link.icon === "twitter" && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            )}
                            {link.icon === "mail" && <Mail className="h-6 w-6" />}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
            <div className="animate-blob absolute top-20 left-20 -z-10 h-72 w-72 rounded-full bg-purple-300 opacity-20 blur-3xl filter dark:bg-purple-900" />
            <div className="animate-blob animation-delay-2000 absolute top-20 right-20 -z-10 h-72 w-72 rounded-full bg-blue-300 opacity-20 blur-3xl filter dark:bg-blue-900" />
            <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 -z-10 h-72 w-72 rounded-full bg-pink-300 opacity-20 blur-3xl filter dark:bg-pink-900" />
        </section>
    );
}
