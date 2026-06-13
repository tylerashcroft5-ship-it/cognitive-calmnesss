import Link from "next/link";
import { site, navLinks } from "@/lib/site";
import { Sprig } from "@/components/Nav";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__brand">
              <Sprig />
              <span>COGNITIVE&nbsp;CALMNESS</span>
            </Link>
            <p className="footer__tag">{site.tagline}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li><Link href="/book">Book a session</Link></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/services#one-off">One-off sessions</Link></li>
              <li><Link href="/i-cbt">I-CBT for OCD</Link></li>
              <li><Link href="/services#relapse">Relapse prevention</Link></li>
              <li><Link href="/services#dbt">DBT skills</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Free support group — {site.group.day.toLowerCase()}, {site.group.time}. Everyone welcome.
            </p>
          </div>
        </div>
      </div>

      <div className="footer__crisis">
        <div className="wrap">
          Cognitive Calmness is not an emergency service. If you need urgent help, please call 999,
          contact NHS 111, or call the Samaritans free on 116&nbsp;123 — any time, day or night.
        </div>
      </div>

      <div className="footer__legal">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: ".8rem", justifyContent: "space-between", width: "100%" }}>
          <span>© {new Date().getFullYear()} {site.name} · {site.owner}</span>
          <span>Registered Mental Health Nurse · BABCP Accredited CBT Therapist</span>
        </div>
      </div>
    </footer>
  );
}
