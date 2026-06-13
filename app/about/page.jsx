import Link from "next/link";
import { Reveal } from "@/components/Motion";

export const metadata = {
  title: "About Cassie-Anne Simmonds",
  description:
    "Registered Mental Health Nurse and BABCP Accredited CBT Therapist with over 15 years of NHS experience, specialising in psychosis and bipolar disorder.",
};

const WHY = [
  "Registered Mental Health Nurse",
  "BABCP Accredited CBT Therapist",
  "Over 15 years of NHS experience",
  "Specialist expertise in psychosis and bipolar disorder",
  "Flexible monthly support options",
  "Ongoing care between appointments",
  "Compassionate, evidence-based approach",
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">About</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Compassion, expertise <span className="accent-i">and consistency</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              I&rsquo;m Cassie-Anne Simmonds — a Registered Mental Health Nurse and BABCP
              Accredited Cognitive Behavioural Therapist with over 15 years of experience
              working within NHS mental health services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal>
              <p>
                My professional background combines specialist nursing knowledge with
                evidence-based Cognitive Behavioural Therapy, allowing me to offer a unique
                and holistic approach to mental health support.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ marginTop: "1rem" }}>
                Throughout my career, I have worked extensively with individuals experiencing
                anxiety, depression, psychosis, bipolar disorder, low self-esteem, stress,
                trauma and emotional difficulties.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p style={{ marginTop: "1rem" }}>
                My aim is to provide flexible, consistent and personalised support that helps
                you achieve meaningful and lasting change. Whether you are seeking ongoing
                wellbeing support or structured CBT therapy, I offer a safe and supportive
                environment tailored to your individual needs.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="includes" style={{ marginTop: 0 }}>
              <span className="eyebrow" style={{ marginBottom: ".4rem" }}>Why choose me</span>
              <ul className="leaf-list" style={{ marginTop: "1rem" }}>
                {WHY.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--blush-soft">
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <Reveal><span className="eyebrow">Consistent support beyond discharge</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Mental health support doesn&rsquo;t always end <span className="accent-i">when treatment does</span></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p style={{ marginTop: "1.5rem" }}>
              Many people find that after being discharged from mental health services, they
              still benefit from ongoing support. While they may no longer require intensive
              treatment, they often value having a trusted professional who understands their
              history and can provide guidance when challenges arise.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: "1rem" }}>
              One of the most common concerns I hear is having to repeatedly explain their
              story to different professionals. Building a therapeutic relationship takes time,
              and constantly starting again can feel frustrating and exhausting.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ marginTop: "1rem" }}>
              My wellbeing and therapy packages are designed to bridge that gap. They offer
              flexible, ongoing support from someone who already knows your journey,
              understands your strengths and challenges, and can provide continuity of care
              tailored to your individual needs.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p style={{ marginTop: "1rem" }}>
              Whether you&rsquo;re maintaining your wellbeing following recovery, navigating
              life&rsquo;s ups and downs, or simply want the reassurance of having someone at
              the end of the phone when you need support, I can provide a consistent and
              compassionate service that works alongside your goals — bridging the gap between
              formal mental health services and complete independence.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p style={{ marginTop: "1.6rem", fontFamily: "var(--accent)", fontStyle: "italic", fontSize: "1.35rem", color: "var(--plum)" }}>
              You don&rsquo;t need to wait until you&rsquo;re in crisis to seek support.
              Ongoing mental wellbeing is just as important as recovery.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div style={{ marginTop: "2.4rem" }}>
              <Link href="/book" className="btn btn--primary">
                Start a conversation <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
