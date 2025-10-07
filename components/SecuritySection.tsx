'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  Eye, 
  Database, 
  Server, 
  FileText, 
  Mail, 
  Phone, 
  Download,
  Calendar,
  User,
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
  Fingerprint,
  Cpu,
  Network,
  HardDrive,
  Wifi,
  Smartphone,
  Monitor,
  Key,
  Search,
  Activity,
  BarChart3,
  Bell,
  Headphones,
  Building2,
  Flag,
  Scale,
  FileCheck,
  BadgeCheck,
  ShieldCheck,
  LockKeyhole,
  ScanLine,
  Radar,
  Bug,
  AlertTriangle
} from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SecuritySection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securityPillars = t('security.pillars') || [];
  const securityMeasures = t('security.measures') || [];
  const certifications = t('security.certifications') || [];
  const securityArchitecture = t('security.architecture') || [];
  const incidentResponse = t('security.incidentResponse.timeline') || [];
  const securityMetrics = t('security.hero.metrics') || [];

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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('security.hero.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('security.hero.titleHighlight')}
                </span>
              </h1>
              
              <p
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('security.hero.subtitle')}{' '}
                <span className="text-ai-blue font-bold">{t('security.hero.subtitleHighlight')}</span>.
              </p>

              {/* Security Metrics */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {Array.isArray(securityMetrics) && securityMetrics.map((metric: { icon: string; value: string; label: string }, index) => {
                  const Icon = metric.icon ? (Icons as any)[metric.icon] : Shield;
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

              {/* Security Pillars */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {Array.isArray(securityPillars) && securityPillars.map((pillar: { icon: string; color: string; title: string; description: string }, index) => {
                  const Icon = pillar.icon ? (Icons as any)[pillar.icon] : Shield;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 bg-${pillar.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 text-${pillar.color}`} />
                        </div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{pillar.title}</h3>
                        <p className="text-sm text-ai-medium">{pillar.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('security.measuresTitle')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('security.measuresTitleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('security.measuresSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(securityMeasures) && securityMeasures.map((category: { icon: string; title: string; items: string[] }, index) => {
                const Icon = category.icon ? (Icons as any)[category.icon] : Shield;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-ai-dark">{category.title}</h3>
                      </div>
                      <div className="space-y-3">
                        {Array.isArray(category.items) && category.items.map((measure: string, measureIndex: number) => (
                          <div key={measureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-ai-green mt-1 flex-shrink-0" />
                            <span className="text-sm text-ai-medium">{measure}</span>
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

        {/* Security Architecture Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('security.architecture.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('security.architecture.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('security.architecture.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {Array.isArray(securityArchitecture) && securityArchitecture.map((layer: { icon: string; title: string; description: string; items: string[] }, index) => {
                const Icon = layer.icon ? (Icons as any)[layer.icon] : Shield;
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
                          <div>
                            <h3 className="text-2xl font-bold text-ai-dark">{layer.title}</h3>
                            <span className="text-sm text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                              {t('security.architecture.layer')} {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-lg text-ai-medium leading-relaxed mb-6">
                          {layer.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-ai-dark mb-3">{t('security.architecture.controls')}:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {Array.isArray(layer.items) && layer.items.map((protection: string, protIndex: number) => (
                              <div key={protIndex} className="flex items-center space-x-2">
                                <ShieldCheck className="w-4 h-4 text-ai-green" />
                                <span className="text-sm text-ai-medium">{protection}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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

        {/* Certifications Section */}
        {/* <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Certificações de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Segurança
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Certificações de segurança validadas por terceiros e estruturas de conformidade
                demonstrando nosso compromisso com os mais altos padrões de segurança.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                const statusColor = cert.status === 'Certified' || cert.status === 'Compliant' 
                  ? cert.color 
                  : cert.color;
                
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-${statusColor}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 text-${statusColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{cert.name}</h3>
                      <p className="text-sm text-ai-medium mb-4">{cert.description}</p>
                      <span className={`inline-block text-xs font-bold text-${statusColor} bg-${statusColor}/10 px-3 py-1 rounded-full`}>
                        {cert.status}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Incident Response Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('security.incidentResponse.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('security.incidentResponse.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('security.incidentResponse.subtitle')}
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-ai"></div>
              
              {Array.isArray(incidentResponse) && incidentResponse.map((phase: { icon: string; duration: string; title: string; description: string }, index) => {
                const Icon = phase.icon ? (Icons as any)[phase.icon] : Shield;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center mb-16 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-ai-light flex items-center justify-center z-10">
                      <div className="w-8 h-8 bg-ai-blue/10 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-ai-blue" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                      <Card className="shadow-lg border-ai-light/50">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4 lg:hidden">
                            <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-ai-blue" />
                            </div>
                            <span className="text-sm text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full">
                              {phase.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-ai-dark mb-3">{phase.title}</h3>
                          <p className="text-ai-medium leading-relaxed mb-3">{phase.description}</p>
                          <div className="hidden lg:block">
                            <span className="text-sm text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full">
                              {phase.duration}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Contact Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                {t('security.contact.title')}{' '}
                <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                  {t('security.contact.titleHighlight')}
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t('security.contact.subtitle')}
              </p>

            {/* Security Team Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {Array.isArray(t('security.contact.contacts')) && t('security.contact.contacts').map((contact: { icon: string; title: string; value: string; description: string }, index: number) => {
                const Icon = contact.icon ? (Icons as any)[contact.icon] : Shield;
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
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                Solicitar Avaliação de Segurança
                <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Baixar Whitepaper de Segurança
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div> */}

            <p className="text-white/60 text-sm">
              {t('security.contact.footer')}{' '}
              <a href={`tel:${t('security.contact.footerPhone')}`} className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t('security.contact.footerPhone')}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
