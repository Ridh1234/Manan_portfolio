import './Hero.css';

const CREDENTIALS = [
  { label: 'Current Role', value: 'Investment Analyst, True North Private Credit' },
  { label: 'Transaction Work', value: '₹60–250 Cr structured credit transactions' },
  { label: 'Foundation', value: 'CA Final distinction; KPMG Audit & Assurance' },
];

export function Hero() {
  const scrollToDeals = () => {
    document.getElementById('deals')?.scrollIntoView();
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__overline section-overline">
            Investment Analyst @ True North
          </p>

          <p className="hero__name" aria-label="CA Manan Jain">
            <span className="hero__name-ca">CA</span>
            <span className="hero__name-text">Manan Jain</span>
          </p>

          <h1 className="hero__headline">
            Disciplined credit analysis for mid-market transactions.
          </h1>

          <p className="hero__subheadline">
            Chartered Accountant working across private credit execution,
            financial diligence, credit structuring, documentation, and
            portfolio monitoring.
          </p>

          <div className="hero__ctas">
            <button type="button" className="btn btn-primary" onClick={scrollToDeals}>
              View Track Record
            </button>
          </div>
        </div>

        <aside className="hero__dossier" aria-label="Credential snapshot">
          <div className="hero__dossier-header">
            <span className="hero__dossier-kicker">Credential Snapshot</span>
            <span className="hero__dossier-year data-metric">2026</span>
          </div>

          <div className="hero__dossier-main">
            <span className="hero__dossier-mark" aria-hidden="true">
              CA
            </span>
            <div>
              <p className="hero__dossier-title">Private Credit Analyst</p>
            </div>
          </div>

          <div className="hero__dossier-list">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="hero__dossier-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
