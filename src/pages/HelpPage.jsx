// src/pages/HelpPage.jsx
import React, { useState } from 'react';
import Footer from '../components/Footer';
import './HelpPage.css';

export default function HelpPage({ t, goPage, openModal, user, showAlert }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !msg) return;
    setName(''); setEmail(''); setMsg('');
    showAlert(t('contact_sent'));
  };

  return (
    <div className="help-page">
      <section className="section">
        <div className="section-header">
          <div className="section-tag">{t('help_tag')}</div>
          <h2 className="section-title">
            {t('help_title_1')} <span>{t('help_title_2')}</span>
          </h2>
        </div>

        <div className="help-grid">
          {/* Contact info */}
          <div className="help-info">
            <div className="help-contact-card">
              <div className="help-icon">📞</div>
              <div>
                <h4>{t('help_phone_h')}</h4>
                <p dir="ltr">+213 970 262 1413</p>
              </div>
            </div>
            <div className="help-contact-card">
              <div className="help-icon">✉️</div>
              <div>
                <h4>{t('help_email_h')}</h4>
                <p>support@lisanova.com</p>
              </div>
            </div>
            <div className="help-contact-card">
              <div className="help-icon">🕐</div>
              <div>
                <h4>{t('help_hours_h')}</h4>
                <p>{t('help_hours_v')}</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-box">
              <h4 className="faq-title">أسئلة شائعة</h4>
              {[
                { q: 'كيف أبدأ؟', a: 'سجّل حساباً مجانياً ثم اختر خطة اشتراك.' },
                { q: 'هل الدروس بالعربية فقط؟', a: 'الدروس بالعربية، لكن المنصة تدعم ثلاث لغات.' },
                { q: 'كيف يعمل الصوت؟', a: 'اضغط أيقونة 🔊 بجانب الدرس لسماع النص بالعربية.' },
              ].map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">❓ {faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-box">
            <h3>{t('cf_title')}</h3>
            <div className="form-group">
              <label>{t('cf_name')}</label>
              <input
                type="text"
                placeholder={t('cf_name_ph')}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>{t('cf_email')}</label>
              <input
                type="email"
                placeholder={t('cf_email_ph')}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>{t('cf_msg')}</label>
              <textarea
                placeholder={t('cf_msg_ph')}
                value={msg}
                onChange={e => setMsg(e.target.value)}
              />
            </div>
            <button className="form-submit-btn" onClick={handleSubmit}>
              {t('cf_submit')}
            </button>
          </div>
        </div>
      </section>

      <Footer t={t} goPage={goPage} openModal={openModal} user={user} />
    </div>
  );
}
