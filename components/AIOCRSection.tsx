'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, ArrowRight, Target, Zap, Shield, Globe, Brain, Cpu, FileText, 
  Hospital, Building2, Landmark, TrendingUp, Clock, Users, Award, 
  AlertTriangle, Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function AIOCRSection() {
  const { language } = useLanguage();
  const t = translations[language].aiOcr;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = t.hero.keyBenefits.map((text, index) => ({
    icon: [Target, Zap, Globe, Shield][index],
    text: text
  }));

  const features = t.features.items.map((item, index) => ({
    ...item,
    icon: [Brain, FileText, Cpu][index]
  }));

  const useCases = t.useCases.items.map((item, index) => ({
    ...item,
    icon: [Hospital, Building2, Landmark][index]
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mr-4">
                    <img
                      src="https://storage.googleapis.com/agentpro-cdn/cygnus/aidata_icon.png"
                      alt="AI Data Icon"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.title}{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.subtitle}{' '}
                  <span className="text-ai-green font-bold">{t.hero.subtitleEmphasis1}</span>,{' '}
                  <span className="text-ai-blue font-bold">{t.hero.subtitleEmphasis2}</span> {t.hero.subtitleEnd}
                </p>

                <div 
                  className={`grid sm:grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-400 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {keyBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-ai-light/50">
                        <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                        <span className="text-ai-dark font-medium">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div 
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                    {t.hero.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div 
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-6 mb-6">
                      <div className="space-y-3">
                        <div className="h-4 bg-ai-blue/20 rounded w-3/4"></div>
                        <div className="h-4 bg-ai-green/20 rounded w-1/2"></div>
                        <div className="h-4 bg-ai-blue/20 rounded w-2/3"></div>
                        <div className="h-4 bg-ai-green/20 rounded w-4/5"></div>
                      </div>
                    </div>

                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center animate-pulse-slow">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="bg-ai-dark/5 rounded-2xl p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-ai-blue mb-1">99.9%</div>
                          <div className="text-xs text-ai-medium">{t.visual.accuracy}</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-ai-green mb-1">50x</div>
                          <div className="text-xs text-ai-medium">{t.visual.faster}</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-green/30 rounded-full animate-pulse-slow"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-blue/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">{t.problem.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">{t.problem.p1}</p>
                  <p className="text-lg text-ai-medium leading-relaxed">{t.problem.p2}</p>

                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
                    <h4 className="font-bold text-red-800 mb-4">{t.problem.challenges.title}</h4>
                    <ul className="space-y-2 text-red-700">
                      {t.problem.challenges.items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          {[<Clock key="clock" className="w-4 h-4 mr-2" />, <AlertTriangle key="alert" className="w-4 h-4 mr-2" />, <TrendingUp key="trending" className="w-4 h-4 mr-2" />][index]}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-ai-green mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">{t.solution.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">{t.solution.p1}</p>
                  <p className="text-lg text-ai-medium leading-relaxed">{t.solution.p2}</p>

                  <div className="bg-ai-green/10 rounded-2xl p-6 border-l-4 border-ai-green">
                    <h4 className="font-bold text-ai-green mb-4">{t.solution.advantages.title}</h4>
                    <ul className="space-y-2 text-ai-dark">
                      {t.solution.advantages.items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-ai-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t.features.title}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t.features.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.features.subtitle}</p>
            </div>

            <div className="space-y-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-blue" />
                          </div>
                          <h3 className="text-2xl font-bold text-ai-dark">{feature.title}</h3>
                        </div>
                        
                        <p className="text-lg text-ai-medium leading-relaxed mb-6">{feature.description}</p>
                        <p className="text-ai-medium leading-relaxed">{feature.details}</p>
                      </CardContent>

                      <div className={`bg-gradient-to-br from-ai-blue/5 to-ai-green/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-ai-blue/20 rounded w-full"></div>
                              <div className="h-3 bg-ai-green/20 rounded w-3/4"></div>
                              <div className="h-3 bg-ai-blue/20 rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t.useCases.title}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t.useCases.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.useCases.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-ai-blue" />
                        </div>
                        <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full">
                          {useCase.industry}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-ai-dark mb-4 text-center">{useCase.title}</h3>
                      <p className="text-ai-medium leading-relaxed mb-6">{useCase.description}</p>

                      <div className="bg-ai-green/10 rounded-xl p-4 border-l-4 border-ai-green">
                        <h4 className="font-bold text-ai-green text-sm mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {t.useCases.resultsTitle}
                        </h4>
                        <p className="text-sm text-ai-dark leading-relaxed">{useCase.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.finalCta.title}{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                {t.finalCta.titleHighlight}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">{t.finalCta.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {t.finalCta.trustIndicators.map((stat, index) => {
                const Icon = [Target, Users, Clock, Shield][index];
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-ai-green" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-white/60 text-sm">
              {t.finalCta.contact.split('{phone}')[0]}
              <a href="tel:+551150394877" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877 / +1 (619) 306-9274
              </a>
              {t.finalCta.contact.split('{phone}')[1].split('{email}')[0]}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                contact@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
