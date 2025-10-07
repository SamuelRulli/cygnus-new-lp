'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart3, Zap, Shield, Users, Heart, Activity, Stethoscope, FileText, Brain, Database, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-ai-light/20 to-ai-blue/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-ai rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ai-green/20 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-hero rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-ai-blue rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-ai-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-ai-blue rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-ai-green rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-ai-dark leading-tight mb-6 transition-all duration-1000 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('hero.title')}{' '}
              <span className="bg-gradient-ai bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.titleEnd')}{' '}
              <span className="relative">
                {t('hero.titleResults')}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-ai rounded-full"></div>
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg sm:text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 max-w-3xl transition-all duration-1000 delay-200 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('hero.subtitle').replace('{percentage}', '75').replace('{days}', '30').replace('{companies}', '100+')}
            </p>

            {/* Supporting Points */}
            <div 
              className={`grid sm:grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { icon: Zap, text: t('hero.benefits.implementation') },
                { icon: BarChart3, text: t('hero.benefits.accuracy') },
                { icon: Users, text: t('hero.benefits.support') },
                { icon: Shield, text: t('hero.benefits.compliance') }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-ai-light/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-ai-green" />
                  </div>
                  <span className="text-ai-dark font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <br />
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                variant="ai_primary" 
                size="xl" 
                className="group"
                onClick={() => window.location.href = '/solutions'}
              >
                {t('hero.cta.exploreSolutions')}
                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button 
                variant="ai_outline" 
                size="xl" 
                className="group"
                onClick={() => window.location.href = '/roi-calculator'}
              >
                {t('hero.cta.calculateROI')}
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div 
              className={`transition-all duration-1000 delay-800 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
            >
              {/* Main Visual Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                {/* AI Processing Visualization */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Heart, color: 'text-red-500' },
                        { icon: Activity, color: 'text-ai-blue' },
                        { icon: Stethoscope, color: 'text-ai-green' },
                        { icon: FileText, color: 'text-ai-blue' },
                        { icon: Shield, color: 'text-ai-green' },
                        { icon: Brain, color: 'text-ai-blue' },
                        { icon: Database, color: 'text-ai-green' },
                        { icon: Lock, color: 'text-ai-blue' },
                        { icon: CheckCircle, color: 'text-ai-green' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-ai-blue/10 to-ai-green/10"
                          >
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                {/* Metrics Display */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-ai-blue/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-ai-blue mb-1">75%</div>
                    <div className="text-sm text-ai-medium">{t('metrics.items.timeReduction.label')}</div>
                  </div>
                  <div className="bg-ai-green/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-ai-green mb-1">99.9%</div>
                    <div className="text-sm text-ai-medium">{t('metrics.items.accuracy.label')}</div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-ai-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                  {t('metrics.items.clients.value')} {t('header.company')}
                </div>
              </div>
              <br />

              {/* Additional Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-ai-blue/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-ai-green/20 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
