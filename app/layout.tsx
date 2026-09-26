import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Salvino — QUANTUM | Physics × Data × Finance × Intelligence",
  description:
    "Joshua Salvino — data analyst and applied-mathematics researcher working across quantitative finance, credit risk, machine learning, and quantum measurement theory. Modeling uncertainty through mathematics, data, and intelligent systems.",
  metadataBase: new URL("https://joshuasalvino.dev"),
  openGraph: {
    title: "Joshua Salvino — QUANTUM",
    description:
      "Physics × Data × Finance × Intelligence. Modeling uncertainty through mathematics, data, and intelligent systems.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="grain bg-void text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
