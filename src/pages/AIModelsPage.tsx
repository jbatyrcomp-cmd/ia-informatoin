import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { aiModelsData } from '../data/aiModelsData';
import { AIModelItem, AICategory, PricingTier } from '../types';
import { ModelModal } from '../components/ModelModal';
import { ModelLogo } from '../components/ModelLogo';
import { ChainCard } from '../components/ChainCard';
import {
  Cpu,
  Search,
  Sparkles,
  GitCompare,
  ChevronRight,
  GitBranch,
} from 'lucide-react';

export const AIModelsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<AICategory | 'all'>('all');
  const [selectedPricing, setSelectedPricing] = useState<PricingTier | 'all'>('all');
  const [activeModel, setActiveModel] = useState<AIModelItem | null>(null);

  const providerFilters = [
    { key: 'all', label: 'Barchasi', count: 52 },
    { key: 'OpenAI', label: 'OpenAI / GPT', count: 13, logo: 'openai' },
    { key: 'Google DeepMind', label: 'Google DeepMind', count: 9, logo: 'google' },
    { key: 'Anthropic', label: 'Anthropic Claude', count: 6, logo: 'anthropic' },
    { key: 'DeepSeek', label: 'DeepSeek', count: 5, logo: 'deepseek' },
    { key: 'Meta AI', label: 'Meta AI', count: 4, logo: 'meta' },
    { key: 'xAI', label: 'xAI Grok', count: 3, logo: 'xai' },
    { key: 'Mistral AI', label: 'Mistral AI', count: 3, logo: 'mistral' },
    { key: 'Alibaba Cloud', label: 'Alibaba Qwen', count: 2, logo: 'qwen' },
    { key: 'creative', label: 'Ijodiy, Audio & Kod', count: 7 },
  ];

  const categories = [
    { key: 'all', label: t.modelsPage.allCategories },
    { key: 'llm', label: t.modelsPage.catLLM },
    { key: 'coding', label: t.modelsPage.catCoding },
    { key: 'image', label: t.modelsPage.catImage },
    { key: 'video', label: t.modelsPage.catVideo },
    { key: 'audio', label: t.modelsPage.catAudio },
    { key: 'research', label: t.modelsPage.catResearch },
  ];

  const pricingFilters = [
    { key: 'all', label: t.modelsPage.allPricing },
    { key: 'free', label: t.modelsPage.priceFree },
    { key: 'freemium', label: t.modelsPage.priceFreemium },
    { key: 'paid', label: t.modelsPage.pricePaid },
    { key: 'opensource', label: t.modelsPage.priceOpenSource },
  ];

  const filteredModels = useMemo(() => {
    return aiModelsData.filter((model) => {
      // Provider filter
      if (selectedProvider !== 'all') {
        if (selectedProvider === 'creative') {
          const major = ['OpenAI', 'Google DeepMind', 'Anthropic', 'DeepSeek', 'Meta AI', 'xAI', 'Mistral AI', 'Alibaba Cloud'];
          if (major.includes(model.provider)) return false;
        } else if (model.provider !== selectedProvider) {
          return false;
        }
      }
      // Category filter
      if (selectedCategory !== 'all' && model.category !== selectedCategory) {
        return false;
      }
      // Pricing filter
      if (selectedPricing !== 'all') {
        if (selectedPricing === 'opensource') {
          if (!model.isOpenSource) return false;
        } else if (model.pricingTier !== selectedPricing) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = model.name.toLowerCase().includes(q);
        const inProvider = model.provider.toLowerCase().includes(q);
        const inTagline = model.tagline[language].toLowerCase().includes(q);
        const inCaps = model.capabilities[language].some((c) => c.toLowerCase().includes(q));
        if (!inName && !inProvider && !inTagline && !inCaps) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedProvider, selectedCategory, selectedPricing, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-200/80 shadow-sm text-xs font-bold text-emerald-700 backdrop-blur-md">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t.modelsPage.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {t.modelsPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          {t.modelsPage.subtitle}
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="space-y-4">
        {/* Company / Provider Selector Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {providerFilters.map((p) => (
            <button
              key={p.key}
              onClick={() => setSelectedProvider(p.key)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedProvider === p.key
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                  : 'bg-white/85 border border-slate-200/90 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {p.logo && <ModelLogo logoKey={p.logo} size={14} className="flex-shrink-0" />}
              <span>{p.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedProvider === p.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {p.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.modelsPage.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              Tozalash
            </button>
          )}
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as AICategory | 'all')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25'
                  : 'bg-white/90 border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Chips */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {pricingFilters.map((p) => (
            <button
              key={p.key}
              onClick={() => setSelectedPricing(p.key as PricingTier | 'all')}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedPricing === p.key
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Models Grid (Chain Animated) */}
      {filteredModels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model, idx) => (
            <ChainCard key={model.id} index={idx}>
              <div
                onClick={() => setActiveModel(model)}
                className="cursor-pointer p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-lg hover:border-indigo-300 transition-all hover:-translate-y-1 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Header inside card */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform flex-shrink-0"
                        style={{ backgroundColor: model.accentColor }}
                      >
                        <ModelLogo logoKey={model.logoKey} size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {model.name}
                        </h3>
                        <span className="text-xs font-medium text-slate-500 block">
                          {model.provider}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                      {model.releaseYear}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {model.tagline[language]}
                  </p>

                  {/* Lineage / Released Models Preview */}
                  {model.releasedModels && (
                    <div className="mb-3.5 flex items-center gap-1.5 text-[11px] font-medium text-indigo-700 bg-indigo-50/70 px-2.5 py-1 rounded-xl">
                      <GitBranch className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{model.releasedModels.length} ta chiqarilgan avlod modeli</span>
                    </div>
                  )}

                  {/* Micro Scores preview */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center mb-4 text-[10px]">
                    <div>
                      <span className="text-slate-400 block font-semibold">Mantiq</span>
                      <span className="font-mono font-bold text-slate-800">
                        {model.scores.reasoning}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Kod</span>
                      <span className="font-mono font-bold text-slate-800">
                        {model.scores.coding}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Tezlik</span>
                      <span className="font-mono font-bold text-slate-800">
                        {model.scores.speed}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">
                    {model.priceSummary[language]}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/compare?modelA=${model.id}`);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title={t.modelsPage.compareBtn}
                    >
                      <GitCompare className="w-4 h-4" />
                    </button>

                    <span className="inline-flex items-center gap-1 font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                      <span>{t.modelsPage.detailsBtn}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </ChainCard>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 p-8 rounded-3xl bg-white/60 border border-dashed border-slate-300">
          <p className="text-sm font-semibold text-slate-500">
            {t.modelsPage.noResults}
          </p>
        </div>
      )}

      {/* Modal Popup */}
      <ModelModal model={activeModel} onClose={() => setActiveModel(null)} />
    </div>
  );
};

