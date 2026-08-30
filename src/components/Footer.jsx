import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ data }) {
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Layanan', href: '#services' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Tentang', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">{profile.name}</div>
            <p className="footer-text" style={{ maxWidth: '34ch' }}>
              {profile.title} — membangun solusi digital yang cepat, andal, dan terukur.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-title">Kontak</div>
            <ul className="footer-contact-list">
              <li>
                <a href={`mailto:${profile.socials.email}`}>
                  <Mail size={14} /> {profile.socials.email}
                </a>
              </li>
              <li>
                <a href={profile.socials.phone}>
                  <Phone size={14} /> {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MapPin size={14} /> {profile.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-title">Navigasi</div>
            <ul className="footer-nav-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} {profile.name}.
          </p>

          <div className="footer-socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="icon-btn"
              title="Kembali ke Atas"
              aria-label="Scroll to top"
              id="footer-back-to-top-btn"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
