import React from 'react';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';

export default function Footer({ data }) {
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="status-dot"></span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {profile.name} — Portfolio
            </span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} {profile.name}. Dibuat dengan standar performa & craft tinggi.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
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
    </footer>
  );
}
