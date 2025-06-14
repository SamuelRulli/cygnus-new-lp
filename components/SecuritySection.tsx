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
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securityPillars = [
    {
      title: 'Proteção de Dados',
      description: 'Criptografia ponta a ponta e manipulação segura de dados',
      icon: Lock,
      color: 'ai-blue'
    },
    {
      title: 'Controle de Acesso',
      description: 'Autenticação multifator e permissões baseadas em funções',
      icon: Key,
      color: 'ai-green'
    },
    {
      title: 'Segurança de Infraestrutura',
      description: 'Arquitetura em nuvem segura com defesa em profundidade',
      icon: Server,
      color: 'ai-blue'
    },
    {
      title: 'Monitoramento Contínuo',
      description: 'Monitoramento de segurança 24/7 e detecção de ameaças',
      icon: Radar,
      color: 'ai-green'
    }
  ];

  const securityMeasures = [
    {
      category: 'Criptografia de Dados',
      measures: [
        'Criptografia AES-256 para dados em repouso',
        'TLS 1.3 para dados em trânsito',
        'Criptografia ponta a ponta para comunicações sensíveis',
        'Módulos de Segurança de Hardware (HSM) para gerenciamento de chaves'
      ],
      icon: Lock
    },
    {
      category: 'Segurança de Acesso',
      measures: [
        'Autenticação multifator (MFA) obrigatória',
        'Controle de acesso baseado em funções (RBAC)',
        'Integração com Single Sign-On (SSO)',
        'Revisões regulares de acesso e desprovisionamento'
      ],
      icon: Key
    },
    {
      category: 'Proteção de Infraestrutura',
      measures: [
        'Firewall para Aplicações Web (WAF)',
        'Proteção e mitigação contra DDoS',
        'Sistemas de detecção e prevenção de intrusões',
        'Segmentação de rede e micro-segmentação'
      ],
      icon: Shield
    },
    {
      category: 'Segurança de Aplicações',
      measures: [
        'Práticas de desenvolvimento de código seguro',
        'Testes de penetração regulares',
        'Varredura e avaliação de vulnerabilidades',
        'Revisões de código de segurança e análise estática'
      ],
      icon: Bug
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Tipo II',
      description: 'Auditoria abrangente de controles de segurança',
      icon: Award,
      status: 'Certificado',
      color: 'ai-green'
    },
    {
      name: 'ISO 27001',
      description: 'Sistema de gestão de segurança da informação',
      icon: Shield,
      status: 'Certificado',
      color: 'ai-blue'
    },
    {
      name: 'Conformidade HIPAA',
      description: 'Padrões de proteção de informações de saúde',
      icon: FileCheck,
      status: 'Conforme',
      color: 'ai-green'
    },
    {
      name: 'Pronto para GDPR',
      description: 'Regulamento europeu de proteção de dados',
      icon: Globe,
      status: 'Conforme',
      color: 'ai-blue'
    },
    {
      name: 'PCI DSS Nível 1',
      description: 'Segurança de dados do setor de cartões de pagamento',
      icon: BadgeCheck,
      status: 'Certificado',
      color: 'ai-green'
    },
    {
      name: 'FedRAMP',
      description: 'Gerenciamento federal de autorização de risco',
      icon: Flag,
      status: 'Em Progresso',
      color: 'orange-500'
    }
  ];

  const securityArchitecture = [
    {
      layer: 'Camada de Apresentação',
      description: 'Firewall para aplicações web, proteção contra DDoS, terminação SSL/TLS',
      icon: Monitor,
      protections: ['WAF', 'Proteção DDoS', 'SSL/TLS', 'Limitação de Taxa']
    },
    {
      layer: 'Camada de Aplicação',
      description: 'APIs seguras, autenticação, autorização, validação de entrada',
      icon: Cpu,
      protections: ['Segurança de API', 'OAuth 2.0', 'Validação de Entrada', 'RBAC']
    },
    {
      layer: 'Camada de Dados',
      description: 'Criptografia em repouso, segurança de banco de dados, proteção de backup',
      icon: Database,
      protections: ['AES-256', 'Segurança de BD', 'Criptografia de Backup', 'Logs de Acesso']
    },
    {
      layer: 'Camada de Infraestrutura',
      description: 'Segurança de rede, endurecimento de hosts, segurança de containers',
      icon: Server,
      protections: ['Segmentação de Rede', 'Endurecimento de Hosts', 'Segurança de Containers', 'IDS/IPS']
    }
  ];

  const incidentResponse = [
    {
      phase: 'Detecção',
      description: 'Sistemas automatizados de detecção e alerta de ameaças',
      duration: '< 5 minutos',
      icon: Radar
    },
    {
      phase: 'Avaliação',
      description: 'Avaliação inicial de impacto e classificação',
      duration: '< 15 minutos',
      icon: Search
    },
    {
      phase: 'Contenção',
      description: 'Isolamento e contenção imediata da ameaça',
      duration: '< 30 minutos',
      icon: Shield
    },
    {
      phase: 'Recuperação',
      description: 'Restauração do sistema e recuperação do serviço',
      duration: '< 2 horas',
      icon: Activity
    },
    {
      phase: 'Lições Aprendidas',
      description: 'Análise pós-incidente e implementação de melhorias',
      duration: '24-48 horas',
      icon: Book
    }
  ];

  const securityMetrics = [
    { metric: '99.99%', label: 'Disponibilidade de Segurança', icon: Clock },
    { metric: '< 5 min', label: 'Detecção de Ameaças', icon: Radar },
    { metric: '256-bit', label: 'Padrão de Criptografia', icon: Lock },
    { metric: '24/7', label: 'Monitoramento de Segurança', icon: Eye }
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Segurança em{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Nível Empresarial
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                A segurança não é uma reflexão tardia - está incorporada em cada camada de nossa plataforma. 
                Da criptografia ponta a ponta ao monitoramento contínuo, protegemos seus dados com 
                os mais altos padrões do setor e{' '}
                <span className="text-ai-blue font-bold">arquitetura zero trust</span>.
              </p>

              {/* Security Metrics */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {securityMetrics.map((metric, index) => {
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

              {/* Security Pillars */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {securityPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
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
                Medidas Abrangentes de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Segurança
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Abordagem de segurança em múltiplas camadas protegendo seus dados em todos os níveis,
                desde a infraestrutura de rede até os endpoints de aplicação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-ai-dark">{category.category}</h3>
                      </div>
                      <div className="space-y-3">
                        {category.measures.map((measure, measureIndex) => (
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
                Arquitetura de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Segurança
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Arquitetura de defesa em profundidade com múltiplas camadas de segurança
                fornecendo proteção abrangente contra ameaças em evolução.
              </p>
            </div>

            <div className="space-y-8">
              {securityArchitecture.map((layer, index) => {
                const Icon = layer.icon;
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
                            <h3 className="text-2xl font-bold text-ai-dark">{layer.layer}</h3>
                            <span className="text-sm text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                              Camada {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-lg text-ai-medium leading-relaxed mb-6">
                          {layer.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-ai-dark mb-3">Controles de Segurança:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {layer.protections.map((protection, protIndex) => (
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
                Processo de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Resposta a Incidentes
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Metodologia estruturada de resposta a incidentes garantindo detecção rápida,
                contenção e recuperação de ameaças de segurança.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-ai"></div>
              
              {incidentResponse.map((phase, index) => {
                const Icon = phase.icon;
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
                          <h3 className="text-xl font-bold text-ai-dark mb-3">{phase.phase}</h3>
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
              Dúvidas sobre{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Segurança?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe de segurança está disponível para esclarecer suas dúvidas, fornecer
              informações adicionais ou discutir requisitos específicos de segurança para sua organização.
            </p>

            {/* Security Team Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Equipe de Segurança',
                  contact: 'security.info@itcygnus.com',
                  description: 'Dúvidas gerais sobre segurança',
                  icon: Shield
                },
                {
                  title: 'Resposta a Incidentes',
                  contact: '+55 (11) 5039-4877',
                  description: 'Incidentes de segurança 24/7',
                  icon: AlertTriangle
                },
                {
                  title: 'Escritório de Conformidade',
                  contact: 'dpo@itcygnus.com',
                  description: 'Solicitações de conformidade e auditoria',
                  icon: FileCheck
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
              Para preocupações urgentes de segurança, ligue para nossa linha de resposta a incidentes 24/7 no{' '}
              <a href="tel:+1-305-555-0199" className="text-ai-green hover:text-ai-green/80 transition-colors">
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
