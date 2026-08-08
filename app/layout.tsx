import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://patienttracltd.com"),
  title: "PatientTrac Limited | International Financial Consulting",
  description:
    "London-based international financial consulting and corporate development across public and private markets.",
  keywords: [
    "financial consulting",
    "corporate development",
    "corporate finance",
    "mergers and acquisitions",
    "public markets",
  ],
  openGraph: {
    title: "PatientTrac Limited",
    description: "International financial consulting and corporate development. Success driven. Time proven.",
    type: "website",
    url: "https://patienttracltd.com",
    images: ["/london-financial-skyline.jpg"],
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
