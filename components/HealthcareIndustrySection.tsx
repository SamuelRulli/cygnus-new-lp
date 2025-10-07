'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, CheckCircle, ArrowRight, Shield, Stethoscope, Activity, FileText, 
  Brain, Database, Hospital, Building2, Users, Clock, Award, AlertTriangle, 
  Lightbulb, BarChart3, DollarSign, Search, FolderOpen, Calendar, Pill, 
  Clipboard, UserCheck, Microscope, FileCheck, ShieldCheck, Scan
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function HealthcareIndustrySection() {
  const { language } = useLanguage();
  const t = translations[language].healthcareIndustry;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = t.hero.keyBenefits.map((text, index) => ({
    icon: [ShieldCheck, Database, FileText, Search][index],
    text: text
  }));

  const healthcareSolutions = t.solutions.items.map((item, index) => ({
    ...item,
    icon: [FileText, Heart, FolderOpen][index],
    link: ['/solutions/ai-ocr', '/solutions/ai-saude', '/solutions/ai-doc'][index]
  }));

  const useCases = t.useCases.items.map((item, index) => ({
    ...item,
    icon: Building2
  }));

  const problemStats = t.challenges.problemStats.map((item, index) => ({
    ...item,
    icon: [Clock, DollarSign, AlertTriangle][index]
  }));

  const solutionBenefits = t.solution.benefits.map(benefit => ({
    icon: CheckCircle,
    benefit: benefit
  }));

  const medicalCapabilities = t.capabilities.items.map((item, index) => ({
    ...item,
    icon: [FileCheck, Clipboard, Pill, Scan, Brain, Activity, Calendar, BarChart3, UserCheck][index]
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                    <Heart className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-red-500 to-ai-blue w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.title}{' '}
                  <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.subtitle}{' '}
                  <span className="text-red-500 font-bold">{t.hero.subtitleEmphasis}</span>
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
                  <Button onClick={handleClick} variant="ai_primary" size="xl" className="group shadow-2xl bg-red-500 hover:bg-red-600">
                    {t.hero.cta}
                    <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                        { icon: Heart, color: 'text-red-500' }, { icon: Stethoscope, color: 'text-ai-blue' },
                        { icon: Activity, color: 'text-ai-green' }, { icon: Pill, color: 'text-red-500' },
                        { icon: FileText, color: 'text-ai-blue' }, { icon: Brain, color: 'text-ai-green' },
                        { icon: Hospital, color: 'text-red-500' }, { icon: Shield, color: 'text-ai-blue' },
                        { icon: Microscope, color: 'text-ai-green' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-red-50 to-blue-50">
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-center">
                        <div>
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FileText className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="text-xs text-ai-medium">{t.visual.documents}</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-blue animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-ai-blue" />
                          </div>
                          <div className="text-xs text-ai-medium">{t.visual.aiProcessing}</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-ai-green" />
                          </div>
                          <div className="text-xs text-ai-medium">{t.visual.automated}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-red-500 mb-1">{t.visual.medicalAccuracy}</div>
                        <div className="text-xs text-ai-medium">{t.visual.medicalAccuracyLabel}</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">{t.visual.compliance}</div>
                        <div className="text-xs text-ai-medium">{t.visual.complianceLabel}</div>
                      </div>
                    </div>

                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-4 h-1 bg-red-500 absolute"></div>
                      <div className="w-1 h-4 bg-red-500 absolute"></div>
                    </div>
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
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  {t.capabilities.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.capabilities.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {medicalCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{capability.title}</h3>
                      <p className="text-sm text-ai-medium">{capability.description}</p>
                    </CardContent>
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
                {t.solutions.title}{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  {t.solutions.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.solutions.subtitle}</p>
            </div>

            <div className="space-y-12">
              {healthcareSolutions.map((solution, index) => {
                const Icon = solution.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-red-500" />
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

                      <div className={`bg-gradient-to-br from-red-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-ai-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-red-200 rounded w-full"></div>
                              <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                              <div className="h-3 bg-red-200 rounded w-1/2"></div>
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

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t.useCases.title}{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  {t.useCases.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">{t.useCases.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-red-500" />
                        </div>
                        <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-3 py-1 rounded-full">
                          {useCase.industry}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-ai-dark mb-4 text-center">{useCase.title}</h3>
                      <p className="text-ai-medium leading-relaxed mb-6">{useCase.description}</p>

                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {Object.entries(useCase.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-red-50 rounded-lg">
                            <div className="text-lg font-bold text-red-500">{value}</div>
                            <div className="text-xs text-ai-medium capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

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
            <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500 to-ai-blue rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.finalCta.title}{' '}
              <span className="bg-gradient-to-r from-red-400 to-ai-blue bg-clip-text text-transparent">
                {t.finalCta.titleHighlight}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">{t.finalCta.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {t.finalCta.trustIndicators.map((stat, index) => {
                const Icon = [Heart, Shield, Clock, Users][index];
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-red-400" />
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
                className="bg-red-500 hover:bg-red-600 text-white shadow-2xl group"
              >
                {t.hero.cta}
                <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <p className="text-white/60 text-sm">
              {t.finalCta.contact.split('{phone}')[0]}
              <a href="tel:+551150394877" className="text-red-400 hover:text-red-300 transition-colors">
                +55 (11) 5039-4877
              </a>
              {t.finalCta.contact.split('{phone}')[1].split('{email}')[0]}
              <a href="mailto:contact@itcygnus.com" className="text-red-400 hover:text-red-300 transition-colors">
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
