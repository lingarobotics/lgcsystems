"use client";

import { useState } from "react";

import Image from "next/image";

<Image
  src="/lgc-logo.png"
  alt="LGC Systems logo"
  width={64}
  height={64}
  priority
/>


export default function Home() {
  const [showSystems, setShowSystems] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <section style={{ maxWidth: "720px", width: "100%" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          LGC Systems
        </h1>

        <p style={{ marginBottom: "1.5rem" }}>
          LGC Systems is a learning-first technology initiative focused on
          clarity, reasoning, and long-term understanding — not shortcuts,
          hype, or surface-level progress.
        </p>

        <p style={{ marginBottom: "2rem" }}>
          The goal is simple: build systems that help people think better,
          learn deeply, and verify what they truly understand.
        </p>

        {!showSystems && (
          <button
            onClick={() => setShowSystems(true)}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
          >
            Systems We’ve Built
          </button>
        )}

        {showSystems && (
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://concept-ai.lgcsystems.xyz"
              className="system-card"
            >
              <h3>LGC Concept AI</h3>
              <p>
                Concept-first learning with doubt clearing and teach-back
                verification.
              </p>
            </a>

            <a
              href="https://learn-logic-code.lgcsystems.xyz"
              className="system-card"
            >
              <h3>LGC LearnLogic Code</h3>
              <p>
                Logic-first programming practice focused on reasoning
                and execution flow.
              </p>
            </a>
          </div>
        )}

      
      </section>
    </main>
  );
}
