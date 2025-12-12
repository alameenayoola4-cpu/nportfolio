"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export function Skills() {
    return (
        <section
            id="skills"
            className="container flex scroll-mt-28 flex-col items-center justify-center py-24 sm:py-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Skills & Technologies
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>

            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        className="rounded-xl border border-black/5 bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80 transition-colors hover:border-primary/50 hover:bg-secondary/50"
                    >
                        {skill.name}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
