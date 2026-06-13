// ============================================================
// CONTACT API STUB
// Wire this to a real email service before launch.
// Recommended: Resend (resend.com) — free tier, 5-min setup:
//
//   npm install resend
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "website@cognitivecalmness.co.uk",
//     to: "CLIENT_EMAIL_HERE",
//     subject: `New enquiry from ${data.name}`,
//     text: JSON.stringify(data, null, 2),
//   });
//
// Add RESEND_API_KEY in Vercel → Project → Settings → Environment Variables.
// ============================================================
export async function POST(request) {
  const data = await request.json();

  // Basic validation
  if (!data?.name || !data?.email) {
    return Response.json({ ok: false }, { status: 400 });
  }

  // TODO: send the email here (see note above). For now we log server-side
  // so submissions are visible in Vercel's function logs during testing.
  console.log("[enquiry]", JSON.stringify(data));

  return Response.json({ ok: true });
}
