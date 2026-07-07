import Link from "next/link";
import { Reveal, Counter, LeafField, BookButton } from "@/components/Motion";
import Breathing from "@/components/Breathing";
import { site } from "@/lib/site";

const PLANS = [
  {
    name: "Guided Wellbeing",
    price: "£40",
    desc: "Regular support and guidance to maintain your wellbeing.",
    items: [
      "One 30-minute appointment each month",
      "Tailored wellbeing resources",
      "Free text support throughout the month",
      "Access to the online support group",
      "Ongoing guidance and encouragement",
    ],
    slug: "guided-wellbeing",
  },
  {
    name: "CBT Therapy Programme",
    price: "£200",
    desc: "A structured CBT package designed to help you overcome difficulties and create lasting change.",
    items: [
      "Four 60-minute therapy sessions per month",
      "Individualised CBT treatment plan",
      "Tailored therapeutic resources",
      "Free text support throughout the month",
      "Access to the online support group",
      "Regular monitoring and review of progress",
    ],
    slug: "cbt-therapy-programme",
    featured: true,
  },
  {
    name: "Guided Wellbeing Plus",
    price: "£60",
    desc: "Enhanced support with additional time to focus on your mental health goals.",
    items: [
      "One 60-minute appointment each month",
      "Tailored wellbeing resources",
      "Free text support throughout the month",
      "Access to the online support group",
      "Ongoing support and accountability",
    ],
    slug: "guided-wellbeing-plus",
  },
];

