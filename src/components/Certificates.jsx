import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export default function Certificates({ data }) {
  const { certificates } = data;

  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" id="certs-section-tag">
            <span>// SERTIFIKASI & KREDENSIAL</span>
          </div>
          <h2 className="section-title">Lisensi & Validasi Kompetensi</h2>
          <p className="section-description">
            Sertifikasi industri yang telah diverifikasi untuk menjamin standar teknis dan keahlian terkini.
          </p>
        </div>

        <div className="certs-grid" id="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card card-hover">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {cert.date}
                  </span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8125rem', color: 'var(--status-available-dot)', fontWeight: 600 }}>
                  <CheckCircle size={14} /> Terverifikasi
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  title="Verifikasi Kredensial"
                >
                  <ExternalLink size={13} />
                  <span>Kredensial</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
