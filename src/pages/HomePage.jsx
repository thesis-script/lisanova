// src/pages/HomePage.jsx
import React from 'react';
import Footer from '../components/Footer';
import './HomePage.css';

export default function HomePage({ t, goPage, goLessons, goPacks, openModal, user, showAlert }) {
  const handleVideoClick = (e) => {
    if (e.target.tagName !== 'VIDEO' && e.target.tagName !== 'SOURCE') {
      showAlert(t('video_playing'));
    }
  };
  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎓 {t('hero_badge')}</div>
          <h1 className="hero-title">
            {t('hero_title_1')} <span>{t('hero_title_2')}</span>
          </h1>
          <p className="hero-sub">{t('hero_sub')}</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => user ? goLessons() : openModal('signup')}>
              {t('hero_btn1')}
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' })}>
              {t('hero_btn2')}
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">{t('stat1_num')}</div>
              <div className="stat-label">{t('stat1_label')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">{t('stat2_num')}</div>
              <div className="stat-label">{t('stat2_label')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">{t('stat3_num')}</div>
              <div className="stat-label">{t('stat3_label')}</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png`}
            alt={t('hero_image_alt') || "Hero illustration"}
            className="hero-img" style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Decorative floating elements */}
        <div className="hero-deco" aria-hidden="true">
          <div className="deco-circle deco-1" />
          <div className="deco-circle deco-2" />
          <div className="deco-card">
            <div className="deco-card-icon">📚</div>
            <div>
              <div className="deco-card-title">١٢٣٥</div>
              <div className="deco-card-sub">درس تفاعلي</div>
            </div>
          </div>
          <div className="deco-rating">
            <span>⭐</span>
            <span>4.8</span>
            <span style={{ fontSize: 11, color: 'var(--gray-400)' }}>(86K)</span>
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="section video-section" id="video-section">
        <div className="section-header">
          <div className="section-tag">{t('video_tag')}</div>
          <h2 className="section-title" style={{ color: 'white' }}>
            {t('video_title_1')} <span style={{ color: 'var(--accent)' }}>{t('video_title_2')}</span>
          </h2>
          <p className="section-sub" style={{ color: 'var(--gray-400)' }}>{t('video_sub')}</p>
        </div>
        <div className="video-wrapper">
          <div className="video-player">
            <video
              className="video-element"
              controls
              width="100%"
              height="auto"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the handleVideoClick function when interacting with the video
              }}
            >
              <source
                src={`${process.env.PUBLIC_URL}/video.webm`}
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-info">
            <h3>{t('video_card_title')}</h3>
            <p>{t('video_card_desc')}</p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section features-section">
        <div className="section-header">
          <div className="section-tag">{t('feat_tag')}</div>
          <h2 className="section-title">
            {t('feat_title_1')} <span>{t('feat_title_2')}</span>
          </h2>
        </div>
        <div className="features-grid">
          {[
            { icon: '🔊', title: t('f1_title'), desc: t('f1_desc') },
            { icon: '🌍', title: t('f2_title'), desc: t('f2_desc') },
            { icon: '📱', title: t('f3_title'), desc: t('f3_desc') },
            { icon: '📚', title: t('f4_title'), desc: t('f4_desc') },
          ].map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AVAILABLE LESSONS PREVIEW ===== */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="section-header">
          <div className="section-tag">محتوى تعليمي</div>
          <h2 className="section-title">الدروس <span>المتاحة</span></h2>
          <p className="section-sub">استعرض دروسنا وسجّل للوصول الكامل</p>
        </div>
        <div className="features-grid">
          {[
            { icon: '👁️', title: 'حساسية العين', desc: 'حوار طبي بين طبيب ومريض حول أعراض حساسية العين وعلاجها.', cat: 'طبي', free: true },
            { icon: '🔤', title: 'حرف الباء', desc: 'تعلم رسم وقراءة حرف الباء في أشكاله المختلفة.', cat: 'أصوات', free: true },
            { icon: '📖', title: 'المفرد والمثنى', desc: 'قاعدة المفرد والمثنى في اللغة العربية مع أمثلة تطبيقية.', cat: 'نحو', free: false },
            { icon: '🏥', title: 'إثراء المعجم', desc: 'مفردات طبية أساسية تتعلق بطب العيون والرعاية الصحية.', cat: 'مفردات', free: false },
          ].map((l, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={() => openModal('login')}
            >
              <div style={{ position: 'absolute', top: 14, left: 14, background: l.free ? 'var(--success)' : 'var(--warning)', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>
                {l.free ? 'مجاني' : 'مميز ⭐'}
              </div>
              <div className="feature-icon">{l.icon}</div>
              <h3>{l.title}</h3>
              <p>{l.desc}</p>
              <div style={{ marginTop: 12, fontSize: 12, color: 'var(--primary)', fontWeight: 700 }}>
                🔒 سجّل للوصول
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <div className="cta-banner">
        <div className="cta-inner">
          <h2>{t('cta_title')}</h2>
          <p>{t('cta_sub')}</p>
          <button className="btn-primary" onClick={() => user ? goPacks() : openModal('signup')}>
            {t('cta_btn')}
          </button>
        </div>
      </div>

      <Footer t={t} goPage={goPage} openModal={openModal} user={user} />
    </div>
  );
}
