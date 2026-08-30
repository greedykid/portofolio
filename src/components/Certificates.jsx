import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

export default function Certificates({ data }) {
  const { certificates } = data;

  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-label" id="certs-section-label">Sertifikasi</div>
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Kredensial &amp; Kompetensi Terverifikasi</h2>

        <div className="certs-grid" id="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              <div>
                <div className="cert-issuer">{cert.issuer}</div>
                <h3 className="cert-title">{cert.title}</h3>
                {cert.credentialId && (
                  <div className="cert-meta">{cert.credentialId}</div>
                )}
                <div className="cert-meta" style={{ marginTop: '0.25rem' }}>{cert.date}</div>
              </div>

              <div className="cert-footer">
                <span className="cert-verified">
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
