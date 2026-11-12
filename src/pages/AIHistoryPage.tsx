import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { aiTimeline, aiTypes, llmPipelineSteps } from '../data/aiHistoryData';
import { ChainCard } from '../components/ChainCard';
import {
  History,
  Truck,
  Sparkles,
  Workflow,
  Fuel,
  Compass,
  ArrowDown,
} from 'lucide-react';

export const AIHistoryPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-sm text-xs font-bold text-sky-700 backdrop-blur-md">
          <History className="w-3.5 h-3.5" />
          <span>{t.aiHistoryPage.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {t.aiHistoryPage.title}
        </h1>
        <p className="text-xs sm:text-base text-slate-600 font-medium">
          {t.aiHistoryPage.subtitle}
        </p>
      </div>

      {/* Road / Highway of AI Milestones ("Yo'l shaklida furgonlar kabi ketma-ket") */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 mb-2">
            <Truck className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>AI Rivojlanish Magistrali • Kiber-Karvon</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.aiHistoryPage.timelineTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Har bir davr katta axborot yukini manzilga eltuvchi furgon kabi texnologiya yo'lida ketma-ket harakatlanadi.
          </p>
        </div>

        {/* The Highway Road Track */}
        <div className="relative py-4">
          {/* Central Road Stripe (hidden on mobile, centered on md+) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-8 md:-translate-x-1/2 bg-slate-800 rounded-full shadow-inner flex flex-col items-center justify-around overflow-hidden py-4 border-2 border-slate-700">
            {/* Dashed highway center markings */}
            <div className="w-1 h-full border-r-2 border-dashed border-amber-400 opacity-80" />
          </div>

          {/* Convoy Wagons / Furgonlar */}
          <div className="relative space-y-12 sm:space-y-16 pl-14 md:pl-0">
            {aiTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Road Hitch / Trailer Coupling Node */}
                  <div className="absolute -left-12 md:left-1/2 top-6 md:-translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-amber-400 z-20 shadow-md flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Spacer for 50% width on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* The Furgon (Van Card) */}
                  <div className="w-full md:w-1/2 px-2 sm:px-6">
                    <ChainCard index={idx}>
                      <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-slate-200/90 shadow-glass-lg hover:shadow-2xl transition-all overflow-hidden group hover:border-indigo-400">
                        {/* Furgon Top Roof Rack / Era Indicator */}
                        <div
                          className="px-5 py-2.5 text-white flex items-center justify-between shadow-sm"
                          style={{ backgroundColor: item.accentColor }}
                        >
                          <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4" />
                            <span className="text-xs font-black tracking-wider uppercase">
                              Furgon #{idx + 1} • {item.eraKey.toUpperCase()}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-black">
                            {item.year}
                          </span>
                        </div>

                        {/* Furgon Body / Cargo Space */}
                        <div className="p-5 sm:p-6 space-y-4">
                          <div>
                            <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {item.title[language]}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-indigo-950 mt-1">
                              {item.summary[language]}
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.details[language]}
                          </p>

                          {/* Cabin Crew & Cargo Impact */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                <Compass className="w-3 h-3 text-indigo-500" />
                                <span>Ixtirochilar & Haydovchilar</span>
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {item.keyFigures.map((fig, fIdx) => (
                                  <span
                                    key={fIdx}
                                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[11px]"
                                  >
                                    {fig}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                <Fuel className="w-3 h-3 text-emerald-500" />
                                <span>Tarixiy Yuk / Natija</span>
                              </span>
                              <p className="text-[11px] font-medium text-slate-700">
                                {item.impact[language]}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Furgon Chassis & Dual Wheels with Headlights */}
                        <div className="bg-slate-100/90 px-5 py-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                          {/* Front Headlights */}
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                            <span className="text-[10px] font-mono text-slate-400 font-semibold ml-1">
                              Furgon Chirog'i
                            </span>
                          </div>

                          {/* Dual Wheels */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                              </div>
                              <div className="w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ChainCard>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Road Finish / Highway Endpoint */}
          <div className="mt-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-bounce">
              <ArrowDown className="w-6 h-6" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 mt-2">
              Kelajak: 2026+ Kvant & AGI sari yo'l
            </span>
          </div>
        </div>
      </section>

      {/* AI Types & Levels (ANI, AGI, ASI) (Chain Animated) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.aiHistoryPage.typesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {t.aiHistoryPage.typesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiTypes.map((tier, idx) => (
            <ChainCard key={tier.id} index={idx}>
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-glass flex flex-col justify-between h-full">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 shadow-sm"
                    style={{ backgroundColor: tier.color }}
                  >
                    {tier.badge}
                  </span>

                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {tier.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {tier.description[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Holati
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {tier.status[language]}
                  </span>
                </div>
              </div>
            </ChainCard>
          ))}
        </div>
      </section>

      {/* How LLMs Work Pipeline (Chain Animated) */}
      <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/60 border border-indigo-100 shadow-glass-lg space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Neyron Konveyer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.aiHistoryPage.howLLMTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {t.aiHistoryPage.howLLMSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {llmPipelineSteps.map((step, idx) => (
            <ChainCard key={step.step} index={idx}>
              <div className="p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold mb-3 shadow-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    {step.title[language]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description[language]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="font-mono text-[11px] text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-md block truncate">
                    {step.example}
                  </span>
                </div>
              </div>
            </ChainCard>
          ))}
        </div>
      </section>
    </div>
  );
};
