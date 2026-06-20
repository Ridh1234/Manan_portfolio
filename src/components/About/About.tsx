import './About.css';

const glanceItems = [
  'Mumbai, India',
  'KPMG · True North',
];

export function About() {
  return (
    <section id="about" className="section os-section about">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">About</p>
            <h2 className="os-section__title">Manan Jain</h2>
          </div>
          <p className="os-section__meta">Mumbai, India</p>
        </header>

        <div className="os-section__content os-section__stack">
          <div className="os-section__block">
            <h3 className="os-section__kicker">Background</h3>
            <p className="os-section__prose">
              Professional training began at KPMG, with approximately 1.5 years in
              statutory audit across listed and private companies—establishing a
              foundation in accounting, financial reporting, and operational
              understanding of businesses. The long-term orientation has consistently
              been toward investing and rigorous business evaluation.
            </p>
            <p className="os-section__prose os-section__prose--follow">
              In April 2024, joined True North&apos;s investment platform—a 25-year-old
              firm with over $4 billion deployed across India. Given a lean team
              structure and high deal velocity, assumed meaningful responsibility
              early across the investment process: industry research, financial
              modelling, management discussions, commercial diligence, investment
              committee presentations, and transaction execution.
            </p>
            <p className="os-section__prose os-section__prose--follow">
              A substantial share of mandate exposure has been in growth-capital and
              equity-substitute transactions, rather than traditional asset-backed
              lending. This has required sustained commercial diligence—industry expert
              engagement, management assessment, and conviction-building around market
              size, competitive positioning, scalability, and exit pathways—alongside
              the discipline of structured underwriting. The combination reflects both
              analytical rigour and a long-term perspective on how businesses create
              value.
            </p>
          </div>

          <footer className="os-section__foot">
            <span className="os-section__foot-label">At a Glance</span>
            <ul className="registry-tags os-tags" aria-label="At a glance">
              {glanceItems.map((item) => (
                <li key={item} className="registry-tags__item">
                  {item}
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
}
