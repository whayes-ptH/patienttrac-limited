import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://patienttracltd.com"),
  title: "PatientTrac Limited | International Financial Consulting & Corporate Development",
  description: "London-based international financial consulting and corporate development across corporate financings, M&A, public entity development, strategic advisory, and global market access.",
  keywords: ["financial consulting","corporate development","corporate finance","mergers and acquisitions","public markets","global market access","strategic advisory"],
  openGraph: {
    title: "PatientTrac Limited",
    description: "Turning opportunity into impact. International financial consulting and corporate development from London to global markets.",
    type: "website",
    url: "https://patienttracltd.com",
    images: ["/brochure/cover.webp"],
  },
  icons: { icon: "/brand/patienttrac-crest.webp", shortcut: "/brand/patienttrac-crest.webp", apple: "/brand/patienttrac-crest.webp" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={dmSans.variable}>{children}</body></html>;
}
