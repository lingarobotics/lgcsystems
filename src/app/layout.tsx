import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import ScrollReveal from "../components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LGC Systems",
    template: "%s | LGC Systems",
  },
  description:
    "LGC Systems builds learning-first technology focused on clarity, reasoning, and long-term understanding.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "LGC Systems",
    description:
      "Learning-first systems focused on clarity, reasoning, and long-term understanding.",
    url: "https://lgcsystems.xyz",
    siteName: "LGC Systems",
    images: [
      {
        url: "/lgc-logo.png",
        width: 512,
        height: 512,
        alt: "LGC Systems Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Splash Screen */}
        <SplashScreen />
        <ScrollReveal />

        {/* Global Navigation */}
        <header className="site-header">
          <nav className="site-nav">
            {/* Brand / Home */}
            <Link href="/" className="brand-link">
              LGC Systems
            </Link>

            {/* Nav Links */}
            <div className="nav-links">
              <Link href="/docs" className="nav-link">
                Docs
              </Link>

              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
