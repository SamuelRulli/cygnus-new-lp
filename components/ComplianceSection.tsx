'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Scale, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  FileText, 
  Mail, 
  Phone, 
  Download,
  Calendar,
  User,
  Database,
  Settings,
  Globe,
  AlertCircle,
  Info,
  Book,
  Star,
  Award,
  Target,
  Zap,
  Clock,
  Users,
  Building2,
  Flag,
  Eye,
  Lock,
  Search,
  Activity,
  BarChart3,
  FileCheck,
  BadgeCheck,
  ShieldCheck,
  Gavel,
  Briefcase,
  Clipboard,
  Archive,
  Folder,
  HelpCircle,
  TrendingUp,
  PieChart,
  FileSearch,
  AlertTriangle,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import * as Icons from 'lucide-react';

export default function ComplianceSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const complianceFrameworks = t('compliance.frameworks.list') || [];
  const complianceCapabilities = t('compliance.capabilities.list') || [];
  const regulatoryRequirements = t('compliance.requirements.list') || [];
  const auditProcess = t('compliance.audit.process') || [];
  const complianceMetrics = t('compliance.hero.metrics') || [];
  const dataRights = t('compliance.dataRights.rights') || [];

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
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('compliance.hero.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('compliance.hero.titleHighlight')}
                </span>
              </h1>
              
              <p
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('compliance.hero.subtitle')}{' '}
                <span className="text-ai-blue font-bold">{t('compliance.hero.subtitleHighlight1')}</span>{' '}
                {t('compliance.hero.and')}{' '}
                <span className="text-ai-green font-bold">{t('compliance.hero.subtitleHighlight2')}</span>.
              </p>

              {/* Compliance Metrics */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {Array.isArray(complianceMetrics) && complianceMetrics.map((metric, index) => {
                  const Icon = (Icons as any)[metric.icon] || Shield;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-ai-light/50 text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <div className="text-2xl font-bold text-ai-green mb-2">{metric.value}</div>
                      <p className="text-sm text-ai-medium font-medium">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('compliance.frameworks.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('compliance.frameworks.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('compliance.frameworks.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(complianceFrameworks) && complianceFrameworks.map((framework, index) => {
                const Icon = (Icons as any)[framework.icon] || Shield;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-${framework.color}/10 rounded-xl flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 text-${framework.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-ai-dark">{framework.name}</h3>
                            <div className="text-xs text-ai-medium flex items-center space-x-1">
                              <span>{framework.flag}</span>
                              <span>{framework.region}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`text-xs font-bold text-${framework.color} bg-${framework.color}/10 px-2 py-1 rounded-full`}>
                          {framework.status}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold text-ai-dark mb-2">{framework.fullName}</h4>
                      <p className="text-sm text-ai-medium">{framework.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('compliance.capabilities.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('compliance.capabilities.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('compliance.capabilities.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(complianceCapabilities) && complianceCapabilities.map((capability, index) => {
                const Icon = (Icons as any)[capability.icon] || Shield;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-ai-dark">{capability.title}</h3>
                      </div>
                      
                      <p className="text-ai-medium leading-relaxed mb-6">{capability.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-ai-dark">{t('compliance.capabilities.featuresTitle')}:</h4>
                        {capability.features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-ai-green mt-1 flex-shrink-0" />
                            <span className="text-sm text-ai-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regulatory Requirements Section */}
        {/* <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Implementação{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Regulatória
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Implementação detalhada de requisitos regulatórios específicos com
                controles automatizados e monitoramento contínuo.
              </p>
            </div>

            <div className="space-y-6">
              {regulatoryRequirements.map((req, index) => (
                <Card key={index} className="shadow-lg border-ai-light/50">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-ai-blue/10 rounded-lg flex items-center justify-center">
                          <req.icon className="w-5 h-5 text-ai-blue" />
                        </div>
                        <div>
                          <div className="font-bold text-ai-dark">{req.regulation}</div>
                          <div className="text-sm text-ai-medium">{req.requirement}</div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <p className="text-ai-medium">{req.implementation}</p>
                      </div>
                      
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ai-green/10 text-ai-green">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {req.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Data Rights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('compliance.dataRights.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('compliance.dataRights.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('compliance.dataRights.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(dataRights) && dataRights.map((right, index) => {
                const Icon = (Icons as any)[right.icon] || Shield;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-ai-green" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-ai-dark mb-2">{right.title}</h3>
                          <p className="text-sm text-ai-medium mb-3">{right.description}</p>
                          <div className="text-xs text-ai-blue bg-ai-blue/10 px-2 py-1 rounded-full inline-block">
                            {right.regulation}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-ai-light/20 rounded-lg p-4">
                        <h4 className="font-semibold text-ai-dark mb-2">{t('compliance.dataRights.implementation')}:</h4>
                        <p className="text-sm text-ai-medium">{right.implementation}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Audit Process Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('compliance.audit.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('compliance.audit.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('compliance.audit.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(auditProcess) && auditProcess.map((phase, index) => {
                const Icon = (Icons as any)[phase.icon] || Shield;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      
                      <div className="text-sm text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full mb-4">
                        {phase.duration}
                      </div>
                      
                      <h3 className="text-lg font-bold text-ai-dark mb-3">{phase.title}</h3>
                      <p className="text-sm text-ai-medium mb-4">{phase.description}</p>
                      
                      <div className="space-y-2">
                        {phase.activities.map((activity: string, actIndex: number) => (
                          <div key={actIndex} className="text-xs text-ai-medium bg-ai-light/20 px-2 py-1 rounded">
                            {activity}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Contact Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t('compliance.contact.title')}{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                {t('compliance.contact.titleHighlight')}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('compliance.contact.subtitle')}
            </p>

            {/* Compliance Team Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {Array.isArray(t('compliance.contact.contacts')) && t('compliance.contact.contacts').map((contact: { icon: string; title: string; value: string; description: string }, index: number) => {
                const Icon = (Icons as any)[contact.icon] || Shield;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-ai-green" />
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{contact.title}</div>
                    <div className="text-ai-green mb-2">{contact.value}</div>
                    <div className="text-white/60 text-sm">{contact.description}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                Solicitar Avaliação de Conformidade
                <Scale className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Baixar Guia de Conformidade
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            <p className="text-white/60 text-sm">
              {t('compliance.contact.footer')}{' '}
              <a href={`tel:${t('compliance.contact.footerPhone')}`} className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t('compliance.contact.footerPhone')}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
