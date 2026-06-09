// src/hooks/useApp.js
import { useState, useCallback, useEffect, useRef } from 'react';
import TRANS from '../data/translations';

export function useApp() {
  const [lang, setLangState] = useState('ar');
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(null); // 'login' | 'signup' | 'subscribe'
  const [alert, setAlert] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const alertTimer = useRef(null);

  const t = useCallback((key) => {
    return (TRANS[lang] || TRANS.ar)[key] || key;
  }, [lang]);

  const setLang = useCallback((l) => {
    setLangState(l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.body.className = `lang-${l}`;
  }, []);

  const showAlert = useCallback((msg) => {
    setAlert(msg);
    clearTimeout(alertTimer.current);
    alertTimer.current = setTimeout(() => setAlert(null), 3500);
  }, []);

  const openModal = useCallback((type) => setModal(type), []);
  const closeModal = useCallback(() => setModal(null), []);

  const goPage = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goLessons = useCallback(() => {
    if (!user) { showAlert(TRANS[lang].alert_login_required); openModal('login'); return; }
    goPage('lessons');
  }, [user, lang, showAlert, openModal, goPage]);

  const goPacks = useCallback(() => {
    if (!user) { showAlert(TRANS[lang].alert_login_required); openModal('login'); return; }
    goPage('packs');
  }, [user, lang, showAlert, openModal, goPage]);

  const login = useCallback((email) => {
    const u = { name: email.split('@')[0], email, subscribed: false };
    setUser(u);
    closeModal();
    showAlert(TRANS[lang].alert_login_success);
  }, [lang, closeModal, showAlert]);

  const signup = useCallback((name, email) => {
    const u = { name, email, subscribed: false };
    setUser(u);
    closeModal();
    showAlert(TRANS[lang].alert_signup_success);
  }, [lang, closeModal, showAlert]);

  const subscribe = useCallback(() => {
    setUser(prev => ({ ...prev, subscribed: true }));
    closeModal();
    showAlert(TRANS[lang].alert_sub_success);
  }, [lang, closeModal, showAlert]);

  const logout = useCallback(() => {
    stopTTS();
    setUser(null);
    showAlert(TRANS[lang].alert_logout);
    goPage('home');
  }, [lang, showAlert, goPage]);

  const openLesson = useCallback((lesson) => {
    if (!user) { showAlert(TRANS[lang].alert_login_required); openModal('login'); return; }
    if (lesson.premium && !user.subscribed) { showAlert(TRANS[lang].alert_sub_required); openModal('subscribe'); return; }
    setSelectedLesson(lesson);
    goPage('lesson-detail');
  }, [user, lang, showAlert, openModal, goPage]);

  const stopTTS = useCallback(() => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const speakText = useCallback((text) => {
    if (!window.speechSynthesis) return;
    stopTTS();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ar-SA';
    utt.rate = 0.82;
    utt.pitch = 1;
    utt.onend = () => setIsSpeaking(false);
    utt.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utt);
    setIsSpeaking(true);
  }, [stopTTS]);

  const toggleTTS = useCallback((text) => {
    if (isSpeaking) stopTTS();
    else speakText(text);
  }, [isSpeaking, stopTTS, speakText]);

  // Initialize lang class on mount
  useEffect(() => {
    document.body.className = `lang-${lang}`;
    document.documentElement.dir = 'rtl';
  }, []);

  return {
    lang, setLang, t,
    page, goPage, goLessons, goPacks,
    user, login, signup, subscribe, logout,
    modal, openModal, closeModal,
    alert, showAlert,
    selectedLesson, openLesson,
    isSpeaking, speakText, stopTTS, toggleTTS,
  };
}
