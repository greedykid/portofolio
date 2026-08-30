import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send, MapPin, Linkedin } from 'lucide-react';

export default function Contact({ data }) {
  const { profile } = data;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'submitting', 'success', 'error'
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    showToast('Email berhasil disalin ke clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Default static action: open client mailto with prepopulated body & subject
    setTimeout(() => {
      const mailtoUrl = `mailto:${profile.socials.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject || 'Peluang Kerja / Kolaborasi'}`
      )}&body=${encodeURIComponent(
        `Halo ${profile.name},\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setFormStatus('success');
      showToast('Aplikasi email Anda dibuka untuk mengirim pesan!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <div>
              <div className="section-label" id="contact-section-label">Hubungi Saya</div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-description" style={{ marginBottom: '1.75rem' }}>
                Sedang mencari developer untuk tim Anda atau ingin mendiskusikan proyek baru? Kirim pesan melalui form atau kontak di bawah ini.
              </p>
            </div>

            {/* Email item with 1-click copy */}
            <div className="contact-method-item" id="contact-email-item">
              <div className="contact-icon">
                <Mail size={19} />
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div className="contact-method-label">Email Langsung</div>
                <div className="contact-method-value">{profile.socials.email}</div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="icon-btn"
                title="Salin Email"
                aria-label="Salin alamat email"
                id="copy-email-btn"
                style={{ width: '36px', height: '36px' }}
              >
                {copied ? <Check size={15} color="var(--status-available-dot)" /> : <Copy size={15} />}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-item"
              id="contact-whatsapp-item"
            >
              <div className="contact-icon">
                <MessageSquare size={19} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-method-label">WhatsApp / Telepon</div>
                <div className="contact-method-value">{profile.phone}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-item"
              id="contact-linkedin-item"
            >
              <div className="contact-icon">
                <Linkedin size={19} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-method-label">LinkedIn</div>
                <div className="contact-method-value">rizkiarbiansyah</div>
              </div>
            </a>

            {/* Location */}
            <div className="contact-method-item">
              <div className="contact-icon">
                <MapPin size={19} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-method-label">Lokasi Domisili</div>
                <div className="contact-method-value">{profile.location}</div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} id="portfolio-contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Nama Lengkap / Perusahaan</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="Misal: Budi Santoso / PT Tech Inovasi"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Alamat Email Anda</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder="nama@email.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subjek / Topik</label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="Peluang Kerja Full Stack Developer / Diskusi Proyek"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Pesan Anda</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Jelaskan kebutuhan, ruang lingkup peran, atau detail proyek Anda di sini..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', paddingBlock: '0.85rem' }}
                disabled={formStatus === 'submitting'}
                id="submit-contact-form-btn"
              >
                <Send size={16} />
                <span>{formStatus === 'submitting' ? 'Memproses...' : 'Kirim Pesan Sekarang'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-msg" id="action-toast-notification">
          <Check size={18} color="var(--status-available-dot)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
