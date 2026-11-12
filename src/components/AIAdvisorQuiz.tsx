import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { aiModelsData } from '../data/aiModelsData';
import { AIModelItem } from '../types';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  GitCompare,
  Zap,
} from 'lucide-react';

interface Answers {
  goal?: 'textStudy' | 'coding' | 'image' | 'video' | 'audio' | 'research';
  budget?: 'freeOnly' | 'freemium' | 'proPaid' | 'openSource';
  lang?: 'uzbekImportant' | 'englishOrRussian' | 'visualAudio';
  priority?: 'maxIntelligence' | 'highSpeed' | 'balanced';
}

export const AIAdvisorQuiz: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<{ model: AIModelItem; score: number }[] | null>(null);

  const totalSteps = 4;

  const handleSelectGoal = (goal: Answers['goal']) => {
    setAnswers((prev) => ({ ...prev, goal }));
  };

  const handleSelectBudget = (budget: Answers['budget']) => {
    setAnswers((prev) => ({ ...prev, budget }));
  };

  const handleSelectLang = (lang: Answers['lang']) => {
    setAnswers((prev) => ({ ...prev, lang }));
  };

  const handleSelectPriority = (priority: Answers['priority']) => {
    setAnswers((prev) => ({ ...prev, priority }));
  };

  const calculateMatches = () => {
    const scored = aiModelsData.map((model) => {
      let score = 50; // base score

      // Goal match (up to +30)
      if (answers.goal === 'coding') {
        if (model.category === 'coding') score += 32;
        else if (model.scores.coding >= 90) score += 25;
      } else if (answers.goal === 'image') {
        if (model.category === 'image') score += 35;
        else if (model.scores.creativity >= 90) score += 15;
      } else if (answers.goal === 'video') {
        if (model.category === 'video') score += 35;
      } else if (answers.goal === 'audio') {
        if (model.category === 'audio') score += 35;
      } else if (answers.goal === 'research') {
        if (model.category === 'research') score += 35;
        else if (model.scores.reasoning >= 95) score += 20;
      } else if (answers.goal === 'textStudy') {
        if (model.category === 'llm') score += 28;
      }

      // Budget match (up to +15)
      if (answers.budget === 'freeOnly') {
        if (model.pricingTier === 'free') score += 18;
        else if (model.isOpenSource) score += 15;
        else if (model.pricingTier === 'freemium') score += 8;
        else score -= 25; // paid penalty
      } else if (answers.budget === 'openSource') {
        if (model.isOpenSource) score += 25;
        else score -= 15;
      } else if (answers.budget === 'proPaid') {
        if (model.pricingTier === 'paid' || model.pricingTier === 'freemium') score += 15;
      }

      // Language match (up to +15)
      if (answers.lang === 'uzbekImportant') {
        if (model.supportsUzbek === 'excellent') score += 18;
        else if (model.supportsUzbek === 'good') score += 10;
        else if (model.supportsUzbek === 'basic') score -= 10;
        else if (model.supportsUzbek === 'na' && model.category !== 'image') score -= 15;
      }

      // Priority match (up to +15)
      if (answers.priority === 'maxIntelligence') {
        score += (model.scores.reasoning - 70) * 0.4;
      } else if (answers.priority === 'highSpeed') {
        score += (model.scores.speed - 70) * 0.4;
      } else if (answers.priority === 'balanced') {
        score += (model.scores.costEfficiency - 70) * 0.3;
      }

      // Clamp 45-99%
      const finalPercentage = Math.min(99, Math.max(45, Math.round(score)));
      return { model, score: finalPercentage };
    });

    scored.sort((a, b) => b.score - a.score);
    setResults(scored.slice(0, 3));
  };

  const restartQuiz = () => {
    setAnswers({});
    setStep(1);
    setResults(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-glass-lg p-6 sm:p-8">
      {/* Quiz Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              {t.advisor.title}
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {t.advisor.stepOf} {step} / {totalSteps}
            </span>
          </div>
        </div>

        {results && (
          <button
            onClick={restartQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.advisor.restart}</span>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {!results && (
        <div className="w-full h-1.5 rounded-full bg-slate-100 my-5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      )}

      {/* Step Content */}
      {!results ? (
        <div className="py-2">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-slate-900">{t.advisor.q1Title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { key: 'textStudy', label: t.advisor.goals.textStudy, icon: '✍️' },
                  { key: 'coding', label: t.advisor.goals.coding, icon: '💻' },
                  { key: 'image', label: t.advisor.goals.image, icon: '🎨' },
                  { key: 'video', label: t.advisor.goals.video, icon: '🎬' },
                  { key: 'audio', label: t.advisor.goals.audio, icon: '🎙️' },
                  { key: 'research', label: t.advisor.goals.research, icon: '🔎' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelectGoal(item.key as Answers['goal'])}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      answers.goal === item.key
                        ? 'bg-indigo-50/80 border-indigo-400 text-indigo-950 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="mt-0.5 leading-snug">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-slate-900">{t.advisor.q2Title}</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { key: 'freeOnly', label: t.advisor.budgets.freeOnly, badge: '100% Free' },
                  { key: 'freemium', label: t.advisor.budgets.freemium, badge: 'Popular' },
                  { key: 'proPaid', label: t.advisor.budgets.proPaid, badge: 'Pro Quality' },
                  { key: 'openSource', label: t.advisor.budgets.openSource, badge: 'Self-Host' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelectBudget(item.key as Answers['budget'])}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      answers.budget === item.key
                        ? 'bg-indigo-50/80 border-indigo-400 text-indigo-950 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-600 font-bold">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-slate-900">{t.advisor.q3Title}</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { key: 'uzbekImportant', label: t.advisor.langNeeds.uzbekImportant, flag: '🇺🇿' },
                  { key: 'englishOrRussian', label: t.advisor.langNeeds.englishOrRussian, flag: '🌐' },
                  { key: 'visualAudio', label: t.advisor.langNeeds.visualAudio, flag: '🎵' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelectLang(item.key as Answers['lang'])}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      answers.lang === item.key
                        ? 'bg-indigo-50/80 border-indigo-400 text-indigo-950 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xl">{item.flag}</span>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-slate-900">{t.advisor.q4Title}</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { key: 'maxIntelligence', label: t.advisor.priorities.maxIntelligence, icon: '🧠' },
                  { key: 'highSpeed', label: t.advisor.priorities.highSpeed, icon: '⚡' },
                  { key: 'balanced', label: t.advisor.priorities.balanced, icon: '⚖️' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelectPriority(item.key as Answers['priority'])}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      answers.priority === item.key
                        ? 'bg-indigo-50/80 border-indigo-400 text-indigo-950 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Nav Controls */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.advisor.back}</span>
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                disabled={
                  (step === 1 && !answers.goal) ||
                  (step === 2 && !answers.budget) ||
                  (step === 3 && !answers.lang)
                }
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-sm shadow-indigo-500/20"
              >
                <span>{t.advisor.next}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                disabled={!answers.priority}
                onClick={calculateMatches}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-sm shadow-emerald-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.advisor.showResults}</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="py-4 space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div>
            <h4 className="text-lg font-black text-slate-900">{t.advisor.resultsTitle}</h4>
            <p className="text-xs text-slate-500 mt-0.5">{t.advisor.resultsSubtitle}</p>
          </div>

          <div className="space-y-3">
            {results.map(({ model, score }, idx) => (
              <div
                key={model.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    #{idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-extrabold text-slate-900">{model.name}</h5>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {model.provider}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {model.tagline[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right min-w-[70px]">
                    <span className="text-base font-black text-indigo-600">{score}%</span>
                    <span className="text-[10px] text-slate-400 block">{t.advisor.matchLabel}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/compare?modelA=${model.id}`)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <GitCompare className="w-3.5 h-3.5" />
                    <span>{t.modelsPage.compareBtn}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {results.length >= 2 && (
            <div className="pt-2">
              <button
                onClick={() =>
                  navigate(`/compare?modelA=${results[0].model.id}&modelB=${results[1].model.id}`)
                }
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-md shadow-indigo-500/20"
              >
                <GitCompare className="w-4 h-4" />
                <span>{t.advisor.compareTopTwo}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

