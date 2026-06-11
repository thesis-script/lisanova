// src/components/AuthModal.jsx
import React, { useState } from 'react';
import './AuthModal.css';

export default function AuthModal({ modal, closeModal, t, login, signup, subscribe }) {
  const [mode, setMode] = useState(modal);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [plan, setPlan] = useState('pro');

  // Sync when modal prop changes
  React.useEffect(() => { setMode(modal); }, [modal]);

  const handleLogin = () => {
    if (!email || !pass) return;
    login(email);
  };

  const handleSignup = () => {
    if (!name || !email || !pass) return;
    signup(name, email);
  };

  const handleSubscribe = () => {
    subscribe();
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={closeModal}>✕</button>
        <div className="modal-logo">LISA<span>NOVA</span></div>

        {mode === 'login' && (
          <>
            <h2 className="modal-title">{t('login_title')}</h2>
            <p className="modal-subtitle">{t('have_account')} {t('switch_login')}</p>
            <div className="form-group">
              <label>{t('field_email')}</label>
              <input type="email" placeholder={t('field_email_ph')} value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('field_pass')}</label>
              <input type="password" placeholder={t('field_pass_ph')} value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <button className="form-submit-btn" onClick={handleLogin}>{t('btn_login')}</button>
            <div className="modal-switch">
              {t('no_account')} <button onClick={() => setMode('signup')}>{t('switch_signup')}</button>
            </div>
          </>
        )}

        {mode === 'signup' && (
          <>
            <h2 className="modal-title">{t('signup_title')}</h2>
            <p className="modal-subtitle">{t('no_account')}</p>
            <div className="form-group">
              <label>{t('field_name')}</label>
              <input type="text" placeholder={t('field_name_ph')} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('field_email')}</label>
              <input type="email" placeholder={t('field_email_ph')} value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('field_pass')}</label>
              <input type="password" placeholder={t('field_pass_ph')} value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <button className="form-submit-btn" onClick={handleSignup}>{t('btn_signup')}</button>
            <div className="modal-switch">
              {t('have_account')} <button onClick={() => setMode('login')}>{t('switch_login')}</button>
            </div>
          </>
        )}

        {mode === 'subscribe' && (
          <>
            <h2 className="modal-title">{t('subscribe_title')}</h2>
            <p className="modal-subtitle">{t('subscribe_sub')}</p>
            <div className="plan-cards">
              <div
                className={`plan-card ${plan === 'basic' ? 'selected' : ''}`}
                onClick={() => setPlan('basic')}
              >
                <h4>{t('plan_basic')}</h4>
                <div className="plan-price">$50<span>{t('per_month')}</span></div>
                <p>{t('plan_basic_desc')}</p>
              </div>
              <div
                className={`plan-card ${plan === 'pro' ? 'selected' : ''}`}
                onClick={() => setPlan('pro')}
              >
                <div className="badge-popular">{t('plan_popular')}</div>
                <h4>{t('plan_pro')}</h4>
                <div className="plan-price">$100<span>{t('per_month')}</span></div>
                <p>{t('plan_pro_desc')}</p>
              </div>
            </div>
            <div className="form-group">
              <label>{t('field_email')}</label>
              <input type="email" placeholder={t('field_email_ph')} value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button className="form-submit-btn" onClick={handleSubscribe}>{t('btn_subscribe')}</button>
          </>
        )}
      </div>
    </div>
  );
}
