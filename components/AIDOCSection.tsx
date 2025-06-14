'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FolderOpen,
  CheckCircle,
  ArrowRight,
  Play,
  Search,
  Workflow,
  FileText,
  Shield,
  Clock,
  Brain,
  Cpu,
  Database,
  Hospital,
  Building2,
  Landmark,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Archive,
  GitBranch,
  Zap,
  Target,
  BookOpen,
  Settings,
  Network
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIDOCSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Brain, text: 'Classificação automática por IA' },
    { icon: Search, text: 'Busca semântica instantânea' },
    { icon: Workflow, text: 'Fluxos de aprovação automatizados' },
    { icon: Archive, text: 'Trilha de auditoria e versionamento completos' }
  ];

  const features = [
    {
      title: 'Classificação Inteligente de Documentos',
      description: 'Nossa IA categoriza automaticamente documentos por tipo, conteúdo, importância e contexto empresarial. O sistema entende relacionamentos entre documentos e cria taxonomias inteligentes que evoluem com suas necessidades de negócio.',
      details: 'Algoritmos de machine learning analisam estrutura de documentos, padrões de conteúdo e metadados para fornecer classificação precisa. O sistema aprende com correções e feedback dos usuários, melhorando continuamente a precisão da classificação.',
      icon: Brain
    },
    {
      title: 'Busca Semântica Avançada',
      description: 'Encontre qualquer documento usando consultas em linguagem natural, mesmo quando você não lembra das palavras-chave exatas. Nossa busca semântica entende contexto, sinônimos e terminologia empresarial específica do seu setor.',
      details: 'O mecanismo de busca usa processamento de linguagem natural para entender a intenção do usuário, pesquisando em conteúdo, metadados e relacionamentos entre documentos. Resultados são classificados por relevância, recência e padrões de comportamento do usuário.',
      icon: Search
    },
    {
      title: 'Motor de Fluxo de Trabalho Automatizado',
      description: 'Simplifique processos de aprovação de documentos com roteamento inteligente baseado em conteúdo, limites de valor e regras de negócio. Notificações automáticas e escalações garantem que nada passe despercebido.',
      details: 'Templates de fluxo de trabalho configuráveis se adaptam aos seus processos de negócio, com lógica condicional, aprovações paralelas e integração com sistemas externos. Trilhas de auditoria completas rastreiam cada ação e ponto de decisão.',
      icon: Workflow
    },
    {
      title: 'Controle de Versão e Colaboração',
      description: 'Mantenha gestão completa do ciclo de vida de documentos com versionamento automático, rastreamento de mudanças e capacidades de edição colaborativa. Garanta que equipes sempre trabalhem com as versões aprovadas mais recentes.',
      details: 'Controle de versão avançado previne conflitos de documentos mantendo históricos detalhados de mudanças. Ferramentas de colaboração em tempo real permitem compartilhamento e edição seguros com controles granulares de permissão.',
      icon: GitBranch
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Documentation Management',
      description: 'Hospitals and medical practices organize patient records, medical protocols, and compliance documents with automatic classification and instant retrieval. HIPAA-compliant workflows ensure secure handling of sensitive information.',
      result: 'A medical center reduced document search time by 85% and improved compliance audit preparation from weeks to hours, while ensuring 100% HIPAA compliance across 50,000+ patient documents.',
      icon: Hospital,
      industry: 'Healthcare'
    },
    {
      title: 'Financial Services Compliance',
      description: 'Banks and financial institutions manage regulatory documents, client files, and internal policies with automated compliance workflows. Risk-based classification ensures critical documents receive appropriate oversight.',
      result: 'A regional bank automated 90% of compliance document processing, reduced regulatory preparation time by 70%, and achieved 100% audit readiness across all regulatory requirements.',
      icon: Building2,
      industry: 'Financial Services'
    },
    {
      title: 'Legal Document Management',
      description: 'Law firms and legal departments organize contracts, case files, and legal research with intelligent categorization and matter-based workflows. Advanced search capabilities enable rapid case preparation and research.',
      result: 'A law firm increased billable time by 30% through automated document organization, reduced case preparation time by 60%, and improved client service with instant document access.',
      icon: Landmark,
      industry: 'Legal Services'
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '30%', label: 'Tempo gasto procurando documentos' },
    { icon: TrendingUp, stat: '40%', label: 'Aumento no volume de documentos anualmente' },
    { icon: AlertTriangle, stat: '60%', label: 'Trabalho feito com versões desatualizadas' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Classificação automática e marcação de documentos' },
    { icon: CheckCircle, benefit: 'Relacionamentos inteligentes baseados em conteúdo' },
    { icon: CheckCircle, benefit: 'Aprendizado contínuo e melhoria' },
    { icon: CheckCircle, benefit: 'Integração perfeita com sistemas existentes' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                    <FolderOpen className="w-8 h-8 text-ai-green" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  AI.DOC: Gestão Inteligente de{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Documentos Empresariais
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Organize, classifique e encontre qualquer documento em segundos. Nossa IA transforma 
                  o caos documental em conhecimento estruturado, com{' '}
                  <span className="text-ai-green font-bold">busca semântica avançada</span> e{' '}
                  <span className="text-ai-blue font-bold">fluxo de trabalho automatizado</span>.
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
                  {/* <Button 
                    variant="ai_primary" 
                    size="xl" 
                    className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                    onClick={() => window.location.href = '/demo'}
                  >
                    Iniciar Teste Gratuito
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                  <Button 
                    variant="ai_outline" size="xl"
                    className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                    onClick={() => window.location.href = '/demo'}
                  >
                    Agendar Demo
                    <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                  {/* Document Management Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Document Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[...Array(9)].map((_, i) => (
                        <div 
                          key={i}
                          className={`aspect-square rounded-lg p-3 flex items-center justify-center ${
                            i % 3 === 0 ? 'bg-ai-green/10' : i % 3 === 1 ? 'bg-ai-blue/10' : 'bg-ai-green/10'
                          }`}
                        >
                          <FileText className={`w-6 h-6 ${
                            i % 3 === 0 ? 'text-ai-green' : i % 3 === 1 ? 'text-ai-blue' : 'text-ai-green'
                          }`} />
                        </div>
                      ))}
                    </div>

                    {/* Search Bar */}
                    <div className="bg-ai-dark/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-ai-blue" />
                        <div className="flex-1 h-2 bg-ai-blue/20 rounded animate-pulse-slow"></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">85%</div>
                        <div className="text-xs text-ai-medium">Faster Search</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">100%</div>
                        <div className="text-xs text-ai-medium">Organized</div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-blue/30 rounded-full animate-pulse-slow"></div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">Caos Documental Que Paralisa Empresas</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Sua organização tem milhares de documentos espalhados por diferentes sistemas, 
                    pastas desorganizadas e emails perdidos. Funcionários gastam 30% do tempo procurando 
                    informações, versões desatualizadas circulam causando erros, e documentos críticos 
                    simplesmente desaparecem quando você mais precisa deles.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Sistemas tradicionais de gestão documental são rígidos, exigem classificação manual 
                    e falham na busca quando você mais precisa. Conformidade e auditoria se tornam pesadelos 
                    quando documentos não são encontrados ou estão desorganizados.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Revolução na Gestão Documental</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O AI.DOC usa inteligência artificial para entender o conteúdo de cada documento, classificando 
                    automaticamente por tipo, assunto, importância e relacionamentos. Nossa busca semântica encontra 
                    documentos mesmo quando você não lembra das palavras-chave exatas.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O sistema aprende com o comportamento da sua equipe, sugerindo classificações, identificando 
                    duplicatas e criando conexões inteligentes entre documentos relacionados. Fluxos de trabalho 
                    automatizados garantem que documentos sigam processos corretos de aprovação e revisão.
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

        {/* Features & Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Recursos Avançados de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Gestão Documental
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Descubra os recursos inteligentes que transformam o caos documental em inteligência 
                de negócios organizada, pesquisável e acionável.
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
                          <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-green" />
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
                      <div className={`bg-gradient-to-br from-ai-green/5 to-ai-blue/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-ai-green/20 rounded w-full"></div>
                              <div className="h-3 bg-ai-blue/20 rounded w-3/4"></div>
                              <div className="h-3 bg-ai-green/20 rounded w-1/2"></div>
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Pronto para Acabar com o{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                Caos Documental para Sempre?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se a milhares de organizações que transformaram sua gestão documental 
              com o AI.DOC. Comece a organizar, encontrar e colaborar de forma mais eficaz hoje mesmo.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Search, value: '85%', label: 'Busca mais rápida' },
                { icon: Users, value: '10+', label: 'Empresas organizadas' },
                { icon: Clock, value: '7 Dias', label: 'Teste gratuito' },
                { icon: Shield, value: '100%', label: 'Conformidade garantida' }
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
                Iniciar Teste Gratuito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Agendar Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Baixar Guia
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Entre em contato com nossos especialistas em gestão documental pelo{' '}
              <a href="tel:+55-11-3456-7890" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877
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
