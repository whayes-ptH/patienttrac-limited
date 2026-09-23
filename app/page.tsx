import Image from "next/image";

const regions = [
  { name: "North America", copy: "Experience across the United States and Canada, including healthcare, technology, financial services, public markets, and growth-stage businesses." },
  { name: "Latin America", copy: "Cross-border perspective and strategic relationships supporting opportunities across Colombia, Brazil, and other Latin American markets." },
  { name: "Europe", copy: "London-based perspective with experience across the United Kingdom, Germany, Switzerland, and other leading European financial centres." },
  { name: "Asia", copy: "International reach into Hong Kong, Singapore, and other dynamic Asian markets where capital, technology, and growth intersect." },
];

const services = [
  { n: "01", title: "Corporate Financings", copy: "Innovative private and public equity solutions shaped around capital requirements, strategic objectives, growth stage, and market conditions.", detail: "Private equity · Public equity · Capital strategy" },
  { n: "02", title: "Mergers & Acquisitions", copy: "Experienced guidance from strategic assessment and valuation through transaction structuring, due diligence, negotiation, execution, and integration.", detail: "Strategy · Valuation · Execution · Integration" },
  { n: "03", title: "Public Entity Development", copy: "Practical support for market readiness, governance, disclosure, investor relations, corporate development, and public-company strategy.", detail: "Readiness · Governance · Advisory" },
  { n: "04", title: "Global Market Access", copy: "Support for access and operations across leading North American and European markets, including OTC, NASDAQ, LSE, SIX, and Frankfurt.", detail: "OTC · NASDAQ · LSE · SIX · Frankfurt" },
  { n: "05", title: "Cross-Border Solutions", copy: "Coordinated financial, corporate, and regulatory perspective for international expansion and multi-jurisdictional transactions.", detail: "International expansion · Multi-jurisdictional execution" },
  { n: "06", title: "Strategic Advisory", copy: "Senior perspective for consequential decisions involving capital structure, growth, acquisitions, market positioning, and long-term value creation.", detail: "Insight · Structure · Execution" },
];

