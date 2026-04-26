"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showSystems, setShowSystems] = useState(false);

  return (
    <main className="home-main">
      <section className="home-hero" data-reveal>
        <div className="home-logo-wrap" data-reveal>
          <Image
            src="/lgc-logo.png"
            alt="LGC Systems logo"
            width={72}
            height={72}
            priority
            className="home-logo"
          />
        </div>

        <h1 className="home-title" data-reveal>
          LGC Systems
        </h1>

        <p className="home-paragraph" data-reveal>
          LGC Systems is a learning-first technology initiative focused on
          clarity, reasoning, and long-term understanding — not shortcuts,
          hype, or surface-level progress.
        </p>

        <p className="home-paragraph" data-reveal>
          The goal is simple: build systems that help people think better,
          learn deeply, and verify what they truly understand.
        </p>

        {!showSystems && (
          <button
            onClick={() => setShowSystems(true)}
            className="systems-button"
            data-reveal
          >
            Systems We’ve Built
          </button>
        )}

        {showSystems && (
          <div className="systems-grid" data-reveal>
            <a
              href="https://concept-ai.lgcsystems.xyz"
              className="system-card"
              data-reveal
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
              data-reveal
            >
              <h3>LGC LearnLogic Code</h3>
              <p>
                Logic-first programming practice focused on reasoning
                and execution flow.
              </p>
            </a>

            <a
              href="https://articulate-devlang.lgcsystems.xyz"
              className="system-card"
              data-reveal
            >
              <h3>LGC Articulate DevLang</h3>
              <p>
                Think before you speak — structured articulation for clear,
                confident, and professional communication.
              </p>
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
