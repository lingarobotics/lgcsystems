"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1850);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(circle at 20% 18%, rgba(79, 141, 247, 0.2), transparent 50%), linear-gradient(180deg, #050c17 0%, #040911 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeOut 0.55s ease forwards",
        animationDelay: "1.3s",
      }}
    >
      <div
        style={{
          textAlign: "center",
          animation: "splashIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        }}
      >
        <Image
          src="/lgc-logo.png"
          alt="LGC Systems logo"
          width={120}
          height={120}
          priority
          style={{ animation: "splashLogoFloat 1.3s ease-in-out infinite" }}
        />

        <p
          style={{
            marginTop: "1rem",
            color: "#9aa0a6",
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
          }}
        >
          Learn • Govern • Construct
        </p>
      </div>
    </div>
  );
}
