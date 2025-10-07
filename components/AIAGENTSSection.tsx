'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Users,
  MessageSquare,
  Brain,
  Cpu,
  Clock,
  Target,
  Shield,
  Globe,
  Building2,
  ShoppingCart,
  Headphones,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Activity,
  Settings,
  Workflow,
  BarChart3,
  Calendar,
  Search,
  FileText,
  Database,
  Smartphone,
  Monitor,
  Mic,
  Video,
  Heart,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIAGENTSSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Clock, text: t('aiAgents.keyBenefits.0.text') },
    { icon: Cpu, text: t('aiAgents.keyBenefits.1.text') },
    { icon: TrendingUp, text: t('aiAgents.keyBenefits.2.text') },
    { icon: Brain, text: t('aiAgents.keyBenefits.3.text') }
  ];

  const features = [
      {
        title: t('aiAgents.features.0.title'),
        description: t('aiAgents.features.0.description'),
        details: t('aiAgents.features.0.details'),
        icon: MessageSquare
      },
      {
        title: t('aiAgents.features.1.title'),
        description: t('aiAgents.features.1.description'),
        details: t('aiAgents.features.1.details'),
        icon: Workflow
      },
      {
        title: t('aiAgents.features.2.title'),
        description: t('aiAgents.features.2.description'),
        details: t('aiAgents.features.2.details'),
        icon: Globe
      },
      {
        title: t('aiAgents.features.3.title'),
        description: t('aiAgents.features.3.description'),
        details: t('aiAgents.features.3.details'),
        icon: Brain
      }
    ];


  const useCases = [
    {
      title: t('aiAgents.useCases.0.title'),
      description: t('aiAgents.useCases.0.description'),
      result: t('aiAgents.useCases.0.result'),
      icon: ShoppingCart,
      industry: t('aiAgents.useCases.0.industry'),
      stats: { satisfaction: '87%', cost_reduction: '65%', automation: '90%' }
    },
    {
      title: t('aiAgents.useCases.1.title'),
      description: t('aiAgents.useCases.1.description'),
      result: t('aiAgents.useCases.1.result'),
      icon: Heart,
      industry: t('aiAgents.useCases.1.industry'),
      stats: { time_reduction: '80%', satisfaction: '35%', automation: '75%' }
    },
    {
      title: t('aiAgents.useCases.2.title'),
      description: t('aiAgents.useCases.2.description'),
      result: t('aiAgents.useCases.2.result'),
      icon: Building2,
      industry: t('aiAgents.useCases.2.industry'),
      stats: { engagement: '45%', cost_savings: '50%', accuracy: '99.2%' }
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '24/7', label: t('aiAgents.problemStats.0.label') },
    { icon: DollarSign, stat: '70%', label: t('aiAgents.problemStats.1.label') },
    { icon: AlertTriangle, stat: '60%', label: t('aiAgents.problemStats.2.label') }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: t('aiAgents.solutionBenefits.0.benefit') },
    { icon: CheckCircle, benefit: t('aiAgents.solutionBenefits.1.benefit') },
    { icon: CheckCircle, benefit: t('aiAgents.solutionBenefits.2.benefit') },
    { icon: CheckCircle, benefit: t('aiAgents.solutionBenefits.3.benefit') }
  ];

  const agentCapabilities = [
    {
      title: t('aiAgents.agentCapabilities.0.title'),
      description: t('aiAgents.agentCapabilities.0.description'),
      icon: MessageSquare
    },
    {
      title: t('aiAgents.agentCapabilities.1.title'),
      description: t('aiAgents.agentCapabilities.1.description'),
      icon: Settings
    },
    {
      title: t('aiAgents.agentCapabilities.2.title'),
      description: t('aiAgents.agentCapabilities.2.description'),
      icon: Brain
    },
    {
      title: t('aiAgents.agentCapabilities.3.title'),
      description: t('aiAgents.agentCapabilities.3.description'),
      icon: Database
    },
    {
      title: t('aiAgents.agentCapabilities.4.title'),
      description: t('aiAgents.agentCapabilities.4.description'),
      icon: Mic
    },
    {
      title: t('aiAgents.agentCapabilities.5.title'),
      description: t('aiAgents.agentCapabilities.5.description'),
      icon: BarChart3
    }
  ];

  const deploymentChannels = [
    { channel: t('aiAgents.deploymentChannels.0.channel'), icon: Monitor, description: t('aiAgents.deploymentChannels.0.description') },
    { channel: t('aiAgents.deploymentChannels.1.channel'), icon: Smartphone, description: t('aiAgents.deploymentChannels.1.description') },
    { channel: t('aiAgents.deploymentChannels.2.channel'), icon: Mic, description: t('aiAgents.deploymentChannels.2.description') },
    { channel: t('aiAgents.deploymentChannels.3.channel'), icon: Globe, description: t('aiAgents.deploymentChannels.3.description') },
    { channel: t('aiAgents.deploymentChannels.4.channel'), icon: Mail, description: t('aiAgents.deploymentChannels.4.description') },
    { channel: t('aiAgents.deploymentChannels.5.channel'), icon: Video, description: t('aiAgents.deploymentChannels.5.description') }
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
                    <Bot className="w-8 h-8 text-ai-blue" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t('aiAgents.hero.title')}{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    {t('aiAgents.hero.highlight')}
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t('aiAgents.hero.subtitle')}{' '}
                  <span className="text-ai-green font-bold">{t('aiAgents.hero.emphasis')}</span>.
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
                  {/* <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                    Criar Meu Agente
                    <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button> */}
                  <a href="tel:+15551234567">
                    <Button variant="ai_outline" size="xl" className="group">
                      {t('aiAgents.cta.viewAction')}
                      <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative">
                <div 
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                >
                  {/* AI Agent Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Agent Interface */}
                    <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-6 mb-6">
                      {/* Chat Bubbles */}
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-ai-blue text-white px-4 py-2 rounded-lg text-sm max-w-xs">
                            {t('aiAgents.visual.helpMessage')}
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            {t('aiAgents.visual.agentResponse1')}
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            {t('aiAgents.visual.agentResponse2')}
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            {t('aiAgents.visual.agentResponse3')}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Agent Status */}
                    <div className="flex items-center justify-between p-3 bg-ai-green/10 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-ai-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-ai-dark">{t('aiAgents.visual.agentStatus')}</span>
                      </div>
                      <span className="text-xs text-ai-medium">{t('aiAgents.visual.availability')}</span>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">87%</div>
                        <div className="text-xs text-ai-medium">{t('aiAgents.visual.satisfaction')}</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">2min</div>
                        <div className="text-xs text-ai-medium">{t('aiAgents.visual.avgResponse')}</div>
                      </div>
                    </div>

                    {/* Floating Bot Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-blue/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Bot className="w-4 h-4 text-ai-blue" />
                    </div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">{t('aiAgents.problemSolution.problemTitle')}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t('aiAgents.problemSolution.problemP1')}
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t('aiAgents.problemSolution.problemP2')}
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
                  <h2 className="text-3xl font-bold text-ai-dark">{t('aiAgents.problemSolution.solutionTitle')}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t('aiAgents.problemSolution.solutionP1')}
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t('aiAgents.problemSolution.solutionP2')}
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

        {/* Agent Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiAgents.capabilities.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiAgents.capabilities.highlight')}
                </span>
                {t('aiAgents.capabilities.subtitle')}
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('aiAgents.capabilities.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {agentCapabilities.map((capability, index) => {
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

            {/* Deployment Channels */}
            <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  {t('aiAgents.deployment.title')}
                </h3>
                <p className="text-ai-medium">
                  {t('aiAgents.deployment.description')}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {deploymentChannels.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-ai-blue mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.channel}</div>
                      <div className="text-xs text-ai-medium">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiAgents.featuresSection.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiAgents.featuresSection.highlight')}
                </span>
                {t('aiAgents.featuresSection.subtitle')}
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('aiAgents.featuresSection.description')}
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('aiAgents.useCasesSection.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('aiAgents.useCasesSection.highlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('aiAgents.useCasesSection.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-ai-blue" />
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
                            <div className="text-xs text-ai-medium capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="bg-ai-green/10 rounded-xl p-4 border-l-4 border-ai-green">
                        <h4 className="font-bold text-ai-green text-sm mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {t('aiAgents.results')}
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
              {t('aiAgents.finalCta.title')}{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                {t('aiAgents.finalCta.highlight')}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('aiAgents.finalCta.description')}
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {Array.isArray(t('aiAgents.finalCta.stats')) && t('aiAgents.finalCta.stats').map((stat: { value: string; label: string }, index: number) => {
                const Icon = [Bot, TrendingUp, Zap, Users][index];
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
              <Link href="/demo">
                <Button 
                  variant="ai_primary" 
                  size="xl" 
                  className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                >
                  {t('aiAgents.cta.viewAction')}
                  <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              {t('aiAgents.finalCta.contact')}{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t('aiAgents.finalCta.phone')}
              </a>{' '}
              {t('aiAgents.finalCta.or')}{' '}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t('aiAgents.finalCta.email')}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
