import type { Metadata } from "next";
import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { TopDock } from "@/components/TopDock";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Security Analyst & Engineer — projects, blog, experience, and contact information.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} max-w-2xl mx-auto px-6 pb-24 font-sans antialiased`}>
        {/* Dock first */}
        <TopDock
          showThemeToggle={false}
          links={{
            github: "https://github.com/0x1kp",
            linkedin: "https://www.linkedin.com/in/ukeje-u-9ab588109/",
            x: "https://x.com/0x1kp",
          }}
        />
        {/* tiny gap only on md+ so the floating dock doesn't crowd the hero */}
        <div className="hidden md:block h-12" aria-hidden />

        {/* Then your pages (hero lives here) */}
        {children}
      </body>
    </html>
  );
}