const professionals = [
  ["Attorneys", "Corporate, securities, governance, and international legal perspective."],
  ["Financial Professionals", "Financial analysis, valuation, modeling, and capital-structure expertise."],
  ["Management Consultants", "Strategic and operational perspective focused on practical execution."],
  ["Regulatory Specialists", "Cross-market regulatory insight designed to identify risk and enable opportunity."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PatientTrac Limited home">
          <Image src="/brand/patienttrac-signature.webp" alt="PatientTrac Limited" width={320} height={107} priority unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#foundation">Foundation</a>
          <a href="#reach">Global Reach</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#foundation">Foundation</a>
            <a href="#reach">Global Reach</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image className="hero-bg" src="/london-financial-skyline.jpg" alt="London financial district" fill sizes="100vw" priority unoptimized />
          <div className="hero-scrim" />
          <div className="hero-copy-wrap">
            <p className="eyebrow">London based · Global perspective</p>
            <h1 id="hero-title">Turning opportunity <em>into impact.</em></h1>
            <p className="hero-copy">PatientTrac Limited is an international financial consulting and corporate development firm helping businesses, investors, and innovators navigate complex transactions and global markets with clarity.</p>
            <div className="hero-actions">
              <a className="button gold" href="#services">Explore our capabilities <span>↗</span></a>
              <a className="button outline" href="#contact">Discuss your next move</a>
            </div>
            <div className="hero-pills" aria-label="PatientTrac highlights">
              <span>London based</span><span>International reach</span><span>Multidisciplinary teams</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <Image className="hero-crest" src="/brand/patienttrac-crest.webp" alt="" width={300} height={300} priority unoptimized />
            <Image className="hero-poster" src="/brochure/cover.webp" alt="" width={520} height={735} priority unoptimized />
          </div>
        </section>

        <section className="market-strip" aria-label="Market experience">
          <span>Market experience across</span>
          <div><strong>OTC</strong><strong>NASDAQ</strong><strong>LSE</strong><strong>SIX</strong><strong>FRANKFURT</strong></div>
        </section>

        <section className="section foundation" id="foundation">
          <div className="section-kicker">About PatientTrac Limited</div>
          <div className="section-visual wide"><Image src="/brochure/foundation.webp" alt="PatientTrac Limited London and global advisory presentation" width={520} height={735} unoptimized /></div>
          <div className="foundation-grid">
            <div>
              <h2>Our foundation is built on <em>experience, insight, and execution.</em></h2>
              <p className="lead">PatientTrac Limited is a London, England based international financial consulting and corporate development firm.</p>
              <p>We combine deep industry knowledge, strategic perspective, financial analysis, and practical implementation expertise. Each engagement begins with the client’s objectives and is structured around the realities of the transaction, the market, the regulatory environment, and the desired outcome.</p>
              <p>Our London headquarters provides a base in one of the world’s leading financial centres while our international relationships extend across multiple continents.</p>
            </div>
            <aside className="foundation-panel">
              <span className="panel-label">Global insight. Greater possibilities.</span>
              <div className="value-row"><b>01</b><div><strong>Local roots</strong><p>London perspective at the centre of a global network.</p></div></div>
              <div className="value-row"><b>02</b><div><strong>Trusted relationships</strong><p>Long-term partnerships shaped by integrity, responsiveness, and results.</p></div></div>
              <div className="value-row"><b>03</b><div><strong>Clear outcomes</strong><p>Intelligent solutions focused on practical execution and tangible value.</p></div></div>
            </aside>
          </div>
        </section>

        <section className="section reach" id="reach">
          <div className="section-heading">
            <div><p className="eyebrow">Our global reach</p><h2>Local expertise. <em>Global opportunities.</em></h2></div>
            <p>Our international presence and relationships help clients identify opportunities, coordinate across jurisdictions, and move through complex economic and regulatory environments.</p>
          </div>
          <div className="section-visual wide"><Image src="/brochure/global-reach.webp" alt="PatientTrac Limited global reach presentation" width={520} height={735} unoptimized /></div>
          <div className="region-grid">
            {regions.map((region, i) => <article key={region.name}><span>0{i+1}</span><h3>{region.name}</h3><p>{region.copy}</p></article>)}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading inverse">
            <div><p className="eyebrow">What we do</p><h2>Financial solutions <em>built around the mandate.</em></h2></div>
            <p>We combine capital markets perspective, corporate development experience, and regulatory insight to help clients unlock value and pursue strategic opportunities.</p>
          </div>
          <div className="section-visual wide dark"><Image src="/brochure/services.webp" alt="PatientTrac Limited financial services presentation" width={520} height={735} unoptimized /></div>
          <div className="service-grid">
            {services.map(service => (
              <article className="service-card" key={service.n}>
                <div className="service-number">{service.n}</div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <small>{service.detail}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section capital">
          <div className="section-visual wide"><Image src="/brochure/capital-solutions.webp" alt="PatientTrac Limited capital solutions presentation" width={520} height={735} unoptimized /></div>
          <div className="capital-grid">
            <div className="capital-copy">
              <p className="eyebrow">Core capabilities</p>
              <h2>Capital solutions for <em>what’s next.</em></h2>
              <p>PatientTrac develops financing and transaction strategies aligned with the client’s objectives, capital requirements, risk profile, and growth ambitions.</p>
              <div className="capability-list">
                <div><span>Private equity</span><p>Strategic access to investors, family offices, and private-capital partners for growth, recapitalization, acquisitions, and transformation.</p></div>
                <div><span>Public equity</span><p>Support for public-market transactions, offerings, PIPE structures, market positioning, and investor engagement.</p></div>
                <div><span>Capital structure</span><p>Advice across equity, debt, convertible instruments, and other alternatives designed to improve flexibility and long-term value.</p></div>
              </div>
            </div>
            <div className="capital-copy border-left">
              <p className="eyebrow">Transactions</p>
              <h2>Mergers &amp; acquisitions with <em>disciplined execution.</em></h2>
              <p>From strategic assessment through closing and integration, our approach combines valuation, structuring, diligence, negotiation, financing, and execution.</p>
              <div className="capability-list compact">
                <div><span>Strategic assessment</span><p>Clarify the rationale, identify targets or counterparties, and define the transaction path.</p></div>
                <div><span>Valuation &amp; structuring</span><p>Analyze value, structure terms, capital requirements, and risk allocation.</p></div>
                <div><span>Due diligence &amp; negotiation</span><p>Coordinate focused diligence and negotiation to protect value and support closing.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section markets">
          <div className="section-visual wide dark"><Image src="/brochure/market-access.webp" alt="PatientTrac Limited global market access presentation" width={520} height={735} unoptimized /></div>
          <div className="markets-grid">
            <div>
              <p className="eyebrow">Public entity development</p>
              <h2>From ambition <em>to market.</em></h2>
              <p>We help companies prepare for public-market complexity with practical solutions across readiness, governance, disclosure, investor relations, corporate development, and strategic positioning.</p>
            </div>
            <div className="exchange-panel">
              <p className="eyebrow">Global market access</p>
              <h3>Connecting companies to global capital.</h3>
              <div className="exchange-list"><span>OTC Markets</span><span>NASDAQ</span><span>London Stock Exchange</span><span>SIX Swiss Exchange</span><span>Frankfurt Stock Exchange</span></div>
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="section-heading">
            <div><p className="eyebrow">How we work</p><h2>Senior perspective <em>at every stage.</em></h2></div>
            <p>Our senior professionals work closely with clients throughout the engagement, combining global perspective, practical experience, and focused multidisciplinary execution.</p>
          </div>
          <div className="section-visual wide"><Image src="/brochure/senior-perspective.webp" alt="PatientTrac Limited senior advisory approach presentation" width={520} height={735} unoptimized /></div>
          <div className="steps">
            <article><b>1</b><div><h3>Understand</h3><p>Define the opportunity, constraints, stakeholders, risk profile, and desired outcome.</p></div></article>
            <article><b>2</b><div><h3>Structure</h3><p>Align financial, corporate, regulatory, and strategic considerations into a clear path forward.</p></div></article>
            <article><b>3</b><div><h3>Advance</h3><p>Support decisive execution with focused counsel, disciplined coordination, and measurable objectives.</p></div></article>
          </div>
          <div className="team-grid">
            {professionals.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="brochure-showcase" aria-labelledby="brochure-title">
          <div className="brochure-copy">
            <p className="eyebrow">The PatientTrac Limited presentation</p>
            <h2 id="brochure-title">One identity. <em>One global story.</em></h2>
            <p>Our renewed corporate presentation brings the same visual language to every client touchpoint: London roots, global reach, capital markets experience, multidisciplinary expertise, and a focus on real outcomes.</p>
            <a className="button gold" href="#contact">Start a conversation <span>↗</span></a>
          </div>
          <div className="brochure-visual"><Image src="/brochure/montage.webp" alt="PatientTrac Limited corporate brochure pages" width={1088} height={758} unoptimized /></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2>Discuss your next <em>strategic move.</em></h2>
            <p>Connect with PatientTrac Limited regarding corporate financing, M&amp;A, public entity development, strategic advisory, or global market access.</p>
            <a className="button gold" href="mailto:legal@patienttracltd.com">Contact PatientTrac <span>↗</span></a>
          </div>
          <div className="contact-art"><Image src="/brochure/contact.webp" alt="PatientTrac Limited London contact presentation" width={520} height={735} unoptimized /></div>
          <address className="contact-card">
            <div><small>London office</small><strong>PatientTrac Limited</strong><p>1 Gracechurch Street, 5th Floor<br/>London, England EC3V 0DD<br/>United Kingdom</p></div>
            <div><small>Email</small><a href="mailto:legal@patienttracltd.com">legal@patienttracltd.com</a></div>
            <div><small>Telephone</small><a href="tel:+447700164858">+44 7700 164858</a></div>
            <div><small>LEI</small><span>894500A5OSS53J67IN78</span></div>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <Image className="footer-signature" src="/brand/patienttrac-signature.webp" alt="PatientTrac Limited" width={420} height={140} unoptimized />
        <div className="footer-links"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></div>
        <div className="footer-meta"><p>International Financial Consulting &amp; Corporate Development</p><p>© 2026 PatientTrac Limited. All rights reserved.</p></div>
      </footer>
    </>
  );
}
