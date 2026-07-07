"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { sessions, calLink, CAL_BRAND_COLOR } from "@/lib/booking";

// Inline Cal.com booking. A row of session tabs swaps the embedded calendar
// below — visitors choose and book without ever leaving the site. Only
// rendered when CAL_CONFIGURED is true (the page handles the fallback).
export default function BookingWidget() {
  // Preselect a session if the URL carries one, e.g. /book#cbt-therapy-programme
  const [active, setActive] = useState(sessions[0].slug);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (sessions.some((s) => s.slug === hash)) setActive(hash);
  }, []);

  // Theme the calendar to match the site (sage brand, light, warm radius).
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": CAL_BRAND_COLOR } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const current = sessions.find((s) => s.slug === active) ?? sessions[0];

  return (
    <div className="booking">
      <div className="booking__tabs" role="tablist" aria-label="Choose a session type">
        {sessions.map((s) => (
          <button
            key={s.slug}
            role="tab"
            aria-selected={active === s.slug}
            className={`booking__tab ${active === s.slug ? "booking__tab--active" : ""}`}
            onClick={() => setActive(s.slug)}
          >
            <span className="booking__tab-name">{s.name}</span>
            <span className="booking__tab-len">{s.length}</span>
          </button>
        ))}
      </div>

      <p className="booking__note" aria-live="polite">{current.note}</p>

      <div className="booking__cal">
        <Cal
          key={active}
          calLink={calLink(active)}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}
