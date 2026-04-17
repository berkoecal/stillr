import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – STILLR",
};

export default function Impressum() {
  return (
    <main style={{ background: "#04060f", minHeight: "100vh", color: "#fff", fontFamily: "inherit" }}>
      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 3rem", height: "76px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(4,5,16,0.8)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: "2px", fontSize: "1.5rem", fontWeight: 900, letterSpacing: "0.04em", textDecoration: "none", color: "#fff" }}>
          STILLR<span style={{ color: "#00CFFF", fontSize: "2rem", lineHeight: 0.7 }}>.</span>
        </Link>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "10rem 2rem 6rem" }}>

        {/* Back */}
        <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "3rem" }}>
          ← Zurück
        </Link>

        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#00CFFF", marginBottom: "1rem" }}>
          Rechtliches
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: "3rem" }}>
          Impressum
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>STILLR Hydration UG (haftungsbeschränkt) (i.G.)</p>
          <p>Neubrückstr. 5</p>
          <p>40213 Düsseldorf</p>
          <p>Deutschland</p>
          <p style={{ marginTop: "0.75rem", color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>
            Gesellschaft in Gründung (i.G.) — Handelsregistereintragung beantragt
          </p>
        </Section>

        <Section title="Vertreten durch">
          <p>Geschäftsführer: Tunahan Yildiz, Berk Öcal</p>
        </Section>

        <Section title="Kontakt">
          <p>E-Mail: <a href="mailto:hello@stillr.de" style={{ color: "#00CFFF", textDecoration: "none" }}>hello@stillr.de</a></p>
          <p>Telefon: [Telefonnummer]</p>
        </Section>

        <Section title="Handelsregister">
          <p>Eintragung beantragt beim Amtsgericht Düsseldorf</p>
        </Section>

        <Section title="Umsatzsteuer-ID">
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: wird nach Eintragung ergänzt</p>
        </Section>

        <Section title="Verantwortlich für den Inhalt gem. § 18 Abs. 2 MStV">
          <p>Tunahan Yildiz, Berk Öcal</p>
          <p>Neubrückstr. 5, 40213 Düsseldorf</p>
        </Section>

        <Section title="EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#00CFFF", textDecoration: "none" }}>
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </Section>

        <p style={{ marginTop: "4rem", color: "rgba(255,255,255,0.2)", fontSize: "0.72rem" }}>
          © 2025 STILLR GmbH
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>
        {title}
      </h2>
      <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "0.1rem" }}>
        {children}
      </div>
      <div style={{ marginTop: "2rem", height: "1px", background: "rgba(255,255,255,0.06)" }} />
    </div>
  );
}
