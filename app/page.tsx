import Image from "next/image";

const markets = ["OTC", "NASDAQ", "LSE", "SIX", "FRANKFURT"];

export default function Home() {
  return (
    <main>
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
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#markets">Markets</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#markets">Markets</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

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
    </main>
  );
}
