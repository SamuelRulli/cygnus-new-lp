'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Download, Play, Calculator, FileText, BookOpen, Shield, Video, Users, Clock, Phone, Mail, MapPin, Calendar, Headphones, Globe, Award, Star, Zap, Target, BarChart3, Lightbulb, Rocket, Building2, ExternalLink, Presentation as PresentationChart, AlertCircle, User, MessageSquare, FileCheck, Briefcase, TrendingUp, Database, Settings, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const freeResources = [
    {
      title: 'Guia Completo: "Implementando IA em 7 Dias"',
      description: 'Manual passo a passo para implementar soluções de IA empresarial, desde a avaliação inicial até a implantação. Inclui modelos de projeto, listas de verificação e cronograma detalhado baseado em nossa metodologia comprovada.',
      type: 'PDF de 45 páginas',
      downloadType: 'Download Gratuito',
      icon: BookOpen,
      color: 'ai-blue',
      features: [
        'Modelos de projeto e listas de verificação',
        'Cronograma detalhado de implementação',
        'Estruturas de avaliação de risco',
        'Métricas de medição de sucesso'
      ]
    },
    {
      title: 'Calculadora de ROI para IA Empresarial',
      description: 'Calcule o retorno sobre investimento específico para seu caso de uso. Nossa calculadora considera volume de documentos, custos trabalhistas, tempo de processamento e complexidade para gerar projeções de economia precisas.',
      type: 'Ferramenta Interativa',
      downloadType: 'Acesso Gratuito',
      icon: Calculator,
      color: 'ai-green',
      features: [
        'Projeções de ROI personalizadas',
        'Cálculos específicos por indústria',
        'Detalhamento de custos',
        'Estimativas de cronograma de implementação'
      ]
    },
    {
      title: 'Modelo: "Caso de Negócio para IA"',
      description: 'Apresentação pronta para convencer sua diretoria sobre investimentos em IA. Inclui slides sobre ROI, riscos, cronograma e métricas de sucesso, baseados em casos reais de aprovação.',
      type: 'PowerPoint Editável',
      downloadType: 'Download Gratuito',
      icon: PresentationChart,
      color: 'ai-blue',
      features: [
        'Apresentação pronta para executivos',
        'Slides de análise de ROI e riscos',
        'Exemplos reais de casos de sucesso',
        'Personalizável para sua indústria'
      ]
    },
    {
      title: 'Whitepaper: "IA e GDPR - Conformidade Prática"',
      description: 'Guia técnico sobre implementação de IA mantendo total conformidade com GDPR. Inclui lista de verificação de auditoria, modelos de consentimento e exemplos de documentação necessária.',
      type: 'PDF de 32 páginas',
      downloadType: 'Download Gratuito',
      icon: Shield,
      color: 'ai-green',
      features: [
        'Lista de verificação de conformidade GDPR',
        'Modelos de consentimento legal',
        'Diretrizes de proteção de dados',
        'Exemplos de documentação para auditoria'
      ]
    }
  ];

  const resourceCategories = [
    {
      title: 'Guias de Implementação',
      description: 'Guias passo a passo para implantação bem-sucedida de IA',
      icon: Rocket,
      count: '5+ Guias'
    },
    {
      title: 'Modelos & Checklists',
      description: 'Modelos prontos para uso em gestão de projetos',
      icon: FileCheck,
      count: '12+ Modelos'
    },
    {
      title: 'Calculadoras de ROI',
      description: 'Ferramentas interativas para análise de investimento',
      icon: Calculator,
      count: '3+ Calculadoras'
    },
    {
      title: 'Whitepapers Técnicos',
      description: 'Documentação técnica detalhada',
      icon: BookOpen,
      count: '8+ Documentos'
    },
    {
      title: 'Webinars & Demonstrações',
      description: 'Conteúdo educacional gravado e ao vivo',
      icon: Video,
      count: '20+ Vídeos'
    },
    {
      title: 'Casos de Sucesso',
      description: 'Estudos de caso detalhados e resultados',
      icon: Award,
      count: '15+ Casos'
    }
  ];

  const contactMethods = [
    {
      title: 'Demonstração Personalizada',
      description: 'Veja nossa plataforma de IA adaptada ao seu setor e casos de uso',
      duration: '30 minutos',
      icon: Play,
      action: 'Agendar Demonstração',
      link: '/demo'
    },
    {
      title: 'Consultoria Gratuita',
      description: 'Consulta estratégica com nossos especialistas em transformação por IA',
      duration: '1 hora',
      icon: MessageSquare,
      action: 'Agendar Consulta',
      link: '#'
    },
    // {
    //   title: 'Análise de ROI',
    //   description: 'Análise detalhada de retorno sobre investimento para seu caso específico',
    //   duration: 'Sem compromisso',
    //   icon: BarChart3,
    //   action: 'Calcular ROI',
    //   link: '/roi-calculator'
    // },
    {
      title: 'Suporte Técnico',
      description: 'Assistência técnica 24 horas e orientação de especialistas',
      duration: '24/7',
      icon: Headphones,
      action: 'Contatar Suporte',
      link: '#'
    }
  ];

  const offices = [
    {
      name: 'São Paulo Office',
      type: 'Headquarters',
      address: 'Av. Paulista, 726',
      city: 'Bela Vista, São Paulo - SP',
      zip: 'ZIP: 01310-100, Brazil',
      phone: '+55 (11) 5039-4877 / +1 (619) 306-9274',
      email: 'contact@itcygnus.com',
      flag: '🇧🇷'
    },
    {
      name: 'Orlando Office',
      type: 'International Operations',
      address: '1395 Brickell Ave',
      city: 'Orlando, FL 33131, USA',
      zip: '',
      phone: '+1 (305) 555-0123',
      email: 'contact@itcygnus.com',
      flag: '🇺🇸'
    }
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-ai rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Recursos para Acelerar Sua{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Transformação Digital
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Acesse nossos guias especializados, modelos, calculadoras e ferramentas desenvolvidos para ajudar 
                líderes empresariais a implementar IA com sucesso. Todos os recursos são{' '}
                <span className="text-ai-green font-bold">totalmente gratuitos</span> e baseados em{' '}
                <span className="text-ai-blue font-bold">metodologias comprovadas</span> de mais de 100 implementações bem-sucedidas.
              </p>

              {/* Resource Categories Overview */}
              <div 
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {resourceCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-ai-light/50 text-center">
                      <div className="w-10 h-10 bg-ai-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-ai-blue" />
                      </div>
                      <div className="text-xs font-bold text-ai-green mb-1">{category.count}</div>
                      <h3 className="text-sm font-semibold text-ai-dark mb-1">{category.title}</h3>
                      <p className="text-xs text-ai-medium">{category.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Recursos{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Gratuitos em Destaque
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Baixe nossos recursos mais populares, utilizados por milhares de líderes empresariais 
                para implementar IA com sucesso em suas organizações.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {freeResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Header */}
                      <div className={`bg-gradient-to-r from-${resource.color}/10 to-${resource.color}/5 p-6 border-b border-ai-light/20`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className={`w-16 h-16 bg-${resource.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`w-8 h-8 text-${resource.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <span className={`text-xs font-bold text-${resource.color} bg-${resource.color}/10 px-2 py-1 rounded-full mr-2`}>
                                  {resource.downloadType}
                                </span>
                                <span className="text-xs text-ai-medium font-medium">
                                  {resource.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-ai-dark leading-tight">
                                {resource.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-ai-medium leading-relaxed mb-6">
                          {resource.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-sm font-semibold text-ai-dark mb-3">O que está incluído:</h4>
                          {resource.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle2 className={`w-4 h-4 text-${resource.color} flex-shrink-0`} />
                              <span className="text-sm text-ai-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button 
                          className={`w-full bg-${resource.color} hover:bg-${resource.color}/90 text-white group`}
                          size="lg"
                        >
                          <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                          Baixar Agora - Grátis
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Resources CTA */}
            <div className="text-center mt-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Acesse Nossa Biblioteca Completa de Recursos
                </h3>
                <p className="text-ai-medium mb-6 leading-relaxed">
                  Tenha acesso à nossa coleção completa de guias de implementação, modelos específicos por setor,
                  documentação técnica e gravações exclusivas de webinars.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="ai_primary" size="lg" className="group">
                    Explorar Todos os Recursos
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="lg" className="group">
                    Assinar para Atualizações
                    <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Vamos Transformar Sua{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Empresa Juntos
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Fale com nossos especialistas para descobrir como a IA pode revolucionar seus processos.
                Oferecemos consultoria gratuita e demonstrações personalizadas para seu setor.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{method.title}</h3>
                      <p className="text-sm text-ai-medium mb-4 leading-relaxed">{method.description}</p>
                      <div className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full mb-4">
                        {method.duration}
                      </div>
                      <Link href={method.link}>
                        <Button variant="ai_outline" size="sm" className="w-full group">
                          {method.action}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Information */}
            <div className="grid lg:grid-cols-2 gap-12">
              {offices.map((office, index) => (
                <Card key={index} className="shadow-xl border-ai-light/50">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-3xl">{office.flag}</div>
                      <div>
                        <h3 className="text-xl font-bold text-ai-dark">{office.name}</h3>
                        <p className="text-ai-blue font-medium">{office.type}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-ai-green mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-ai-dark font-medium">{office.address}</p>
                          <p className="text-ai-medium">{office.city}</p>
                          {office.zip && <p className="text-ai-medium">{office.zip}</p>}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-ai-blue flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-ai-dark hover:text-ai-blue transition-colors">
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-ai-dark hover:text-ai-green transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center">
              <h3 className="text-xl font-bold text-ai-dark mb-6">Horários de Atendimento & Suporte</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Calendar className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                  <div className="font-semibold text-ai-dark">Horário Comercial</div>
                  <div className="text-sm text-ai-medium">Segunda a Sexta: 8h às 18h (EST)</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Headphones className="w-6 h-6 text-ai-green mx-auto mb-2" />
                  <div className="font-semibold text-ai-dark">Suporte Técnico</div>
                  <div className="text-sm text-ai-medium">Disponível 24/7</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <AlertCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <div className="font-semibold text-ai-dark">Emergências</div>
                  <div className="text-sm text-ai-medium">
                    <a href="tel:+1-305-555-0199" className="text-red-500 hover:text-red-600 transition-colors">
                      +1 (601) 910 3353
                    </a>
                  </div>
                </div>
              </div>
              </div>
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
              Pronto para Começar Sua{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Jornada de IA?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Baixe nossos recursos gratuitos, agende uma demonstração personalizada ou fale diretamente com nossos
              especialistas. Estamos aqui para ajudá-lo a ter sucesso com a transformação por IA.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Download, value: '50K+', label: 'Recursos Baixados' },
                  { icon: Users, value: '100+', label: 'Implementações Bem-sucedidas' },
                  { icon: Star, value: '4.9/5', label: 'Satisfação do Cliente' },
                  { icon: Headphones, value: '24/7', label: 'Suporte Especializado' }
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
              <Link href="/demo">
                <Button 
                  variant="ai_primary" 
                  size="xl" 
                  className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                >
                  Agendar Demonstração
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Baixar Recursos
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Falar com Especialista
                <MessageSquare className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
              <p className="text-white/60 text-sm">
              Dúvidas? Fale conosco pelo{' '}
              <a href="tel:+1-305-555-0123" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (305) 555-0123
              </a>{' '}
              ou{' '}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
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
