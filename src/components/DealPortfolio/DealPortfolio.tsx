import {
  dealGlimpses,
  scopeSummary,
  sectors,
  trackRecordMetrics,
  transactionStructures,
} from '../../data/deals';
import './DealPortfolio.css';

export function DealPortfolio() {
  return (
    <section id="deals" className="section os-section deal-portfolio">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">Track Record</p>
            <h2 className="os-section__title">Mandate Experience</h2>
            <p className="os-section__subtitle">
              Sector coverage and representative mandates over the past two years.
              Counterparty identities are confidential; the summaries below describe
              mandate profile and analytical scope without disclosure of underlying
              companies.
            </p>
          </div>
        </header>

        <div className="os-section__content os-section__stack">
          <div className="os-section__block">
            <h3 className="os-section__kicker">Key Metrics</h3>
            <div className="os-light-card">
              <div className="os-metrics" aria-label="Track record metrics">
                {trackRecordMetrics.map((metric) => (
                  <div key={metric.label} className="os-metric">
                    <span className="os-metric__value data-metric">{metric.value}</span>
                    <span className="os-metric__label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="os-section__block">
            <h3 className="os-section__kicker">Sector Coverage</h3>
            <ul className="registry-tags os-tags os-tags--start" aria-label="Sector coverage">
              {sectors.map((sector) => (
                <li key={sector} className="registry-tags__item">
                  {sector}
                </li>
              ))}
            </ul>
          </div>

          <div className="os-section__block">
            <h3 className="os-section__kicker">Mandate Types</h3>
            <ul className="registry-tags os-tags os-tags--start" aria-label="Mandate types">
              {transactionStructures.map((structure) => (
                <li key={structure} className="registry-tags__item">
                  {structure}
                </li>
              ))}
            </ul>
          </div>

          <div className="os-section__block">
            <h3 className="os-section__kicker">Selected Mandates</h3>
            <div className="os-deals" role="list">
              {dealGlimpses.map((deal) => (
                <article key={deal.id} className="os-deal" role="listitem">
                  <header className="os-deal__head">
                    <span className="os-deal__sector">{deal.sector}</span>
                    <span className="os-deal__thesis">{deal.thesis}</span>
                  </header>
                  <p className="os-deal__body">{deal.description}</p>
                </article>
              ))}
            </div>
          </div>

          <footer className="os-section__foot">
            <span className="os-section__foot-label">Engagement Scope</span>
            <p className="os-section__foot-body">{scopeSummary}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
