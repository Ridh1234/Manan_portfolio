import { scopeSummary, sectors, trackRecordMetrics, transactionStructures } from '../../data/deals';
import './DealPortfolio.css';

export function DealPortfolio() {
  return (
    <section id="deals" className="section os-section deal-portfolio">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">Track Record</p>
            <h2 className="os-section__title">Transaction Experience</h2>
            <p className="os-section__subtitle">
              Aggregate mid-market private credit exposure. Mandate and counterparty
              details remain confidential.
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
            <h3 className="os-section__kicker">Structures</h3>
            <ul className="registry-tags os-tags os-tags--start" aria-label="Transaction structures">
              {transactionStructures.map((structure) => (
                <li key={structure} className="registry-tags__item">
                  {structure}
                </li>
              ))}
            </ul>
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
