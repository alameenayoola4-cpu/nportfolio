"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const senderName = formData.get("senderName");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // Simple server-side validation
    if (!senderName || typeof senderName !== "string") {
        return {
            error: "Invalid name",
        };
    }

    if (!senderEmail || typeof senderEmail !== "string") {
        return {
            error: "Invalid email",
        };
    }

    if (!message || typeof message !== "string") {
        return {
            error: "Invalid message",
        };
    }

    try {
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "alameenayoola4@gmail.com",
            subject: `New message from ${senderName}`,
            replyTo: senderEmail as string,
            text: `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
            // react: <EmailComponent message={message} senderEmail={senderEmail} />, // Optional: styled email component
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true, data };
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
}

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        return String((error as any).message);
    } else if (typeof error === "string") {
        return error;
    } else {
        return "Something went wrong";
    }
}
