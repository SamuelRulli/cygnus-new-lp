'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, CheckCircle, ArrowRight, Shield, Target, Activity, FileText, 
  Brain, Database, DollarSign, CreditCard, Users, Clock, AlertTriangle, 
  Lightbulb, BarChart3, Lock, Globe, Eye, UserCheck, Landmark
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function FinancialIndustrySection() {
  const { language } = useLanguage();
  const t = translations[language].financialIndustry;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: BarChart3, text: t.hero.keyBenefits[0] },
    { icon: Eye, text: t.hero.keyBenefits[1] }
  ];

  const financialSolutions = t.solutions.items.map((item, index) => ({
    ...item,
    icon: index === 0 ? BarChart3 : Eye,
    link: '/solutions/ai-data'
  }));

  const problemStats = t.challenges.problemStats.map((item, index) => ({
    ...item,
    icon: [Clock, DollarSign, AlertTriangle][index]
  }));

  const solutionBenefits = t.solution.benefits.map(benefit => ({
    icon: CheckCircle,
    benefit: benefit
  }));

  const financialCapabilities = t.capabilities.items.map((item, index) => ({
    ...item,
    icon: [BarChart3, Eye, FileText, Shield, Activity, Target][index]
  }));

  const bankingIntegrations = t.integrations.items.map((item, index) => ({
    ...item,
    icon: [Database, BarChart3, Shield, Globe][index]
  }));

  const handleClick = () => {
    window.location.href = '/demo';
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-blue-600 to-ai-green w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.title}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.subtitle}{' '}
                  <span className="text-blue-600 font-bold">{t.hero.subtitleEmphasis.split(' e ')[0]}</span> e{' '}
                  <span className="text-ai-green font-bold">{t.hero.subtitleEmphasis.split(' e ')[1]}</span>.
                </p>

                <div 
                  className={`grid sm:grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-400 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-ai-light/50">
                        <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                        <span className="text-ai-dark font-medium">{benefit.text}</span>
                      </div>
                  ))}
                </div>

                <div 
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Button onClick={handleClick} variant="ai_primary" size="xl" className="group shadow-2xl bg-blue-600 hover:bg-blue-700">
                    {t.hero.cta}
                    <Landmark className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Building2, color: 'text-blue-600' }, { icon: CreditCard, color: 'text-ai-green' },
                        { icon: Shield, color: 'text-blue-600' }, { icon: BarChart3, color: 'text-ai-green' },
                        { icon: Eye, color: 'text-blue-600' }, { icon: UserCheck, color: 'text-ai-green' },
                        { icon: Landmark, color: 'text-blue-600' }, { icon: Lock, color: 'text-ai-green' },
                        { icon: DollarSign, color: 'text-blue-600' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-center">
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-xs text-ai-medium">{t.visual.application}</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-600 animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-ai-green" />
                          </div>
                          <div className="text-xs text-ai-medium">{t.visual.aiAnalysis}</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-xs text-ai-medium">{t.visual.approved}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{t.visual.loanApprovalTime}</div>
                        <div className="text-xs text-ai-medium">{t.visual.loanApprovalLabel}</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">{t.visual.fraudDetectionRate}</div>
                        <div className="text-xs text-ai-medium">{t.visual.fraudDetectionLabel}</div>
                      </div>
                    </div>

                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Landmark className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">{t.challenges.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">{t.challenges.p1}</p>
                  <p className="text-lg text-ai-medium leading-relaxed">{t.challenges.p2}</p>
                  <p className="text-lg text-ai-medium leading-relaxed">{t.challenges.p3}</p>

                  <div className="grid grid-cols-1 gap-4">
                    {problemStats.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-6 h-6 text-red-500" />
                            <div>
                              <div className="text-2xl font-bold text-red-600">{item.stat}</div>
                              <div className="text-sm text-red-700">{item.label}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

                  <div className="space-y-3">
                    {solutionBenefits.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-ai-green/10 rounded-lg">
                          <Icon className="w-5 h-5 text-ai-green" />
                          <span className="text-ai-dark font-medium">{item.benefit}</span>
                        </div>
                      );
                    })}
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
                {t.capabilities.title}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  {t.capabilities.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.capabilities.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {financialCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{capability.title}</h3>
                      <p className="text-sm text-ai-medium">{capability.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">{t.integrations.title}</h3>
                <p className="text-ai-medium">{t.integrations.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {bankingIntegrations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.system}</div>
                      <div className="text-xs text-ai-medium">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t.solutions.title}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  {t.solutions.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.solutions.subtitle}</p>
            </div>

            <div className="space-y-12">
              {financialSolutions.map((solution, index) => {
                const Icon = solution.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-ai-dark">{solution.title}</h3>
                            <span className="text-sm text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                              {solution.product}
                            </span>
                          </div>
                        </div>
                        
                          <p className="text-lg text-ai-medium leading-relaxed mb-6">{solution.description}</p>
                          <p className="text-ai-medium leading-relaxed mb-6">{solution.details}</p>

                        <Link href={solution.link}>
                          <Button variant="ai_outline" className="group">
                            {t.solutions.cta.replace('{product}', solution.product)}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>

                      <div className={`bg-gradient-to-br from-blue-50 to-green-50 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-ai-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-blue-200 rounded w-full"></div>
                              <div className="h-3 bg-green-200 rounded w-3/4"></div>
                              <div className="h-3 bg-blue-200 rounded w-1/2"></div>
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

        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600 to-ai-green rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.finalCta.title}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-ai-green bg-clip-text text-transparent">
                {t.finalCta.titleHighlight}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">{t.finalCta.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {t.finalCta.trustIndicators.map((stat, index) => {
                const Icon = [Clock, Eye, Users][index];
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={handleClick}
                variant="ai_primary" 
                size="xl" 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl group"
              >
                {t.hero.cta}
                <Landmark className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <p className="text-white/60 text-sm">
              {t.finalCta.contact.split('{phone}')[0]}
              <a href="tel:+551150394877" className="text-blue-400 hover:text-blue-300 transition-colors">
                +55 (11) 5039-4877
              </a>
              {t.finalCta.contact.split('{phone}')[1].split('{email}')[0]}
              <a href="mailto:contact@itcygnus.com" className="text-blue-400 hover:text-blue-300 transition-colors">
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
