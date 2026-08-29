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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app-root">
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
