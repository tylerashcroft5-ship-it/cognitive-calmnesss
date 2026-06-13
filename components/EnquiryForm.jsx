"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const INTERESTS = [
  "Guided Wellbeing (£40/month)",
  "Guided Wellbeing Plus (£60/month)",
  "CBT Therapy Programme (£200/month)",
  "One-off support session",
  "I-CBT for OCD",
  "Behavioural Family Therapy",
  "Clinical supervision",
  "Workplace training / CPD",
  "Free Tuesday support group",
  "Something else",
];

export default function EnquiryForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form__status" role="status">
        Thank you — your enquiry has been received. Cassie-Anne will reply as soon as she can,
        usually within two working days.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="interest">I&rsquo;m interested in</label>
          <select id="interest" name="interest" defaultValue={INTERESTS[0]}>
            {INTERESTS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Anything you&rsquo;d like to share</label>
        <textarea
          id="message"
          name="message"
          placeholder="Share as much or as little as you like — there's no pressure to explain everything here."
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"} <span className="arrow">→</span>
        </button>
        {status === "error" && (
          <span className="form__status form__status--error" role="alert">
            Something went wrong — please email {site.email} directly.
          </span>
        )}
      </div>
    </form>
  );
}
