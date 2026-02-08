"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1600); // duration of splash

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0f1115",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeOut 0.6s ease forwards",
        animationDelay: "1.2s",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Image
          src="/lgc-logo.png"
          alt="LGC Systems logo"
          width={120}
          height={120}
          priority
        />

        <p
          style={{
            marginTop: "1rem",
            color: "#9aa0a6",
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
          }}
        >
          Learning • Reasoning • Clarity
        </p>
      </div>
    </div>
  );
}
