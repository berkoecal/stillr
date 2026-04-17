import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – STILLR",
};

export default function Datenschutz() {
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

        <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "3rem" }}>
          ← Zurück
        </Link>

        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#00CFFF", marginBottom: "1rem" }}>
          Rechtliches
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: "0.75rem" }}>
          Datenschutz­erklärung
        </h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", marginBottom: "3rem" }}>
          Stand: April 2025
        </p>

        <Section title="1. Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            STILLR Hydration UG (haftungsbeschränkt) (i.G.)<br />
            Neubrückstr. 5<br />
            40213 Düsseldorf<br />
            Deutschland<br />
            E-Mail: <a href="mailto:hello@stillr.de" style={{ color: "#00CFFF", textDecoration: "none" }}>hello@stillr.de</a>
          </p>
        </Section>

        <Section title="2. Erhebung und Speicherung personenbezogener Daten">
          <p>
            Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, die keine Rückschlüsse auf Ihre Person zulassen.
          </p>
        </Section>

        <Section title="3. E-Mail-Erfassung (Early-Access-Formular)">
          <p>
            Auf unserer Website bieten wir die Möglichkeit, sich für unseren Early-Access-Newsletter einzutragen. Die dabei eingegebene E-Mail-Adresse wird ausschließlich für den Versand von Informationen rund um den Marktstart von STILLR verwendet.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung kann jederzeit per E-Mail an{" "}
            <a href="mailto:hello@stillr.de" style={{ color: "#00CFFF", textDecoration: "none" }}>hello@stillr.de</a>{" "}
            widerrufen werden, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Wir speichern Ihre E-Mail-Adresse ausschließlich so lange, wie es für den genannten Zweck erforderlich ist, oder bis Sie Ihre Einwilligung widerrufen.
          </p>
        </Section>

        <Section title="4. Hosting">
          <p>
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Vercel ist Empfänger Ihrer personenbezogenen Daten und als Auftragsverarbeiter für uns tätig. Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#00CFFF", textDecoration: "none" }}>
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </Section>

        <Section title="5. Cookies">
          <p>
            Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools. Es werden ausschließlich technisch notwendige Ressourcen geladen, die für den Betrieb der Seite erforderlich sind.
          </p>
        </Section>

        <Section title="6. Externe Schriftarten">
          <p>
            Zur einheitlichen Darstellung verwenden wir Google Fonts (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Beim Aufruf der Seite lädt Ihr Browser die benötigten Schriftarten direkt von Google-Servern. Dabei kann Google erfahren, dass unsere Website aufgerufen wurde. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </Section>

        <Section title="7. Ihre Rechte als betroffene Person">
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {[
              "Recht auf Auskunft (Art. 15 DSGVO)",
              "Recht auf Berichtigung (Art. 16 DSGVO)",
              "Recht auf Löschung (Art. 17 DSGVO)",
              "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
              "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
              "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
            ].map(r => (
              <li key={r} style={{ listStyle: "none", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#00CFFF", marginTop: "2px", flexShrink: 0 }}>–</span>
                {r}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "0.75rem" }}>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:hello@stillr.de" style={{ color: "#00CFFF", textDecoration: "none" }}>hello@stillr.de</a>
          </p>
        </Section>

        <Section title="8. Beschwerderecht bei einer Aufsichtsbehörde">
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
            Kavalleriestr. 2–4, 40213 Düsseldorf<br />
            <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" style={{ color: "#00CFFF", textDecoration: "none" }}>www.ldi.nrw.de</a>
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
