export type Language = 'uz' | 'tk' | 'ru' | 'en';

export type LocalizedText = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export interface TimelineItem {
  id: string;
  year: string;
  eraKey: string;
  title: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText;
  keyFigures: string[];
  impact: LocalizedText;
  accentColor: string;
}

export interface ITDomainItem {
  id: string;
  iconName: string;
  color: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  examples: LocalizedText;
}

export interface ITLayerItem {
  id: string;
  step: number;
  layerName: LocalizedText;
  shortCode: string;
  color: string;
  whatItDoes: LocalizedText;
  howItWorks: LocalizedText;
  realExample: LocalizedText;
}

export type AICategory =
  | 'llm'
  | 'coding'
  | 'image'
  | 'video'
  | 'audio'
  | 'research';

export type PricingTier = 'free' | 'freemium' | 'paid' | 'opensource';

export interface ModelScores {
  reasoning: number; // 1-100
  coding: number;
  creativity: number;
  speed: number;
  multimodal: number;
  uzbekAndMultilingual: number;
  costEfficiency: number;
}

export interface AIModelItem {
  id: string;
  name: string;
  provider: string;
  category: AICategory;
  releaseYear: string;
  pricingTier: PricingTier;
  priceSummary: LocalizedText;
  contextOrLimit: string;
  tagline: LocalizedText;
  description: LocalizedText;
  capabilities: LocalizedList;
  bestUseCases: LocalizedList;
  limitations: LocalizedList;
  usageTips: LocalizedText;
  websiteUrl: string;
  scores: ModelScores;
  isOpenSource: boolean;
  supportsUzbek: 'excellent' | 'good' | 'fair' | 'basic' | 'poor' | 'na';
  accentColor: string;
  logoKey: string;
  releasedModels: string[];
}

