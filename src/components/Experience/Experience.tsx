import { experiences } from '../../data/experience';
import './Experience.css';

export function Experience() {
  return (
    <section id="experience" className="section os-section experience">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">Career</p>
            <h2 className="os-section__title">Experience</h2>
          </div>
        </header>

        <div className="os-section__content">
          {experiences.map((exp) => (
            <article key={exp.company} className="os-employer">
              <header className="os-employer__head">
                <h3 className="os-employer__name">{exp.company}</h3>
                <span className="os-employer__location">{exp.location}</span>
              </header>

              {exp.roles.map((role) => (
                <div key={role.title} className="os-role">
                  <div className="os-role__head">
                    <h4 className="os-role__title">{role.title}</h4>
                    <time className="os-role__period data-metric">{role.period}</time>
                  </div>
                  <ul className="os-list os-role__list">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
