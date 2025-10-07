'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FolderOpen,
  CheckCircle,
  Play,
  Search,
  Workflow,
  FileText,
  Shield,
  Clock,
  Brain,
  Hospital,
  Building2,
  Landmark,
  TrendingUp,
  Users,
  AlertTriangle,
  Lightbulb,
  Archive,
  GitBranch,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIDOCSection() {
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = translations.aiDoc;

  if (!t) {
    return null;
  }

  const keyBenefits = [
    { icon: Brain, text: t.hero.keyBenefits[0] },
    { icon: Search, text: t.hero.keyBenefits[1] },
    { icon: Workflow, text: t.hero.keyBenefits[2] },
    { icon: Archive, text: t.hero.keyBenefits[3] }
  ];

  const features = [
    {
      title: t.features.items[0].title,
      description: t.features.items[0].description,
      details: t.features.items[0].details,
      icon: Brain
    },
    {
      title: t.features.items[1].title,
      description: t.features.items[1].description,
      details: t.features.items[1].details,
      icon: Search
    },
    {
      title: t.features.items[2].title,
      description: t.features.items[2].description,
      details: t.features.items[2].details,
      icon: Workflow
    },
    {
      title: t.features.items[3].title,
      description: t.features.items[3].description,
      details: t.features.items[3].details,
      icon: GitBranch
    }
  ];

  const useCases = [
    {
      title: t.useCases.items[0].title,
      description: t.useCases.items[0].description,
      result: t.useCases.items[0].result,
      icon: Hospital,
      industry: t.useCases.items[0].industry
    },
    {
      title: t.useCases.items[1].title,
      description: t.useCases.items[1].description,
      result: t.useCases.items[1].result,
      icon: Building2,
      industry: t.useCases.items[1].industry
    },
    {
      title: t.useCases.items[2].title,
      description: t.useCases.items[2].description,
      result: t.useCases.items[2].result,
      icon: Landmark,
      industry: t.useCases.items[2].industry
    }
  ];

  const problemStats = [
    { icon: Clock, stat: t.problem.stats[0].stat, label: t.problem.stats[0].label },
    { icon: TrendingUp, stat: t.problem.stats[1].stat, label: t.problem.stats[1].label },
    { icon: AlertTriangle, stat: t.problem.stats[2].stat, label: t.problem.stats[2].label }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: t.solution.benefits[0] },
    { icon: CheckCircle, benefit: t.solution.benefits[1] },
    { icon: CheckCircle, benefit: t.solution.benefits[2] },
    { icon: CheckCircle, benefit: t.solution.benefits[3] }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                    <FolderOpen className="w-8 h-8 text-ai-green" />
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
                  <span className="text-ai-green font-bold">{t.hero.subtitleEmphasis1}</span> e{' '}
                  <span className="text-ai-blue font-bold">{t.hero.subtitleEmphasis2}</span>.
                </p>

                {/* Key Benefits */}
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

                {/* CTAs */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Button 
                    variant="ai_outline" size="xl"
                    className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                    onClick={() => window.location.href = '/demo'}
                  >
                    {t.hero.cta}
                    <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative">
                <div 
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                >
                  {/* Document Management Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Document Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[...Array(9)].map((_, i) => (
                        <div 
                          key={i}
                          className={`aspect-square rounded-lg p-3 flex items-center justify-center ${
                            i % 3 === 0 ? 'bg-ai-green/10' : i % 3 === 1 ? 'bg-ai-blue/10' : 'bg-ai-green/10'
                          }`}
                        >
                          <FileText className={`w-6 h-6 ${
                            i % 3 === 0 ? 'text-ai-green' : i % 3 === 1 ? 'text-ai-blue' : 'text-ai-green'
                          }`} />
                        </div>
                      ))}
                    </div>

                    {/* Search Bar */}
                    <div className="bg-ai-dark/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-ai-blue" />
                        <div className="flex-1 h-2 bg-ai-blue/20 rounded animate-pulse-slow"></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">85%</div>
                        <div className="text-xs text-ai-medium">{t.visual.fasterSearch}</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">100%</div>
                        <div className="text-xs text-ai-medium">{t.visual.organized}</div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-blue/30 rounded-full animate-pulse-slow"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">{t.problem.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.problem.p1}
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.problem.p2}
                  </p>

                  {/* Problem Stats */}
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

              {/* Solution */}
              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-ai-green mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">{t.solution.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.solution.p1}
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.solution.p2}
                  </p>

                  {/* Solution Benefits */}
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

        {/* Features & Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t.features.title}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t.features.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t.features.subtitle}
              </p>
            </div>

            <div className="space-y-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content */}
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-green" />
                          </div>
                          <h3 className="text-2xl font-bold text-ai-dark">{feature.title}</h3>
                        </div>
                        
                        <p className="text-lg text-ai-medium leading-relaxed mb-6">
                          {feature.description}
                        </p>
                        
                        <p className="text-ai-medium leading-relaxed">
                          {feature.details}
                        </p>
                      </CardContent>

                      {/* Visual */}
                      <div className={`bg-gradient-to-br from-ai-green/5 to-ai-blue/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-ai-green/20 rounded w-full"></div>
                              <div className="h-3 bg-ai-blue/20 rounded w-3/4"></div>
                              <div className="h-3 bg-ai-green/20 rounded w-1/2"></div>
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

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.finalCta.title}{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                {t.finalCta.titleHighlight}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.finalCta.subtitle}
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Search, value: t.finalCta.trustIndicators[0].value, label: t.finalCta.trustIndicators[0].label },
                { icon: Users, value: t.finalCta.trustIndicators[1].value, label: t.finalCta.trustIndicators[1].label },
                { icon: Clock, value: t.finalCta.trustIndicators[2].value, label: t.finalCta.trustIndicators[2].label },
                { icon: Shield, value: t.finalCta.trustIndicators[3].value, label: t.finalCta.trustIndicators[3].label }
              ].map((stat, index) => {
                const Icon = stat.icon;
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                {t.hero.cta}
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm" dangerouslySetInnerHTML={{ __html: t.finalCta.contact.replace('{phone}', '<a href="tel:+55-11-5039-4877" class="text-ai-green hover:text-ai-green/80 transition-colors">+55 (11) 5039-4877</a>').replace('{email}', '<a href="mailto:contact@itcygnus.com" class="text-ai-green hover:text-ai-green/80 transition-colors">contact@itcygnus.com</a>') }} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
