"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("reveal-init");

    const seen = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    const registerElements = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]")
      );

      if (elements.length === 0) return;

      elements.forEach((el, index) => {
        if (seen.has(el)) return;
        seen.add(el);
        el.style.setProperty("--reveal-delay", `${Math.min(index * 35, 220)}ms`);
        observer.observe(el);
      });
    };

    registerElements();

    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.body.classList.remove("reveal-init");
    };
  }, [pathname]);

  return null;
}
