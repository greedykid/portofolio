import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ data }) {
  const { projects } = data;

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-label" id="projects-section-label">Proyek Saya</div>
          <h2 className="section-title">Proyek yang Telah Saya Bangun</h2>
          <p className="section-description">
            Aplikasi web nyata yang dirancang, dibangun, dan dideploy — dengan fokus pada kualitas, performa, dan kebutuhan bisnis.
          </p>
        </div>

        <div className="project-list" id="projects-showcase-list">
          {projects.map((project) => (
            <article key={project.id} className="project-item" id={`item-${project.id}`}>
              <div className="project-row">
                {/* Left: Title & Description */}
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <p className="project-desc">{project.description}</p>
                  <p className="project-desc" style={{ marginTop: '0.75rem' }}>{project.impact}</p>
                </div>

                {/* Right: Meta, Tags & Actions */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {project.period} — {project.category}
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      title="Buka Live Demo"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      title="Lihat Source Code di GitHub"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
