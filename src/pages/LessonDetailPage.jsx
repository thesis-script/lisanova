// src/pages/LessonDetailPage.jsx
import React, { useState, useCallback } from 'react';
import Footer from '../components/Footer';
import './LessonDetailPage.css';

export default function LessonDetailPage({
  lesson,
  t,
  lang,
  goPage,
  isSpeaking,
  toggleTTS,
  speakText,
  stopTTS,
  goLessons,
  user,
  openModal,
}) {
  const [activeSection, setActiveSection] = useState('dialogue');
  const [localSpeaking, setLocalSpeaking] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleReveal = useCallback((idx) => {
    setRevealedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  }, []);

  const selectOption = useCallback((exIdx, optIdx) => {
    setSelectedOptions(prev => ({ ...prev, [exIdx]: optIdx }));
  }, []);

  if (!lesson) {
    goPage('lessons');
    return null;
  }

  const getTitle = () => lesson.title[lang] || lesson.title.ar;
  const getDesc = () => lesson.desc[lang] || lesson.desc.ar;
  const imageUrl = lesson.image ? `${process.env.PUBLIC_URL || ''}/${lesson.image}` : null;
  const imageAlt = getTitle();
  const getExerciseSpeaker = (ex) => ex.speaker || t('exercise_speaker');
  const renderSpeakButton = (text) => (
    <button
      type="button"
      className="line-tts-btn"
      onClick={() => speakLine(text)}
      title={t('tts_play')}
      aria-label={t('tts_play')}
    >
      🔊
    </button>
  );

  const handleTTS = () => {
    if (isSpeaking) {
      stopTTS();
      setLocalSpeaking(false);
    } else {
      speakText(lesson.content.tts_text);
      setLocalSpeaking(true);
    }
  };

  // NEW
  const detectLang = (text) => {
    if (/[\u0600-\u06FF]/.test(text)) return 'ar-SA';
    if (/[ñáéíóúüÑÁÉÍÓÚÜ¿¡]/.test(text) || /\b(el|la|de|en|con|que|por|un|una|las|los)\b/i.test(text)) return 'es-ES';
    return 'en-US';
  };

  const speakLine = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = detectLang(text);
    utt.rate = 0.82;
    window.speechSynthesis.speak(utt);
  };

  // When TTS ends externally
  React.useEffect(() => {
    if (!isSpeaking) setLocalSpeaking(false);
  }, [isSpeaking]);

  const SECTIONS = [
    { key: 'dialogue', label: t('section_dialogue') },
    { key: 'vocab', label: t('section_vocab') },
    { key: 'exercises', label: t('section_exercises') },
  ];

  if (lesson.content.visual_pairs) {
    SECTIONS.splice(1, 0, { key: 'structures', label: t('section_structures') });
  }

  return (
    <div className="detail-page">
      {/* ===== HEADER ===== */}
      <div className="detail-hero" style={{ background: lesson.gradient }}>
        <div className="detail-hero-inner">
          <button className="back-btn" onClick={() => goPage('lessons')}>
            {t('back_btn')}
          </button>
          <div className="detail-hero-content">
            <span className="detail-icon">{lesson.icon}</span>
            <div>
              <div className="detail-cat-badge" data-cat={lesson.cat}>
                {t('cat_' + lesson.cat)}
                {lesson.premium && ' ⭐'}
              </div>
              <h1 className="detail-title">{getTitle()}</h1>
              <p className="detail-desc">{getDesc()}</p>
              <div className="detail-meta">
                <span>⏱ {lang === 'ar' ? lesson.duration_ar : lang === 'en' ? lesson.duration_en : lesson.duration_es}</span>
                <span>📖 {lesson.lectures} {t('lectures_label')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== LESSON IMAGE ===== */}
      {imageUrl && (
        <div className="content-box lesson-image-box">
          <h2 className="content-box-title">{t('section_image')}</h2>
          <div className="lesson-image-wrapper" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img style={{ width: '400px', height: '400px', objectFit: 'cover' }} src={imageUrl} alt={imageAlt} className="lesson-image" />
          </div>
        </div>
      )}

      {/* ===== TTS TOOLBAR ===== */}
      <div className="tts-toolbar">
        <div className="tts-toolbar-inner">
          <p>{t('tts_toolbar_label')}</p>
          <button
            className={`tts-main-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={handleTTS}
          >
            {isSpeaking ? t('tts_stop') : t('tts_play')}
          </button>
        </div>
      </div>

      {/* ===== SECTION TABS ===== */}
      <div className="detail-tabs-wrapper">
        <div className="detail-tabs">
          {SECTIONS.map(s => (
            <button
              key={s.key}
              className={`detail-tab ${activeSection === s.key ? 'active' : ''}`}
              onClick={() => setActiveSection(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="detail-content">

        {/* ---- DIALOGUE ---- */}
        {activeSection === 'dialogue' && (
          <div className="content-box">
            <h2 className="content-box-title">{t('section_dialogue')}</h2>
            <div className="dialogue-list">
              {lesson.content.dialogue.map((line, i) => (
                <div key={i} className="dialogue-line">
                  <span className="speaker-label">{line.speaker}</span>
                  <span className="dialogue-text">{line.text}</span>
                  <button
                    className="line-tts-btn"
                    onClick={() => speakLine(`${line.speaker}: ${line.text}`)}
                    title="استمع"
                  >
                    🔊
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---- STRUCTURES (singular/dual visual pairs) ---- */}
        {activeSection === 'structures' && lesson.content.visual_pairs && (
          <div className="content-box">
            <h2 className="content-box-title">{t('section_structures')}</h2>

            {/* Visual pairs from the PDF */}
            <div className="visual-pairs-grid">
              {lesson.content.visual_pairs.map((pair, i) => (
                <div key={i} className="visual-pair-card">
                  <div className="pair-icon">{pair.icon}</div>
                  <div className="pair-words">
                    <div className="pair-singular">
                      <span className="pair-label">مفرد</span>
                      <span className="pair-word">{pair.singular}</span>
                    </div>
                    <div className="pair-arrow">←</div>
                    <div className="pair-dual">
                      <span className="pair-label">مثنى</span>
                      <span className="pair-word">{pair.dual}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grammar rule highlight */}
            {lesson.content.dialogue && (
              <div className="grammar-rule-box">
                <h3>القاعدة</h3>
                {lesson.content.dialogue.map((d, i) => (
                  <div key={i} className="rule-line">
                    <span className="rule-label">{d.speaker}</span>
                    <span className="rule-text">{d.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ---- VOCABULARY ---- */}
        {activeSection === 'vocab' && (
          <div className="content-box">
            <h2 className="content-box-title">{t('section_vocab')}</h2>
            <div className="vocab-grid">
              {lesson.content.vocab.map((v, i) => (
                <div key={i} className="vocab-card">
                  <div className="vocab-ar">
                    <span>{v.ar}</span>
                    {renderSpeakButton(v.ar)}
                  </div>
                  <div className="vocab-divider" />
                  <div className="vocab-en">
                    <span>🇬🇧 {v.en}</span>
                    {renderSpeakButton(v.en)}
                  </div>
                  {v.es && (
                    <>
                      <div className="vocab-divider" />
                      <div className="vocab-en" style={{ color: 'var(--accent, #e07b39)' }}>
                        <span>🇪🇸 {v.es}</span>
                        {renderSpeakButton(v.es)}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Eye descriptions if lesson 1 */}
            {lesson.content.eye_descriptions && (
              <div style={{ marginTop: 32 }}>
                <h3 className="content-sub-title">حالات العين 🔊</h3>
                <div className="eye-desc-grid">
                  {lesson.content.eye_descriptions.map((desc, i) => {
                    const descText = typeof desc === 'string' ? desc : desc.text;
                    const descImage = typeof desc === 'object' ? desc.image : null;
                    const imageUrl = descImage ? `${process.env.PUBLIC_URL || ''}/${descImage}` : null;
                    return (
                      <div key={i} className="eye-desc-card">
                        {imageUrl && (
                          <img src={imageUrl} alt={descText} className="eye-desc-image" />
                        )}
                        <div className="eye-desc-text-row">
                          <p>{descText}</p>
                          {renderSpeakButton(descText)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---- EXERCISES ---- */}
        {activeSection === 'exercises' && (
          <div className="content-box">
            <h2 className="content-box-title">{t('section_exercises')}</h2>

            {lesson.content.exercises.map((ex, i) => {
              const revealed = !!revealedAnswers[i];
              const selected = selectedOptions[i];
              return (
                <div key={i} className="exercise-card">
                  <div className="exercise-speaker">{getExerciseSpeaker(ex)}</div>
                  <div className="exercise-num">{t('exercise_label')} {i + 1}</div>
                  <div className="exercise-question-row">
                    <p className="exercise-question">{ex.question}</p>
                    {renderSpeakButton(ex.question)}
                  </div>

                  {/* Multiple choice — user selects, then reveal */}
                  {ex.type === 'choice' && ex.options && (
                    <div className="choice-options">
                      {ex.options.map((opt, j) => {
                        const isCorrect = opt.includes('✓');
                        const cleanOpt = opt.replace(' ✓', '');
                        const isSelected = selected === j;
                        let cls = 'choice-opt';
                        if (revealed) {
                          if (isCorrect) cls += ' correct';
                          else if (isSelected && !isCorrect) cls += ' wrong';
                        } else if (isSelected) {
                          cls += ' selected';
                        }
                        return (
                          <div
                            key={j}
                            className={cls}
                            style={{ cursor: revealed ? 'default' : 'pointer' }}
                            onClick={() => !revealed && selectOption(i, j)}
                          >
                            {cleanOpt}
                            {revealed && isCorrect && <span className="correct-mark">✓</span>}
                            {revealed && isSelected && !isCorrect && <span className="correct-mark" style={{ color: '#e74c3c' }}>✗</span>}
                          </div>
                        );
                      })}
                      {selected !== undefined && !revealed && (
                        <button className="btn-reveal" onClick={() => toggleReveal(i)}>
                          {t('reveal_answer')}
                        </button>
                      )}
                      {revealed && (
                        <button className="btn-reveal btn-reveal-reset" onClick={() => {
                          toggleReveal(i);
                          setSelectedOptions(prev => { const n = { ...prev }; delete n[i]; return n; });
                        }}>
                          {t('try_again')}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Fill in the blank — hidden until reveal */}
                  {ex.type === 'fill' && !ex.items && (
                    <div>
                      {!revealed ? (
                        <button className="btn-reveal" onClick={() => toggleReveal(i)}>{t('reveal_answer')}</button>
                      ) : (
                        <div className="fill-answer">
                          <span className="answer-label">{t('answer_label')}:</span>
                          <span className="answer-text">{ex.answer}</span>
                          <button className="btn-reveal btn-reveal-reset" style={{ marginTop: 8 }} onClick={() => toggleReveal(i)}>{t('hide_answer')}</button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Matching pairs */}
                  {ex.type === 'matching' && ex.pairs && (
                    <div className="matching-grid">
                      {(ex.pairs || []).map((pair, j) => (
                        <div key={j} className="matching-row">
                          <span className="match-a">{pair.singular || pair.letter || pair.word || ''}</span>
                          <span className="match-arrow">↔</span>
                          <span className="match-b">{pair.dual || pair.word || ''}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Fill items list */}
                  {ex.type === 'fill' && ex.items && (
                    <div className="fill-items">
                      {ex.items.map((item, j) => (
                        <div key={j} className="fill-item-row">
                          <span className="fill-dual">{item.dual}</span>
                          <span className="fill-arrow">←</span>
                          <span className="fill-singular">{item.singular}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Text answer — hidden until reveal */}
                  {ex.type === 'text' && ex.answer && (
                    <div>
                      {!revealed ? (
                        <button className="btn-reveal" onClick={() => toggleReveal(i)}>{t('reveal_answer')}</button>
                      ) : (
                        <div className="fill-answer">
                          <span className="answer-label">{t('answer_label')}:</span>
                          <span className="answer-text">{ex.answer}</span>
                          <button className="btn-reveal btn-reveal-reset" style={{ marginTop: 8 }} onClick={() => toggleReveal(i)}>{t('hide_answer')}</button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Distinguish items */}
                  {ex.type === 'distinguish' && ex.items && (
                    <div className="distinguish-grid">
                      {ex.items.map((item, j) => (
                        <div key={j} className="distinguish-card">
                          <div className="dist-word">{item.word}</div>
                          <div className="dist-start">{item.start}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer t={t} goPage={goPage} openModal={openModal} user={user} />
    </div>
  );
}
