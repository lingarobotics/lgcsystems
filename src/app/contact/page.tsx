export default function ContactPage() {
  return (
    <main className="content-main">
      <section className="contact-page" data-reveal>
        <h1 data-reveal>
          Contact — LGC Systems
        </h1>

        <p data-reveal>
          LGC Systems exists to support learning that is accessible,
          reasoning-focused, and free from unnecessary barriers.
          If your intent aligns with this philosophy, you’re welcome to
          reach out.
        </p>

        {/* ---------- Why Contact ---------- */}
        <h2 data-reveal>
          Why You Can Contact Me
        </h2>

        <ul data-reveal>
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
        <h2 data-reveal>
          Core Motto
        </h2>

        <p className="docs-quote" data-reveal>
          “Learning should cost effort and consistency — not money.”
        </p>

        {/* ---------- Contact Details ---------- */}
        <h2 data-reveal>
          Contact Information
        </h2>

        <p data-reveal>
          Email:
        </p>

        <p data-reveal>
          <a
            href="mailto:lingarobotics@gmail.com"
            className="contact-link"
          >
            lingarobotics@gmail.com
          </a>
        </p>

        <p data-reveal>
          GitHub:
        </p>

        <p data-reveal>
          <a
            href="https://github.com/lingarobotics"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            https://github.com/lingarobotics
          </a>
        </p>

        {/* ---------- Closing ---------- */}
        <p data-reveal>
          LGC Systems is built with the belief that knowledge grows best
          when it is shared, questioned, and refined together.
        </p>
      </section>
    </main>
  );
}
