import React from 'react';
import { ArrowRight, MapPin, FileText } from 'lucide-react';

export default function Hero({ data }) {
  const { profile, techStack } = data;

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      const headerOffset = 72;
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
        <div className="hero-inner">
          {/* Location */}
          <div className="hero-location" id="hero-location">
            <MapPin size={15} />
            <span>{profile.location}</span>
          </div>

          {/* Name */}
          <h1 className="hero-name" id="hero-headline">
            {profile.name}
          </h1>

          {/* Role */}
          <div className="hero-role" id="hero-role">
            {profile.title}
          </div>

          {/* Short bio */}
          <p className="hero-bio" id="hero-value-prop">
            {profile.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group" id="hero-cta-group">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="hero-cta-resume"
            >
              <FileText size={17} />
              <span>Lihat CV / Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn btn-outline"
              id="hero-cta-contact"
            >
              <span>Hubungi Saya</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="hero-tech-stack" id="hero-tech-stack">
              <div className="hero-tech-label">Teknologi yang Saya Gunakan</div>
              <div className="hero-tech-items">
                {techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
