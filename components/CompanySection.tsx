'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  Target, 
  Zap,
  BarChart3,
  Phone,
  Download,
  Play,
  Star,
  Award,
  Rocket,
  Globe,
  Building2,
  MapPin,
  Calendar,
  Lightbulb,
  Heart,
  Eye,
  FolderOpen,
  Bot,
  Headphones,
  Brain,
  Flag,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Settings,
  Handshake,
  Cpu,
  Network,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompanySection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = t('company.timeline').map((item: any) => {
    switch (item.year) {
      case '2012':
        return { ...item, icon: Rocket, color: 'ai-blue' };
      case '2015':
        return { ...item, icon: Settings, color: 'ai-green' };
      case '2018':
        return { ...item, icon: Brain, color: 'ai-blue' };
      case '2019':
        return { ...item, icon: Eye, color: 'ai-green' };
      case '2020':
        return { ...item, icon: FolderOpen, color: 'ai-blue' };
      case '2021':
        return { ...item, icon: Heart, color: 'ai-green' };
      case '2023':
        return { ...item, icon: Globe, color: 'ai-blue' };
      case '2024':
        return { ...item, icon: Bot, color: 'ai-green' };
      default:
        return { ...item, icon: Rocket, color: 'ai-blue' };
    }
  });

  const stats = [
    { icon: Users, value: '10+', label: t('company.stats.organizations'), color: 'ai-blue' },
    { icon: Globe, value: '2', label: t('company.stats.countries'), color: 'ai-green' },
    { icon: Flag, value: '40+', label: t('company.stats.documents'), color: 'ai-blue' },
    { icon: Briefcase, value: '20+', label: t('company.stats.team'), color: 'ai-green' }
  ];

  const offices = t('company.presence.offices').map((office: any) => ({
    ...office,
    icon: Building2,
  }));

  const values = t('company.values.points').map((point: any) => {
    switch (point.title) {
      case t('company.values.points.0.title'):
        return { ...point, icon: Building2 };
      case t('company.values.points.1.title'):
        return { ...point, icon: Target };
      case t('company.values.points.2.title'):
        return { ...point, icon: Zap };
      case t('company.values.points.3.title'):
        return { ...point, icon: Brain };
      default:
        return { ...point, icon: Building2 };
    }
  });

  const team = t('company.team.roles').map((role: any) => {
    switch (role.role) {
      case t('company.team.roles.0.role'):
        return { ...role, icon: GraduationCap };
      case t('company.team.roles.1.role'):
        return { ...role, icon: Code };
      case t('company.team.roles.2.role'):
        return { ...role, icon: Network };
      case t('company.team.roles.3.role'):
        return { ...role, icon: Settings };
      default:
        return { ...role, icon: Users };
    }
  });

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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-ai rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('company.hero.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('company.hero.titleHighlight')}
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('company.hero.subtitle')}
              </p>

              {/* Mission Statement */}
              <div 
                className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-ai-light/50 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-2xl font-bold text-ai-dark mb-4">{t('company.hero.mission.title')}</h2>
                <p className="text-lg text-ai-medium leading-relaxed">
                  {t('company.hero.mission.text')}
                </p>
              </div>

              {/* Company Stats */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-ai-light/50 text-center">
                      <div className={`w-12 h-12 bg-${stat.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-6 h-6 text-${stat.color}`} />
                      </div>
                      <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                      <p className="text-sm text-ai-medium font-medium">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('company.journey.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('company.journey.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('company.journey.subtitle')}
              </p>
            </div>

            {/* Story Content */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6">{t('company.journey.legacy.title')}</h3>
                <div className="space-y-6 text-lg text-ai-medium leading-relaxed">
                  <p>{t('company.journey.legacy.p1')}</p>
                  <p>{t('company.journey.legacy.p2')}</p>
                  <p>{t('company.journey.legacy.p3')}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6">{t('company.journey.evolution.title')}</h3>
                <div className="space-y-6 text-lg text-ai-medium leading-relaxed">
                  <p>{t('company.journey.evolution.p1')}</p>
                  <p>{t('company.journey.evolution.p2')}</p>
                  <p>{t('company.journey.evolution.p3')}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-ai-dark mb-12 text-center">{t('company.journey.timelineTitle')}</h3>
              
              {/* Desktop Timeline */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-ai"></div>
                  
                  {timeline.map((item: any, index: number) => {
                    const Icon = item.icon;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div key={index} className={`relative flex items-center mb-16 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-ai-light flex items-center justify-center z-10">
                          <div className={`w-8 h-8 bg-${item.color}/10 rounded-full flex items-center justify-center`}>
                            <Icon className={`w-4 h-4 text-${item.color}`} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                          <Card className="shadow-lg border-ai-light/50">
                            <CardContent className="p-6">
                              <div className={`text-3xl font-bold text-${item.color} mb-2`}>{item.year}</div>
                              <h4 className="text-xl font-bold text-ai-dark mb-3">{item.title}</h4>
                              <p className="text-ai-medium leading-relaxed">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="lg:hidden space-y-8">
                {timeline.map((item: any, index: number) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mr-4`}>
                            <Icon className={`w-6 h-6 text-${item.color}`} />
                          </div>
                          <div className={`text-2xl font-bold text-${item.color}`}>{item.year}</div>
                        </div>
                        <h4 className="text-lg font-bold text-ai-dark mb-3">{item.title}</h4>
                        <p className="text-ai-medium leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('company.values.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('company.values.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('company.values.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value: any, index: number) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-ai-dark mb-4">{value.title}</h3>
                      <p className="text-ai-medium leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('company.team.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('company.team.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('company.team.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((role: any, index: number) => {
                const Icon = role.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      <div className="text-3xl font-bold text-ai-green mb-2">{role.count}</div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{role.role}</h3>
                      <p className="text-sm text-ai-medium">{role.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t('company.presence.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('company.presence.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t('company.presence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office: any, index: number) => {
                const Icon = office.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 text-center hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-green" />
                      </div>
                      <h3 className="text-xl font-bold text-ai-dark mb-2">{office.city}</h3>
                      <p className="text-ai-blue font-medium mb-3">{office.country}</p>
                      <p className="text-sm text-ai-dark font-medium mb-2">{office.description}</p>
                      <p className="text-xs text-ai-medium">{office.details}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Details */}
            <div className="mt-16 bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  {t('company.presence.details.title')}
                </h3>
                <p className="text-ai-medium max-w-2xl mx-auto">
                  {t('company.presence.details.subtitle')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t('company.presence.details.hubs').map((hub: any, index: number) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                    <div className="font-bold text-ai-dark">{hub.name}</div>
                    <div className="text-sm text-ai-medium">{hub.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t('company.cta.title')}{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                {t('company.cta.titleHighlight')}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('company.cta.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/demo">
                <Button 
                  variant="ai_primary" 
                  size="xl" 
                  className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                >
                  {t('company.cta.buttons.demo')}
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                {t('company.cta.buttons.contact')}
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              {t('company.cta.contact').replace('{phone}', '+55 (11) 5039-4877').replace('{email}', 'contato@itcygnus.com')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
