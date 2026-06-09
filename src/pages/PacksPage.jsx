import React from 'react';
import LESSONS from '../data/lessons';
import Footer from '../components/Footer';
import './PacksPage.css';

const CATEGORY_ORDER = ['medical', 'grammar', 'vocab', 'sounds'];

export default function PacksPage({ t, lang, user, goPage, goLessons, openModal }) {
  const getLessonTitle = (lesson) => lesson.title[lang] || lesson.title.ar;

  const freeLessons = LESSONS.filter(lesson => !lesson.premium);
  const premiumLessons = LESSONS.filter(lesson => lesson.premium);

  const packs = [
    {
      id: 'free',
      icon: '🆓',
      title: t('pack_free_title'),
      desc: `${freeLessons.length} ${t('pack_lesson_count')}`,
      lessons: freeLessons,
      action: () => goLessons(),
      buttonLabel: t('pack_button_view'),
    },
    {
      id: 'premium',
      icon: '⭐',
      title: t('pack_premium_title'),
      desc: `${premiumLessons.length} ${t('pack_lesson_count')}`,
      lessons: premiumLessons,
      action: () => {
        if (user?.subscribed) goLessons();
        else openModal('subscribe');
      },
      buttonLabel: user?.subscribed ? t('pack_button_view') : t('pack_button_subscribe'),
      premium: true,
    },
    {
      id: 'all',
      icon: '📚',
      title: t('pack_all_title'),
      desc: `${LESSONS.length} ${t('pack_lesson_count')}`,
      lessons: LESSONS,
      action: () => goLessons(),
      buttonLabel: t('pack_button_view'),
    },
  ];

  const categorySummary = CATEGORY_ORDER.map((cat) => {
    const lessons = LESSONS.filter(lesson => lesson.cat === cat);
    return {
      cat,
      count: lessons.length,
      title: t('cat_' + cat),
    };
  }).filter(item => item.count > 0);

  return (
    <div className="packs-page">
      <section className="section">
        <div className="section-header">
          <div className="section-tag">{t('pack_tag')}</div>
          <h2 className="section-title">
            {t('pack_title_1')} <span>{t('pack_title_2')}</span>
          </h2>
          <p className="section-sub">{t('pack_sub')}</p>
        </div>

        <div className="packs-summary-row">
          {categorySummary.map(item => (
            <div key={item.cat} className="category-summary-card">
              <div className="category-summary-count">{item.count}</div>
              <div className="category-summary-label">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="packs-grid">
          {packs.map(pack => (
            <div key={pack.id} className={`pack-card ${pack.premium ? 'pack-card-premium' : ''}`}>
              <div className="pack-card-top">
                <div className="pack-card-icon">{pack.icon}</div>
                <div>
                  <h3>{pack.title}</h3>
                  <p className="pack-card-desc">{pack.desc}</p>
                </div>
              </div>

              <div className="pack-card-pill-row">
                {pack.premium && <span className="pack-pill">{t('premium_badge')}</span>}
                {pack.lessons.length === LESSONS.length && (
                  <span className="pack-pill pack-pill-all">{t('pack_all_title')}</span>
                )}
              </div>

              <ul className="pack-card-list">
                {pack.lessons.slice(0, 3).map((lesson) => (
                  <li key={lesson.id}>{getLessonTitle(lesson)}</li>
                ))}
                {pack.lessons.length > 3 && (
                  <li className="pack-card-more">+{pack.lessons.length - 3} {t('pack_more_lessons')}</li>
                )}
              </ul>

              <div className="pack-card-footer">
                <button className="btn-primary pack-card-btn" onClick={pack.action}>
                  {pack.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pack-note">
          {t('pack_about_text')}
        </div>
      </section>

      <Footer t={t} goPage={goPage} openModal={openModal} user={user} />
    </div>
  );
}
