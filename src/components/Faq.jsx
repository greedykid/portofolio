import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Faq({ data }) {
  const { faqs } = data;
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-layout">
          {/* Header */}
          <div className="faq-header">
            <div className="section-label" id="faq-section-label">Pertanyaan Umum</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Jawaban singkat seputar profil, layanan, teknologi, dan cara berkolaborasi dengan saya.
            </p>
          </div>

          {/* Accordion */}
          <div className="faq-list" id="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    id={`faq-question-${index + 1}`}
                  >
                    <span>{faq.question}</span>
                    <Plus size={20} className="faq-icon" />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
