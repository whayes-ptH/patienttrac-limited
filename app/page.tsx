import Image from "next/image";

const markets = ["OTC", "NASDAQ", "LSE", "SIX", "FRANKFURT"];

const services = [
  {
    number: "01",
    title: "Corporate Financings",
    description:
      "Innovative solutions across private and public equity markets, shaped around each company’s capital needs.",
    detail: "Private equity · Public equity · Capital strategy",
  },
  {
    number: "02",
    title: "Mergers & Acquisitions",
    description:
      "Experienced guidance through complex M&A transactions, from strategic evaluation to integration and value creation.",
    detail: "Transaction strategy · Execution · Integration",
  },
  {
    number: "03",
    title: "Public Entity Development",
    description:
      "Intelligent solutions for public entity development across demanding regulatory and market environments.",
    detail: "Market readiness · Corporate development · Advisory",
  },
  {
    number: "04",
    title: "Global Market Access",
    description:
      "Support for access and operations across leading North American and European public markets.",
    detail: "OTC · NASDAQ · LSE · SIX · Frankfurt",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PatientTrac Limited home">
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
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/#contact">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="/">Home</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/london-financial-skyline.jpg"
            alt="Modern financial district skyline with a global market overlay"
            fill
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="hero-overlay" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow light">London · Global perspective</p>
            <h1 id="hero-title">Financial strategy for ambitious companies.</h1>
            <p className="hero-copy">
              PatientTrac Limited is an international financial consulting and
              corporate development firm. Success driven. Time proven.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our services <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost" href="#about">
                Discover PatientTrac
              </a>
            </div>
          </div>
          <div className="hero-facts" aria-label="PatientTrac Limited highlights">
            <div><span>01</span><p>London based</p></div>
            <div><span>02</span><p>International reach</p></div>
            <div><span>03</span><p>Multidisciplinary teams</p></div>
          </div>
        </section>

        <section className="market-ribbon" id="markets" aria-label="Markets served">
          <p>Market experience across</p>
          <div>
            {markets.map((market) => <span key={market}>{market}</span>)}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">Discover us</p>
            <h2 id="about-title">Global reach. Experienced counsel. Clear outcomes.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              PatientTrac Limited is a London, England based international
              financial consulting and corporate development firm.
            </p>
            <p>
              Our professionals include attorneys, accountants, management
              consultants, and regulatory experts—bringing the right perspective
              to complex cross-border opportunities.
            </p>
          </div>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Global reach</h3>
              <p>Completed projects in North America, Latin America, Europe, and Asia.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Expert teams</h3>
              <p>Multidisciplinary professionals aligned around each engagement.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Success driven</h3>
              <p>Intelligent solutions focused on tangible results for our clients.</p>
            </article>
          </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="services-intro">
            <div className="section-heading inverse">
              <p className="eyebrow light">What we do</p>
              <h2 id="services-title">Financial solutions built around the mandate.</h2>
            </div>
            <p>
              We combine capital markets perspective, corporate development
              experience, and regulatory insight to help clients move through
              consequential transactions with clarity.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <small>{service.detail}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section approach" aria-labelledby="approach-title">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 id="approach-title">Senior perspective at every stage.</h2>
          </div>
          <div className="approach-steps">
            <article>
              <span>01</span>
              <div><h3>Understand</h3><p>Define the opportunity, constraints, stakeholders, and desired outcome.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Structure</h3><p>Align financial, corporate, and regulatory considerations into a clear strategy.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Advance</h3><p>Support decisive execution with focused, multidisciplinary counsel.</p></div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-main">
            <p className="eyebrow light">Start a conversation</p>
            <h2 id="contact-title">Discuss your next strategic move.</h2>
            <p>
              Connect with PatientTrac Limited regarding corporate financing,
              M&A, public entity development, or global market access.
            </p>
            <a className="button button-primary" href="mailto:legal@patienttracltd.com">
              Contact PatientTrac <span aria-hidden="true">↗</span>
            </a>
          </div>
          <address className="contact-details">
            <div>
              <span>London office</span>
              <p>1 Gracechurch Street, 5th Floor<br />London, England EC3V 0DD</p>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:legal@patienttracltd.com">legal@patienttracltd.com</a>
            </div>
            <div>
              <span>Telephone</span>
              <a href="tel:+447700164858">+44 7700 164858</a>
            </div>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/patienttrac-limited-logo.png" alt="" width={48} height={52} unoptimized />
          <div><strong>PatientTrac Limited</strong><p>International Financial Consulting & Corporate Development.</p></div>
        </div>
        <div className="footer-links">
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
