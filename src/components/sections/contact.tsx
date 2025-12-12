"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    return (
        <section
            id="contact"
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
                    Contact Me
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
                <p className="mt-4 text-muted-foreground">
                    Please contact me directly at{" "}
                    <a className="underline" href="mailto:example@gmail.com">
                        example@gmail.com
                    </a>{" "}
                    or through this form.
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex w-full max-w-lg flex-col gap-4"
                action={async (formData) => {
                    // Server action logic would go here
                    console.log("Running on client for demo");
                }}
            >
                <Input
                    type="email"
                    name="senderEmail"
                    placeholder="Your email"
                    required
                    maxLength={500}
                />
                <Textarea
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                    className="h-32"
                />
                <Button type="submit" className="w-full">
                    Submit <Send className="ml-2 h-4 w-4" />
                </Button>
            </motion.form>
        </section>
    );
}
