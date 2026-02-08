export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "3rem 2rem",
      }}
    >
      <section style={{ maxWidth: "760px", width: "100%" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
          Contact — LGC Systems
        </h1>

        <p style={{ marginBottom: "2rem" }}>
          LGC Systems exists to support learning that is accessible,
          reasoning-focused, and free from unnecessary barriers.
          If your intent aligns with this philosophy, you’re welcome to
          reach out.
        </p>

        {/* ---------- Why Contact ---------- */}
        <h2 style={{ marginBottom: "0.75rem" }}>
          Why You Can Contact Me
        </h2>

        <ul style={{ paddingLeft: "1.25rem", marginBottom: "2rem" }}>
          <li>
            To discuss ideas related to <strong>free education</strong> and
            learning at no cost
          </li>
          <li>
            To collaborate on <strong>open-source projects</strong> under
            the LGC ecosystem
          </li>
          <li>
            To contribute improvements, feedback, or research insights
          </li>
          <li>
            To have meaningful conversations around learning systems,
            reasoning models, and long-term skill development
          </li>
        </ul>

        {/* ---------- Motto ---------- */}
        <h2 style={{ marginBottom: "0.75rem" }}>
          Core Motto
        </h2>

        <p style={{ marginBottom: "2rem", fontStyle: "italic" }}>
          “Learning should cost effort and consistency — not money.”
        </p>

        {/* ---------- Contact Details ---------- */}
        <h2 style={{ marginBottom: "0.75rem" }}>
          Contact Information
        </h2>

        <p style={{ marginBottom: "0.5rem" }}>
          Email:
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          <a
            href="mailto:lingarobotics@gmail.com"
            style={{ color: "#3b82f6", fontWeight: 500 }}
          >
            lingarobotics@gmail.com
          </a>
        </p>

        <p style={{ marginBottom: "0.5rem" }}>
          GitHub:
        </p>

        <p>
          <a
            href="https://github.com/lingarobotics"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3b82f6", fontWeight: 500 }}
          >
            https://github.com/lingarobotics
          </a>
        </p>

        {/* ---------- Closing ---------- */}
        <p style={{ marginTop: "3rem", color: "#9aa0a6" }}>
          LGC Systems is built with the belief that knowledge grows best
          when it is shared, questioned, and refined together.
        </p>
      </section>
    </main>
  );
}
