export default function DocsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "3rem 2rem",
      }}
    >
      <section style={{ maxWidth: "860px", width: "100%" }}>
        {/* ==================================================
            Title
        ================================================== */}
        <h1 style={{ fontSize: "2.3rem", marginBottom: "1rem" }}>
          LGC Systems — Documentation
        </h1>

        <p style={{ marginBottom: "2.5rem" }}>
          This document explains what LGC Systems is, why it exists, and how
          its individual systems are designed to be used.  
          LGC Systems prioritizes clarity, reasoning, and long-term
          understanding over speed, shortcuts, or surface-level learning.
        </p>

        {/* ==================================================
            What is LGC Systems
        ================================================== */}
        <h2 style={{ marginBottom: "0.75rem" }}>What is LGC Systems</h2>

        <p style={{ marginBottom: "1.5rem" }}>
          LGC Systems is an umbrella initiative that hosts learning-first
          tools built around one core belief:
        </p>

        <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
          “If you cannot explain it clearly, you do not understand it.”
        </p>

        <p style={{ marginBottom: "2rem" }}>
          Instead of focusing on certificates, completion counts, or
          speed-based progress, LGC Systems focuses on verification of
          understanding, reasoning depth, and execution clarity.
        </p>

        {/* ==================================================
            Core Philosophy
        ================================================== */}
        <h2 style={{ marginBottom: "0.75rem" }}>Core Philosophy</h2>

        <ul style={{ paddingLeft: "1.25rem", marginBottom: "2.5rem" }}>
          <li>Understanding &gt; memorization</li>
          <li>Reasoning &gt; copying solutions</li>
          <li>Teach-back &gt; passive consumption</li>
          <li>Consistency &gt; intensity</li>
          <li>Learning before building</li>
        </ul>

        {/* ==================================================
            LGC Concept AI
        ================================================== */}
        <h2 style={{ marginBottom: "0.75rem" }}>LGC Concept AI</h2>

        <p style={{ marginBottom: "1.5rem" }}>
          LGC Concept AI is designed to help learners verify whether they
          truly understand a concept — not whether they can recognize it
          or recall syntax.
        </p>

        <h3 style={{ marginBottom: "0.5rem" }}>Why it exists</h3>

        <p style={{ marginBottom: "1.5rem" }}>
          Many learners believe they understand a topic until they are asked
          to explain it in their own words. LGC Concept AI exists to expose
          gaps in understanding early and guide learners toward clarity.
        </p>

        <h3 style={{ marginBottom: "0.5rem" }}>Modes of interaction</h3>

        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li>
            <strong>Learn Mode</strong> — This mode is used for learning concepts in the specified format, apt for anna university.
          </li>
          <li>
            <strong>Doubt Mode</strong> — Learners ask targeted questions
            after attempting understanding, not before.
          </li>
          <li>
            <strong>Teach-Back Mode</strong> — Learners re-explain concepts
            as if teaching someone else, reinforcing retention.
          </li>
          <li>
            <strong>Fast Learn Mode</strong> — A more lenient mode for quick concept checks, but still focused on explanation over recognition. Apted for last time preparation.
          </li>
        </ul>

        <h3 style={{ marginBottom: "0.5rem" }}>How it is used</h3>

        <p style={{ marginBottom: "2.5rem" }}>
          Learners interact with LGC Concept AI after studying a topic from
          any source. The system does not replace learning materials — it
          verifies understanding and highlights weak areas.
        </p>

        {/* ==================================================
            LGC LearnLogic Code
        ================================================== */}
        <h2 style={{ marginBottom: "0.75rem" }}>LGC LearnLogic Code</h2>

        <p style={{ marginBottom: "1.5rem" }}>
          LGC LearnLogic Code is focused on logic-first programming practice.
          It trains learners to think in execution steps rather than jumping
          directly to syntax.
        </p>

        <h3 style={{ marginBottom: "0.5rem" }}>Why it exists</h3>

        <p style={{ marginBottom: "1.5rem" }}>
          Many developers can write code that “works” without understanding
          why it works. This leads to fragile systems and poor debugging
          skills. LearnLogic Code exists to reverse that habit.
        </p>

        <h3 style={{ marginBottom: "0.5rem" }}>How it is different</h3>

        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li>Focuses on execution flow before syntax</li>
          <li>Encourages reasoning in plain language</li>
          <li>Promotes defensive thinking and edge-case awareness</li>
          <li>Discourages copy–paste learning</li>
        </ul>

        <h3 style={{ marginBottom: "0.5rem" }}>How it is used</h3>

        <p style={{ marginBottom: "2.5rem" }}>
          Learners practice coding by first explaining what the program
          should do step-by-step, then translating that logic into code.
          This builds strong mental models and debugging confidence.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          It explains how to leverage AI to learn code, but the core principles apply to all programming practice — with or without AI.
        </p>

    
        {/* ==================================================
            Relationship Between Systems
        ================================================== */}
        <h2 style={{ marginBottom: "0.75rem" }}>
          How the Systems Work Together
        </h2>

        <p style={{ marginBottom: "2.5rem" }}>
          LGC Concept AI strengthens conceptual understanding, while
          LGC LearnLogic Code strengthens execution reasoning. Together,
          they cover both thinking and implementation — without overlap
          or redundancy.
        </p>

        {/* ==================================================
            Contact
        ================================================== */}
        <h2 style={{ marginBottom: "0.75rem" }}>Contact</h2>

        <p>
          For collaboration, feedback, or serious discussions, contact:
          <br />
          <a
            href="mailto:lingarobotics@gmail.com"
            style={{ color: "#3b82f6", fontWeight: 500 }}
          >
            lingarobotics@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
