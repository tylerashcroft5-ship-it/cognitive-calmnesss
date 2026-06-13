// ============================================================
// BOOKING SETTINGS (Cal.com)
//
// GO LIVE IN TWO STEPS (≈10 minutes):
//   1. The client signs up free at cal.com — ideally installs the Cal.com
//      app on her phone, so she gets instant booking notifications and can
//      manage her availability from anywhere.
//   2. She creates one "event type" per session below, whose URL slug matches
//      the `slug` values here (wellbeing-30, wellbeing-60, cbt-session,
//      one-off, supervision) — or just edit the slugs here to match hers.
//   3. Set CAL_USERNAME to her cal.com username and flip CAL_CONFIGURED to true.
//
// That's it. While CAL_CONFIGURED is false, the booking page shows a polished
// "coming soon" note and every Book button routes to the enquiry form — so the
// site can launch today and the live calendar can switch on whenever she's ready.
// ============================================================
export const CAL_CONFIGURED = false;          // EDIT: flip to true when Cal.com is set up
export const CAL_USERNAME = "cognitive-calmness"; // EDIT: the client's Cal.com username

export const sessions = [
  {
    slug: "wellbeing-30",
    name: "Guided Wellbeing check-in",
    length: "30 minutes",
    note: "Monthly appointment for Guided Wellbeing members.",
  },
  {
    slug: "wellbeing-60",
    name: "Guided Wellbeing Plus session",
    length: "60 minutes",
    note: "Monthly appointment for Guided Wellbeing Plus members.",
  },
  {
    slug: "cbt-session",
    name: "CBT therapy session",
    length: "60 minutes",
    note: "Weekly session within the CBT Therapy Programme.",
  },
  {
    slug: "one-off",
    name: "One-off support session",
    length: "60 minutes",
    note: "A single supportive appointment — no ongoing commitment.",
  },
  {
    slug: "supervision",
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
