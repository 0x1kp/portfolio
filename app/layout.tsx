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
        <TopDock
          showThemeToggle={true}
          links={{
            github: "https://github.com/0x1kp",
            linkedin: "https://www.linkedin.com/in/ukeje-u-9ab588109/",
            x: "https://twitter.com/0x1kp",
            youtube: "https://youtube.com/@0x1kp",
          }}
        />
        
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
