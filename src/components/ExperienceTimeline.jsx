import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceTimeline({ data }) {
  const { experiences, education } = data;

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-label" id="experience-section-label">Pengalaman &amp; Pendidikan</div>
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Riwayat Karier &amp; Rekam Jejak</h2>

        <div className="experience-grid">
          {/* Work Experience */}
          <div>
            <div className="exp-column-title">
              <Briefcase size={19} />
              <span>Pengalaman Kerja</span>
            </div>

            <div className="timeline-container" id="work-experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <div className="timeline-company">{exp.company}</div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="exp-column-title">
              <GraduationCap size={19} />
              <span>Pendidikan</span>
            </div>

            <div className="timeline-container" id="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-header">
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <div className="timeline-company">{edu.institution}</div>
                  <ul className="timeline-bullets">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
