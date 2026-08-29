import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2 } from 'lucide-react';

export default function Projects({ data }) {
  const { projects } = data;
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" id="projects-section-tag">
            <span>// KARYA & PROYEK</span>
          </div>
          <h2 className="section-title">Proyek Unggulan & Studi Kasus</h2>
          <p className="section-description">
            Kumpulan aplikasi web nyata yang dirancang dengan fokus pada skalabilitas, kemudahan penggunaan, dan performa tinggi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" id="project-filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
              id={`filter-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category === 'All' ? 'Semua Proyek' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" id="projects-showcase-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card" id={`card-${project.id}`}>
              {/* Project Image */}
              <div className="project-thumbnail">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-img"
                />
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-badge-row">
                  <span className="project-category-tag">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-desc">{project.description}</p>

                {/* Impact callout */}
                {project.impact && (
                  <div style={{
                    backgroundColor: 'var(--bg-surface-2)',
                    borderLeft: '2px solid var(--accent-cyan)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    marginBottom: '1.25rem',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>
                      ⚡ Dampak & Hasil:
                    </strong>
                    {project.impact}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="project-tech-stack">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
