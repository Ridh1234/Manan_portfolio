import { coreCompetencies, toolTileStyle, tools } from '../../data/skills';
import { BrandLogo } from './BrandLogo';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="section os-section skills">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">Capabilities</p>
            <h2 className="os-section__title">Skills</h2>
          </div>
        </header>

        <div className="os-section__content os-section__stack">
          <div className="os-section__block">
            <h3 className="os-section__kicker">Core Competencies</h3>
            <ul className="registry-tags os-tags os-tags--start" aria-label="Core competencies">
              {coreCompetencies.map((skill) => (
                <li key={skill.id} className="registry-tags__item">
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="os-section__block">
            <h3 className="os-section__kicker">Tools & Platforms</h3>
            <ul className="os-tools">
              {tools.map((tool) => (
                <li key={tool.id} className="os-tools__item">
                  <span
                    className="os-tools__tile"
                    style={toolTileStyle(tool.brandColor)}
                    aria-hidden="true"
                  >
                    <BrandLogo src={tool.logo} alt="" className="os-tools__logo" />
                  </span>
                  <span className="os-tools__label">{tool.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
