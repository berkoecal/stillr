"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";

/* ────────────────────────────────────────────────────────
   Particle system – client-only to avoid hydration errors!
   ──────────────────────────────────────────────────────── */
function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  const [particles] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      w: Math.random() * 3 + 1,
      h: Math.random() * 3 + 1,
      left: Math.random() * 100,
      dur: Math.random() * 12 + 8,
      delay: Math.random() * 12,
      cyan: i % 2 === 0,
    })),
  );

  if (!mounted) return null;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: p.w + "px",
            height: p.h + "px",
            left: p.left + "%",
            bottom: "-10px",
            borderRadius: "50%",
            background: p.cyan ? "#00CFFF" : "#A855F7",
            boxShadow: `0 0 8px ${p.cyan ? "#00CFFF" : "#A855F7"}`,
            animation: `particle-rise ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Intersection observer hook
   ──────────────────────────────────────────────────────── */
function useInView(ref: React.RefObject<Element | null>, threshold = 0.12) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [ref, threshold]);
  return inView;
}

/* ────────────────────────────────────────────────────────
   NAVBAR
   ──────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 3rem",
        height: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(4,5,16,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "2px",
          fontSize: "1.5rem",
          fontWeight: 900,
          letterSpacing: "0.04em",
        }}
      >
        STILLR<span style={{ color: "#00CFFF", fontSize: "2rem", lineHeight: 0.7 }}>.</span>
      </div>
      <a
        href='#notify'
        style={{
          background: "transparent",
          border: "1.5px solid rgba(255,255,255,0.5)",
          color: "#fff",
          borderRadius: "100px",
          padding: "9px 24px",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#00CFFF";
          e.currentTarget.style.color = "#00CFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
          e.currentTarget.style.color = "#fff";
        }}
      >
        Early Access
      </a>
    </nav>
  );
}

/* ────────────────────────────────────────────────────────
   HERO  — CSS neon atmosphere, product photo as foreground
   ──────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className='hero-section'
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        background: "#04060f",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── CSS neon background orbs ── */}
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "-8%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(0,207,255,0.13)",
          filter: "blur(110px)",
          zIndex: 0,
          animation: "orb-drift-1 14s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-8%",
          width: "750px",
          height: "750px",
          borderRadius: "50%",
          background: "rgba(168,85,247,0.11)",
          filter: "blur(130px)",
          zIndex: 0,
          animation: "orb-drift-2 18s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "38%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(0,207,255,0.055)",
          filter: "blur(90px)",
          zIndex: 0,
          animation: "orb-drift-3 11s ease-in-out infinite",
        }}
      />

      {/* ── Subtle perspective grid ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,207,255,0.025) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(0,207,255,0.025) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.6) 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      />

      <Particles />

      {/* ── Flasche — absolut positioniert ── */}
      <div className='hero-bottle-wrap'>
        {/* Neon halo */}
        <div
          style={{
            position: "absolute",
            inset: "-40px",
            background:
              "radial-gradient(ellipse, rgba(0,207,255,0.18) 0%, rgba(168,85,247,0.10) 45%, transparent 70%)",
            filter: "blur(40px)",
            animation: "glow-pulse 5s ease-in-out infinite",
          }}
        />
        <Image
          src='/hero-bg2.png'
          alt='STILLR Flasche'
          width={1200}
          height={1600}
          quality={100}
          priority
          className='hero-bottle-img'
        />

        {/* USP Annotations — alternating left / right */}
        {(
          [
            { label: "Zero Zucker", side: "left", top: "26%" },
            { label: "Zero Süßungsmittel", side: "right", top: "40%" },
            { label: "Elektrolyte", side: "left", top: "57%", leftOverride: "13%" },
            { label: "Natürliches Yuzu & Ingwer Aroma", side: "right", top: "71%" },
          ] as {
            label: string;
            side: "left" | "right";
            top: string;
            leftOverride?: string;
            rightOverride?: string;
          }[]
        ).map((usp, i) => (
          <div
            key={usp.label}
            className={`hero-annotation hero-annotation--${usp.side}`}
            style={{
              top: usp.top,
              animation: `fade-in-up 0.6s ease ${0.65 + i * 0.13}s both`,
              ...(usp.leftOverride ? { left: usp.leftOverride } : {}),
            }}
          >
            {usp.side === "left" ? (
              // LEFT: [text] — [line] — [dot]  →  dot at bottle left edge
              <>
                <span className='hero-annotation-label'>{usp.label}</span>
                <div className='hero-annotation-line' />
                <div className='hero-annotation-dot' />
              </>
            ) : (
              // RIGHT: row-reverse on [span,line,dot] renders dot|line|span
              // dot (leftmost) lands at bottle right edge; text overlays bottle
              <>
                <span className='hero-annotation-label'>{usp.label}</span>
                <div className='hero-annotation-line' />
                <div className='hero-annotation-dot' />
              </>
            )}
          </div>
        ))}
      </div>

      {/* ── Text — linke Hälfte ── */}
      <div className='hero-content-grid'>
        {/* Left: editorial text */}
        <div>
          <p
            className='hero-overline'
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "0.75rem",
              animation: "fade-in-up 0.7s ease 0.3s both",
            }}
          >
            Funktionales Wasser · Zero Zucker · Zero Süßungsmittel
          </p>

          <h1
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              margin: 0,
              animation: "fade-in-up 0.7s ease 0.45s both",
            }}
          >
            Die
            <br />
            <span
              style={{
                background: "linear-gradient(95deg, #fff 30%, rgba(255,255,255,0.55))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Alternative.
            </span>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "1.5rem",
              animation: "fade-in-up 0.7s ease 0.6s both",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "2px",
                background: "#00CFFF",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Erstklassiges funktionales Wasser,
              <br />
              entwickelt für die Tanzfläche.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
              animation: "fade-in-up 0.7s ease 0.75s both",
            }}
          >
            <a
              href='#notify'
              style={{
                display: "inline-block",
                background: "#00CFFF",
                color: "#04060f",
                textDecoration: "none",
                borderRadius: "100px",
                padding: "14px 36px",
                fontSize: "0.9rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 0 40px rgba(0,207,255,0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(0,207,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,207,255,0.45)";
              }}
            >
              Früher Zugang
            </a>
            <a
              href='#story'
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "100px",
                padding: "14px 36px",
                fontSize: "0.9rem",
                fontWeight: 600,
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        {/* Mobile-only: Flasche + USP-Badges unter den Buttons */}
        <div className='hero-mobile-product'>
          <div className='hero-mobile-bottle'>
            <Image
              src='/hero-bg2.png'
              alt='STILLR Flasche'
              width={200}
              height={320}
              quality={100}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          <div className='hero-mobile-badges'>
            {[
              "Zero Zucker",
              "Zero Süßungsmittel",
              "Elektrolyte",
              "Natürliches Yuzu & Ingwer Aroma",
            ].map((usp) => (
              <span key={usp} className='hero-mobile-badge'>
                <span className='hero-mobile-badge-dot' />
                {usp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className='hero-scroll-indicator'>
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
   MANIFESTO   — large editorial statement
   ──────────────────────────────────────────────────────── */
function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id='story'
      ref={ref}
      style={{
        background: "#04060f",
        padding: "8rem 3rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient left glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-10%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(168,85,247,0.07)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#00CFFF",
            marginBottom: "2.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(16px)",
            transition: "all 0.7s ease",
          }}
        >
          Das Produkt
        </div>

        {/* Two-column editorial layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Left: Big statement */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: 0,
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(30px)",
                transition: "all 0.7s ease 0.1s",
              }}
            >
              Stay Sharp.
              <br />
              <span style={{ color: "#00CFFF" }}>Stay Out</span>
              <br />
              Longer.
            </h2>
            <p
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(30px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              Wir haben STILLR für alle kreiert, die die Nacht voll auskosten — ohne Zucker-Crash,
              ohne Kater, ohne Kompromisse.
            </p>

            {/* Ingredient facts — minimal, raw */}
            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "1px",
                opacity: inView ? 1 : 0,
                transition: "all 0.7s ease 0.3s",
              }}
            >
              {[
                ["0g", "Zucker"],
                ["0kcal", "Kalorien"],
                ["3+", "Elektrolyte"],
                ["100%", "Natürliche Aromen"],
              ].map(([val, label]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.1rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product photos stacked */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(50px)",
              transition: "all 0.9s ease 0.35s",
            }}
          >
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src='/frau-rooftop.webp'
                alt='STILLR Rooftop'
                width={560}
                height={640}
                quality={100}
                style={{ objectFit: "cover", display: "block", width: "100%", height: "auto" }}
              />
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src='/frau-im-club.webp'
                alt='STILLR im Club'
                width={560}
                height={640}
                quality={100}
                style={{ objectFit: "cover", display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
   FEATURES — Raw horizontal list, editorial  
   ──────────────────────────────────────────────────────── */
const FEATURES = [
  {
    num: "01",
    title: "Elektrolyt-Komplex",
    desc: "Magnesium, Kalium & Natrium — optimale Hydrierung die ganze Nacht.",
  },
  {
    num: "02",
    title: "Clean Label",
    desc: "Kein Zucker. Keine künstlichen Süßstoffe. Kein Bullshit.",
  },
  {
    num: "03",
    title: "Pure Taste",
    desc: "Natürliche Fruchtaromen. Echter Geschmack, null Kompromisse.",
  },
  { num: "04", title: "Premium Glas", desc: "Eine Flasche, die an jeder Bar zum Statement wird." },
];

function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      id='features'
      className='features-section'
      style={{
        background: "#060810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "7rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(0,207,255,0.05)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "4rem",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease",
          }}
        >
          Was drin steckt
        </div>

        <div className='features-grid'>
          {FEATURES.map((f, i) => (
            <div
              key={f.num}
              className='features-item'
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(24px)",
                transition: `all 0.7s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#00CFFF",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                {f.num}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
   QUOTE BREAK — bold brand statement  
   ──────────────────────────────────────────────────────── */
