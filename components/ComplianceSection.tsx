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

export default function ComplianceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const complianceFrameworks = [
    {
      name: 'GDPR',
      fullName: 'Regulamento Geral de Proteção de Dados',
      region: 'União Europeia',
      status: 'Conforme',
      description: 'Regulamentação abrangente de proteção de dados e privacidade',
      icon: Globe,
      color: 'ai-blue',
      flag: '🇪🇺'
    },
    {
      name: 'HIPAA',
      fullName: 'Lei de Portabilidade e Responsabilidade de Seguros de Saúde',
      region: 'Estados Unidos',
      status: 'Conforme',
      description: 'Padrões de privacidade e segurança de informações de saúde',
      icon: Shield,
      color: 'ai-green',
      flag: '🇺🇸'
    },
    // {
    //   name: 'SOX',
    //   fullName: 'Lei Sarbanes-Oxley',
    //   region: 'Estados Unidos',
    //   status: 'Conforme',
    //   description: 'Padrões de relatórios financeiros e governança corporativa',
    //   icon: BarChart3,
    //   color: 'ai-blue',
    //   flag: '🇺🇸'
    // },
    // {
    //   name: 'CCPA',
    //   fullName: 'Lei de Privacidade do Consumidor da Califórnia',
    //   region: 'Califórnia, EUA',
    //   status: 'Conforme',
    //   description: 'Direitos de privacidade do consumidor e proteção de dados',
    //   icon: User,
    //   color: 'ai-green',
    //   flag: '🇺🇸'
    // },
    {
      name: 'LGPD',
      fullName: 'Lei Geral de Proteção de Dados',
      region: 'Brasil',
      status: 'Conforme',
      description: 'Lei brasileira de proteção geral de dados',
      icon: Flag,
      color: 'ai-blue',
      flag: '🇧🇷'
    },
    // {
    //   name: 'ISO 27001',
    //   fullName: 'Gestão de Segurança da Informação',
    //   region: 'Internacional',
    //   status: 'Certificado',
    //   description: 'Padrão de sistema de gestão de segurança da informação',
    //   icon: Award,
    //   color: 'ai-green',
    //   flag: '🌍'
    // }
  ];

  const complianceCapabilities = [
    {
      title: 'Governança de Dados',
      description: 'Classificação abrangente de dados, retenção e gerenciamento do ciclo de vida',
      icon: Database,
      features: [
        'Classificação automatizada de dados',
        'Aplicação de políticas de retenção',
        'Rastreamento de linhagem de dados',
        'Avaliações de impacto à privacidade'
      ]
    },
    {
      title: 'Gestão de Auditoria',
      description: 'Rastreamento completo de auditoria e coleta de evidências para conformidade regulatória',
      icon: Search,
      features: [
        'Logs de auditoria imutáveis',
        'Coleta automatizada de evidências',
        'Relatórios de conformidade',
        'Monitoramento em tempo real'
      ]
    },
    {
      title: 'Avaliação de Riscos',
      description: 'Monitoramento contínuo de riscos de conformidade e estruturas de avaliação',
      icon: AlertTriangle,
      features: [
        'Modelos de pontuação de risco',
        'Análise de lacunas de conformidade',
        'Alertas automatizados de risco',
        'Acompanhamento de mitigação'
      ]
    },
    {
      title: 'Gestão de Políticas',
      description: 'Criação centralizada de políticas, distribuição e acompanhamento de conformidade',
      icon: FileText,
      features: [
        'Versionamento de políticas',
        'Distribuição automatizada',
        'Acompanhamento de reconhecimento',
        'Verificação de conformidade'
      ]
    }
  ];

  const regulatoryRequirements = [
    {
      regulation: 'GDPR Artigo 32',
      requirement: 'Segurança do Processamento',
      implementation: 'Criptografia ponta a ponta, controles de acesso e avaliações regulares de segurança',
      status: 'Implementado',
      icon: Lock
    },
    {
      regulation: 'HIPAA 164.312',
      requirement: 'Proteções Técnicas',
      implementation: 'Autenticação multifator, logs de auditoria e controles de integridade de dados',
      status: 'Implementado',
      icon: Shield
    },
    {
      regulation: 'SOX Seção 404',
      requirement: 'Controles Internos',
      implementation: 'Testes automatizados de controle e proteção de dados financeiros',
      status: 'Implementado',
      icon: BarChart3
    },
    {
      regulation: 'CCPA Seção 1798.100',
      requirement: 'Direitos do Consumidor',
      implementation: 'Portal de solicitações de titulares de dados e fluxos de trabalho automatizados',
      status: 'Implementado',
      icon: User
    }
  ];

  const auditProcess = [
    {
      phase: 'Planejamento',
      description: 'Definição do escopo da auditoria e planejamento da coleta de evidências',
      duration: '1-2 semanas',
      icon: Clipboard,
      activities: ['Definição de escopo', 'Mapeamento de evidências', 'Planejamento de cronograma', 'Alocação de recursos']
    },
    {
      phase: 'Coleta de Evidências',
      description: 'Coleta automatizada de evidências e documentação de conformidade',
      duration: '2-3 semanas',
      icon: Archive,
      activities: ['Extração de logs', 'Testes de controle', 'Revisão de documentos', 'Agendamento de entrevistas']
    },
    {
      phase: 'Avaliação',
      description: 'Análise de lacunas de conformidade e avaliação de riscos',
      duration: '1-2 semanas',
      icon: Search,
      activities: ['Análise de lacunas', 'Avaliação de riscos', 'Avaliação de controles', 'Documentação de achados']
    },
    {
      phase: 'Relatório',
      description: 'Geração de relatório de conformidade e planejamento de remediação',
      duration: '1 semana',
      icon: FileText,
      activities: ['Geração de relatório', 'Priorização de achados', 'Planejamento de remediação', 'Revisão das partes interessadas']
    }
  ];

  const complianceMetrics = [
    { metric: '100%', label: 'Taxa de Sucesso em Auditorias', icon: Award },
    { metric: '24/7', label: 'Monitoramento de Conformidade', icon: Eye },
    { metric: '< 7 Dias', label: 'Tempo de Resposta a Auditorias', icon: Clock },
    { metric: '99.99%', label: 'Efetividade de Controles', icon: Target }
  ];

  const dataRights = [
    {
      right: 'Direito de Acesso',
      description: 'Solicitar acesso aos dados pessoais que processamos',
      implementation: 'Portal de autoatendimento com exportação automatizada de dados',
      regulation: 'GDPR Art. 15, CCPA',
      icon: Eye
    },
    {
      right: 'Direito de Retificação',
      description: 'Corrigir dados pessoais imprecisos ou incompletos',
      implementation: 'Formulários de correção online com processamento imediato',
      regulation: 'GDPR Art. 16, CCPA',
      icon: Settings
    },
    {
      right: 'Direito de Exclusão',
      description: 'Solicitar a exclusão de dados pessoais',
      implementation: 'Fluxos de trabalho automatizados de exclusão com verificação',
      regulation: 'GDPR Art. 17, CCPA',
      icon: AlertCircle
    },
    {
      right: 'Direito à Portabilidade',
      description: 'Receber dados pessoais em formato estruturado',
      implementation: 'Formatos de exportação padronizados e transferência segura',
      regulation: 'GDPR Art. 20, CCPA',
      icon: Download
    }
  ];

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
                Conformidade{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Regulatória
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Estrutura abrangente de conformidade garantindo aderência a regulamentações globais
                incluindo GDPR, HIPAA, SOX e requisitos específicos do setor. Automatização e{' '}
                <span className="text-ai-blue font-bold">monitoramento integrados</span> para{' '}
                <span className="text-ai-green font-bold">garantia contínua</span>.
              </p>

              {/* Compliance Metrics */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {complianceMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-ai-light/50 text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <div className="text-2xl font-bold text-ai-green mb-2">{metric.metric}</div>
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
                Estruturas de Conformidade{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Globais
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Conformidade certificada com as principais regulamentações internacionais e regionais,
                garantindo que seus dados e operações atendam aos mais altos padrões legais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => {
                const Icon = framework.icon;
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
                Capacidades de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Conformidade
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Capacidades abrangentes de gerenciamento de conformidade integradas em nossa plataforma,
                fornecendo monitoramento automatizado, relatórios e coleta de evidências.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceCapabilities.map((capability, index) => {
                const Icon = capability.icon;
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
                        <h4 className="font-semibold text-ai-dark">Key Features:</h4>
                        {capability.features.map((feature, featureIndex) => (
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
                Direitos do{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Titular de Dados
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Implementação abrangente dos direitos do titular de dados com processamento
                automatizado de solicitações e fluxos de trabalho de resposta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataRights.map((right, index) => {
                const Icon = right.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-ai-green" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-ai-dark mb-2">{right.right}</h3>
                          <p className="text-sm text-ai-medium mb-3">{right.description}</p>
                          <div className="text-xs text-ai-blue bg-ai-blue/10 px-2 py-1 rounded-full inline-block">
                            {right.regulation}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-ai-light/20 rounded-lg p-4">
                        <h4 className="font-semibold text-ai-dark mb-2">Implementation:</h4>
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
                Processo de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Auditoria
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Processo de auditoria simplificado com coleta automatizada de evidências e
                relatórios abrangentes de conformidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditProcess.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      
                      <div className="text-sm text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full mb-4">
                        {phase.duration}
                      </div>
                      
                      <h3 className="text-lg font-bold text-ai-dark mb-3">{phase.phase}</h3>
                      <p className="text-sm text-ai-medium mb-4">{phase.description}</p>
                      
                      <div className="space-y-2">
                        {phase.activities.map((activity, actIndex) => (
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
              Dúvidas sobre{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Conformidade?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe de conformidade está pronta para ajudar com solicitações de auditoria, fornecer
              documentação de conformidade ou discutir requisitos regulatórios específicos para seu setor.
            </p>

            {/* Compliance Team Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Escritório de Conformidade',
                  contact: 'dpo@itcygnus.com',
                  description: 'Consultas gerais sobre conformidade',
                  icon: Scale
                },
                {
                  title: 'Suporte a Auditorias',
                  contact: 'security.info@itcygnus.com',
                  description: 'Solicitações e documentação de auditoria',
                  icon: FileSearch
                },
                {
                  title: 'Equipe Jurídica',
                  contact: 'legal@itcygnus.com',
                  description: 'Dúvidas legais e regulatórias',
                  icon: Gavel
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-ai-green" />
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{contact.title}</div>
                    <div className="text-ai-green mb-2">{contact.contact}</div>
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
              Precisa de assistência imediata? Ligue para nossa linha direta de conformidade{' '}
              <a href="tel:+1-305-555-0123" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
