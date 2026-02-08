import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          backgroundColor: "#0f1115",
          color: "#e6e6e6",
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        {/* Splash Screen */}
        <SplashScreen />

        {/* Global Navigation */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backgroundColor: "#0f1115",
            borderBottom: "1px solid #2a2f45",
          }}
        >
          <nav
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              padding: "0.75rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Brand / Home */}
            <Link
              href="/"
              style={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "#e6e6e6",
                textDecoration: "none",
              }}
            >
              LGC Systems
            </Link>

            {/* Nav Links */}
            <div style={{ display: "flex", gap: "1.25rem" }}>
              <Link
                href="/docs"
                style={{
                  color: "#9aa0a6",
                  textDecoration: "none",
                }}
              >
                Docs
              </Link>

              <Link
                href="/contact"
                style={{
                  color: "#9aa0a6",
                  textDecoration: "none",
                }}
              >
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
