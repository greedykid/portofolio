import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar({ data, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="brand-logo" id="nav-brand-logo">
          <div className="brand-symbol">
            {data.profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <span>{data.profile.name}</span>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn mobile-menu-btn"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" id="mobile-navigation-drawer">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </a>
          ))}
          <a
            href={data.profile.resumeUrl}
            target={data.profile.resumeUrl.endsWith('.pdf') ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (data.profile.resumeUrl.startsWith('#')) {
                handleNavClick(e, data.profile.resumeUrl);
              }
            }}
            className="btn btn-primary"
            style={{ marginTop: '1rem' }}
          >
            <FileText size={16} />
            <span>Lihat / Unduh CV</span>
          </a>
        </div>
      )}
    </header>
  );
}
