'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Shield, 
  Award, 
  RefreshCw,
  DollarSign,
  Calendar,
  Headphones,
  Database,
  Zap,
  Users,
  Target,
  Star
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export default function GuaranteesSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const guarantees = [
    {
      title: t('guarantees.items.implementation.title'),
      description: t('guarantees.items.implementation.description'),
      icon: Clock,
      color: 'ai-blue',
      badge: t('guarantees.items.implementation.badge')
    },
    {
      title: t('guarantees.items.roi.title'),
      description: t('guarantees.items.roi.description'),
      icon: TrendingUp,
      color: 'ai-green',
      badge: t('guarantees.items.roi.badge')
    },
    {
      title: t('guarantees.items.support.title'),
      description: t('guarantees.items.support.description'),
      icon: Headphones,
      color: 'ai-blue',
      badge: t('guarantees.items.support.badge')
    },
    {
      title: t('guarantees.items.migration.title'),
      description: t('guarantees.items.migration.description'),
      icon: Database,
      color: 'ai-green',
      badge: t('guarantees.items.migration.badge')
    }
  ];

  const riskFreeFeatures = (t('guarantees.trial.features') as unknown as Array<{title: string, description: string}>).map((feature, index) => ({
    ...feature,
    icon: [Zap, RefreshCw, CheckCircle, Database][index]
  }));

  const trustIndicators = [
    { metric: '99.9%', label: 'Uptime SLA', icon: Shield },
    { metric: '100+', label: 'Successful Implementations', icon: Users },
    { metric: '4.9/5', label: 'Customer Satisfaction', icon: Star },
    { metric: '7 Days', label: 'Average Implementation', icon: Calendar }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="h-px bg-gradient-ai w-32"></div>
          </div>

          <h2 
            className={`text-3xl lg:text-5xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('guarantees.title')}{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              {t('guarantees.titleHighlight')}
            </span>
          </h2>
          
          <p 
            className={`text-xl text-ai-medium leading-relaxed max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('guarantees.subtitle')}
          </p>

          {/* Trust Indicators */}
          <div 
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-ai-blue" />
                  </div>
                  <div className="text-3xl font-bold text-ai-green mb-2">{indicator.metric}</div>
                  <div className="text-sm text-ai-medium font-medium">{indicator.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Guarantees */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with Badge */}
                  <div className={`bg-gradient-to-r from-${guarantee.color}/10 to-${guarantee.color}/5 p-6 border-b border-ai-light/20 relative`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-${guarantee.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 text-${guarantee.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-ai-dark leading-tight mb-2">
                            {guarantee.title}
                          </h3>
                          <span className={`inline-block text-xs font-bold text-${guarantee.color} bg-${guarantee.color}/10 px-3 py-1 rounded-full`}>
                            {guarantee.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-ai-medium leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Risk-Free Trial Section */}
        <div 
          className={`bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-ai-light/50 transition-all duration-1000 delay-800 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-ai-dark mb-6">
              {t('guarantees.trial.title')}
            </h3>
            <p className="text-lg text-ai-medium max-w-2xl mx-auto leading-relaxed">
              {t('guarantees.trial.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskFreeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-ai-light/20 rounded-2xl hover:bg-ai-light/30 transition-colors">
                  <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-ai-green" />
                  </div>
                  <h4 className="text-lg font-bold text-ai-dark mb-2">{feature.title}</h4>
                  <p className="text-sm text-ai-medium">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ai-dark to-ai-dark/90 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('guarantees.cta.title')}
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              {t('guarantees.cta.subtitle')}
            </p>
            <button
              onClick={() => router.push('/demo')}
              className="bg-white text-ai-dark px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              {t('guarantees.cta.startTrial')}
            </button>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}
