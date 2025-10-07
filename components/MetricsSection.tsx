'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Clock, Target, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MetricsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: TrendingUp,
      value: t('metrics.items.timeReduction.value'),
      label: t('metrics.items.timeReduction.label'),
      description: t('metrics.items.timeReduction.description'),
      color: 'ai-green'
    },
    {
      icon: Clock,
      value: t('metrics.items.implementation.value'),
      label: t('metrics.items.implementation.label'),
      description: t('metrics.items.implementation.description'),
      color: 'ai-blue'
    },
    {
      icon: Target,
      value: t('metrics.items.accuracy.value'),
      label: t('metrics.items.accuracy.label'),
      description: t('metrics.items.accuracy.description'),
      color: 'ai-green'
    },
    {
      icon: Users,
      value: t('metrics.items.clients.value'),
      label: t('metrics.items.clients.label'),
      description: t('metrics.items.clients.description'),
      color: 'ai-blue'
    }
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics-section" className="py-20 bg-gradient-to-br from-ai-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-4">
            {t('metrics.title')}{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              {t('metrics.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg text-ai-medium max-w-3xl mx-auto">
            {t('metrics.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-ai-light/50 group hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${metric.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-${metric.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${metric.color}`} />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl lg:text-4xl font-bold text-${metric.color} mb-2`}>
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-ai-dark mb-2">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-ai-medium text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Floating Accent */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-${metric.color}/20 rounded-full animate-pulse-slow`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
