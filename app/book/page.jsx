import { Reveal, BookButton } from "@/components/Motion";
import EnquiryForm from "@/components/EnquiryForm";
import BookingWidget from "@/components/BookingWidget";
import { sessions, CAL_CONFIGURED } from "@/lib/booking";
import { site } from "@/lib/site";

export const metadata = {
  title: "Book a Session",
  description:
    "Book a wellbeing appointment, CBT therapy session, one-off support session or clinical supervision with Cassie-Anne Simmonds.",
};

export default function Book() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Book a session</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Take the <span className="accent-i">first step</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              Choose the session that fits, or send an enquiry if you&rsquo;d rather talk it
              through first — there&rsquo;s no pressure either way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="calendar" style={{ paddingTop: "clamp(2rem, 5vw, 4rem)", scrollMarginTop: "90px" }}>
        <div className="wrap">
          {CAL_CONFIGURED ? (
            <Reveal>
              <BookingWidget />
            </Reveal>
          ) : (
            <>
              <div className="book-grid">
                {sessions.map((s, i) => (
                  <Reveal key={s.slug} delay={0.07 * i}>
                    <div className="book-card" style={{ height: "100%" }}>
                      <span className="meta">{s.length}</span>
                      <h3>{s.name}</h3>
                      <p>{s.note}</p>
                      <BookButton slug={s.slug} className="btn btn--primary">
                        Enquire
                      </BookButton>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.3}>
                <p className="svc__note" style={{ marginTop: "2rem", maxWidth: "640px" }}>
                  Online calendar booking is coming soon. For now, send an enquiry below and
                  Cassie-Anne will arrange a time with you directly.
                </p>
              </Reveal>
            </>
          )}
        </div>
      </section>

      <section className="section section--sand" id="enquire" style={{ scrollMarginTop: "90px" }}>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <Reveal><span className="eyebrow">Send an enquiry</span></Reveal>
            <Reveal delay={0.06}>
              <h2>Tell me a little <span className="accent-i">about what you need</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ marginTop: "1.3rem", color: "var(--ink-soft)" }}>
                Whether you&rsquo;d like to discuss your needs, book an appointment, enquire
                about supervision, or arrange workplace training — I look forward to
                supporting you on your mental health journey.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p style={{ marginTop: "1.4rem" }}>
                <a href={`mailto:${site.email}`} style={{ color: "var(--plum)", fontWeight: 600 }}>{site.email}</a>
                <br />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} style={{ color: "var(--plum)", fontWeight: 600 }}>{site.phone}</a>
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="svc__note" style={{ marginTop: "1.6rem" }}>
                The free support group runs {site.group.day.toLowerCase()} at {site.group.time} —
                mention it in your message and you&rsquo;ll receive joining details.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="includes" style={{ marginTop: 0 }}>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
