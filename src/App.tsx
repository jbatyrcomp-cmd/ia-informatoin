import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ITWorldPage } from './pages/ITWorldPage';
import { AIHistoryPage } from './pages/AIHistoryPage';
import { AIModelsPage } from './pages/AIModelsPage';
import { ComparePage } from './pages/ComparePage';
import { AboutPage } from './pages/AboutPage';
import { Global3DBackground } from './components/canvas/Global3DBackground';
import { MouseGlowAura } from './components/MouseGlowAura';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen flex flex-col bg-[#F8FAFC]/80 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
          {/* Global full-viewport 3D Constellation & Mouse Aura */}
          <Global3DBackground />
          <MouseGlowAura />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/it-world" element={<ITWorldPage />} />
                <Route path="/ai-history" element={<AIHistoryPage />} />
                <Route path="/ai-models" element={<AIModelsPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;

