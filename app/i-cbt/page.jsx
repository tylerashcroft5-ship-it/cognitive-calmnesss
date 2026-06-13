import Link from "next/link";
import { Reveal } from "@/components/Motion";

export const metadata = {
  title: "I-CBT for OCD — Inference-Based Cognitive Behavioural Therapy",
  description:
    "Inference-Based CBT is a specialised treatment for OCD that targets the reasoning process behind obsessive doubt — suitable for checking, contamination, harm OCD, relationship OCD and scrupulosity.",
};

const FOCUS = [
  "Understanding how obsessive doubt develops",
  "Identifying the reasoning patterns that maintain OCD",
  "Learning to distinguish between reality-based information and imagined possibilities",
  "Rebuilding trust in your senses, experiences and common-sense reasoning",
  "Reducing the need for compulsions and reassurance-seeking by addressing the source of the doubt",
];

const FORMS = [
  "Checking",
  "Contamination fears",
  "Responsibility concerns",
  "Relationship OCD",
  "Harm OCD",
  "Sexual obsessions",
  "Scrupulosity",
];

export default function ICBT() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Specialist OCD treatment</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Inference-Based CBT <span className="accent-i">for OCD</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              A specialised psychological treatment for Obsessive-Compulsive Disorder.
              Unlike traditional CBT approaches that focus primarily on reducing anxiety and
              changing responses to obsessive thoughts, I-CBT targets the reasoning process
              that gives rise to obsessions in the first place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal>
              <h2>Trapped in <span className="accent-i">imagined possibilities</span></h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ marginTop: "1.3rem" }}>
                People with OCD often become trapped in imagined possibilities rather than
                relying on direct evidence from their senses. I-CBT helps you recognise when
                you are moving away from reality-based information and becoming influenced by
                doubt, imagination and hypothetical scenarios.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p style={{ marginTop: "1rem" }}>
                Research suggests that by addressing the underlying inferential confusion that
                drives OCD, individuals can experience meaningful reductions in obsessive
                thoughts and compulsive behaviours.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="doorcard" style={{ background: "var(--blush-soft)", boxShadow: "var(--shadow)" }}>
              <p>
                You saw the door lock. You felt it lock.{" "}
                <em>&ldquo;But what if I didn&rsquo;t lock it properly?&rdquo;</em>
              </p>
              <small>The moment doubt overrides your senses — exactly where I-CBT works</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <Reveal><span className="eyebrow">The approach</span></Reveal>
            <Reveal delay={0.06}><h2>What therapy focuses on</h2></Reveal>
            <Reveal delay={0.12}>
              <ul className="leaf-list" style={{ marginTop: "1.6rem" }}>
                {FOCUS.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.1}><span className="eyebrow">Who it can help</span></Reveal>
            <Reveal delay={0.16}><h2>Suitable for many forms of OCD</h2></Reveal>
            <Reveal delay={0.22}>
              <div className="chips">
                {FORMS.map((c) => <span className="chip" key={c} style={{ background: "var(--white)" }}>{c}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <p style={{ marginTop: "1.6rem", color: "var(--ink-soft)" }}>
                The goal of I-CBT is not to eliminate uncertainty entirely, but to help you
                trust reality over OCD-driven doubt — enabling you to live more freely and
                confidently.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--sage" style={{ textAlign: "center" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ maxWidth: "24ch", margin: "0 auto" }}>
              Trust reality over <span className="accent-i" style={{ color: "var(--plum)" }}>the doubt</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ margin: "1.3rem auto 0" }}>
              If OCD is shaping your days, a structured, evidence-based path forward exists.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div style={{ marginTop: "2.3rem" }}>
              <Link href="/book" className="btn btn--primary">
                Enquire about I-CBT <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
