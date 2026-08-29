import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceTimeline({ data }) {
  const { experiences, education } = data;

  return (
    <section className="section" id="experience" style={{ backgroundColor: 'var(--bg-surface-1)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag" id="experience-section-tag">
            <span>// PENGALAMAN & EDUKASI</span>
          </div>
          <h2 className="section-title">Riwayat Karier & Rekam Jejak</h2>
          <p className="section-description">
            Perjalanan profesional dan kontribusi rekayasa perangkat lunak pada berbagai proyek dan organisasi.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {/* Work Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <div className="icon-btn" style={{ color: 'var(--accent-primary)' }}>
                <Briefcase size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Pengalaman Kerja</h3>
            </div>

            <div className="timeline-container" id="work-experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-card card-hover">
                    <div className="timeline-header">
                      <h4 className="timeline-role">{exp.role}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <div className="timeline-company">{exp.company}</div>
                    <ul className="timeline-bullets">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <div className="icon-btn" style={{ color: 'var(--accent-cyan)' }}>
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Latar Belakang Pendidikan</h3>
            </div>

            <div className="timeline-container" id="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot" style={{ borderColor: 'var(--accent-cyan)' }}></span>
                  <div className="timeline-card card-hover">
                    <div className="timeline-header">
                      <h4 className="timeline-role">{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <div className="timeline-company" style={{ color: 'var(--accent-cyan)' }}>
                      {edu.institution}
                    </div>
                    <ul className="timeline-bullets">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
