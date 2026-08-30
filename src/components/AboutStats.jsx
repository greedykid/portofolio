import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

export default function AboutStats({ data }) {
  const { profile, stats, languages } = data;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label" id="about-section-label">Tentang Saya</div>

        <div className="about-layout">
          {/* Narrative */}
          <div className="about-narrative">
            <h2 className="section-title">Rekayasa Berkualitas, Solusi yang Terukur</h2>
            {profile.aboutNarrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Info Side */}
          <div className="about-side">
            <div className="about-info-card">
              <div className="about-info-title">Informasi Singkat</div>
              <div className="about-info-row">
                <span className="about-info-key">Nama</span>
                <span className="about-info-value">{profile.name}</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-key">Pendidikan</span>
                <span className="about-info-value">{profile.educationSubtitle}</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-key">Lokasi</span>
                <span className="about-info-value">{profile.location}</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-key">Telepon</span>
                <span className="about-info-value">{profile.phone}</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-key">Status</span>
                <span className="about-info-value">Tersedia untuk Kerja</span>
              </div>
            </div>

            {languages && (
              <div className="about-info-card">
                <div className="about-info-title">Bahasa</div>
                {languages.map((lang, lIdx) => (
                  <div className="about-info-row" key={lIdx}>
                    <span className="about-info-key">{lang.name}</span>
                    <span className="about-info-value">{lang.level}</span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span className="tech-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <GraduationCap size={13} /> IPK 3.58 / 4.00
              </span>
              <span className="tech-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={13} /> 7 Sertifikasi
              </span>
              <span className="tech-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={13} /> Jakarta Barat
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid" id="portfolio-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
