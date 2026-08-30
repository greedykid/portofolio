import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowRight } from 'lucide-react';

export default function Navbar({ data, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="brand-logo" id="nav-brand-logo">
            <div className="brand-symbol">
              {data.profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <span className="brand-name-text">{data.profile.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="nav-link"
                    id={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions (Theme toggle & Resume CTA) */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="icon-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle color theme"
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={data.profile.resumeUrl}
              target={data.profile.resumeUrl.endsWith('.pdf') ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (data.profile.resumeUrl.startsWith('#')) {
                  handleNavClick(e, data.profile.resumeUrl);
                }
              }}
              className="btn btn-primary btn-sm resume-btn-desktop"
              id="nav-resume-btn"
            >
              <FileText size={15} />
              <span>Resume / CV</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="icon-btn mobile-menu-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Standalone Mobile Drawer (Outside Header to avoid backdrop-filter containment) */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-drawer"
            id="mobile-navigation-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <div className="brand-symbol">
                {data.profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                {data.profile.name}
              </span>
            </div>

            <nav className="mobile-nav-list">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="mobile-nav-link"
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} color="var(--text-muted)" />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href={data.profile.resumeUrl}
                target={data.profile.resumeUrl.endsWith('.pdf') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (data.profile.resumeUrl.startsWith('#')) {
                    handleNavClick(e, data.profile.resumeUrl);
                  }
                }}
                className="btn btn-primary"
                style={{ width: '100%', paddingBlock: '0.85rem' }}
              >
                <FileText size={16} />
                <span>Lihat / Unduh CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
