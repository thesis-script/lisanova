// src/pages/LessonsPage.jsx
import React, { useState } from 'react';
import LESSONS from '../data/lessons';
import Footer from '../components/Footer';
import './LessonsPage.css';

const CATS = ['all', 'medical', 'grammar', 'vocab', 'sounds'];

export default function LessonsPage({ t, lang, openLesson, isSpeaking, toggleTTS, showAlert, user, goPage, openModal }) {
  const [activeCat, setActiveCat] = useState('all');

  const getTitle = (l) => l.title[lang] || l.title.ar;
  const getDesc = (l) => l.desc[lang] || l.desc.ar;
  const getDuration = (l) => lang === 'ar' ? l.duration_ar : lang === 'en' ? l.duration_en : l.duration_es;

  const filtered = LESSONS.filter(l => activeCat === 'all' || l.cat === activeCat);

  const handleTTS = (e, lesson) => {
    e.stopPropagation();
    if (!user) { showAlert(t('alert_login_required')); return; }
    toggleTTS(lesson.content.tts_text);
  };

  return (
    <div className="lessons-page">
      <section className="section">
        <div className="section-header">
          <div className="section-tag">{t('les_tag')}</div>
          <h2 className="section-title">
            {t('les_title_1')} <span>{t('les_title_2')}</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="cat-row">
          {CATS.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {t('cat_' + cat)}
            </button>
          ))}
        </div>

        {/* Lessons Grid */}
        <div className="lessons-grid">
          {filtered.map(lesson => (
            <div
              key={lesson.id}
              className="lesson-card"
              onClick={() => openLesson(lesson)}
            >
              {/* Thumbnail */}
              <div className="lesson-thumb" style={{ background: lesson.gradient }}>
                <span className="lesson-icon">{lesson.icon}</span>
                <div className="lesson-badge" data-cat={lesson.cat}>
                  {t('cat_' + lesson.cat)}
                </div>
                {lesson.premium && (
                  <div className="premium-badge">{t('premium_badge')} ⭐</div>
                )}
              </div>

              {/* Body */}
              <div className="lesson-body">
                <h3 className="lesson-title">{getTitle(lesson)}</h3>
                <p className="lesson-desc">{getDesc(lesson)}</p>
                <div className="lesson-meta">
                  <div className="lesson-meta-info">
                    <span>⏱ {getDuration(lesson)}</span>
                    <span>📖 {lesson.lectures} {t('lectures_label')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-lessons">
            <div style={{ fontSize: 48 }}>📭</div>
            <p>لا توجد دروس في هذه الفئة</p>
          </div>
        )}
      </section>

      <Footer t={t} goPage={goPage} openModal={openModal} user={user} />
    </div>
  );
}
