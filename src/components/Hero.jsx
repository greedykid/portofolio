import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Terminal, Sparkles } from 'lucide-react';

export default function Hero({ data }) {
  const { profile } = data;

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro & Call To Action */}
          <div className="hero-content">
            {/* Availability Badge */}
            <div className="status-pill" id="hero-availability-badge">
              <span className="status-dot"></span>
              <span>{profile.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title" id="hero-headline">
              Membangun Solusi Digital Modern, Cepat & Terukur.
            </h1>

            {/* Sub-headline / Value proposition */}
            <p className="hero-lead" id="hero-value-prop">
              Halo! Saya <strong style={{ color: 'var(--text-primary)' }}>{profile.name}</strong>, seorang{' '}
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{profile.title}</span>. {profile.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="btn btn-primary"
                id="hero-cta-projects"
              >
                <span>Jelajahi Proyek</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn btn-secondary"
                id="hero-cta-contact"
              >
                <span>Hubungi / Rekrut</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials" id="hero-social-links">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="social-link"
                title="Send Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Snapshot */}
          <div className="hero-visual">
            <div className="hero-code-card" id="hero-code-snapshot">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot dot-red"></span>
                  <span className="terminal-dot dot-yellow"></span>
                  <span className="terminal-dot dot-green"></span>
                </div>
                <span className="terminal-title">developer-profile.ts</span>
              </div>
              <pre className="terminal-body">
                <code>
<span className="code-keyword">const</span> <span className="code-var">candidate</span> = &#123;{'\n'}
  <span className="code-var">name</span>: <span className="code-str">"{profile.name}"</span>,{'\n'}
  <span className="code-var">education</span>: <span className="code-str">"S1 Sistem Informasi (Universitas Gunadarma)"</span>,{'\n'}
  <span className="code-var">gpa</span>: <span className="code-num">3.58</span>,{'\n'}
  <span className="code-var">coreSkills</span>: [<span className="code-str">"Laravel"</span>, <span className="code-str">"MySQL"</span>, <span className="code-str">"Tailwind CSS"</span>, <span className="code-str">"IT Support"</span>],{'\n'}
  <span className="code-var">networking</span>: [<span className="code-str">"Cisco LAN/WAN"</span>, <span className="code-str">"TCP/IP"</span>],{'\n'}
  <span className="code-var">readyForWork</span>: <span className="code-keyword">true</span>{'\n'}
&#125;;{'\n\n'}
<span className="code-comment">// Ready to bring technical and software engineering solutions</span>{'\n'}
<span className="code-var">candidate</span>.<span className="code-keyword">deploySolutions</span>();
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
