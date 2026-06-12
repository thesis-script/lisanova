// // src/App.jsx
// import React from 'react';
// import { useApp } from './hooks/useApp';
// import Navbar from './components/Navbar';
// import AuthModal from './components/AuthModal';
// import AlertToast from './components/AlertToast';
// import HomePage from './pages/HomePage';
// import LessonsPage from './pages/LessonsPage';
// import PacksPage from './pages/PacksPage';
// import LessonDetailPage from './pages/LessonDetailPage';
// import HelpPage from './pages/HelpPage';
// import './styles/globals.css';

// export default function App() {
//   const app = useApp();

//   return (
//     <>
//       <Navbar
//         t={app.t}
//         lang={app.lang}
//         setLang={app.setLang}
//         user={app.user}
//         logout={app.logout}
//         openModal={app.openModal}
//         goPage={app.goPage}
//         goLessons={app.goLessons}
//       />

//       {/* Pages */}
//       {app.page === 'home' && (
//         <HomePage
//           t={app.t}
//           lang={app.lang}
//           goPage={app.goPage}
//           goLessons={app.goLessons}
//           goPacks={app.goPacks}
//           openModal={app.openModal}
//           openLesson={app.openLesson}
//           user={app.user}
//           showAlert={app.showAlert}
//         />
//       )}

//       {app.page === 'lessons' && (
//         <LessonsPage
//           t={app.t}
//           lang={app.lang}
//           openLesson={app.openLesson}
//           isSpeaking={app.isSpeaking}
//           toggleTTS={app.toggleTTS}
//           showAlert={app.showAlert}
//           user={app.user}
//           goPage={app.goPage}
//           openModal={app.openModal}
//         />
//       )}

//       {app.page === 'packs' && (
//         <PacksPage
//           t={app.t}
//           lang={app.lang}
//           user={app.user}
//           goPage={app.goPage}
//           goLessons={app.goLessons}
//           openModal={app.openModal}
//         />
//       )}

//       {app.page === 'lesson-detail' && (
//         <LessonDetailPage
//           lesson={app.selectedLesson}
//           t={app.t}
//           lang={app.lang}
//           goPage={app.goPage}
//           isSpeaking={app.isSpeaking}
//           toggleTTS={app.toggleTTS}
//           speakText={app.speakText}
//           stopTTS={app.stopTTS}
//           user={app.user}
//           openModal={app.openModal}
//         />
//       )}

//       {app.page === 'help' && (
//         <HelpPage
//           t={app.t}
//           goPage={app.goPage}
//           openModal={app.openModal}
//           user={app.user}
//           showAlert={app.showAlert}
//         />
//       )}

//       {/* Modals */}
//       {app.modal && (
//         <AuthModal
//           modal={app.modal}
//           closeModal={app.closeModal}
//           t={app.t}
//           login={app.login}
//           signup={app.signup}
//           subscribe={app.subscribe}
//         />
//       )}

//       {/* Alert toast */}
//       <AlertToast message={app.alert} />
//     </>
//   );
// }
