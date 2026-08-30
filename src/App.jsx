import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  // Theme state: dark mode default, with localStorage persistence
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return 'dark'; // Dark theme default adhering to modern dev engineering style
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Scroll Progress indicator
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Smooth Scroll Reveal Animation Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      'main .section, .section-header, .stat-card, .skill-category-card, .project-card, .timeline-item, .cert-card, .contact-method-item, .contact-form-card'
    );

    revealElements.forEach((el) => el.classList.add('reveal-ready'));

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Ambient background glow effect */}
      <div className="bg-ambient-layer"></div>

      {/* Header & Navbar */}
      <Navbar
        data={portfolioData}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main>
        <Hero data={portfolioData} />
        <AboutStats data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <ExperienceTimeline data={portfolioData} />
        <Certificates data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />
    </div>
  );
}
