"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const allTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)));

export function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? projectsData
            : projectsData.filter((project) => project.tags.includes(filter));

    return (
        <section id="projects" className="scroll-mt-28 py-24 sm:py-32 bg-secondary/20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                    <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <Button
                        variant={filter === "All" ? "default" : "outline"}
                        onClick={() => setFilter("All")}
                        className="rounded-full"
                    >
                        All
                    </Button>
                    {allTags.slice(0, 5).map((tag) => ( // Showing top 5 tags for filter demo
                        <Button
                            key={tag}
                            variant={filter === tag ? "default" : "outline"}
                            onClick={() => setFilter(tag)}
                            className="rounded-full"
                        >
                            {tag}
                        </Button>
                    ))}
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                                <div className="relative h-48 w-full overflow-hidden bg-muted">
                                    <div className="w-full h-full flex items-center justify-center text-4xl bg-secondary/50 group-hover:scale-105 transition-transform duration-500">
                                        {/* Placeholder for project image */}
                                        💻
                                    </div>
                                    {/* <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="mt-2 line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-2">
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                    <Button asChild size="sm" className="w-full">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
