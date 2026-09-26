"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "research", label: "RESEARCH" },
  { id: "stack", label: "STACK" },
  { id: "contact", label: "CONTACT" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-void/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10"
      >
        <a
          href="#top"
          className="font-mono text-sm tracking-widest2 text-paper hover:text-quantum-300"
        >
          ψ <span className="text-mute">/</span> JS
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`font-mono-label text-[0.7rem] transition-colors ${
                  active === l.id
                    ? "text-quantum-300"
                    : "text-mute hover:text-paper"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/jsbldquant04"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden font-mono-label text-[0.7rem] text-mute transition-colors hover:text-quantum-300 md:inline-flex md:items-center md:gap-1"
        >
          GITHUB <span aria-hidden>↗</span>
        </a>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-paper transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-void/95 px-5 py-6 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono-label text-sm text-paper hover:text-quantum-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/jsbldquant04"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-label text-sm text-quantum-300"
              >
                GITHUB ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
