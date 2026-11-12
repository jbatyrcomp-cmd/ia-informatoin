import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { aiModelsData } from '../data/aiModelsData';
import { AIModelItem } from '../types';
import { RadarChart } from '../components/RadarChart';
import { AIAdvisorQuiz } from '../components/AIAdvisorQuiz';
import { ModelLogo } from '../components/ModelLogo';
import { ChainCard } from '../components/ChainCard';
import {
  GitCompare,
  ArrowLeftRight,
  Trophy,
  CheckCircle2,
  Sparkles,
  Zap,
  Swords,
  Crown,
  Flame,
  ShieldAlert,
} from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<'vs' | 'advisor'>('vs');

  // Initial selected models from URL or defaults
  const initialModelAId = searchParams.get('modelA') || 'openai-o3';
  const initialModelBId = searchParams.get('modelB') || 'gemini-4-argon';

  const [modelAId, setModelAId] = useState<string>(initialModelAId);
  const [modelBId, setModelBId] = useState<string>(initialModelBId);

  // Group models by provider for intuitive selection
  const groupedModels = React.useMemo(() => {
    const groups: Record<string, typeof aiModelsData> = {};
    aiModelsData.forEach((m) => {
      const key = m.provider;
      if (!groups[key]) groups[key] = [];
      groups[key].push(m);
    });
    return groups;
  }, []);

  useEffect(() => {
    const qA = searchParams.get('modelA');
    const qB = searchParams.get('modelB');
    if (qA) setModelAId(qA);
    if (qB) setModelBId(qB);
  }, [searchParams]);

  const modelA = aiModelsData.find((m) => m.id === modelAId) || aiModelsData[0];
  const modelB = aiModelsData.find((m) => m.id === modelBId) || aiModelsData[1];

  const handleSwap = () => {
    const nextA = modelBId;
    const nextB = modelAId;
    setModelAId(nextA);
    setModelBId(nextB);
    setSearchParams({ modelA: nextA, modelB: nextB });
  };

  const handleChangeA = (id: string) => {
    setModelAId(id);
    setSearchParams({ modelA: id, modelB: modelBId });
  };

  const handleChangeB = (id: string) => {
    setModelBId(id);
    setSearchParams({ modelA: modelAId, modelB: id });
  };

  // Calculate average scores
  const getAverageScore = (model: AIModelItem) => {
    const scores = Object.values(model.scores);
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / scores.length);
  };

  const avgA = getAverageScore(modelA);
  const avgB = getAverageScore(modelB);

  const isAWinner = avgA > avgB;
  const isBWinner = avgB > avgA;
  const isTie = avgA === avgB;
  const scoreDiff = Math.abs(avgA - avgB);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/80 shadow-sm text-xs font-bold text-purple-700 backdrop-blur-md">
          <GitCompare className="w-3.5 h-3.5" />
          <span>{t.comparePage.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {t.comparePage.title}
        </h1>
        <p className="text-xs sm:text-base text-slate-600 font-medium">
          {t.comparePage.subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-start sm:justify-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm gap-1 flex-nowrap">
          <button
            onClick={() => setActiveTab('vs')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'vs'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Swords className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t.comparePage.tabVS}</span>
          </button>

          <button
            onClick={() => setActiveTab('advisor')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'advisor'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t.comparePage.tabAdvisor}</span>
          </button>
        </div>
      </div>

      {activeTab === 'vs' ? (
        <div className="space-y-12 animate-in fade-in duration-200">
          {/* ============================================================ */}
          {/* THE BATTLE ARENA / BOXING RING SHOWDOWN ("Ring Fonida")       */}
          {/* ============================================================ */}
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 border-4 border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden text-white">
            {/* Arena Ring Overhead Spotlights */}
            <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -top-24 right-1/4 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/15 via-transparent to-transparent" />

            {/* Boxing Ring Ropes Visual Decoration */}
            <div className="pointer-events-none absolute inset-x-4 top-12 h-0.5 bg-gradient-to-r from-red-500/40 via-amber-400/60 to-blue-500/40" />
            <div className="pointer-events-none absolute inset-x-4 top-20 h-0.5 bg-gradient-to-r from-red-500/30 via-amber-400/40 to-blue-500/30" />
            <div className="pointer-events-none absolute inset-x-4 bottom-12 h-0.5 bg-gradient-to-r from-red-500/40 via-amber-400/60 to-blue-500/40" />

            {/* Arena Header Badge */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-amber-400">
                  AI Titanlar Jangi • Ring Maydoni
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300">
                7 O'lchamli Jang
              </span>
            </div>

            {/* Model Selectors Bar */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-6">
              <div className="md:col-span-5 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block">
                  🔴 Qizil Burchak (Jangchi 1)
                </span>
                <select
                  value={modelAId}
                  onChange={(e) => handleChangeA(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border-2 border-rose-500/50 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-rose-400"
                >
                  {Object.entries(groupedModels).map(([providerName, models]) => (
                    <optgroup key={providerName} label={`❖ ${providerName}`} className="bg-slate-950 text-amber-400 font-bold">
                      {models.map((m) => (
                        <option key={m.id} value={m.id} className="bg-slate-900 text-white font-medium">
                          {m.name} ({m.releaseYear})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Swap Button in Center */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  onClick={handleSwap}
                  className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-amber-400/80 text-amber-400 hover:bg-amber-400 hover:text-slate-950 transition-all hover:scale-110 active:scale-95 shadow-lg shadow-amber-500/20"
                  title={t.comparePage.swapModels}
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </button>
              </div>

              <div className="md:col-span-5 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                  🔵 Ko'k Burchak (Jangchi 2)
                </span>
                <select
                  value={modelBId}
                  onChange={(e) => handleChangeB(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border-2 border-sky-500/50 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-sky-400"
                >
                  {Object.entries(groupedModels).map(([providerName, models]) => (
                    <optgroup key={providerName} label={`❖ ${providerName}`} className="bg-slate-950 text-amber-400 font-bold">
                      {models.map((m) => (
                        <option key={m.id} value={m.id} className="bg-slate-900 text-white font-medium">
                          {m.name} ({m.releaseYear})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>

            {/* The Ring Fighters Side-by-Side Faceoff */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2 pb-6">
              {/* Fighter A Card (Corner A) */}
              <div className="md:col-span-5">
                <div
                  className={`relative p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                    isAWinner
                      ? 'bg-gradient-to-b from-indigo-950/90 to-slate-900/95 border-3 border-amber-400 shadow-2xl shadow-amber-500/25 scale-[1.03] z-10 ring-4 ring-amber-400/20'
                      : 'bg-slate-900/80 border-2 border-slate-700/80'
                  }`}
                >
                  {/* Champion Crown if Winner */}
                  {isAWinner && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/40 animate-pulse">
                      <Crown className="w-4 h-4 fill-slate-950" />
                      <span>Ring Chempioni (+{scoreDiff} Ball)</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-4 mt-1">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                        style={{ backgroundColor: modelA.accentColor }}
                      >
                        <ModelLogo logoKey={modelA.logoKey} size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">{modelA.name}</h3>
                        <span className="text-xs text-rose-300 font-semibold block">
                          {modelA.provider}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-3xl font-black font-mono text-amber-400 block">
                        {avgA}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        Jang Quvvati
                      </span>
                    </div>
                  </div>

                  {/* Combat Power Bar */}
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-[11px] font-bold text-slate-300">
                      <span>Jami Intellekt Ko'rsatkichi</span>
                      <span className="font-mono">{avgA}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isAWinner
                            ? 'bg-gradient-to-r from-amber-400 to-emerald-400 shadow-sm shadow-amber-400'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${avgA}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {modelA.tagline[language]}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{modelA.priceSummary[language]}</span>
                    <span className="font-mono font-semibold text-slate-300">
                      {modelA.contextOrLimit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center VS Battle Emblem */}
              <div className="md:col-span-2 flex flex-col items-center justify-center py-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 via-amber-500 to-sky-500 p-0.5 shadow-xl shadow-amber-500/20 flex items-center justify-center animate-pulse">
                  <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center">
                    <span className="text-xl font-black italic tracking-tighter bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                      VS
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-2">
                  {isTie ? 'Durang' : isAWinner ? `${modelA.name} Ustun` : `${modelB.name} Ustun`}
                </span>
              </div>

              {/* Fighter B Card (Corner B) */}
              <div className="md:col-span-5">
                <div
                  className={`relative p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                    isBWinner
                      ? 'bg-gradient-to-b from-sky-950/90 to-slate-900/95 border-3 border-amber-400 shadow-2xl shadow-amber-500/25 scale-[1.03] z-10 ring-4 ring-amber-400/20'
                      : 'bg-slate-900/80 border-2 border-slate-700/80'
                  }`}
                >
                  {/* Champion Crown if Winner */}
                  {isBWinner && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/40 animate-pulse">
                      <Crown className="w-4 h-4 fill-slate-950" />
                      <span>Ring Chempioni (+{scoreDiff} Ball)</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-4 mt-1">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                        style={{ backgroundColor: modelB.accentColor }}
                      >
                        <ModelLogo logoKey={modelB.logoKey} size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">{modelB.name}</h3>
                        <span className="text-xs text-sky-300 font-semibold block">
                          {modelB.provider}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-3xl font-black font-mono text-amber-400 block">
                        {avgB}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        Jang Quvvati
                      </span>
                    </div>
                  </div>

                  {/* Combat Power Bar */}
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-[11px] font-bold text-slate-300">
                      <span>Jami Intellekt Ko'rsatkichi</span>
                      <span className="font-mono">{avgB}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isBWinner
                            ? 'bg-gradient-to-r from-amber-400 to-emerald-400 shadow-sm shadow-amber-400'
                            : 'bg-sky-500'
                        }`}
                        style={{ width: `${avgB}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {modelB.tagline[language]}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{modelB.priceSummary[language]}</span>
                    <span className="font-mono font-semibold text-slate-300">
                      {modelB.contextOrLimit}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verdict Ribbon */}
            <div className="relative z-10 mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-slate-300">
                  {isTie
                    ? "Ikkala model teng quvvatli natija ko'rsatmoqda."
                    : `${isAWinner ? modelA.name : modelB.name} ${scoreDiff} ball ustunlik bilan ringda hukmronlik qilmoqda.`}
                </span>
              </div>
              <span className="font-bold text-amber-400 underline cursor-pointer">
                Pastda 7 mezonli tahlilni ko'ring ↓
              </span>
            </div>
          </div>

          {/* Radar Chart & Verdict */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Radar Visual */}
            <ChainCard index={0} className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass flex flex-col items-center">
              <h3 className="text-base font-extrabold text-slate-900 mb-6 text-center">
                {t.comparePage.radarTitle}
              </h3>
              <RadarChart
                scoresA={modelA.scores}
                nameA={modelA.name}
                colorA="#4f46e5"
                scoresB={modelB.scores}
                nameB={modelB.name}
                colorB="#0ea5e9"
                size={360}
              />
            </ChainCard>

            {/* Verdict Box */}
            <ChainCard index={1} className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/80 border border-indigo-100 shadow-glass-lg space-y-5">
                <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <span>{t.comparePage.verdictTitle}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white border border-indigo-100 shadow-sm text-center">
                    <span className="text-xs font-semibold text-slate-500 block truncate">
                      {modelA.name}
                    </span>
                    <span className="text-2xl font-black text-indigo-600 font-mono">
                      {avgA}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      / 100 ball
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-sky-100 shadow-sm text-center">
                    <span className="text-xs font-semibold text-slate-500 block truncate">
                      {modelB.name}
                    </span>
                    <span className="text-2xl font-black text-sky-600 font-mono">
                      {avgB}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      / 100 ball
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed space-y-2 pt-2 border-t border-slate-100">
                  <p>
                    <strong className="text-slate-900">{modelA.name}:</strong>{' '}
                    {modelA.tagline[language]}
                  </p>
                  <p>
                    <strong className="text-slate-900">{modelB.name}:</strong>{' '}
                    {modelB.tagline[language]}
                  </p>
                </div>
              </div>
            </ChainCard>
          </div>

          {/* Side-by-side Table (Chain Animated) */}
          <ChainCard index={2}>
            <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-black text-slate-900">
                  {t.comparePage.tableTitle}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-4 px-6 w-1/4">{t.comparePage.metricLabel}</th>
                      <th className="py-4 px-6 w-3/8 text-indigo-700 font-extrabold text-sm">
                        {modelA.name}
                      </th>
                      <th className="py-4 px-6 w-3/8 text-sky-700 font-extrabold text-sm">
                        {modelB.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.developer}
                      </td>
                      <td className="py-3.5 px-6 font-bold">{modelA.provider}</td>
                      <td className="py-3.5 px-6 font-bold">{modelB.provider}</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.releaseYear}
                      </td>
                      <td className="py-3.5 px-6">{modelA.releaseYear}</td>
                      <td className="py-3.5 px-6">{modelB.releaseYear}</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.pricing}
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-slate-900">
                        {modelA.priceSummary[language]}
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-slate-900">
                        {modelB.priceSummary[language]}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.contextLimit}
                      </td>
                      <td className="py-3.5 px-6 font-mono">{modelA.contextOrLimit}</td>
                      <td className="py-3.5 px-6 font-mono">{modelB.contextOrLimit}</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.openSource}
                      </td>
                      <td className="py-3.5 px-6">
                        {modelA.isOpenSource ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <CheckCircle2 className="w-4 h-4" /> {t.comparePage.yes}
                          </span>
                        ) : (
                          <span className="text-slate-400">{t.comparePage.no}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-6">
                        {modelB.isOpenSource ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <CheckCircle2 className="w-4 h-4" /> {t.comparePage.yes}
                          </span>
                        ) : (
                          <span className="text-slate-400">{t.comparePage.no}</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.bestForLabel}
                      </td>
                      <td className="py-3.5 px-6">
                        <ul className="space-y-1">
                          {modelA.bestUseCases[language].map((u, i) => (
                            <li key={i}>• {u}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-3.5 px-6">
                        <ul className="space-y-1">
                          {modelB.bestUseCases[language].map((u, i) => (
                            <li key={i}>• {u}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 font-bold text-slate-500">
                        {t.comparePage.limitationsLabel}
                      </td>
                      <td className="py-3.5 px-6 text-amber-900/80">
                        <ul className="space-y-1">
                          {modelA.limitations[language].map((l, i) => (
                            <li key={i}>• {l}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-3.5 px-6 text-amber-900/80">
                        <ul className="space-y-1">
                          {modelB.limitations[language].map((l, i) => (
                            <li key={i}>• {l}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-indigo-50/30 font-bold text-sm">
                      <td className="py-4 px-6 text-slate-900">
                        {t.comparePage.overallScore}
                      </td>
                      <td className="py-4 px-6 font-mono text-indigo-700 text-base">
                        {avgA} / 100
                      </td>
                      <td className="py-4 px-6 font-mono text-sky-700 text-base">
                        {avgB} / 100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ChainCard>
        </div>
      ) : (
        <div className="py-4 animate-in fade-in duration-200">
          <AIAdvisorQuiz />
        </div>
      )}
    </div>
  );
};
