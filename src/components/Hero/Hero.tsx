import { useCallback } from 'react';
import { HeroCinematic } from './HeroCinematic';
import './Hero.css';

const CREDENTIALS = [
  { label: 'Mandate Focus', value: 'Business evaluation and long-term value creation' },
  { label: 'Platform', value: 'True North · Mumbai' },
  { label: 'Foundation', value: 'Statutory audit · KPMG' },
];

type HeroProps = {
  introComplete: boolean;
  onIntroComplete: () => void;
};

export function Hero({ introComplete, onIntroComplete }: HeroProps) {
  const handleIntroComplete = useCallback(() => {
    onIntroComplete();
  }, [onIntroComplete]);

  const scrollToDeals = () => {
    document.getElementById('deals')?.scrollIntoView();
  };

  return (
    <section className={`hero ${introComplete ? 'hero--ready' : 'hero--intro'}`} id="hero">
      <HeroCinematic onComplete={handleIntroComplete} />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__overline section-overline">
            Investment Analyst · Mumbai
          </p>

          <p className="hero__identity" aria-label="Manan Jain, CA All India Rank 34">
            <span className="hero__identity-name">Manan Jain</span>
            <span className="hero__identity-sep" aria-hidden="true">
              |
            </span>
            <span className="hero__identity-cred">
              CA (
              <span className="hero__identity-rank">
                AIR-<span className="hero__identity-rank-num data-metric">34</span>
              </span>
              )
            </span>
          </p>

          <h1 className="hero__headline">
            Building investment conviction through rigorous business analysis.
          </h1>

          <p className="hero__subheadline">
            Grounded in statutory audit at KPMG; presently at True North, where
            responsibilities span industry research, commercial diligence, financial
            modelling, and investment committee execution on growth-oriented mandates.
          </p>

          <div className="hero__ctas">
            <button type="button" className="btn btn-primary" onClick={scrollToDeals}>
              View Track Record
            </button>
          </div>
        </div>

        <aside className="hero__dossier" aria-label="Credential snapshot">
          <div className="hero__dossier-header">
            <span className="hero__dossier-kicker">Profile</span>
            <span className="hero__dossier-year data-metric">2026</span>
          </div>

          <div className="hero__dossier-main">
            <span className="hero__dossier-mark" aria-hidden="true">
              CA
            </span>
            <div>
              <p className="hero__dossier-title">Investment Analyst</p>
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
