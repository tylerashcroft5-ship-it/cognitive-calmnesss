"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export function Sprig({ ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props} aria-hidden="true">
      <path d="M12 22V8" />
      <path d="M12 13c-4 0-6.5-2.5-7-7 4.5.5 7 3 7 7Z" />
      <path d="M12 9c4 0 6.5-2.5 7-7-4.5.5-7 3-7 7Z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on navigation + lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <Link href="/" className="nav__brand" aria-label="Cognitive Calmness — home">
            <Sprig />
            <span>COGNITIVE&nbsp;CALMNESS</span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav__link ${pathname === l.href ? "nav__link--active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/book" className="btn btn--primary nav__cta">
              Book a session
            </Link>
          </nav>

          <button
            className={`nav__burger ${open ? "nav__burger--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`nav__overlay ${open ? "nav__overlay--open" : ""}`} aria-hidden={!open}>
        {[{ href: "/", label: "Home" }, ...navLinks, { href: "/book", label: "Book a session" }].map(
          (l, i) => (
            <Link key={l.href} href={l.href} style={{ transitionDelay: `${0.08 * i + 0.1}s` }}>
              {l.label}
            </Link>
          )
        )}
        <p className="nav__overlay-note">
          Free support group — every Tuesday, 2:00&nbsp;PM. Everyone welcome.
        </p>
      </div>
    </>
  );
}
