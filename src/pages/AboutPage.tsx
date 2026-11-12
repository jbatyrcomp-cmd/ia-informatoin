import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import {
  Info,
  Sparkles,
  Send,
  Mail,
  MapPin,
  Github,
  CheckCircle2,
  Code2,
  Layers,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-indigo-200/80 shadow-sm text-xs font-bold text-indigo-700 backdrop-blur-md">
          <Info className="w-3.5 h-3.5" />
          <span>{t.aboutPage.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {t.aboutPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          {t.aboutPage.subtitle}
        </p>
      </div>

      {/* Mission Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-black text-slate-900">
            {t.aboutPage.missionTitle}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.aboutPage.missionText}
        </p>
      </div>

      {/* Author & Project Details Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 border border-indigo-100 shadow-glass space-y-6">
        <div>
          <h2 className="text-xl font-black text-slate-900 mb-1">
            {t.aboutPage.authorTitle}
          </h2>
          <p className="text-xs text-slate-400 font-medium">
            {t.aboutPage.authorNote}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
              Portal Asoschisi / Muallif
            </span>
            <p className="text-sm font-extrabold text-slate-900">
              {siteConfig.authorPlaceholder.name}
            </p>
            <p className="text-indigo-600">{siteConfig.authorPlaceholder.role[language]}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4 text-indigo-600" />
              <span>{siteConfig.authorPlaceholder.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span>{siteConfig.authorPlaceholder.location[language]}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 pt-1">
              <a
                href={siteConfig.authorPlaceholder.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:underline flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={siteConfig.authorPlaceholder.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-800 hover:underline flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack & Contact Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold">
            <Code2 className="w-5 h-5 text-indigo-600" />
            <h3>{t.aboutPage.techTitle}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.aboutPage.techDesc}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {[
              { name: 'React 18 & Vite', desc: 'SPA Frontend' },
              { name: 'Three.js & R3F', desc: '3D WebGL animatsiya' },
              { name: 'Tailwind CSS', desc: 'Minimalist dizayn' },
              { name: 'TypeScript', desc: '100% tip xavfsizligi' },
            ].map((tech, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-800 block">{tech.name}</span>
                <span className="text-[10px] text-slate-400 block">{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass">
          <h3 className="text-base font-extrabold text-slate-900 mb-4">
            {t.aboutPage.contactFormTitle}
          </h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Xabar yuborildi!</span>
              </div>
              <p>{t.aboutPage.sentSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {t.aboutPage.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {t.aboutPage.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {t.aboutPage.messageLabel}
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-sm shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.aboutPage.sendBtn}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

