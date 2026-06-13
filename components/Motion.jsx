"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CAL_CONFIGURED } from "@/lib/booking";

/* ---------- Reveal: gentle rise-in when scrolled into view ---------- */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal--in" : ""} ${className}`}
      style={{ "--d": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- Counter: counts up once visible ---------- */
export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (reduce) { setVal(to); return; }
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- LeafField: slow ambient drift behind the hero ---------- */
const LEAVES = [
  { top: "12%", left: "6%",  size: 34, rot: -20, dur: 26 },
  { top: "70%", left: "10%", size: 24, rot: 35,  dur: 30 },
  { top: "20%", left: "88%", size: 30, rot: 60,  dur: 24 },
  { top: "62%", left: "82%", size: 40, rot: -45, dur: 32 },
  { top: "40%", left: "48%", size: 20, rot: 15,  dur: 28 },
  { top: "85%", left: "55%", size: 28, rot: -70, dur: 27 },
];

export function LeafField() {
  return (
    <div className="leaf-field" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{
            top: l.top,
            left: l.left,
            width: l.size,
            height: l.size,
            "--rot": `${l.rot}deg`,
            "--dur": `${l.dur}s`,
          }}
        >
          <path d="M12 21c6-3 8-8 8-15-7 0-12 2-15 8 0 0 2 6 7 7Z" />
          <path d="M5 19c3-5 7-8 11-10" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- BookButton: on-site embedded calendar when configured, enquiry form until then ---------- */
export function BookButton({ slug, children, className = "btn btn--primary" }) {
  // When configured, land on the booking page with this session preselected in
  // the inline calendar (#slug). Until then, route to the enquiry form.
  const href = CAL_CONFIGURED ? `/book#${slug}` : "/book#enquire";
  return (
    <Link href={href} className={className}>
      {children} <span className="arrow">→</span>
    </Link>
  );
}
