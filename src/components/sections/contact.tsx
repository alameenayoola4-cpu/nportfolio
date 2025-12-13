"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { useFormStatus } from "react-dom";


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
                    const { sendEmail } = await import("@/actions/send-email");
                    const result = await sendEmail(formData);

                    if (result?.error) {
                        toast.error(result.error);
                        return;
                    }

                    toast.success("Message sent successfully!");
                    // Optional: Reset form
                    (document.getElementById("contact-form") as HTMLFormElement)?.reset();
                }}
                id="contact-form"
            >
                <Input
                    type="text"
                    name="senderName"
                    placeholder="Your name"
                    required
                    maxLength={200}
                />
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
                <SubmitButton />
            </motion.form>
        </section>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Submit <Send className="ml-2 h-4 w-4" />
                </>
            )}
        </Button>
    );
}

