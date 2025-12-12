
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            &copy; {currentYear} Ayoola Adedeji. All rights reserved.
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    );
}
