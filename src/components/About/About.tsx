import './About.css';

const glanceItems = [
  'Based in Mumbai',
  'B.Com, H.R. College',
  'ICAI Member',
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
              As Investment Analyst at True North&apos;s Private Credit Fund, I lead
              structured credit transactions of ₹60–250 Cr across India&apos;s
              mid-market — from origination and financial diligence through credit
              structuring, documentation, and portfolio monitoring. A Chartered
              Accountant with statutory audit experience at KPMG across
              manufacturing, FMCG, and chemical sectors, I bring institutional-grade
              analytical rigor to every capital deployment.
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
