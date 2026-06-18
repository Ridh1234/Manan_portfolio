import { useState } from 'react';
import { Phone } from 'lucide-react';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import './Contact.css';

const EMAIL = 'manan.rsjain@gmail.com';
const PHONE = '+91 7877100071';
const LINKEDIN = 'https://linkedin.com/in/mananjain6423';

export function Contact() {
  const [toast, setToast] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section os-section contact">
      <div className="container os-section__shell">
        <header className="os-section__header">
          <div className="os-section__header-main">
            <p className="os-section__overline">Let&apos;s Connect</p>
          </div>
          <p className="os-section__meta">Mumbai, India</p>
        </header>

        <div className="os-section__content os-section__stack">
          <div className="os-section__block">
            <h3 className="os-section__kicker">Direct Contact</h3>
            <ul className="os-channels">
              <li className="os-channel">
                <span className="os-channel__label">Email</span>
                <button
                  type="button"
                  className="os-channel__value os-channel__value--gold"
                  onClick={copyEmail}
                >
                  {EMAIL}
                </button>
              </li>

              <li className="os-channel">
                <span className="os-channel__label">Phone</span>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="os-channel__value os-channel__value--link"
                >
                  <Phone size={15} aria-hidden="true" />
                  {PHONE}
                </a>
              </li>

              <li className="os-channel">
                <span className="os-channel__label">LinkedIn</span>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="os-channel__value os-channel__value--link"
                >
                  <LinkedInIcon size={16} aria-hidden="true" />
                  linkedin.com/in/mananjain6423
                </a>
              </li>
            </ul>
          </div>
        </div>

        {toast && (
          <div className="contact__toast" role="status" aria-live="polite">
            Copied to clipboard
          </div>
        )}
      </div>
    </section>
  );
}
