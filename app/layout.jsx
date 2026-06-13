import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  // EDIT: swap for the client's real domain once connected in Vercel
  metadataBase: new URL("https://cognitivecalmness.co.uk"),
  title: {
    default: "Cognitive Calmness — CBT Therapy & Mental Health Support | Cassie-Anne Simmonds",
    template: "%s — Cognitive Calmness",
  },
  description:
    "Cassie-Anne Simmonds — Registered Mental Health Nurse and BABCP Accredited CBT Therapist with over 15 years of NHS experience. Flexible monthly wellbeing support, structured CBT, I-CBT for OCD, supervision and training.",
  openGraph: {
    title: "Cognitive Calmness — Cassie-Anne Simmonds",
    description: site.tagline,
    images: ["/logo.jpg"],
  },
};

// Tints the mobile browser chrome (address bar) to the hero blush.
export const viewport = {
  themeColor: "#CDB5B5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital,wght@1,500;1,600&family=Figtree:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
