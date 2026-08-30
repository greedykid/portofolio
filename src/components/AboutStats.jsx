import React from 'react';
import { UserCheck, Award, Code2, HeartHandshake, Languages } from 'lucide-react';

export default function AboutStats({ data }) {
  const { profile, stats } = data;

  const statIcons = [
    <UserCheck size={22} className="stat-icon-svg" />,
    <Code2 size={22} className="stat-icon-svg" />,
    <Award size={22} className="stat-icon-svg" />,
    <HeartHandshake size={22} className="stat-icon-svg" />
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" id="about-section-tag">
            <span>// TENTANG SAYA</span>
          </div>
          <h2 className="section-title">Dedikasi Pada Rekayasa Berkualitas</h2>
          <p className="section-description">
            Menggabungkan keahlian logika komputasi, kepekaan desain antarmuka, dan orientasi pada hasil bisnis yang nyata.
          </p>
        </div>

        {/* Narrative Description & Languages */}
        <div className="card-base" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
            {profile.aboutNarrative.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Languages Row */}
          {data.languages && (
            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Languages size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Kemampuan Bahasa:</span>
              </span>
              {data.languages.map((lang, lIdx) => (
                <div key={lIdx} style={{ fontSize: '0.875rem', padding: '0.3rem 0.75rem', backgroundColor: 'var(--bg-surface-2)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--accent-primary)' }}>{lang.name}</strong> — <span style={{ color: 'var(--text-secondary)' }}>{lang.level}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="stats-grid" id="portfolio-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card card-hover">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="stat-number">{stat.number}</span>
                <div style={{ color: 'var(--accent-primary)' }}>
                  {statIcons[index % statIcons.length]}
                </div>
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
