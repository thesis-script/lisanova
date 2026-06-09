// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

export default function Navbar({ t, lang, setLang, user, logout, openModal, goPage, goLessons }) {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => goPage('home')} style={{backgroundColor:'#ffffff', borderRadius: '8px', 
        height: '50px',width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px', cursor: 'pointer'
      }}>
        <img src='/logo.png' style={{width:'170px', height: '70px'}}/>
      </div>

      <div className="nav-links">
        <button className="nav-link" onClick={() => goPage('home')}>{t('nav_home')}</button>
        <button className="nav-link" onClick={goLessons}>{t('nav_lessons')}</button>
        <button className="nav-link" onClick={() => goPage('help')}>{t('nav_help')}</button>

        <select
          className="lang-select"
          value={lang}
          onChange={e => setLang(e.target.value)}
        >
          <option value="ar">🌐 العربية</option>
          <option value="en">🌐 English</option>
          <option value="es">🌐 Español</option>
        </select>

        {user ? (
          <div className="nav-user-group">
            <span className="nav-username">👤 {user.name}</span>
            <button className="nav-cta-btn" onClick={logout}>{t('nav_logout')}</button>
          </div>
        ) : (
          <button className="nav-cta-btn" onClick={() => openModal('login')}>{t('nav_signin')}</button>
        )}
      </div>

      {/* Mobile hamburger (simplified) */}
      <div className="nav-mobile-links">
        <select
          className="lang-select"
          value={lang}
          onChange={e => setLang(e.target.value)}
        >
          <option value="ar">🌐 AR</option>
          <option value="en">🌐 EN</option>
          <option value="es">🌐 ES</option>
        </select>
        {user ? (
          <button className="nav-cta-btn" onClick={logout}>{t('nav_logout')}</button>
        ) : (
          <button className="nav-cta-btn" onClick={() => openModal('login')}>{t('nav_signin')}</button>
        )}
      </div>
    </nav>
  );
}
