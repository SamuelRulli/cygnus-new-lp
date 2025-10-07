'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent} from '@/components/ui/card';
import { 
  Heart,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Activity,
  FileText,
  Brain,
  Database,
  Building2,
  Stethoscope,
  Clock,
  Users,
  Award,
  BarChart3,
  Lock,
  Globe,
  Workflow,
  Search
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AISAUDESection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Activity, text: t('aiSaude.keyBenefits.item1') },
    { icon: Shield, text: t('aiSaude.keyBenefits.item2') },
    { icon: Globe, text: t('aiSaude.keyBenefits.item3') },
    { icon: Lock, text: t('aiSaude.keyBenefits.item4') }
  ];

  const features = [
    {
      title: t('aiSaude.features.medicalSpecialization.title'),
      description: t('aiSaude.features.medicalSpecialization.description'),
      details: t('aiSaude.features.medicalSpecialization.details'),
      icon: Brain
    },
    {
      title: t('aiSaude.features.ecosystemIntegration.title'),
      description: t('aiSaude.features.ecosystemIntegration.description'),
      details: t('aiSaude.features.ecosystemIntegration.details'),
      icon: Database
    },
    {
      title: t('aiSaude.features.advancedFraudDetection.title'),
      description: t('aiSaude.features.advancedFraudDetection.description'),
      details: t('aiSaude.features.advancedFraudDetection.details'),
      icon: Search
    },
    {
      title: t('aiSaude.features.automatedWorkflowEngine.title'),
      description: t('aiSaude.features.automatedWorkflowEngine.description'),
      details: t('aiSaude.features.automatedWorkflowEngine.details'),
      icon: Workflow
    }
  ];

  const useCases = [
    {
      title: t('aiSaude.useCases.portoSeguroSaude.title'),
      description: t('aiSaude.useCases.portoSeguroSaude.description'),
      result: t('aiSaude.useCases.portoSeguroSaude.result'),
      logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-saude.png',
      industry: t('aiSaude.useCases.portoSeguroSaude.industry'),
      stats: { automation: '98%', savings: 'R$ 5M+', accuracy: '99%' }
    },
    {
      title: t('aiSaude.useCases.portoSeguroOcupacional.title'),
      description: t('aiSaude.useCases.portoSeguroOcupacional.description'),
      result: t('aiSaude.useCases.portoSeguroOcupacional.result'),
      logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-ocupacional.png',
      industry: t('aiSaude.useCases.portoSeguroOcupacional.industry'),
      stats: { automation: '100%', savings: 'R$ 3M+', accuracy: '99%' }
    },
    {
      title: t('aiSaude.useCases.itauSaude.title'),
      description: t('aiSaude.useCases.itauSaude.description'),
      result: t('aiSaude.useCases.itauSaude.result'),
      logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/itau-saude.png',
      industry: t('aiSaude.useCases.itauSaude.industry'),
      stats: { automation: '98%', savings: 'R$ 4M+', accuracy: '99%' }
    }
  ];

  const medicalCapabilities = [
    {
      title: t('aiSaude.medicalCapabilities.validation.title'),
      description: t('aiSaude.medicalCapabilities.validation.description'),
      icon: FileText
    },
    {
      title: t('aiSaude.medicalCapabilities.assessment.title'),
      description: t('aiSaude.medicalCapabilities.assessment.description'),
      icon: Stethoscope
    },
    {
      title: t('aiSaude.medicalCapabilities.automation.title'),
      description: t('aiSaude.medicalCapabilities.automation.description'),
      icon: CheckCircle
    },
    {
      title: t('aiSaude.medicalCapabilities.verification.title'),
      description: t('aiSaude.medicalCapabilities.verification.description'),
      icon: Activity
    },
    {
      title: t('aiSaude.medicalCapabilities.credentials.title'),
      description: t('aiSaude.medicalCapabilities.credentials.description'),
      icon: Shield
    },
    {
      title: t('aiSaude.medicalCapabilities.adjudication.title'),
      description: t('aiSaude.medicalCapabilities.adjudication.description'),
      icon: Brain
    }
  ];

  const complianceFeatures = [
    t('aiSaude.complianceFeatures.item1'),
    t('aiSaude.complianceFeatures.item2'),
    t('aiSaude.complianceFeatures.item3'),
    t('aiSaude.complianceFeatures.item4'),
    t('aiSaude.complianceFeatures.item5')
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
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
                  {t('aiSaude.hero.title')}{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    {t('aiSaude.hero.titleHighlight')}
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t('aiSaude.hero.subtitle1')}{' '}
                  <span className="text-ai-green font-bold">{t('aiSaude.hero.subtitleHighlight1')}</span>, {t('aiSaude.hero.subtitle2')}{' '}
                  <span className="text-ai-blue font-bold">{t('aiSaude.hero.subtitleHighlight2')}</span> {t('aiSaude.hero.subtitle3')}
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
                  <Button variant="ai_outline" size="xl" className="group">
                    {t('aiSaude.hero.cta')}
                    <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  {/* Healthcare Processing Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Medical Icons Grid */}
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

                    {/* Processing Flow */}
                    <div className="bg-ai-dark/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Clock className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="text-xs text-ai-medium">{t('aiSaude.hero.visual.days')}</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-blue animate-pulse" />
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Zap className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="text-xs text-ai-medium">{t('aiSaude.hero.visual.hours')}</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">99.8%</div>
                        <div className="text-xs text-ai-medium">{t('aiSaude.hero.visual.accuracy')}</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">85%</div>
                        <div className="text-xs text-ai-medium">{t('aiSaude.hero.visual.faster')}</div>
                      </div>
                    </div>

                    {/* Floating Medical Cross */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brazil Leadership Section */}
        <section className="py-20 bg-gradient-to-br from-ai-blue/5 to-ai-green/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ai rounded-2xl mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiSaude.leadership.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiSaude.leadership.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
                {t('aiSaude.leadership.subtitle1')}{' '}
                <span className="font-bold text-ai-blue">{t('aiSaude.leadership.subtitleHighlight1')}</span>, 
                {t('aiSaude.leadership.subtitle2')}{' '}
                <span className="font-bold text-ai-green">{t('aiSaude.leadership.subtitleHighlight2')}</span> 
                {t('aiSaude.leadership.subtitle3')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-8 shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="text-3xl font-bold text-ai-blue mb-2">350+</div>
                <div className="text-lg font-semibold text-ai-dark mb-2">{t('aiSaude.leadership.stats.municipalities.title')}</div>
                <p className="text-ai-medium">
                  {t('aiSaude.leadership.stats.municipalities.description')}
                </p>
              </Card>

              <Card className="text-center p-8 shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-ai-green" />
                </div>
                <div className="text-3xl font-bold text-ai-green mb-2">99,2%</div>
                <div className="text-lg font-semibold text-ai-dark mb-2">{t('aiSaude.leadership.stats.fraudDetection.title')}</div>
                <p className="text-ai-medium">
                  {t('aiSaude.leadership.stats.fraudDetection.description')}
                </p>
              </Card>

              <Card className="text-center p-8 shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="text-3xl font-bold text-ai-blue mb-2">R$ 2,8B</div>
                <div className="text-lg font-semibold text-ai-dark mb-2">{t('aiSaude.leadership.stats.validatedNotes.title')}</div>
                <p className="text-ai-medium">
                  {t('aiSaude.leadership.stats.validatedNotes.description')}
                </p>
              </Card>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-ai-dark mb-4">
                    {t('aiSaude.leadership.transforming.title')}
                  </h3>
                  <p className="text-ai-medium leading-relaxed mb-6">
                    {t('aiSaude.leadership.transforming.description')}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">{t('aiSaude.leadership.transforming.item1')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">{t('aiSaude.leadership.transforming.item2')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">{t('aiSaude.leadership.transforming.item3')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">{t('aiSaude.leadership.transforming.item4')}</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-ai-blue/10 to-ai-green/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">27</div>
                        <div className="text-xs text-ai-medium">{t('aiSaude.leadership.transforming.stats.states')}</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">5</div>
                        <div className="text-xs text-ai-medium">{t('aiSaude.leadership.transforming.stats.regions')}</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">15M</div>
                        <div className="text-xs text-ai-medium">{t('aiSaude.leadership.transforming.stats.citizens')}</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">24/7</div>
                        <div className="text-xs text-ai-medium">{t('aiSaude.leadership.transforming.stats.operation')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Specialization Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiSaude.specializedAI.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiSaude.specializedAI.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('aiSaude.specializedAI.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-ai-medium">
                        {capability.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Compliance Features */}
            <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  {t('aiSaude.compliance.title')}
                </h3>
                <p className="text-ai-medium">
                  {t('aiSaude.compliance.subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-3 bg-ai-green/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-ai-green mx-auto mb-2" />
                    <div className="text-sm font-medium text-ai-dark">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiSaude.advancedFeatures.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiSaude.advancedFeatures.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('aiSaude.advancedFeatures.subtitle')}
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
                          <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-blue" />
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

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiSaude.successCases.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiSaude.successCases.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('aiSaude.successCases.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-ai-light/50">
                          <img 
                            src={useCase.logo} 
                            alt={`${useCase.title} Logo`}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full">
                          {useCase.industry}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-ai-dark mb-4 text-center">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-ai-medium leading-relaxed mb-6">
                        {useCase.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {Object.entries(useCase.stats).map(([key, value], statIndex) => (
                          <div key={statIndex} className="text-center p-2 bg-ai-blue/10 rounded-lg">
                            <div className="text-lg font-bold text-ai-blue">{value}</div>
                            <div className="text-xs text-ai-medium capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="bg-ai-green/10 rounded-xl p-4 border-l-4 border-ai-green">
                        <h4 className="font-bold text-ai-green text-sm mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {t('aiSaude.successCases.resultsTitle')}
                        </h4>
                        <p className="text-sm text-ai-dark leading-relaxed">
                          {useCase.result}
                        </p>
                      </div>
                    </CardContent>
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t('aiSaude.finalCta.title')}{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                {t('aiSaude.finalCta.titleHighlight')}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('aiSaude.finalCta.subtitle')}
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Activity, value: '99.8%', label: t('aiSaude.finalCta.trustIndicators.accuracy') },
                { icon: Clock, value: '85%', label: t('aiSaude.finalCta.trustIndicators.timeReduction') },
                { icon: Shield, value: '100%', label: t('aiSaude.finalCta.trustIndicators.compliant') },
                { icon: Users, value: '1000+', label: t('aiSaude.finalCta.trustIndicators.providers') }
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
                {t('aiSaude.finalCta.cta')}
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              {t('aiSaude.finalCta.contact.text1')}{' '}
              <a href="tel:+55-11-3456-7890" className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t('aiSaude.finalCta.contact.phone')}
              </a>{' '}
              {t('aiSaude.finalCta.contact.text2')}{' '}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t('aiSaude.finalCta.contact.email')}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
