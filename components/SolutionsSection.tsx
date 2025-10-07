'use client';

import { useEffect, useState } from 'react';
import { 
  Bot, 
  Shield, 
  Zap, 
  BarChart3, 
  Cog, 
  Users,
  Eye,
  FolderOpen,
  TrendingUp,
  Headphones,
  Brain,
  CheckCircle,
  ArrowRight,
  Heart,
  Star,
  Calendar,
  FileText,
  Search,
  Network,
  DollarSign,
  Building2,
  Stethoscope,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const solutions = [
    {
      id: 'ai-ocr',
      title: 'AI.OCR',
      subtitle: t('solutions.items.aiOCR.subtitle'),
      description: t('solutions.items.aiOCR.description'),
      icon: Eye,
      color: 'ai-blue',
      features: Array.isArray(t('solutions.items.aiOCR.benefits')) ? t('solutions.items.aiOCR.benefits') : [t('solutions.items.aiOCR.benefits')],
      benefits: [
        '99.9% ' + t('metrics.items.accuracy.label'),
        '50x ' + t('solutions.items.aiOCR.benefits')[0],
        t('solutions.items.aiOCR.benefits')[1],
        t('solutions.items.aiOCR.benefits')[2]
      ],
      industries: [t('header.industries'), t('footer.industries')],
      link: '/solutions/ai-ocr'
    },
    {
      id: 'ai-doc',
      title: 'AI.DOC',
      subtitle: t('solutions.items.aiDOC.subtitle'),
      description: t('solutions.items.aiDOC.description'),
      icon: FolderOpen,
      color: 'ai-green',
      features: Array.isArray(t('solutions.items.aiDOC.benefits')) ? t('solutions.items.aiDOC.benefits') : [t('solutions.items.aiDOC.benefits')],
      benefits: [
        '85% ' + t('solutions.items.aiDOC.benefits')[0],
        '100% ' + t('solutions.items.aiDOC.benefits')[1],
        t('solutions.items.aiDOC.benefits')[2],
        t('solutions.items.aiDOC.benefits')[3]
      ],
      industries: [t('header.industries'), t('footer.industries')],
      link: '/solutions/ai-doc'
    },
    {
      id: 'ai-saude',
      title: 'AI.SAUDE',
      subtitle: t('solutions.items.aiSAUDE.subtitle'),
      description: t('solutions.items.aiSAUDE.description'),
      icon: Heart,
      color: 'red-500',
      features: Array.isArray(t('solutions.items.aiSAUDE.benefits')) 
        ? t('solutions.items.aiSAUDE.benefits').slice(0, 3) 
        : [t('solutions.items.aiSAUDE.benefits')],
      benefits: [
        '60% ' + t('solutions.items.aiSAUDE.benefits')[0],
        '40% ' + t('solutions.items.aiSAUDE.benefits')[1],
        '50% ' + t('solutions.items.aiSAUDE.benefits')[2],
        '100% ' + t('solutions.items.aiSAUDE.benefits')[3]
      ],
      industries: [t('header.industries'), t('footer.industries')],
      link: '/solutions/ai-saude'
    },
    {
      id: 'ai-priceinsights',
      title: 'AI.PRICEINSIGHTS',
      subtitle: t('solutions.items.aiPRICEINSIGHTS.subtitle'),
      description: t('solutions.items.aiPRICEINSIGHTS.description'),
      icon: DollarSign,
      color: 'ai-green',
      features: Array.isArray(t('solutions.items.aiPRICEINSIGHTS.benefits')) ? t('solutions.items.aiPRICEINSIGHTS.benefits') : [t('solutions.items.aiPRICEINSIGHTS.benefits')],
      benefits: [
        '25% ' + t('solutions.items.aiPRICEINSIGHTS.benefits')[0],
        '40% ' + t('solutions.items.aiPRICEINSIGHTS.benefits')[1],
        '30% ' + t('solutions.items.aiPRICEINSIGHTS.benefits')[2],
        '300% ' + t('solutions.items.aiPRICEINSIGHTS.benefits')[3]
      ],
      industries: [t('header.industries')],
      link: '/solutions/ai-priceinsights'
    },
    {
      id: 'ai-agents',
      title: 'AI.AGENTS',
      subtitle: t('solutions.items.aiAGENTS.subtitle'),
      description: t('solutions.items.aiAGENTS.description'),
      icon: Bot,
      color: 'ai-blue',
      features: Array.isArray(t('solutions.items.aiAGENTS.benefits')) ? t('solutions.items.aiAGENTS.benefits') : [t('solutions.items.aiAGENTS.benefits')],
      benefits: [
        '70% ' + t('solutions.items.aiAGENTS.benefits')[0],
        '24/7 ' + t('solutions.items.aiAGENTS.benefits')[1],
        '60% ' + t('solutions.items.aiAGENTS.benefits')[2],
        '50% ' + t('solutions.items.aiAGENTS.benefits')[3]
      ],
      industries: [t('header.industries'), t('footer.industries')],
      link: '/solutions/ai-agents'
    },
    {
      id: 'echo-ai-hub',
      title: 'ECHO AI HUB',
      subtitle: t('solutions.items.echoAIHub.subtitle'),
      description: t('solutions.items.echoAIHub.description'),
      icon: Network,
      color: 'purple-500',
      features: Array.isArray(t('solutions.items.echoAIHub.benefits')) ? t('solutions.items.echoAIHub.benefits') : [t('solutions.items.echoAIHub.benefits')],
      benefits: [
        '100% ' + t('solutions.items.echoAIHub.benefits')[0],
        '50% ' + t('solutions.items.echoAIHub.benefits')[1],
        t('solutions.items.echoAIHub.benefits')[2],
        t('solutions.items.echoAIHub.benefits')[3]
      ],
      industries: [t('header.company'), t('header.industries')],
      link: '/solutions/echo-ai-hub'
    }
  ];

  const trustIndicators = [
    { icon: Users, value: '5+', label: t('metrics.items.clients.label') },
    { icon: CheckCircle, value: '99.9%', label: t('metrics.items.accuracy.label') },
    { icon: TrendingUp, value: '300%', label: 'ROI' },
    { icon: Shield, value: '100%', label: t('hero.benefits.compliance') }
  ];


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.industries.some(industry => 
        industry.toLowerCase().includes(activeTab.toLowerCase())
      ));

  return (
    <section id="solutions-section" className="py-20 bg-gradient-to-br from-white via-ai-light/10 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl lg:text-5xl font-bold text-ai-dark mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('solutions.title')}{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              {t('solutions.titleHighlight')}
            </span>
          </h2>
          <p 
            className={`text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {['all', 'healthcare', 'financial', 'technology', 'government'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-ai text-white shadow-lg'
                  : 'bg-white text-ai-medium hover:bg-ai-light/50 border border-ai-light'
              }`}
            >
              {tab === 'all' ? t('solutions.cta.title') : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredSolutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <Card 
                key={solution.id}
                className={`group shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${solution.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${solution.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-ai-dark mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-ai-medium font-medium">
                      {solution.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-ai-medium leading-relaxed mb-6 text-center">
                    {solution.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-ai-dark text-sm mb-3">{t('features.title')}:</h4>
                    <ul className="space-y-2">
                      {Array.isArray(solution.features) && solution.features.slice(0, 3).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-ai-medium">
                          <CheckCircle className="w-4 h-4 text-ai-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-bold text-ai-dark text-sm mb-3">{t('metrics.title')}:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className={`text-center p-2 bg-${solution.color}/10 rounded-lg`}>
                          <div className={`text-lg font-bold text-${solution.color} mb-1`}>
                            {benefit.split(' ')[0]}
                          </div>
                          <div className="text-xs text-ai-medium">
                            {benefit.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <h4 className="font-bold text-ai-dark text-sm mb-3">{t('header.industries')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.slice(0, 3).map((industry, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-ai-light/50 text-ai-medium px-2 py-1 rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={solution.link}>
                    <Button 
                      variant="ai_outline" 
                      className="w-full group-hover:bg-gradient-ai group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      {t('solutions.cta.customDemo')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="text-3xl font-bold text-ai-dark mb-2">{indicator.value}</div>
                <div className="text-ai-medium font-medium">{indicator.label}</div>
              </div>
            );
          })}
        </div>

        {/* Client Carousel Section */}
        <div className="mt-24 py-12 bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-3xl overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-ai-dark mb-12 text-center">
              {t('metrics.items.clients.label')} <span className="bg-gradient-ai bg-clip-text text-transparent">{t('metrics.title')}</span>
            </h3>
            
            <div className="relative overflow-hidden">
              {/* Carousel Container */}
              <div className="relative h-40">
                {/* Carousel Track */}
                <div className="flex absolute top-0 left-0 client-carousel items-center">
                  {[
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/abastece-ai.png',
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/itau-saude.png',
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-ocupacional.png',
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-saude.png',
                  ].flatMap((logo, i) => [logo, logo]).map((logo, index) => (
                    <div key={index} className="flex-shrink-0 px-8 w-64">
                      <img 
                        src={logo}
                        alt="Client logo"
                        className="h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-ai-dark mb-6">
            {t('solutions.cta.title')}{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              {t('solutions.titleHighlight')}?
            </span>
          </h3>
          <p className="text-lg text-ai-medium mb-8 max-w-3xl mx-auto">
            {t('solutions.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                {t('solutions.cta.customDemo')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {/* <Link href="/roi-calculator">
              <Button variant="ai_outline" size="xl" className="group">
                {t('hero.cta.calculateROI')}
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* CSS for carousel animation */}
      <style jsx>{`
        .client-carousel {
          animation: scroll 30s linear infinite;
          width: calc(256px * 8); /* 8 logos * 256px width */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
