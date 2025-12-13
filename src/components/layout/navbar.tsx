"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection(links.map((link) => link.hash.substring(1)));
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md print:hidden">
            <div className="w-full flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link
                    href="#home"
                    className="text-xl font-bold tracking-tighter"
                >
                    Dev<span className="text-primary">Portfolio</span>.
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6">
                        {links.map((link) => (
                            <li key={link.hash} className="relative">
                                <Link
                                    href={pathname === "/" ? link.hash : `/${link.hash}`}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        activeSection === link.hash.substring(1)
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                    {activeSection === link.hash.substring(1) && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="pl-4 border-l">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        className="p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden border-b bg-background"
                >
                    <ul className="flex flex-col p-4 gap-4">
                        {links.map((link) => (
                            <li key={link.hash}>
                                <Link
                                    href={pathname === "/" ? link.hash : `/${link.hash}`}
                                    className={cn(
                                        "block text-sm font-medium transition-colors hover:text-primary",
                                        activeSection === link.hash.substring(1)
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
}
