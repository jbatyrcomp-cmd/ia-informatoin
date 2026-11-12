import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { siteConfig } from '../data/siteConfig';
import {
  Sparkles,
  Layers,
  History,
  Cpu,
  GitCompare,
  Info,
  Menu,
  X,
  Compass,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t.nav.home, icon: Compass },
    { to: '/it-world', label: t.nav.itWorld, icon: Layers },
    { to: '/ai-history', label: t.nav.aiHistory, icon: History },
    { to: '/ai-models', label: t.nav.models, icon: Cpu },
    { to: '/compare', label: t.nav.compare, icon: GitCompare },
    { to: '/about', label: t.nav.about, icon: Info },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {siteConfig.domain}
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 rounded-md">
                  3D
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                IT & AI Knowledge Portal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-white text-indigo-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`
                  }
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions: Language + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <LanguageSelector compact />

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-indigo-600" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

