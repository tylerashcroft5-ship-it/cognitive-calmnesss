import Link from "next/link";
import { Reveal } from "@/components/Motion";

export const metadata = {
  title: "Clinical Supervision & Training",
  description:
    "Clinical supervision for trainee CBT therapists, specialist CPD in CBT for psychosis and bipolar disorder, and workplace mental health training for organisations.",
};

const SUPERVISION_FOCUS = [
  "CBT skills development",
  "Case formulation",
  "Clinical confidence",
  "Reflective practice",
  "Professional growth and help with accreditation",
];

const WORKPLACE = [
  "Mental health awareness",
  "Trauma-informed approaches",
  "Stress management",
  "Building resilience",
  "Supporting staff wellbeing",
  "Understanding common mental health difficulties",
];

export default function SupervisionTraining() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">For professionals & organisations</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Supervision, CPD <span className="accent-i">and training</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              Supporting therapists to grow in confidence and organisations to build
              healthier, more resilient workplaces.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- SUPERVISION ---------- */}
      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal><span className="eyebrow">Clinical supervision</span></Reveal>
            <Reveal delay={0.06}>
              <h2>Space to reflect, <span className="accent-i">room to grow</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ marginTop: "1.3rem" }}>
                I offer supervision for trainee Cognitive Behavioural Therapists and mental
                health professionals seeking support in their clinical practice.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="svc__price" style={{ marginTop: "1.4rem" }}>£45 per session</div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="includes" style={{ marginTop: 0 }}>
              <span className="eyebrow" style={{ marginBottom: ".4rem" }}>Supervision focuses on</span>
              <ul className="leaf-list" style={{ marginTop: "1rem" }}>
                {SUPERVISION_FOCUS.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CPD ---------- */}
      <section className="section section--sand">
        <div className="wrap">
          <Reveal><span className="eyebrow">Specialist CPD</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Training in <span className="accent-i">complex presentations</span></h2>
          </Reveal>
          <div className="support-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <Reveal delay={0.1}>
              <div className="support-card" style={{ height: "100%" }}>
                <h3>CBT for Psychosis</h3>
                <p>
                  Specialist Continuing Professional Development training covering
                  evidence-based CBT approaches for psychosis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="support-card" style={{ height: "100%" }}>
                <h3>CBT for Bipolar Disorder</h3>
                <p>
                  Advanced training exploring CBT interventions and best practice for working
                  with bipolar disorder.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.24}>
            <p className="svc__note" style={{ maxWidth: "640px" }}>
              Training can be tailored for organisations, teams and individual practitioners.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- WORKPLACE ---------- */}
      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal><span className="eyebrow">Workplace mental health training</span></Reveal>
            <Reveal delay={0.06}>
              <h2>Healthier, more resilient <span className="accent-i">workplaces</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ marginTop: "1.3rem" }}>
                Supporting organisations to create environments where people can do their
                best work and feel supported doing it. Bespoke training packages are available
                to meet the needs of your organisation.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/book#enquire" className="btn btn--primary">
                  Arrange training <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="includes" style={{ marginTop: 0 }}>
              <span className="eyebrow" style={{ marginBottom: ".4rem" }}>Training packages include</span>
              <ul className="leaf-list" style={{ marginTop: "1rem" }}>
                {WORKPLACE.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
