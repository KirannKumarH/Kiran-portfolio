import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'How I help' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#expertise', label: 'Expertise' }
];

export default function SiteHeader({ compact = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="wordmark" to="/" aria-label="Kiran Kumar H, home">Kiran Kumar H<span>.</span></Link>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
            <a className="nav-contact" href="/#contact" onClick={() => setMenuOpen(false)}>Discuss a project <span aria-hidden="true">↗</span></a>
          </nav>
          <button
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle"
            ref={toggleRef}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span /><span />
          </button>
        </div>
      </header>
      {compact && <div className="header-spacer" />}
    </>
  );
}
