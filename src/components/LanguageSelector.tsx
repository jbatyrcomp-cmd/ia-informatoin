import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { languageNames } from '../i18n/translations';
import { Language } from '../types';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['uz', 'tk', 'ru', 'en'];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border shadow-sm ${
          isOpen
            ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
            : 'bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50'
        }`}
        aria-label="Tilni tanlash"
      >
        <Globe className="w-3.5 h-3.5 text-indigo-600" />
        <span>{languageNames[language].flag}</span>
        <span>{compact ? languageNames[language].label : languageNames[language].native}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Tilni tanlang
          </div>
          {languages.map((lang) => {
            const isSelected = lang === language;
            return (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                  isSelected
                    ? 'bg-indigo-50 text-indigo-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-100/80 font-medium'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{languageNames[lang].flag}</span>
                  <span>{languageNames[lang].native}</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">[{languageNames[lang].label}]</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

