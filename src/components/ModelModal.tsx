import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AIModelItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { ModelLogo } from './ModelLogo';
import {
  X,
  ExternalLink,
  GitCompare,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Zap,
  GitBranch,
} from 'lucide-react';

interface ModelModalProps {
  model: AIModelItem | null;
  onClose: () => void;
}

export const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  if (!model) return null;

  const handleCompareClick = () => {
    onClose();
    navigate(`/compare?modelA=${model.id}`);
  };

  const getUzbekBadge = (status: AIModelItem['supportsUzbek']) => {
    switch (status) {
      case 'excellent':
        return { label: t.modelsPage.uzExcellent, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'good':
        return { label: t.modelsPage.uzGood, color: 'bg-sky-50 text-sky-700 border-sky-200' };
      case 'fair':
      case 'basic':
        return { label: t.modelsPage.uzBasic, color: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'poor':
      case 'na':
      default:
        return { label: t.modelsPage.uzNA, color: 'bg-slate-50 text-slate-600 border-slate-200' };
    }
  };

  const uzBadge = getUzbekBadge(model.supportsUzbek);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={t.modelsPage.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Official Logo */}
        <div className="flex flex-wrap items-start gap-4 pb-5 border-b border-slate-100">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0"
            style={{ backgroundColor: model.accentColor }}
          >
            <ModelLogo logoKey={model.logoKey} size={28} className="text-white" />
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">{model.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                {model.provider}
              </span>
              {model.isOpenSource && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Open Source
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              {model.tagline[language]}
            </p>
          </div>
        </div>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-5">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {t.comparePage.pricing}
            </span>
            <p className="text-xs font-bold text-slate-800 mt-0.5">
              {model.priceSummary[language]}
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {t.comparePage.contextLimit}
            </span>
            <p className="text-xs font-bold text-slate-800 mt-0.5">
              {model.contextOrLimit}
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {t.comparePage.releaseYear}
            </span>
            <p className="text-xs font-bold text-slate-800 mt-0.5">
              {model.releaseYear}
            </p>
          </div>
          <div className={`p-3 rounded-2xl border ${uzBadge.color}`}>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
              {t.modelsPage.uzbekSupport}
            </span>
            <p className="text-xs font-bold mt-0.5">{uzBadge.label}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {model.description[language]}
          </p>
        </div>

        {/* Released Models Evolution (Chiqargan modellari) */}
        {model.releasedModels && model.releasedModels.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
              <GitBranch className="w-4 h-4 text-indigo-600" />
              <span>Kompaniya chiqargan modellari tarixi & avlodlari</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {model.releasedModels.map((modName, mIdx) => (
                <span
                  key={mIdx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{modName}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 7 Scores Progress Bars */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-indigo-50/40 border border-indigo-100/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>{t.modelsPage.modalScores}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(model.scores).map(([metricKey, score]) => {
              const label =
                t.comparePage.scores[metricKey as keyof typeof t.comparePage.scores] ||
                metricKey;
              return (
                <div key={metricKey} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{label}</span>
                    <span className="font-mono text-indigo-700">{score}/100</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200/70 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${score}%`,
                        backgroundColor: model.accentColor,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Capabilities & Best use */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.modelsPage.modalCapabilities}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {model.capabilities[language].map((cap, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span>{t.modelsPage.modalBestFor}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {model.bestUseCases[language].map((best, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  <span>{best}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Limitations & Tip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
            <h5 className="text-xs font-bold text-amber-900 mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>{t.modelsPage.modalLimitations}</span>
            </h5>
            <ul className="space-y-1 text-xs text-amber-900/80">
              {model.limitations[language].map((lim, i) => (
                <li key={i}>• {lim}</li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-200/70">
            <h5 className="text-xs font-bold text-sky-900 mb-1.5 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-sky-600" />
              <span>{t.modelsPage.modalTips}</span>
            </h5>
            <p className="text-xs text-sky-900/80 leading-relaxed">
              {model.usageTips[language]}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <a
            href={model.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span>{t.modelsPage.visitOfficial}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCompareClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20"
          >
            <GitCompare className="w-4 h-4" />
            <span>{t.modelsPage.compareBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
