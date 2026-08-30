import React from 'react';
import { Layout, Code2, Cpu, Server, ArrowUpRight } from 'lucide-react';

export default function Services({ data }) {
  const { services } = data;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'layout':
        return <Layout size={20} />;
      case 'code':
        return <Code2 size={20} />;
      case 'cpu':
        return <Cpu size={20} />;
      case 'server':
        return <Server size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  if (!services || services.length === 0) return null;

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-layout">
          {/* Section Header */}
          <div className="services-header">
            <div className="section-label" id="services-section-label">Layanan Saya</div>
            <h2 className="section-title">Keahlian &amp; Solusi yang Saya Tawarkan</h2>
            <p className="section-description">
              Dari pengembangan aplikasi web hingga analisis sistem dan IT Support — satu paket dukungan teknis untuk kebutuhan Anda.
            </p>
          </div>

          {/* Service List */}
          <div className="service-list" id="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">
                  {getServiceIcon(service.icon)}
                </div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
                <ArrowUpRight size={20} className="service-arrow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
