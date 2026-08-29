import React from 'react';
import { Layout, Server, Cloud, Cpu, CheckCircle2 } from 'lucide-react';

export default function Skills({ data }) {
  const { skillCategories } = data;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'layout':
        return <Layout size={18} />;
      case 'server':
        return <Server size={18} />;
      case 'cloud':
        return <Cloud size={18} />;
      case 'cpu':
        return <Cpu size={18} />;
      default:
        return <CheckCircle2 size={18} />;
    }
  };

  return (
    <section className="section" id="skills" style={{ backgroundColor: 'var(--bg-surface-1)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag" id="skills-section-tag">
            <span>// KEAHLIAN & TEKNOLOGI</span>
          </div>
          <h2 className="section-title">Tech Stack & Kompetensi Inti</h2>
          <p className="section-description">
            Alat dan teknologi yang saya gunakan sehari-hari untuk merancang, membangun, dan menyebarkan perangkat lunak yang handal.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" id="skills-matrix-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category-card card-hover">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="category-name">{cat.category}</h3>
              </div>

              <div className="skills-tags-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
