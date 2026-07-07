import Link from "next/link";
import { Reveal, BookButton } from "@/components/Motion";

export const metadata = {
  title: "Services & Support Plans",
  description:
    "Monthly wellbeing packages, structured CBT therapy, one-off support sessions, Behavioural Family Therapy, relapse prevention, DBT skills, medication support and care coordination.",
};

const ANCHORS = [
  ["#plans", "Monthly packages"],
  ["#one-off", "One-off sessions"],
  ["#bft", "Family therapy"],
  ["#relapse", "Relapse prevention"],
  ["#dbt", "DBT skills"],
  ["#goals", "Goals & care planning"],
  ["#medication", "Medication support"],
  ["#coordination", "Care coordination"],
];

const PLANS = [
  {
    name: "Guided Wellbeing",
    price: "£40",
    desc: "Perfect for those looking for regular support and guidance to maintain their wellbeing.",
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

function Service({ id, kicker, title, price, intro, listIntro, items, note, children }) {
  return (
    <Reveal as="article" className="svc" id={id}>
      <div className="svc__head">
        <span className="svc__kicker">{kicker}</span>
        <h3>{title}</h3>
        {price && <div className="svc__price">{price}</div>}
      </div>
      <div className="svc__body">
        {intro && <p>{intro}</p>}
        {children}
        {items && (
          <>
            {listIntro && <p style={{ marginTop: "1rem", fontWeight: 600 }}>{listIntro}</p>}
            <ul className="leaf-list">
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </>
        )}
        {note && <p className="svc__note">{note}</p>}
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Support shaped <span className="accent-i">around you</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              From ongoing monthly plans to one-off sessions and specialist therapeutic
              approaches — every option includes free text support and access to the online
              support group.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="pills">
              {ANCHORS.map(([href, label]) => (
                <a key={href} href={href} className="pill">{label}</a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PACKAGES ---------- */}
      <section className="section section--sand" id="plans" style={{ scrollMarginTop: "90px" }}>
        <div className="wrap">
          <Reveal><span className="eyebrow">Monthly support packages</span></Reveal>
          <Reveal delay={0.06}><h2>Three simple plans</h2></Reveal>

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
        </div>
      </section>

      {/* ---------- ADDITIONAL SERVICES ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal><span className="eyebrow">Specialist support</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Therapeutic approaches <span className="accent-i">and practical care</span></h2>
          </Reveal>

          <div style={{ marginTop: "2rem" }}>
            <Service
              id="one-off"
              kicker="Flexible support"
              title="One-off support sessions"
              intro="For those who do not require ongoing therapy but would benefit from a single supportive appointment — a flexible space to feel heard, supported and understood without committing to ongoing therapy."
              listIntro="These sessions can be used for:"
              items={[
                "Talking things through in a safe, non-judgemental space",
                "Emotional support during difficult periods",
                "Mindfulness and relaxation-based techniques",
                "Grounding and coping strategies",
                "Brief problem-solving and clarity",
              ]}
            />

            <Service
              id="bft"
              kicker="For families & carers"
              title="Behavioural Family Therapy"
              intro="A structured, evidence-based approach that involves working with individuals and their families or carers. It focuses on improving communication, reducing stress within relationships, and supporting better understanding of mental health conditions."
              listIntro="It can help to:"
              items={[
                "Reduce conflict and misunderstandings within families",
                "Improve communication and emotional expression",
                "Increase understanding of conditions such as psychosis or bipolar disorder",
                "Support families in responding more effectively to symptoms",
                "Reduce relapse risk by improving home support systems",
              ]}
              note="Particularly beneficial when mental health difficulties impact family relationships, or when families want to feel more confident in supporting their loved one."
            />

            <Service
              id="relapse"
              kicker="Staying well"
              title="Relapse prevention work"
              intro="Relapse prevention focuses on identifying early warning signs of mental health deterioration and developing strategies to maintain stability and wellbeing."
              listIntro="It can help you to:"
              items={[
                "Recognise early warning signs of relapse",
                "Understand personal triggers and patterns",
                "Develop practical coping strategies",
                "Build a personalised wellness and crisis plan",
                "Increase confidence in managing your mental health long-term",
              ]}
              note="Especially helpful for recurring conditions such as depression, bipolar disorder, anxiety disorders or psychosis, where early intervention can prevent deterioration."
            />

            <Service
              id="dbt"
              kicker="Emotional skills"
              title="DBT skills training"
              intro="Dialectical Behaviour Therapy skills are practical tools designed to help manage intense emotions, distress and interpersonal difficulties."
              listIntro="DBT skills training can help you to:"
              items={[
                "Regulate strong or overwhelming emotions",
                "Reduce self-destructive or impulsive behaviours",
                "Tolerate distress without making situations worse",
                "Improve relationships and communication",
                "Increase emotional resilience and stability",
              ]}
              note="Often helpful for people who experience emotional intensity, mood instability, self-harm urges, or difficulty managing stress."
            />

            <Service
              id="goals"
              kicker="Direction & momentum"
              title="Goal setting & care planning"
              intro="Goal setting and care planning help you to create clear, realistic steps towards improving your mental health and overall wellbeing. Care planning is collaborative and personalised, ensuring support is focused on your individual needs and recovery journey."
              listIntro="This can support you to:"
              items={[
                "Identify what matters most to you",
                "Set achievable short and long-term goals",
                "Break challenges into manageable steps",
                "Track progress over time",
                "Build motivation and direction",
              ]}
            />

            <Service
              id="medication"
              kicker="Informed decisions"
              title="Medication support"
              intro="Support around understanding and managing your prescribed medication as part of your overall care."
              listIntro="This includes:"
              items={[
                "Understanding how medication works and what it is for",
                "Exploring side effects and how to manage them",
                "Supporting adherence and routine",
                "Helping you prepare questions for your prescriber",
                "Monitoring how medication is affecting your wellbeing",
              ]}
              note="Please note: I do not prescribe medication, but I can support you to make informed decisions and work alongside your GP or psychiatrist."
            />

            <Service
              id="coordination"
              kicker="Joined-up care"
              title="Care coordination"
              intro="Care coordination helps ensure your support feels joined-up rather than fragmented across different services."
              listIntro="This can involve:"
              items={[
                "Communicating (with consent) with other professionals involved in your care",
                "Supporting you to navigate NHS or private services",
                "Helping you understand care pathways and options",
                "Coordinating therapy, wellbeing and external support",
                "Ensuring your care plan is consistent and person-centred",
              ]}
              note="Especially helpful if you are currently or recently under NHS mental health services, or feel your care needs better continuity."
            />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section--blush" style={{ textAlign: "center" }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ maxWidth: "22ch", margin: "0 auto" }}>
              Not sure which is right? <span className="accent-i">Let&rsquo;s talk it through.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ marginTop: "2.2rem" }}>
              <Link href="/book" className="btn btn--primary">
                Get in touch <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
