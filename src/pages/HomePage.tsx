import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { AIAdvisorQuiz } from '../components/AIAdvisorQuiz';
import { aiModelsData } from '../data/aiModelsData';
import { ModelModal } from '../components/ModelModal';
import { ModelLogo } from '../components/ModelLogo';
import { ChainCard } from '../components/ChainCard';
import { AIModelItem } from '../types';
import {
  Sparkles,
  ArrowRight,
  Layers,
  History,
  Cpu,
  GitCompare,
  CheckCircle2,
  ChevronRight,
  Zap,
  ShieldCheck,
  Globe2,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedModel, setSelectedModel] = useState<AIModelItem | null>(null);

  // Take 4 top flagship models for home showcase
  const featuredModels = aiModelsData.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section (No 3D Core, Clean & Expansive Chain Layout) */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-[11px] sm:text-xs font-bold text-indigo-700 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.2]">
                {t.hero.titleStart}
                <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
                {t.hero.titleEnd}
              </h1>

              <p className="text-xs sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
                <Link
                  to="/it-world"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Layers className="w-4 h-4" />
                  <span>{t.hero.ctaExploreIT}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/compare"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-white/90 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200/90 shadow-glass transition-all hover:scale-[1.02] active:scale-95"
                >
                  <GitCompare className="w-4 h-4 text-indigo-600" />
                  <span>{t.hero.ctaCompareAI}</span>
                </Link>
              </div>

              {/* Stat badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200/70 text-left">
                <div className="p-2 sm:p-0">
                  <span className="text-xl sm:text-2xl font-black text-slate-900">20+</span>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">
                    {t.home.statsModels}
                  </span>
                </div>
                <div className="p-2 sm:p-0">
                  <span className="text-xl sm:text-2xl font-black text-indigo-600">4 ta</span>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">
                    {t.home.statsLanguages}
                  </span>
                </div>
                <div className="p-2 sm:p-0">
                  <span className="text-xl sm:text-2xl font-black text-slate-900">7 davr</span>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">
                    {t.home.statsEras}
                  </span>
                </div>
                <div className="p-2 sm:p-0">
                  <span className="text-xl sm:text-2xl font-black text-emerald-600">3D WebGL</span>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">
                    {t.home.statsInteractive}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Live AI Hub Preview Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              <ChainCard index={0} className="p-5 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-glass-lg">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      AI & IT Hub Live Pulse
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                    2026 Edition
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
                    <div className="flex items-center gap-2 text-indigo-600 mb-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-[11px] font-bold">Mantiq & Kod</span>
                    </div>
                    <span className="text-xs text-slate-600 block font-medium">
                      o3, Claude 3.7, DeepSeek R1
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
                    <div className="flex items-center gap-2 text-sky-600 mb-1">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-[11px] font-bold">Multimodal</span>
                    </div>
                    <span className="text-xs text-slate-600 block font-medium">
                      Gemini 2.5 Pro, Veo 3, Sora
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-indigo-950">
                      O'zbek va hududiy tillar qo'llab-quvvatlovi
                    </span>
                  </div>
                  <span className="text-xs font-black text-emerald-600">A'lo</span>
                </div>
              </ChainCard>

              {/* Quick Model Quick-Peek */}
              <div className="grid grid-cols-2 gap-3">
                <ChainCard index={1} className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center p-1.5 shadow-sm">
                    <ModelLogo logoKey="openai" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">GPT-5 / o3</span>
                    <span className="text-[10px] text-slate-400 font-semibold">OpenAI</span>
                  </div>
                </ChainCard>

                <ChainCard index={2} className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center p-1.5 shadow-sm">
                    <ModelLogo logoKey="anthropic" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">Claude 4</span>
                    <span className="text-[10px] text-slate-400 font-semibold">Anthropic</span>
                  </div>
                </ChainCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section (Chain Animated) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portal Bo'limlari</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.home.pillarsTitle}
          </h2>
          <p className="text-xs sm:text-base text-slate-500 mt-2">
            {t.home.pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Pillar 1 */}
          <ChainCard index={0}>
            <Link
              to="/it-world"
              className="group block p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-indigo-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {t.home.pillar1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {t.home.pillar1Desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 mt-4">
                <span>{t.home.openSection}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </ChainCard>

          {/* Pillar 2 */}
          <ChainCard index={1}>
            <Link
              to="/ai-history"
              className="group block p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-sky-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-sm">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                {t.home.pillar2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {t.home.pillar2Desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-600 mt-4">
                <span>{t.home.openSection}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </ChainCard>

          {/* Pillar 3 */}
          <ChainCard index={2}>
            <Link
              to="/ai-models"
              className="group block p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-emerald-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {t.home.pillar3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {t.home.pillar3Desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 mt-4">
                <span>{t.home.openSection}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </ChainCard>

          {/* Pillar 4 */}
          <ChainCard index={3}>
            <Link
              to="/compare"
              className="group block p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-purple-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                <GitCompare className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors">
                {t.home.pillar4Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {t.home.pillar4Desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 mt-4">
                <span>{t.home.openSection}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </ChainCard>
        </div>
      </section>

      {/* Featured AI Models Showcase (Chain Animated) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.home.featuredModelsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.home.featuredModelsSubtitle}
            </p>
          </div>
          <Link
            to="/ai-models"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
          >
            <span>{t.home.viewAllModels}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredModels.map((model, idx) => (
            <ChainCard
              key={model.id}
              index={idx}
              onClick={() => setSelectedModel(model)}
              className="cursor-pointer p-5 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: model.accentColor }}
                  >
                    <ModelLogo logoKey={model.logoKey} size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {model.releaseYear}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-0.5">
                  {model.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 block mb-2">
                  {model.provider}
                </span>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {model.tagline[language]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  {model.priceSummary[language]}
                </span>
                <span className="text-indigo-600 font-bold flex items-center gap-1">
                  {t.modelsPage.detailsBtn}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </ChainCard>
          ))}
        </div>
      </section>

      {/* Interactive AI Advisor Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChainCard index={0} className="p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/60 border border-indigo-100 shadow-glass-lg">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Interaktiv Maslahatchi</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.home.advisorBannerTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {t.home.advisorBannerDesc}
            </p>
          </div>

          <AIAdvisorQuiz />
        </ChainCard>
      </section>

      {/* Model Modal for Full Specs */}
      <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />
    </div>
  );
};
