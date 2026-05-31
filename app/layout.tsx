import type { Metadata } from "next";
import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { TopDock } from "@/components/TopDock";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Security Engineer — projects, blog, experience, and contact information.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} max-w-2xl mx-auto px-6 pb-24 font-sans antialiased`}>
        <TopDock
          showThemeToggle={true}
          links={{
            github: "https://github.com/0x1kp",
            linkedin: "https://www.linkedin.com/in/david-ukeje",
            x: "https://twitter.com/0x1kp",
            youtube: "https://youtube.com/",
          }}
        />
        
        <div className="pt-20">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
