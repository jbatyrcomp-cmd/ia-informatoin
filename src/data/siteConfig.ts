import { LocalizedText } from '../types';

export interface SiteConfig {
  domain: string;
  brandName: string;
  tagline: LocalizedText;
  authorPlaceholder: {
    name: string;
    role: LocalizedText;
    email: string;
    telegram: string;
    github: string;
    location: LocalizedText;
  };
}

/**
 * oybekova.uz loyiha va muallif sozlamalari.
 * Saytni joylashtirishdan oldin quyidagi shablon ma'lumotlarini o'zingiznikiga osongina almashtirishingiz mumkin.
 */
export const siteConfig: SiteConfig = {
  domain: 'oybekova.uz',
  brandName: 'oybekova.uz',
  tagline: {
    uz: "IT va Sun'iy Intellekt bo'yicha zamonaviy 3D bilim portali",
    tk: 'IT we Emeli Aň boýunça döwrebap 3D bilim portaly',
    ru: 'Современный 3D-портал знаний об ИТ и искусственном интеллекте',
    en: 'Modern 3D Knowledge Portal for IT & Artificial Intelligence',
  },
  authorPlaceholder: {
    name: 'Oybekova (Loyiha asoschisi)',
    role: {
      uz: 'IT & AI tadqiqotchisi va portal muallifi',
      tk: 'IT we AI gözlegçisi, portal awtory',
      ru: 'Исследователь ИТ и ИИ, автор портала',
      en: 'IT & AI Researcher and Portal Creator',
    },
    email: 'info@oybekova.uz',
    telegram: 'https://t.me/oybekova_uz',
    github: 'https://github.com/oybekova-uz',
    location: {
      uz: "Toshkent, O'zbekiston",
      tk: 'Daşkent, Özbegistan',
      ru: 'Ташкент, Узбекистан',
      en: 'Tashkent, Uzbekistan',
    },
  },
};

