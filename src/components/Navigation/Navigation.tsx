import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navigation.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Track Record', href: '#deals' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Skills', href: '#skills' },
];

const SECTION_IDS = ['about', 'deals', 'experience', 'credentials', 'skills'];

type NavigationProps = {
  visible?: boolean;
};

export function Navigation({ visible = true }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('nav-menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView();
  };

  return (
    <header className={`nav ${visible ? 'nav--visible' : 'nav--hidden'}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__brand" aria-label="Manan Jain - Home">
          <span className="nav__brand-mark" aria-hidden="true">
            MJ
          </span>
          <span className="nav__brand-copy">
            <span className="nav__brand-name">Manan Jain</span>
            <span className="nav__brand-role">Private Credit</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link ${activeId === link.href.slice(1) ? 'nav__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn btn-nav nav__cta"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="nav__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`nav__overlay ${menuOpen ? 'nav__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="nav__overlay-nav" aria-label="Mobile navigation">
          <div className="nav__overlay-top">
            <button
              type="button"
              className="nav__overlay-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__overlay-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-outline nav__overlay-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
