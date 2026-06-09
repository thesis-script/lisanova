// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

export default function Footer({ t, goPage, openModal, user }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <div className="footer-logo">LISA<span>NOVA</span></div>
          <p className="footer-desc">{t('footer_desc')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('footer_links_h')}</h4>
          <ul>
            <li onClick={() => goPage('home')}>{t('fl_home')}</li>
            <li onClick={() => goPage('lessons')}>{t('fl_lessons')}</li>
            <li onClick={() => goPage('help')}>{t('fl_help')}</li>
            {!user && <li onClick={() => openModal('login')}>{t('fl_signin')}</li>}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t('footer_contact_h')}</h4>
          <ul>
            <li>📞 +213 970 262 1413</li>
            <li>✉️ support@lisanova.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t('footer_copy')}</span>
        <span className="footer-tagline">{t('footer_tagline')}</span>
      </div>
    </footer>
  );
}
