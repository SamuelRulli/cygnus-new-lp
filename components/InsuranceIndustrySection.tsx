'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  Activity,
  FileText,
  Brain,
  Cpu,
  Database,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Lock,
  Globe,
  Eye,
  Zap,
  Calendar,
  UserCheck,
  Clipboard,
  SearchCheck,
  BookOpen,
  ShieldCheck,
  Scale,
  Receipt,
  ChartBar,
  Settings,
  Network,
  Fingerprint,
  AlertCircle,
  TrendingDown,
  Car,
  Home,
  HeartHandshake,
  Building,
  Plane,
  Truck,
  Factory,
  Briefcase,
  Calculator,
  FileSearch,
  BadgeCheck,
  ScanLine,
  PieChart
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InsuranceIndustrySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: FileText, text: 'Processamento automático de sinistros' },
    { icon: Eye, text: 'Detecção avançada de fraudes' },
    { icon: BarChart3, text: 'Subscrição de risco automatizada' },
    { icon: Network, text: 'Integração com corretores e provedores' }
  ];

  const insuranceSolutions = [
    {
      title: 'Processamento Inteligente de Sinistros',
      description: 'Nossa IA processa sinistros desde a primeira notificação até a liquidação, validando automaticamente coberturas, avaliando danos e detectando possíveis fraudes. O sistema compreende termos da apólice, exclusões e limites de cobertura.',
      details: 'A avaliação avançada de danos usa visão computacional e sistemas especialistas para avaliar danos a propriedades, acidentes veiculares e sinistros de responsabilidade. A integração com redes de reparos e provedores médicos permite estimativa de custos automatizada e recomendações de liquidação.',
      icon: FileText,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    },
    {
      title: 'Detecção Avançada de Fraudes',
      description: 'O AI.DATA analisa padrões de sinistros, comportamento de segurados e fontes de dados externas para identificar esquemas sofisticados de fraude. Nosso sistema detecta acidentes simulados, sinistros inflacionados e quadrilhas de fraude antes que ocorram perdas.',
      details: 'Modelos de machine learning treinados em milhões de casos de fraude identificam padrões suspeitos incluindo frequência de sinistros, anomalias de tempo e conexões entre reclamantes, provedores e advogados.',
      icon: Eye,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    },
    {
      title: 'Subscrição de Risco Automatizada',
      description: 'Transforme a subscrição com IA que avalia fatores de risco em múltiplas fontes de dados, desde aplicações tradicionais até imagens de satélite e dados IoT. Nosso sistema fornece avaliação de risco consistente e precisa em escala.',
      details: 'A pontuação de risco em tempo real integra dados de propriedade, informações de crédito, histórico de sinistros e fatores de risco externos. Diretrizes automatizadas de subscrição garantem aplicação consistente de modelos de precificação e critérios de seleção de risco.',
      icon: BarChart3,
      product: 'AI.DOC + AI.DATA',
      link: '/solutions/ai-doc'
    }
  ];

  const useCases = [
    {
      title: 'Grande Seguradora de Bens e Danos',
      description: 'Uma das 10 maiores seguradoras de P&C implementou nossa plataforma de IA para processamento de sinistros automotivos, avaliação de danos a propriedades e detecção de fraudes. O sistema processa mais de 100.000 sinistros mensalmente em múltiplas linhas de negócio.',
      result: 'Reduziu o tempo de processamento de sinistros de 15 dias para 3 horas em casos simples. Detectou $45M em sinistros fraudulentos anualmente enquanto melhorava a satisfação do cliente em 35% através de liquidações mais rápidas.',
      icon: Car,
      industry: 'Bens e Danos',
      stats: { processing_time: '3 horas', fraud_detected: '$45M', satisfaction: '35%' }
    },
    {
      title: 'Transformação Digital em Seguros de Vida',
      description: 'Uma seguradora de vida modernizou sua subscrição e sinistros com análise de prontuários médicos por IA, avaliação de risco e verificação de beneficiários. O sistema processa automaticamente sinistros complexos de vida e invalidez.',
      result: 'Acelerou decisões de subscrição de 6 semanas para 48 horas mantendo 99,5% de precisão. Reduziu custos operacionais em 40% e melhorou as taxas de emissão de apólices em 25%.',
      icon: HeartHandshake,
      industry: 'Seguros de Vida',
      stats: { underwriting: '48 horas', cost_reduction: '40%', issuance: '25%' }
    },
    {
      title: 'Inovação em Seguros Comerciais',
      description: 'Uma seguradora de linhas comerciais usa nossa IA para avaliação complexa de riscos, administração de apólices e sinistros de grande valor. A plataforma gerencia desde seguros trabalhistas até coberturas de responsabilidade cibernética.',
      result: 'Melhorou a precisão da subscrição em 30% enquanto reduzia o tempo de resposta para cotações em 60%. A seleção aprimorada de riscos resultou em melhoria de 20% nos índices de sinistralidade nas linhas comerciais.',
      icon: Building,
      industry: 'Seguros Comerciais',
      stats: { accuracy: '30%', turnaround: '60%', loss_ratio: '20%' }
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '15 days', label: 'Average claims processing time' },
    { icon: DollarSign, stat: '$40B', label: 'Annual insurance fraud losses' },
    { icon: AlertTriangle, stat: '45%', label: 'Manual underwriting processes' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Deep understanding of insurance terminology' },
    { icon: CheckCircle, benefit: 'Sophisticated fraud pattern recognition' },
    { icon: CheckCircle, benefit: 'Automated policy and coverage validation' },
    { icon: CheckCircle, benefit: 'Seamless broker and provider integration' }
  ];

  const insuranceCapabilities = [
    {
      title: 'Recebimento e Processamento de Sinistros',
      description: 'Notificação automática de sinistro e roteamento de reclamações',
      icon: FileText
    },
    {
      title: 'Detecção de Fraudes',
      description: 'Análise em tempo real de padrões suspeitos de sinistros',
      icon: Eye
    },
    {
      title: 'Avaliação de Risco',
      description: 'Subscrição abrangente e avaliação de risco',
      icon: BarChart3
    },
    {
      title: 'Administração de Apólices',
      description: 'Gestão e atualizações automatizadas de apólices',
      icon: Clipboard
    },
    {
      title: 'Avaliação de Danos',
      description: 'Avaliação de danos a propriedades e veículos por IA',
      icon: ScanLine
    },
    {
      title: 'Análise de Prontuários Médicos',
      description: 'Processamento inteligente de documentação médica',
      icon: FileSearch
    },
    {
      title: 'Gestão de Sub-Rogação',
      description: 'Processos automatizados de recuperação e sub-rogação',
      icon: Target
    },
    {
      title: 'Conformidade Regulatória',
      description: 'Conformidade automatizada com regulamentações de seguros',
      icon: BadgeCheck
    },
    {
      title: 'Análise Atuarial',
      description: 'Cálculos avançados de precificação e reservas',
      icon: Calculator
    }
  ];

  const insuranceLines = [
    { line: 'Seguro Automóvel', icon: Car, description: 'Processamento de sinistros e subscrição automotivos' },
    { line: 'Seguro de Propriedade', icon: Home, description: 'Avaliação de danos e processamento de propriedades' },
    { line: 'Seguro de Vida', icon: HeartHandshake, description: 'Automação de sinistros de vida e invalidez' },
    { line: 'Seguro de Acidentes de Trabalho', icon: Briefcase, description: 'Gestão de sinistros e casos de acidentes' },
    { line: 'Linhas Comerciais', icon: Building, description: 'Avaliação de riscos comerciais complexos' },
    { line: 'Seguros Especializados', icon: Plane, description: 'Coberturas para aviação, marítimas e especializadas' }
  ];

  const complianceFeatures = [
    'NAIC Compliant',
    'State Regulatory',
    'SOX Compliant',
    'GDPR Ready',
    'ISO 27001',
    'Audit Ready'
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-blue-600 to-ai-green w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  IA Especializada para {' '}
                  <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                    Seguradoras e Corretores
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Revolucione o processamento de sinistros, subscrição de risco e atendimento ao segurado com IA 
                  que compreende apólices, detecta fraudes e acelera aprovações.{' '}
                  <span className="text-blue-600 font-bold">Eficiência e precisão</span> para o mercado segurador.
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
                <Link href="/demo">
                  <Button variant="ai_primary" size="xl" className="group shadow-2xl bg-blue-600 hover:bg-blue-700">
                    Solicitar Demonstração
                    <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
                {/* <Button variant="ai_outline" size="xl" className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Análise de Sinistros
                  <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button> */}
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative">
                <div 
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                >
                  {/* Insurance Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Insurance Icons Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Shield, color: 'text-blue-600' },
                        { icon: Car, color: 'text-ai-green' },
                        { icon: Home, color: 'text-blue-600' },
                        { icon: HeartHandshake, color: 'text-ai-green' },
                        { icon: Eye, color: 'text-blue-600' },
                        { icon: FileText, color: 'text-ai-green' },
                        { icon: BarChart3, color: 'text-blue-600' },
                        { icon: Calculator, color: 'text-ai-green' },
                        { icon: BadgeCheck, color: 'text-blue-600' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50"
                          >
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                    {/* Claims Process Flow */}
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-center">
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <AlertCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-xs text-ai-medium">Sinistro Registrado</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-600 animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-ai-green" />
                          </div>
                          <div className="text-xs text-ai-medium">Análise por IA</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-xs text-ai-medium">Liquidado</div>
                        </div>
                      </div>
                    </div>

                    {/* Insurance Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">1h</div>
                <div className="text-xs text-ai-medium">Processamento</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-ai-green mb-1">95%</div>
                <div className="text-xs text-ai-medium">Detecção de Fraude</div>
                      </div>
                    </div>

                    {/* Floating Shield Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Market Challenges Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">Entendimento Profundo do Mercado Segurador</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O setor de seguros opera com margens apertadas e riscos complexos, onde cada decisão de subscrição
                    ou sinistro impacta diretamente a lucratividade. Seguradoras processam milhões de apólices
                    e sinistros anualmente, cada um exigindo análise detalhada de risco, validação de cobertura e possível detecção de fraudes.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    A complexidade dos produtos de seguro, desde seguros de vida até coberturas empresariais especializadas,
                    requer profundo conhecimento de termos técnicos, regulamentações específicas e padrões de risco que
                    soluções genéricas simplesmente não conseguem processar adequadamente.
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
                              <div className="text-sm text-red-700">
                                {item.label === 'Average claims processing time' ? 'Tempo médio de processamento' :
                                 item.label === 'Annual insurance fraud losses' ? 'Perdas anuais por fraudes' :
                                 'Processos manuais de subscrição'}
                              </div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Solução Especializada</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O AI.DATA foi desenvolvido especificamente para o mercado segurador, treinado em milhões de apólices,
                    sinistros e documentos do setor. Nossa IA compreende a linguagem técnica de seguros, identifica
                    padrões sofisticados de fraude e acelera processos de subscrição mantendo a precisão
                    necessária para proteger a lucratividade das seguradoras.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O sistema se integra com corretores, prestadores de serviços e redes credenciadas, criando
                    um ecossistema automatizado que beneficia todos os participantes da cadeia de valor do seguro.
                  </p>

                  {/* Solution Benefits */}
                  <div className="space-y-3">
                    {solutionBenefits.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-ai-green/10 rounded-lg">
                          <Icon className="w-5 h-5 text-ai-green" />
                          <span className="text-ai-dark font-medium">
                            {item.benefit === 'Deep understanding of insurance terminology' ? 'Compreensão profunda da terminologia de seguros' :
                             item.benefit === 'Sophisticated fraud pattern recognition' ? 'Reconhecimento sofisticado de padrões de fraude' :
                             item.benefit === 'Automated policy and coverage validation' ? 'Validação automatizada de apólices e coberturas' :
                             'Integração perfeita com corretores e provedores'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Capacidades Avançadas de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  IA para Seguros
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Capacidades abrangentes de IA projetadas especificamente para operações de seguros,
                desde processamento de sinistros até avaliação de risco e detecção de fraudes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {insuranceCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
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

            {/* Insurance Lines Coverage */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Cobertura de Linhas de Seguro
                </h3>
                <p className="text-ai-medium">
                  Soluções abrangentes de IA para todas as principais linhas de produtos de seguros
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {insuranceLines.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.line}</div>
                      <div className="text-xs text-ai-medium">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance Features */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Conformidade e Segurança em Seguros
                </h3>
                <p className="text-ai-medium">
                  Desenvolvido para atender aos padrões do setor e requisitos regulatórios
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-3 bg-ai-green/10 rounded-lg">
                    <BadgeCheck className="w-5 h-5 text-ai-green mx-auto mb-2" />
                    <div className="text-sm font-medium text-ai-dark">{feature}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* Insurance Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Soluções de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  IA para Seguros
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Soluções especializadas em IA projetadas especificamente para operações de seguros,
                desde processamento de sinistros até subscrição de risco e detecção de fraudes.
              </p>
            </div>

            <div className="space-y-12">
              {insuranceSolutions.map((solution, index) => {
                const Icon = solution.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content */}
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-ai-dark">{solution.title}</h3>
                            <span className="text-sm text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                              {solution.product}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-lg text-ai-medium leading-relaxed mb-6">
                          {solution.description}
                        </p>
                        
                        <p className="text-ai-medium leading-relaxed mb-6">
                          {solution.details}
                        </p>

                        <Link href={solution.link}>
                          <Button variant="ai_outline" className="group">
                            Saiba Mais Sobre {solution.product}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>

                      {/* Visual */}
                      <div className={`bg-gradient-to-br from-blue-50 to-green-50 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-ai-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-blue-200 rounded w-full"></div>
                              <div className="h-3 bg-green-200 rounded w-3/4"></div>
                              <div className="h-3 bg-blue-200 rounded w-1/2"></div>
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

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600 to-ai-green rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Pronto para Transformar suas{' '}
              <span className="bg-gradient-to-r from-blue-400 to-ai-green bg-clip-text text-transparent">
                Operações de Seguros?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se às principais seguradoras que já revolucionaram seu processamento de sinistros 
              e subscrição com nossas soluções especializadas de IA. Comece a melhorar sua lucratividade hoje.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: FileText, value: '1 hrs', label: 'Processamento de Sinistros' },
                { icon: Eye, value: '95%', label: 'Detecção de Fraudes' },
                { icon: BarChart3, value: '30%', label: 'Subscrição Mais Rápida' },
                { icon: Users, value: '200+', label: 'Clientes de Seguros' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-blue-400" />
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
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl group"
                >
                  Solicitar Demonstração
                  <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              {/* <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Análise de Sinistros
                <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Baixar Guia de Seguros
                <Download className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Fale com nossos especialistas em seguros pelo{' '}
              <a href="tel:+1-800-123-4567" className="text-blue-400 hover:text-blue-300 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              or{' '}
              <a href="mailto:contact@itcygnus.com" className="text-blue-400 hover:text-blue-300 transition-colors">
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
