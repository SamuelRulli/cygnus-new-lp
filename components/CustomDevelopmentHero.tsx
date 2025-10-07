'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';
import { ArrowRight, Code, Zap, Shield, Users, Scaling } from 'lucide-react';

export default function CustomDevelopmentHero() {
  const { language } = useLanguage();
  const t = translations[language].customDevelopmentHero;

  const blocks = [
    { title: t.blocks.scalability, icon: Scaling },
    { title: t.blocks.integration, icon: Zap },
    { title: t.blocks.ux, icon: Users },
    { title: t.blocks.security, icon: Shield },
    { title: t.blocks.ai, icon: Code },
  ];

  return (
    <section className="relative bg-ai-dark text-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t.title}{' '}
          <span className="bg-gradient-ai bg-clip-text text-transparent">
            {t.titleHighlight}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div
                key={index}
                className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="w-8 h-8 mb-2 text-ai-green" />
                <span className="font-semibold text-sm">{block.title}</span>
              </div>
            );
          })}
        </div>
        
        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-ai-dark bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg">
          {t.cta}
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}
