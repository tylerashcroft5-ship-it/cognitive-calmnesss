// ============================================================
// BOOKING SETTINGS (Cal.com)
//
// Live and wired to Cassie-Anne's real Cal.com account (@cassieann).
// Each `slug` below matches an event-type URL on her calendar, e.g.
//   cal.com/cassieann/guided-wellbeing
// so the inline booking widget and every "Book" button open the right
// event directly.
//
// To add or rename an event: create the event type on cal.com, then add
// an entry here whose `slug` matches its URL slug. There is no one-off
// event on her calendar — one-off support is handled via the enquiry form.
// ============================================================
export const CAL_CONFIGURED = true;           // live: on-site Cal.com booking is enabled
export const CAL_USERNAME = "cassieann";      // Cassie-Anne's cal.com username

export const sessions = [
  {
    slug: "guided-wellbeing",
    name: "Guided Wellbeing check-in",
    length: "30 minutes",
    note: "Monthly appointment for Guided Wellbeing members.",
  },
  {
    slug: "guided-wellbeing-plus",
    name: "Guided Wellbeing Plus session",
    length: "60 minutes",
    note: "Monthly appointment for Guided Wellbeing Plus members.",
  },
  {
    slug: "cbt-therapy-programme",
    name: "CBT therapy session",
    length: "60 minutes",
    note: "Session within the CBT Therapy Programme.",
  },
  {
    slug: "clinical-supervision",
    name: "Clinical supervision",
    length: "60 minutes",
    note: "For trainee CBT therapists and mental health professionals.",
  },
];

// Full cal.com URL — used as a safe fallback link (e.g. "open in new tab").
export function calUrl(slug) {
  return `https://cal.com/${CAL_USERNAME}/${slug}`;
}

// "username/slug" form — what the inline Cal.com embed expects.
export function calLink(slug) {
  return `${CAL_USERNAME}/${slug}`;
}

// Brand colour the Cal.com calendar themes itself with (sage — matches the
// primary buttons). Kept here so the booking look stays in one place.
export const CAL_BRAND_COLOR = "#76886C";
