import { achievements, credentials } from '../../data/credentials';
import './Credentials.css';

export function Credentials() {
  return (
    <section id="credentials" className="section os-section credentials">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">Academic</p>
            <h2 className="os-section__title">Credentials</h2>
          </div>
        </header>

        <div className="os-section__content os-section__stack">
          <div className="os-section__block">
            <h3 className="os-section__kicker">Academic Credentials</h3>
            <div className="os-light-card">
              <div className="os-cred-grid" role="list">
                {credentials.map((cred) => (
                  <article key={cred.id} className="os-cred" role="listitem">
                    <div className="os-cred__head">
                      <h4 className="os-cred__title">{cred.title}</h4>
                      <time className="os-cred__year data-metric" dateTime={cred.year}>
                        {cred.year}
                      </time>
                    </div>
                    <p className="os-cred__institution">{cred.institution}</p>
                    <p className="os-cred__detail">{cred.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="os-section__block">
            <h3 className="os-section__kicker">Recognitions</h3>
            <ul className="os-list os-recognition-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
