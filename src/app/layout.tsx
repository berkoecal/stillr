import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STILLR – Die Alternative im Nightlife",
  description:
    "STILLR Smart Hydration – Erstklassiges funktionales Wasser für das moderne Nightlife. Kein Zucker. Keine Zusatzstoffe. Nur Elektrolyte und natürliche Aromen.",
  authors: [{ name: "STILLR" }],
  keywords: [
    "STILLR",
    "funktionales Wasser",
    "Nightlife",
    "Elektrolyte",
    "Club Wasser",
    "zuckerfrei",
    "Hydration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
