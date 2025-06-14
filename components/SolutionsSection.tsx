'use client';

import { useEffect, useState } from 'react';
import { 
  Bot, 
  Shield, 
  Zap, 
  BarChart3, 
  Cog, 
  Users,
  Eye,
  FolderOpen,
  TrendingUp,
  Headphones,
  Brain,
  CheckCircle,
  ArrowRight,
  Heart,
  Star,
  Calendar,
  FileText,
  Search,
  Network,
  DollarSign,
  Building2,
  Stethoscope,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const solutions = [
  {
    id: 'ai-ocr',
    title: 'AI.OCR',
    subtitle: 'Reconhecimento Óptico Inteligente',
    description: 'Transforme qualquer documento em dados estruturados com 99,9% de precisão. Processe contratos, faturas, relatórios médicos e formulários 50x mais rápido que digitação manual.',
    icon: Eye,
    color: 'ai-blue',
    features: [
      'Reconhecimento de contexto inteligente',
      'Suporte a mais de 40 idiomas',
      'Processamento de documentos complexos',
      'Integração nativa com APIs robustas'
    ],
    benefits: [
      '99,9% de precisão garantida',
      '50x mais rápido que digitação manual',
      'Redução de 85% em erros de transcrição',
      'ROI positivo em menos de 3 meses'
    ],
    industries: ['Saúde', 'Financeiro', 'Governo', 'Seguros'],
    link: '/solutions/ai-ocr'
  },
  {
    id: 'ai-doc',
    title: 'AI.DOC',
    subtitle: 'Gestão Inteligente de Documentos',
    description: 'Organize, classifique e encontre qualquer documento em segundos. Nossa IA transforma o caos documental em conhecimento estruturado com busca semântica avançada.',
    icon: FolderOpen,
    color: 'ai-green',
    features: [
      'Classificação automática por IA',
      'Busca semântica instantânea',
      'Fluxos de aprovação automatizados',
      'Controle de versão e colaboração'
    ],
    benefits: [
      '85% mais rápido na busca de documentos',
      '100% de organização automática',
      'Redução de 70% no tempo de auditoria',
      'Conformidade garantida'
    ],
    industries: ['Jurídico', 'Saúde', 'Financeiro', 'Governo'],
    link: '/solutions/ai-doc'
  },
  {
    id: 'ai-saude',
    title: 'AI.SAÚDE',
    subtitle: 'Inteligência Artificial para Saúde',
    description: 'Revolucione o atendimento médico com IA especializada em saúde. Análise de glosas, processamento de prontuários e otimização de fluxos hospitalares.',
    icon: Heart,
    color: 'red-500',
    features: [
      'Análise automática de glosas médicas',
      'Automatização de fluxo reembolso',
      'Mais de 300 prefeituras integradas para validação',
    ],
    benefits: [
      'Redução de 60% no tempo de análise de glosas',
      'Aumento de 40% na recuperação de valores',
      'Melhoria de 50% na eficiência operacional',
      'Conformidade 100% com regulamentações'
    ],
    industries: ['Hospitais', 'Clínicas', 'Operadoras', 'Laboratórios'],
    link: '/solutions/ai-saude'
  },
  {
    id: 'ai-priceinsights',
    title: 'AI.PRICEINSIGHTS',
    subtitle: 'Inteligência de Preços Avançada',
    description: 'Otimize sua estratégia de preços com IA que analisa mercado, concorrência e demanda em tempo real. Maximize receita e competitividade.',
    icon: DollarSign,
    color: 'ai-green',
    features: [
      'Análise de mercado em tempo real',
      'Monitoramento de concorrência',
      'Otimização dinâmica de preços',
      'Previsão de demanda inteligente'
    ],
    benefits: [
      'Aumento de 25% na margem de lucro',
      'Redução de 40% no tempo de análise',
      'Melhoria de 30% na competitividade',
      'ROI de 300% em 6 meses'
    ],
    industries: ['Saúde'],
    link: '/solutions/ai-priceinsights'
  },
  {
    id: 'ai-agents',
    title: 'AI.AGENTS',
    subtitle: 'Agentes Inteligentes Autônomos',
    description: 'Agentes de IA que executam tarefas complexas de forma autônoma. Automatize processos de negócio com inteligência artificial conversacional.',
    icon: Bot,
    color: 'ai-blue',
    features: [
      'Agentes conversacionais inteligentes',
      'Automação de processos complexos',
      'Integração com sistemas empresariais',
      'Aprendizado contínuo e adaptação'
    ],
    benefits: [
      'Redução de 70% em tarefas manuais',
      'Disponibilidade 24/7 sem interrupções',
      'Melhoria de 60% na experiência do cliente',
      'Economia de 50% em custos operacionais'
    ],
    industries: ['Saúde','Financeiro', 'Tecnologia', 'Governo'],
    link: '/solutions/ai-agents'
  },
  {
    id: 'echo-ai-hub',
    title: 'ECHO AI HUB',
    subtitle: 'Plataforma Unificada de IA',
    description: 'Centralize todas as suas soluções de IA em uma plataforma única. Gerencie, monitore e otimize todos os seus projetos de inteligência artificial.',
    icon: Network,
    color: 'purple-500',
    features: [
      'Dashboard unificado de IA',
      'Gerenciamento centralizado de modelos',
      'Monitoramento em tempo real',
      'Orquestração de fluxos de trabalho'
    ],
    benefits: [
      'Visibilidade completa de projetos de IA',
      'Redução de 50% no tempo de deployment',
      'Otimização de recursos e custos',
      'Governança e compliance centralizados'
    ],
    industries: ['Empresas', 'Tecnologia', 'Consultoria', 'Governo'],
    link: '/solutions/echo-ai-hub'
  }
];

const trustIndicators = [
  { icon: Users, value: '5+', label: 'Empresas Atendidas' },
  { icon: CheckCircle, value: '99.9%', label: 'Precisão Garantida' },
  { icon: TrendingUp, value: '300%', label: 'ROI Médio' },
  { icon: Shield, value: '100%', label: 'Conformidade' }
];

export default function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.industries.some(industry => 
        industry.toLowerCase().includes(activeTab.toLowerCase())
      ));

  return (
    <section id="solutions-section" className="py-20 bg-gradient-to-br from-white via-ai-light/10 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl lg:text-5xl font-bold text-ai-dark mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossas{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              Plataformas de IA
            </span>
          </h2>
          <p 
            className={`text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Descubra nossa suíte completa de soluções de inteligência artificial, 
            projetadas para transformar cada aspecto do seu negócio com tecnologia de ponta.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {['all', 'saúde', 'financeiro', 'tecnologia', 'governo'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-ai text-white shadow-lg'
                  : 'bg-white text-ai-medium hover:bg-ai-light/50 border border-ai-light'
              }`}
            >
              {tab === 'all' ? 'Todas as Soluções' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredSolutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <Card 
                key={solution.id}
                className={`group shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${solution.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${solution.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-ai-dark mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-ai-medium font-medium">
                      {solution.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-ai-medium leading-relaxed mb-6 text-center">
                    {solution.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-ai-dark text-sm mb-3">Recursos Principais:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-ai-medium">
                          <CheckCircle className="w-4 h-4 text-ai-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-bold text-ai-dark text-sm mb-3">Benefícios:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className={`text-center p-2 bg-${solution.color}/10 rounded-lg`}>
                          <div className={`text-lg font-bold text-${solution.color} mb-1`}>
                            {benefit.split(' ')[0]}
                          </div>
                          <div className="text-xs text-ai-medium">
                            {benefit.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <h4 className="font-bold text-ai-dark text-sm mb-3">Setores:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.slice(0, 3).map((industry, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-ai-light/50 text-ai-medium px-2 py-1 rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={solution.link}>
                    <Button 
                      variant="ai_outline" 
                      className="w-full group-hover:bg-gradient-ai group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="text-3xl font-bold text-ai-dark mb-2">{indicator.value}</div>
                <div className="text-ai-medium font-medium">{indicator.label}</div>
              </div>
            );
          })}
        </div>

        {/* Client Carousel Section */}
        <div className="mt-24 py-12 bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-3xl overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-ai-dark mb-12 text-center">
              Empresas que <span className="bg-gradient-ai bg-clip-text text-transparent">confiam</span> em nós
            </h3>
            
            <div className="relative overflow-hidden">
              {/* Carousel Container */}
              <div className="relative h-40">
                {/* Carousel Track */}
                <div className="flex absolute top-0 left-0 client-carousel items-center">
                  {[
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/abastece-ai.png',
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/itau-saude.png',
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-ocupacional.png',
                    'https://storage.googleapis.com/agentpro-cdn/cygnus/customers/porto-seguro-saude.png',
                  ].flatMap((logo, i) => [logo, logo]).map((logo, index) => (
                    <div key={index} className="flex-shrink-0 px-8 w-64">
                      <img 
                        src={logo}
                        alt="Client logo"
                        className="h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-ai-dark mb-6">
            Pronto para Transformar Seu Negócio com{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              Inteligência Artificial?
            </span>
          </h3>
          <p className="text-lg text-ai-medium mb-8 max-w-3xl mx-auto">
            Descubra como nossas soluções de IA podem revolucionar suas operações, 
            aumentar eficiência e impulsionar resultados extraordinários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                Agendar Demonstração
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {/* <Link href="/roi-calculator">
              <Button variant="ai_outline" size="xl" className="group">
                Calcular ROI
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* CSS for carousel animation */}
      <style jsx>{`
        .client-carousel {
          animation: scroll 30s linear infinite;
          width: calc(256px * 8); /* 8 logos * 256px width */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