const SUPPORT = [
  { href: "/services#one-off", title: "One-off support sessions", text: "A single supportive appointment — a space to feel heard without committing to ongoing therapy." },
  { href: "/i-cbt", title: "I-CBT for OCD", text: "A specialised treatment that targets the reasoning process behind obsessive doubt." },
  { href: "/services#bft", title: "Behavioural Family Therapy", text: "Structured work with families and carers to improve communication and reduce stress." },
  { href: "/services#relapse", title: "Relapse prevention", text: "Recognise early warning signs and build a personalised wellness and crisis plan." },
  { href: "/services#dbt", title: "DBT skills", text: "Practical tools for managing intense emotions, distress and interpersonal difficulties." },
  { href: "/services#goals", title: "Goal setting & care planning", text: "Clear, realistic steps towards better mental health — collaborative and personalised." },
  { href: "/services#medication", title: "Medication support", text: "Understand your prescribed medication and prepare for conversations with your prescriber." },
  { href: "/services#coordination", title: "Care coordination", text: "Joined-up support across NHS and private services, so your care never feels fragmented." },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <LeafField />
        <div className="wrap split">
          <div>
            <Reveal>
              <span className="eyebrow">Registered Mental Health Nurse · BABCP Accredited</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="hero__title">
                A calmer mind, with someone who{" "}
                <span className="accent-i">knows your story</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede hero__sub">
                I&rsquo;m Cassie-Anne Simmonds. With over 15 years in NHS mental health
                services, I offer flexible, consistent and personalised support — from
                monthly wellbeing check-ins to structured CBT therapy.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero__ctas">
                <Link href="/book" className="btn btn--primary">
                  Book a session <span className="arrow">→</span>
                </Link>
                <Link href="/services" className="btn btn--ghost">
                  Explore support plans
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="hero__creds">
                <span>NMC Registered</span>
                <span>BABCP Accredited</span>
                <span>NHS Experienced</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hero__portal">
            <div className="hero__arch">
              {/* Client's logo, used exactly as supplied — the arch background
                  matches its baked-in #CDB5B5 so it sits seamlessly. */}
              <img src="/logo.jpg" alt="Cognitive Calmness — Cassie-Anne Simmonds" width="500" height="500" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CREDENTIAL STRIP ---------- */}
      <div className="creds-strip">
        <div className="wrap creds-strip__grid">
          <Reveal>
            <div className="cred__num"><Counter to={15} suffix="+" /></div>
            <div className="cred__label">Years in NHS services</div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="cred__num">CBT</div>
            <div className="cred__label">BABCP accredited therapist</div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="cred__num"><Counter to={4} /></div>
            <div className="cred__label">Sessions monthly on the CBT programme</div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="cred__num">7-day</div>
            <div className="cred__label">Text support between appointments</div>
          </Reveal>
        </div>
      </div>

      {/* ---------- WELCOME ---------- */}
      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal><span className="eyebrow">Welcome</span></Reveal>
            <Reveal delay={0.06}>
              <h2>Specialist nursing knowledge, <span className="accent-i">evidence-based therapy</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede" style={{ marginTop: "1.3rem" }}>
                My professional background combines specialist nursing knowledge with
                Cognitive Behavioural Therapy, allowing me to offer a unique and holistic
                approach to mental health support.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
                Throughout my career I have worked extensively with individuals experiencing
                anxiety, depression, psychosis, bipolar disorder, low self-esteem, stress,
                trauma and emotional difficulties. Whether you are seeking ongoing wellbeing
                support or structured CBT therapy, I offer a safe and supportive environment
                tailored to your individual needs.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/about" className="btn btn--ghost">
                  More about me <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="doorcard" style={{ background: "var(--blush-soft)", boxShadow: "none", border: "1px solid rgba(142,98,101,.25)" }}>
              <p>
                &ldquo;My aim is to provide flexible, consistent and personalised support
                that helps you achieve meaningful and lasting change.&rdquo;
              </p>
              <small>Cassie-Anne Simmonds</small>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PACKAGES ---------- */}
      <section className="section section--sand" id="plans">
        <div className="wrap">
          <Reveal><span className="eyebrow">Monthly support packages</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Support that fits <span className="accent-i">around your life</span></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: "1.2rem" }}>
              Three simple monthly plans — every one includes free text support, tailored
              resources and access to the online support group.
            </p>
          </Reveal>

          <div className="pricing">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={0.1 * i} className={`plan ${p.featured ? "plan--featured" : ""}`}>
                {p.featured && <span className="plan__tag">Most comprehensive</span>}
                <h3 className="plan__name">{p.name}</h3>
                <div className="plan__price">{p.price}</div>
                <div className="plan__per">per month</div>
                <p className="plan__desc">{p.desc}</p>
                <ul className="leaf-list plan__list">
                  {p.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <BookButton slug={p.slug} className={`btn ${p.featured ? "btn--primary" : "btn--ghost"}`}>
                  Get started
                </BookButton>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="includes" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.6rem" }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: ".5rem" }}>For professionals</span>
              <h3 style={{ marginBottom: ".5rem" }}>Clinical supervision &amp; CBT training</h3>
              <p style={{ color: "var(--ink-soft)", maxWidth: "52ch" }}>
                I offer supervision for trainee CBT therapists and mental health professionals —
                supporting CBT skills, case formulation, reflective practice and accreditation.
              </p>
            </div>
            <Link href="/supervision-training" className="btn btn--ghost">
              Supervision &amp; training <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- BREATHING SIGNATURE ---------- */}
      <section className="section section--blush-soft breathe">
        <div className="wrap">
          <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>A moment for you</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Take thirty seconds, <span className="accent-i">right now</span></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ margin: "1.2rem auto 0" }}>
              Calmness isn&rsquo;t something you wait for — it&rsquo;s something you practise.
              Follow the circle: in for four, hold for four, out for six.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Breathing />
          </Reveal>
          <p className="breathe__hint" style={{ marginTop: "7rem" }}>
            Techniques like this are part of every wellbeing plan.
          </p>
        </div>
      </section>

      {/* ---------- I-CBT TEASER ---------- */}
      <section className="section section--sage">
        <div className="wrap split">
          <div>
            <Reveal><span className="eyebrow">Specialist OCD treatment</span></Reveal>
            <Reveal delay={0.06}>
              <h2>I-CBT — therapy that targets <span className="accent-i" style={{ color: "var(--plum)" }}>the doubt itself</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede" style={{ marginTop: "1.2rem" }}>
                Inference-Based CBT goes beyond managing anxiety. It addresses the reasoning
                process that gives rise to obsessions in the first place — helping you trust
                reality over OCD-driven doubt.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="chips">
                {["Checking", "Contamination", "Harm OCD", "Relationship OCD", "Scrupulosity"].map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ marginTop: "2.2rem" }}>
                <Link href="/i-cbt" className="btn btn--ghost">
                  Learn about I-CBT <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="doorcard">
              <p>
                The door is locked. You saw yourself lock it.{" "}
                <em>&ldquo;But what if I didn&rsquo;t lock it properly?&rdquo;</em>
              </p>
              <small>The moment OCD leaves reality behind — and where I-CBT begins</small>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- ADDITIONAL SUPPORT GRID ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Beyond the packages</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Specialist support, <span className="accent-i">when you need it</span></h2>
          </Reveal>
          <div className="support-grid">
            {SUPPORT.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i}>
                <Link href={s.href} className="support-card" style={{ height: "100%" }}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="go">Read more <span className="arrow">→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTINUITY ---------- */}
      <section className="section section--blush-soft">
        <div className="wrap split">
          <Reveal>
            <div>
              <span className="eyebrow">Consistent support beyond discharge</span>
              <h2>Support doesn&rsquo;t always end <span className="accent-i">when treatment does</span></h2>
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p>
                One of the most common concerns I hear is having to repeatedly explain your
                story to different professionals. Building a therapeutic relationship takes
                time, and constantly starting again can feel frustrating and exhausting.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p style={{ marginTop: "1rem" }}>
                My wellbeing and therapy packages bridge that gap — flexible, ongoing support
                from someone who already knows your journey, understands your strengths and
                challenges, and can provide continuity of care tailored to you.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p style={{ marginTop: "1rem", fontFamily: "var(--accent)", fontStyle: "italic", fontSize: "1.25rem", color: "var(--plum)" }}>
                You don&rsquo;t need to wait until you&rsquo;re in crisis to seek support.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SUPPORT GROUP ---------- */}
      <section className="section" style={{ paddingBlock: "clamp(3rem, 7vw, 5rem)" }}>
        <div className="wrap">
          <Reveal className="group-banner">
            <div>
              <span className="when">{site.group.day} · {site.group.time}</span>
              <h2>Free weekly support group</h2>
              <p>
                Connect with others, share experiences, and access practical wellbeing
                strategies in a safe and welcoming environment. Everyone is welcome.
              </p>
            </div>
            <Link href="/book#enquire" className="btn btn--primary">
              Join this Tuesday <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="section section--blush" style={{ textAlign: "center" }}>
        <div className="wrap">
          <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>Get in touch</span></Reveal>
          <Reveal delay={0.06}>
            <h2 style={{ maxWidth: "20ch", margin: "0 auto" }}>
              Ready when <span className="accent-i">you are</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ margin: "1.3rem auto 0" }}>
              Discuss your needs, book an appointment, enquire about supervision or arrange
              workplace training — I look forward to supporting you on your mental health journey.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ marginTop: "2.4rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" className="btn btn--primary">
                Book a session <span className="arrow">→</span>
              </Link>
              <Link href="/about" className="btn btn--ghost">Meet Cassie-Anne</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
