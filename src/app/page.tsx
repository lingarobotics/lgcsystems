"use client";

import { useState } from "react";

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
        backgroundColor: "#0f1115",
        color: "#e6e6e6",
      }}
    >
      <section style={{ maxWidth: "720px", width: "100%" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          LGC Systems
        </h1>

        <p style={{ marginBottom: "1.5rem", color: "#b5b5b5" }}>
          LGC Systems is a learning-first technology initiative focused on
          clarity, reasoning, and long-term understanding — not shortcuts,
          hype, or surface-level progress.
        </p>

        <p style={{ marginBottom: "2rem", color: "#9aa0a6" }}>
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
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
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
              href="https://concept.lgcsystems.xyz"
              style={{
                flex: "1 1 260px",
                padding: "1rem",
                border: "1px solid #2a2f45",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#e6e6e6",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>
                LGC Concept AI
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Concept-first learning with doubt clearing and teach-back
                verification.
              </p>
            </a>

            <a
              href="https://learnlogic.lgcsystems.xyz"
              style={{
                flex: "1 1 260px",
                padding: "1rem",
                border: "1px solid #2a2f45",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#e6e6e6",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>
                LGC LearnLogic Code
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
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
