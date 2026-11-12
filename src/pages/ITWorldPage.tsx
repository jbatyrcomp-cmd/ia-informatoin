import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { itHistoryTimeline, itDomains, itLayers } from '../data/itData';
import { Stack3DView } from '../components/canvas/Stack3DView';
import { ChainCard } from '../components/ChainCard';
import {
  Layers,
  History,
  Cpu,
  Code2,
  BrainCircuit,
  CloudCog,
  ShieldCheck,
  Network,
  Palette,
  Sparkles,
} from 'lucide-react';

const domainIcons: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  CloudCog,
  ShieldCheck,
  Network,
  Palette,
};

export const ITWorldPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'history' | 'types' | 'howItWorks'>('history');
  const [selectedLayerStep, setSelectedLayerStep] = useState<number>(3);

  const activeLayer = itLayers.find((l) => l.step === selectedLayerStep) || itLayers[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-indigo-200/80 shadow-sm text-xs font-bold text-indigo-700 backdrop-blur-md">
          <Layers className="w-3.5 h-3.5" />
          <span>{t.itPage.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {t.itPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          {t.itPage.subtitle}
        </p>
      </div>

      {/* Segmented Control Tabs */}
      <div className="flex justify-start sm:justify-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm gap-1 flex-nowrap">
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'history'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <History className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t.itPage.tabHistory}</span>
          </button>

          <button
            onClick={() => setActiveTab('types')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'types'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t.itPage.tabTypes}</span>
          </button>

          <button
            onClick={() => setActiveTab('howItWorks')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'howItWorks'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t.itPage.tabHowItWorks}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: IT History Timeline */}
      {activeTab === 'history' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="relative border-l-2 border-indigo-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {itHistoryTimeline.map((item, idx) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node Dot */}
                <span
                  className="absolute -left-[33px] sm:-left-[49px] top-2 w-4 h-4 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: item.accentColor }}
                />

                <ChainCard index={idx}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {item.title[language]}
                      </h3>
                    </div>

                    <p className="text-sm font-semibold text-indigo-900/80 mb-3">
                      {item.summary[language]}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {item.details[language]}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs">
                      <div className="space-y-1">
                        <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                          {t.itPage.keyFigures}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.keyFigures.map((fig, fIdx) => (
                            <span
                              key={fIdx}
                              className="px-2.5 py-0.5 rounded-lg bg-slate-100 font-semibold text-slate-700"
                            >
                              {fig}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                          {t.itPage.impact}
                        </span>
                        <p className="font-medium text-slate-700">
                          {item.impact[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </ChainCard>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: IT Domains & Types */}
      {activeTab === 'types' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {itDomains.map((domain, idx) => {
            const Icon = domainIcons[domain.iconName] || Code2;
            return (
              <ChainCard key={domain.id} index={idx}>
                <div className="p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-indigo-300 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md"
                      style={{ backgroundColor: domain.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-black text-slate-900 mb-1">
                      {domain.title[language]}
                    </h3>
                    <span className="text-xs font-semibold text-indigo-600 block mb-3">
                      {domain.tagline[language]}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {domain.description[language]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {t.itPage.technologies}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[11px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {t.itPage.examples}
                      </span>
                      <p className="text-xs text-slate-500 font-medium">
                        {domain.examples[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </ChainCard>
            );
          })}
        </div>
      )}

      {/* TAB 3: How IT Works (3D 5-Layer Stack) */}
      {activeTab === 'howItWorks' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900">
              {t.itPage.stackTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.itPage.stackSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 3D Stack View */}
            <div className="lg:col-span-6">
              <Stack3DView
                activeStep={selectedLayerStep}
                onSelectStep={(step) => setSelectedLayerStep(step)}
              />
            </div>

            {/* Right: Active Layer Details */}
            <div className="lg:col-span-6 space-y-4">
              {/* Layer Selection Chips */}
              <div className="flex flex-wrap gap-2 mb-2">
                {itLayers.map((layer) => (
                  <button
                    key={layer.step}
                    onClick={() => setSelectedLayerStep(layer.step)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedLayerStep === layer.step
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white/80 border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    L{layer.step}: {layer.shortCode}
                  </button>
                ))}
              </div>

              {/* Active Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-glass-lg space-y-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base font-black shadow-sm"
                    style={{ backgroundColor: activeLayer.color }}
                  >
                    {activeLayer.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {activeLayer.layerName[language]}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 font-bold">
                      {activeLayer.shortCode}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {t.itPage.whatItDoes}
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                      {activeLayer.whatItDoes[language]}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {t.itPage.howItWorksLabel}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {activeLayer.howItWorks[language]}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                    <h4 className="text-xs font-bold text-indigo-950 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{t.itPage.realExample}</span>
                    </h4>
                    <p className="text-xs text-indigo-900/80 font-medium">
                      {activeLayer.realExample[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

