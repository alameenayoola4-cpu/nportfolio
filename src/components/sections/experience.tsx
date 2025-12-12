"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiencesData } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="scroll-mt-28 py-24 sm:py-32">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Experience</h2>
                    <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative mx-auto max-w-2xl">
                    {/* Timeline Line */}
                    <div className="absolute left-9 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-ml-0.5" />

                    {experiencesData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-12 flex flex-col gap-4 lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Icon */}
                            <div className="absolute left-0 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-background shadow-lg lg:left-1/2 lg:-ml-9">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            {/* Content */}
                            <div className="ml-24 lg:ml-0 lg:w-1/2 lg:px-12">
                                <div className="rounded-lg border bg-card p-6 shadow-sm">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="font-medium text-primary">{item.location}</p>
                                    <p className="mb-4 text-sm text-muted-foreground">{item.date}</p>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
