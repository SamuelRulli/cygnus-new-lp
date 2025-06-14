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

export default function AISAUDESection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Activity, text: 'Processamento automático de sinistros' },
    { icon: Shield, text: 'Detecção de fraude em tempo real' },
    { icon: Globe, text: 'Integração com operadoras e prestadores' },
    { icon: Lock, text: 'Conformidade regulatória completa' }
  ];

  const features = [
    {
      title: 'Especialização em IA Médica',
      description: 'O AI.SAUDE foi desenvolvido com base em milhões de documentos médicos reais, treinado para entender terminologia médica, códigos de procedimentos, CID-10 e procedimentos específicos do sistema de saúde brasileiro. Nossa IA reconhece padrões médicos complexos que soluções genéricas não conseguem processar.',
      details: 'O sistema valida automaticamente a elegibilidade de procedimentos, verifica compatibilidade entre diagnósticos e tratamentos, e identifica inconsistências que podem indicar erros ou fraudes. Isso garante que apenas reembolsos legítimos sejam aprovados, protegendo sua organização de perdas financeiras.',
      icon: Brain
    },
    {
      title: 'Integração com Ecossistema de Saúde',
      description: 'Nossa solução se conecta nativamente com sistemas de operadoras, prestadores de serviços, laboratórios e farmácias, criando um fluxo automatizado de informações que elimina retrabalho e acelera aprovações.',
      details: 'Integramos com os principais sistemas hospitalares brasileiros e operadoras de saúde, garantindo implementação rápida e sem interrupções operacionais. Suporte completo para padrões TISS e integração com ANS.',
      icon: Database
    },
    {
      title: 'Detecção Avançada de Fraudes',
      description: 'Análise em tempo real de padrões de reembolso usando algoritmos de machine learning que detectam anomalias, submissões duplicadas e padrões suspeitos de cobrança antes que se tornem problemas custosos.',
      details: 'Nosso sistema de detecção de fraudes analisa comportamento de prestadores, histórico de pacientes e padrões de reembolso em múltiplos pontos de dados, sinalizando atividades potencialmente fraudulentas com 99,2% de precisão minimizando falsos positivos.',
      icon: Search
    },
    {
      title: 'Motor de Fluxo de Trabalho Automatizado',
      description: 'Roteamento inteligente e processamento de reembolsos baseado em complexidade, valor e fatores de risco. Aprovações automáticas para casos rotineiros enquanto sinaliza casos complexos para revisão humana.',
      details: 'Motor de regras de negócio configurável permite personalização de fluxos de aprovação, procedimentos de escalação e tratamento de exceções. Trilhas de auditoria completas garantem conformidade regulatória e transparência.',
      icon: Workflow
    }
  ];

  const useCases = [
    {
      title: 'Porto Seguro Saúde',
      description: 'Implementação completa do AI.SAUDE para automatização de processos de reembolso e validação de notas fiscais, garantindo maior eficiência e redução de fraudes no sistema de saúde.',
      result: 'Automatização de 98% dos processos de reembolso, economia de mais de R$ 5 milhões anuais e precisão de 99% na validação de documentos médicos.',
      logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-saude.png',
      industry: 'Operadora de Saúde',
      stats: { automation: '98%', savings: 'R$ 5M+', accuracy: '99%' }
    },
    {
      title: 'Porto Seguro Ocupacional',
      description: 'Solução AI.SAUDE implementada para gestão completa de saúde ocupacional, automatizando validações de exames, atestados e processos de reembolso relacionados à medicina do trabalho.',
      result: 'Alcançou 100% de automatização nos processos de validação ocupacional, com economia significativa de recursos e 99% de precisão na análise de documentos.',
      logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-ocupacional.png',
      industry: 'Saúde Ocupacional',
      stats: { automation: '100%', savings: 'R$ 3M+', accuracy: '99%' }
    },
    {
      title: 'Itaú Saúde',
      description: 'Implementação estratégica do AI.SAUDE para otimização de processos de reembolso médico, validação automática de notas fiscais e detecção inteligente de fraudes no sistema de saúde corporativo.',
      result: 'Automatização de 98% dos processos de reembolso, economia substancial de recursos operacionais e 99% de precisão na validação de documentos médicos.',
      logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/itau-saude.png',
      industry: 'Saúde Corporativa',
      stats: { automation: '98%', savings: 'R$ 4M+', accuracy: '99%' }
    }
  ];

  const medicalCapabilities = [
    {
      title: 'Validação de Códigos CID-10 e CBHPM',
      description: 'Validação automática de códigos de diagnóstico e procedimentos',
      icon: FileText
    },
    {
      title: 'Avaliação de Necessidade Médica',
      description: 'Avaliação por IA da adequação do tratamento',
      icon: Stethoscope
    },
    {
      title: 'Automação de Pré-Autorização',
      description: 'Processo simplificado de pré-aprovação de tratamentos',
      icon: CheckCircle
    },
    {
      title: 'Verificação de Interações Medicamentosas',
      description: 'Validação automática de combinações de prescrições',
      icon: Activity
    },
    {
      title: 'Verificação de Credenciais de Prestadores',
      description: 'Validação em tempo real de credenciais de profissionais de saúde',
      icon: Shield
    },
    {
      title: 'Regras de Adjudicação de Sinistros',
      description: 'Aplicação inteligente de regras específicas de operadoras',
      icon: Brain
    }
  ];

  const complianceFeatures = [
    'Processamento Conforme LGPD',
    // 'Certificação SOC 2 Tipo II',
    'Integração HL7 FHIR',
    'Conformidade ANS',
    'Trilhas de Auditoria em Tempo Real',
    'Criptografia 256-bit'
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
                  AI.SAUDE: Revolução no{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Processamento de Reembolsos
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Automatize completamente seu processo de reembolsos com IA médica especializada. 
                  Reduza o tempo de processamento de{' '}
                  <span className="text-ai-green font-bold">semanas para horas</span>, com{' '}
                  <span className="text-ai-blue font-bold">99,8% de precisão</span> e detecção automática de fraudes.
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
                    Solicitar Demo Médico
                    <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button> */}
                  <Button variant="ai_outline" size="xl" className="group">
                    Calcular Economia
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
                          <div className="text-xs text-ai-medium">7 Days</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-blue animate-pulse" />
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Zap className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="text-xs text-ai-medium">2 Hours</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">99.8%</div>
                        <div className="text-xs text-ai-medium">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">85%</div>
                        <div className="text-xs text-ai-medium">Faster</div>
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
                Líder no{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Setor Público Brasileiro
                </span>
              </h2>
              <p className="text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
                Somos o <span className="font-bold text-ai-blue">maior portal integrador de prefeituras do Brasil</span>, 
                com mais de <span className="font-bold text-ai-green">350 prefeituras</span> validando notas fiscais 
                e combatendo fraude no processo de reembolso através da nossa tecnologia AI.SAUDE.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-8 shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="text-3xl font-bold text-ai-blue mb-2">350+</div>
                <div className="text-lg font-semibold text-ai-dark mb-2">Prefeituras Conectadas</div>
                <p className="text-ai-medium">
                  Maior rede de integração municipal do país para validação de reembolsos médicos
                </p>
              </Card>

              <Card className="text-center p-8 shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-ai-green" />
                </div>
                <div className="text-3xl font-bold text-ai-green mb-2">99,2%</div>
                <div className="text-lg font-semibold text-ai-dark mb-2">Detecção de Fraudes</div>
                <p className="text-ai-medium">
                  Taxa de precisão na identificação de fraudes em processos de reembolso
                </p>
              </Card>

              <Card className="text-center p-8 shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="text-3xl font-bold text-ai-blue mb-2">R$ 2,8B</div>
                <div className="text-lg font-semibold text-ai-dark mb-2">Notas Validadas</div>
                <p className="text-ai-medium">
                  Volume anual de notas fiscais processadas e validadas pela nossa IA
                </p>
              </Card>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-ai-dark mb-4">
                    Transformando Seu Processo Mais Seguro com Dados de Gestão Pública
                  </h3>
                  <p className="text-ai-medium leading-relaxed mb-6">
                    Nossa plataforma AI.SAUDE revoluciona como as prefeituras brasileiras gerenciam 
                    reembolsos médicos, garantindo transparência, eficiência e combate à fraude em 
                    escala nacional.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">Integração direta com sistemas municipais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">Validação automática de notas fiscais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">Detecção inteligente de irregularidades</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">Relatórios de auditoria em tempo real</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-ai-blue/10 to-ai-green/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">27</div>
                        <div className="text-xs text-ai-medium">Estados</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">5</div>
                        <div className="text-xs text-ai-medium">Regiões</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">15M</div>
                        <div className="text-xs text-ai-medium">Cidadãos</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">24/7</div>
                        <div className="text-xs text-ai-medium">Operação</div>
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
                IA Especializada para{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Saúde
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Diferente de soluções genéricas, o AI.SAUDE foi construído do zero para entender 
                as complexidades do processamento de reembolsos médicos e regulamentações de saúde.
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
                  Conformidade Regulatória Completa
                </h3>
                <p className="text-ai-medium">
                  Construído para atender aos mais altos padrões e regulamentações da indústria de saúde
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
                Recursos Avançados de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  IA para Saúde
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Capacidades especializadas projetadas especificamente para os requisitos únicos 
                da indústria de saúde e ambiente regulatório brasileiro.
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
                Casos de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Sucesso em Saúde
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Veja como organizações de saúde estão revolucionando seu processamento de reembolsos 
                com a IA médica especializada do AI.SAUDE.
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
                          Results Achieved:
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
              Pronto para Revolucionar Seu{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Processamento de Reembolsos?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se às principais organizações de saúde que já transformaram seu processamento de reembolsos 
              com o AI.SAUDE. Comece a reduzir custos e melhorar a precisão hoje mesmo.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Activity, value: '99.8%', label: 'Processing Accuracy' },
                { icon: Clock, value: '85%', label: 'Time Reduction' },
                { icon: Shield, value: '100%', label: 'HIPAA Compliant' },
                { icon: Users, value: '1000+', label: 'Healthcare Providers' }
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
              {/* <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                Solicitar Demo Médico
                <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Calcular Economia
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Baixar Guia de Saúde
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Entre em contato com nossos especialistas em saúde pelo{' '}
              <a href="tel:+55-11-3456-7890" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877 / +1 (619) 306-9274
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
