import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, ArrowUpRight, Github, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-white/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                {siteConfig.domain}
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              {siteConfig.tagline[language]}
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                WebGL 3D Active
              </span>
              <span>•</span>
              <span>100% Client-Side SPA</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/it-world" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {t.nav.itWorld}
                </Link>
              </li>
              <li>
                <Link to="/ai-history" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {t.nav.aiHistory}
                </Link>
              </li>
              <li>
                <Link to="/ai-models" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {t.nav.models}
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {t.nav.compare}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Aloqa & Manbalar
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={siteConfig.authorPlaceholder.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-sky-500" />
                  <span>Telegram</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.authorPlaceholder.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                Email: {siteConfig.authorPlaceholder.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.domain}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1">
            <span>{t.footer.builtFor}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

