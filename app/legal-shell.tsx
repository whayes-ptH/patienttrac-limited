import Image from "next/image";
import type { ReactNode } from "react";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export default function LegalShell({ eyebrow, title, summary, children }: LegalShellProps) {
  return (
    <>
      <header className="site-header legal-header">
        <a className="brand" href="/" aria-label="PatientTrac Limited home">
          <Image
            className="brand-mark"
            src="/patienttrac-limited-logo.png"
            alt=""
            width={54}
            height={58}
            priority
            unoptimized
          />
          <span className="brand-name">
            <strong>PatientTrac</strong> Limited
            <small>International financial consulting</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Legal navigation">
          <a href="/">Home</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/#contact">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile legal navigation">
            <a href="/">Home</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main className="legal-page">
        <section className="legal-hero">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <span>Effective 7 August 2026</span>
        </section>

        <div className="legal-layout">
          <aside className="legal-aside" aria-label="Company details">
            <p className="eyebrow">Company details</p>
            <strong>PatientTrac Limited</strong>
            <address>
              Corporate Headquarters<br />
              1 Gracechurch Street, 5th Floor<br />
              London, England EC3V 0DD
            </address>
            <a href="mailto:legal@patienttracltd.com">legal@patienttracltd.com</a>
            <a href="tel:+447700164858">+44 7700 164858</a>
            <small>LEI 894500A5OSS53J67IN78</small>
          </aside>
          <article className="legal-content">{children}</article>
        </div>
      </main>

      <footer className="site-footer legal-footer">
        <div className="footer-brand">
          <Image src="/patienttrac-limited-logo.png" alt="" width={48} height={52} unoptimized />
          <div><strong>PatientTrac Limited</strong><p>International Financial Consulting & Corporate Development.</p></div>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-meta">
          <p>LEI 894500A5OSS53J67IN78</p>
          <p>© 2026 PatientTrac Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