function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      style={{
        background: "#04060f",
        padding: "8rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big ambient circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,207,255,0.07) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Tag pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
          justifyContent: "center",
          marginBottom: "4rem",
          position: "relative",
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        {[
          "Club Ready",
          "Bar Approved",
          "Kein Kater",
          "Volle Energie",
          "Party-Proof",
          "Alkoholfrei",
        ].map((tag) => (
          <span
            key={tag}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              padding: "6px 16px",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "1.5rem",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease 0.1s",
          }}
        >
          Die Philosophie
        </p>
        <blockquote
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 auto",
            maxWidth: "900px",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          &ldquo;Hydrate without
          <br />
          <span style={{ color: "#00CFFF" }}>killing the vibe.</span>&rdquo;
        </blockquote>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
   NOTIFY  — email capture, minimal and sharp
   ──────────────────────────────────────────────────────── */
function NotifySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [state, handleSubmit] = useForm("xbdqorgl");

  return (
    <section
      id='notify'
      ref={ref}
      style={{
        background: "#060810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(0,207,255,0.08) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "760px",
          margin: "0 auto",
          padding: "9rem 2rem 8rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#00CFFF",
            marginBottom: "1.5rem",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease",
          }}
        >
          ✦ Coming Soon ✦
        </p>

        <h2
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          Sei der Erste,
          <br />
          <span style={{ color: "#00CFFF" }}>der es weiß.</span>
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "1.05rem",
            marginBottom: "3rem",
            lineHeight: 1.7,
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease 0.2s",
          }}
        >
          STILLR kommt bald in die Clubs und Bars deiner Stadt. Trag dich ein — Frühzugang,
          exklusiv.
        </p>

        {state.succeeded ? (
          <div
            style={{
              display: "inline-block",
              border: "1.5px solid rgba(0,207,255,0.3)",
              borderRadius: "20px",
              padding: "1.5rem 2.5rem",
              animation: "fade-in-up 0.5s ease both",
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>✓</div>
            <div style={{ color: "#00CFFF", fontWeight: 700 }}>Du bist dabei.</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginTop: "4px" }}>
              Wir melden uns sobald STILLR live geht.
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='notify-form'
            style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.3s" }}
          >
            <input
              type='email'
              name='email'
              required
              placeholder='deine@email.de'
              className='notify-input'
            />
            <button
              type='submit'
              className='notify-btn'
              disabled={state.submitting}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 30px rgba(0,207,255,0.6)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {state.submitting ? "..." : "Eintragen"}
            </button>
          </form>
        )}
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.72rem", marginTop: "1.25rem" }}>
          Kein Spam. Abmeldung jederzeit möglich.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
   MOBILE PRODUCT BLOCK — nur auf ≤768px sichtbar
   Flasche links · USP-Badges rechts
   ──────────────────────────────────────────────────────── */
function MobileProductBlock() {
  const usps = [
    "Zero Zucker",
    "Zero Süßungsmittel",
    "Elektrolyte",
    "Natürliches Yuzu & Ingwer Aroma",
  ];
  return (
    <div className='mobile-product-block'>
      <div className='mobile-product-bottle'>
        <Image
          src='/hero-bg2.png'
          alt='STILLR Flasche'
          width={200}
          height={320}
          quality={100}
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
        />
      </div>
      <div className='mobile-product-usps'>
        {usps.map((usp) => (
          <div key={usp} className='mobile-product-usp'>
            <div className='mobile-product-usp-dot' />
            <span className='mobile-product-usp-label'>{usp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   FOOTER
   ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: "#04060f",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.04em" }}>
        STILLR<span style={{ color: "#00CFFF" }}>.</span>
      </div>
      <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
        © 2025 STILLR · Smart Hydration für das Nightlife
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          ["Impressum", "/impressum"],
          ["Datenschutz", "/datenschutz"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              fontSize: "0.75rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────
   ROOT
   ──────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <FeaturesSection />
      <QuoteSection />
      <NotifySection />
      <Footer />
    </>
  );
}
