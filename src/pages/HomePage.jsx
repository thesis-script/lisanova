// src/pages/HomePage.jsx
import React from 'react';
import Footer from '../components/Footer';
import LESSONS from '../data/lessons';
import './HomePage.css';

export default function HomePage({ t, lang, goPage, goLessons, goPacks, openModal, openLesson, user, showAlert }) {

  const PACKS_PREVIEW = [
    {
      id: 'free',
      icon: '🆓',
      titleKey: 'pack_free_title',
      priceKey: null,
      descKey: 'pack_free_preview_desc',
      premium: false,
      action: () => goLessons(),
    },
    {
      id: 'medical',
      icon: '🏥',
      titleKey: 'plan_medical_general_title',
      priceKey: 'price_medical_general',
      descKey: 'plan_medical_general_desc',
      premium: true,
      action: () => user?.subscribed ? goLessons() : openModal('subscribe'),
    },
    {
      id: 'grammar',
      icon: '📖',
      titleKey: 'plan_grammar_title',
      priceKey: 'price_grammar',
      descKey: 'plan_grammar_desc',
      premium: true,
      action: () => user?.subscribed ? goLessons() : openModal('subscribe'),
    },
    {
      id: 'all',
      icon: '📚',
      titleKey: 'pack_all_title',
      priceKey: null,
      descKey: 'pack_all_preview_desc',
      premium: false,
      action: () => goPage('packs'),
    },
  ];

  const PREVIEW_LESSONS = [
    { icon: '👁️', titleKey: 'prev_l1_title', descKey: 'prev_l1_desc', cat: 'medical', free: true, lessonId: 1 },
    { icon: '🔤', titleKey: 'prev_l2_title', descKey: 'prev_l2_desc', cat: 'sounds', free: true, lessonId: 2 },
    { icon: '📖', titleKey: 'prev_l3_title', descKey: 'prev_l3_desc', cat: 'grammar', free: false, lessonId: 3 },
    { icon: '🏥', titleKey: 'prev_l4_title', descKey: 'prev_l4_desc', cat: 'vocab', free: false, lessonId: 4 },
  ];

  const handlePreviewLessonClick = (l) => {
    if (!user) {
      openModal('signup');
      return;
    }
    const lesson = LESSONS.find(les => les.id === l.lessonId);
    if (lesson) openLesson(lesson);
  };

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <div className="hero-badge">🎓 {t('hero_badge')}</div>
          <h1 className="hero-title">
            {t('hero_title_1')} <span>{t('hero_title_2')}</span>
          </h1>
          <p className="hero-sub" style={{ margin: '0 auto 36px' }}>{t('hero_sub')}</p>
          <div className="hero-btns" style={{ justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => user ? goLessons() : openModal('signup')}>
              {t('hero_btn1')}
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' })}>
              {t('hero_btn2')}
            </button>
          </div>
          <div className="hero-stats" style={{ justifyContent: 'center' }}>
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
              onClick={(e) => e.stopPropagation()}
            >
              <source src={`${process.env.PUBLIC_URL}/video.webm`} type="video/webm" />
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
          <div className="section-tag">{t('lessons_preview_tag')}</div>
          <h2 className="section-title">{t('lessons_preview_title_1')} <span>{t('lessons_preview_title_2')}</span></h2>
          <p className="section-sub">{t('lessons_preview_sub')}</p>
        </div>
        <div className="features-grid">
          {PREVIEW_LESSONS.map((l, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={() => handlePreviewLessonClick(l)}
            >
              <div style={{ position: 'absolute', top: 14, left: 14, background: l.free ? 'var(--success)' : 'var(--warning)', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>
                {l.free ? t('free_badge') : `${t('premium_badge')} ⭐`}
              </div>
              <div className="feature-icon">{l.icon}</div>
              <h3>{t(l.titleKey)}</h3>
              <p>{t(l.descKey)}</p>
              {!user && (
                <div style={{ marginTop: 12, fontSize: 12, color: 'var(--primary)', fontWeight: 700 }}>
                  🔒 {t('register_to_access')}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== PACKAGES PREVIEW ===== */}
      <section className="section" >
        <div className="section-header">
          <div className="section-tag">{t('pack_tag')}</div>
          <h2 className="section-title">{t('pack_title_1')} <span>{t('pack_title_2')}</span></h2>
          <p className="section-sub">{t('pack_sub')}</p>
        </div>
        <div className="features-grid">
          {PACKS_PREVIEW.map((pack, i) => (
            <div
              key={i}
              className={`feature-card${pack.premium ? ' pack-home-premium' : ''}`}
              style={{
                position: 'relative',
                cursor: 'pointer',
                height: '370px',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={pack.action}
            >
              {pack.premium && (
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    background: 'var(--accent)',
                    color: 'white',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 20
                  }}
                >
                  ⭐ {t('premium_badge')}
                </div>
              )}

              <div className="feature-icon">{pack.icon}</div>
              <h3>{t(pack.titleKey)}</h3>

              {pack.priceKey && (
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: 'var(--primary)',
                    margin: '8px 0 4px'
                  }}
                >
                  {t(pack.priceKey)}
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: 'var(--gray-400)'
                    }}
                  >
                    {' '}
                    {t('per_month')}
                  </span>
                </div>
              )}

              <p style={{ fontSize: 13, color: 'var(--gray-500)' }}>
                {t(pack.descKey)}
              </p>

              <button
                className="btn-primary"
                style={{
                  marginTop: 'auto',
                  width: '100%',
                  fontSize: 13
                }}
                onClick={pack.action}
              >
                {pack.premium ? t('pack_button_subscribe') : t('pack_button_view')}
              </button>
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
