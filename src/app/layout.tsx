import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Ayoola Adedeji | Full Stack Developer",
  description: "Portfolio of Ayoola Adedeji, a Full Stack Developer specializing in Next.js and MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            {children}
            <Toaster position="top-right" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
