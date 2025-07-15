'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Users,
  MessageSquare,
  Brain,
  Cpu,
  Clock,
  Target,
  Shield,
  Globe,
  Building2,
  ShoppingCart,
  Headphones,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Activity,
  Settings,
  Workflow,
  BarChart3,
  Calendar,
  Search,
  FileText,
  Database,
  Smartphone,
  Monitor,
  Mic,
  Video,
  Heart,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIAGENTSSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Clock, text: 'Atendimento automatizado 24/7' },
    { icon: Cpu, text: 'Processamento autônomo de tarefas' },
    { icon: TrendingUp, text: 'Escalabilidade infinita' },
    { icon: Brain, text: 'Aprendizado contínuo' }
  ];

  const features = [
      {
        title: 'Excelência em IA Conversacional',
        description: 'Nossos agentes de IA compreendem o contexto, mantêm o fluxo da conversa e oferecem interações com qualidade humana por voz, chat e canais digitais. Eles lidam com solicitações complexas com empatia e precisão, escalando apenas quando necessário.',
        details: 'O processamento avançado de linguagem natural permite que os agentes entendam intenção, emoção e contexto. Conversas de múltiplas etapas mantêm o estado e a coerência, enquanto a análise de sentimento garante respostas apropriadas.',
        icon: MessageSquare
      },
      {
        title: 'Execução Autônoma de Tarefas',
        description: 'Os agentes de IA não apenas respondem perguntas — eles executam fluxos de trabalho complexos, tomam decisões com base em regras de negócio e realizam processos em várias etapas sem intervenção humana. De processamento de pedidos à gestão de contas.',
        details: 'O motor inteligente de workflows executa processos de negócio automaticamente, integrando-se com CRM, ERP e outros sistemas. Árvores de decisão e lógica empresarial garantem consistência e precisão na execução das tarefas.',
        icon: Workflow
      },
      {
        title: 'Integração Omnicanal',
        description: 'Implemente agentes em todos os pontos de contato com o cliente — chat no site, apps móveis, redes sociais, sistemas telefônicos e e-mail. A inteligência unificada garante uma experiência consistente, independentemente do canal.',
        details: 'Uma única inteligência de agente opera em todos os canais, mantendo o histórico das conversas e o contexto do cliente. Transições suaves entre canais e com agentes humanos, quando necessário.',
        icon: Globe
      },
      {
        title: 'Mecanismo de Aprendizado Contínuo',
        description: 'Os agentes evoluem automaticamente a cada interação, aprendendo com feedbacks dos clientes, resoluções bem-sucedidas e correções feitas por agentes humanos. O desempenho melhora com o tempo, sem necessidade de reeducação manual.',
        details: 'Algoritmos de machine learning analisam padrões de interação, taxas de sucesso e satisfação do cliente para aprimorar continuamente as respostas. Atualizações automáticas mantêm os agentes alinhados às mudanças do negócio.',
        icon: Brain
      }
    ];


  const useCases = [
    {
      title: 'Revolução no Atendimento E-commerce',
      description: 'Um grande varejista online implantou agentes de IA para lidar com consultas de clientes, rastreamento de pedidos, devoluções e recomendações de produtos. Os agentes processam pedidos, resolvem problemas de envio e fornecem assistência personalizada de compras 24/7.',
      result: 'Alcançou 87% de satisfação do cliente enquanto reduziu custos de suporte em 65%. Agentes lidam com 90% das consultas automaticamente, com tempo médio de resolução de 2 minutos. Aumentou vendas através de recomendações alimentadas por IA.',
      icon: ShoppingCart,
      industry: 'E-commerce',
      stats: { satisfaction: '87%', cost_reduction: '65%', automation: '90%' }
    },
    {
      title: 'Engajamento de Pacientes na Saúde',
      description: 'Uma rede de saúde usa agentes de IA para agendamento de consultas, renovação de receitas, entrega de resultados de exames e consultas básicas de saúde. Os agentes se integram com sistemas EMR e fornecem interações de pacientes compatíveis com HIPAA.',
      result: 'Reduziu o tempo de agendamento de consultas em 80% enquanto melhorou as pontuações de satisfação do paciente em 35%. Agentes lidam com 75% das consultas de rotina, liberando equipe médica para cuidados críticos de pacientes.',
      icon: Heart,
      industry: 'Saúde',
      stats: { time_reduction: '80%', satisfaction: '35%', automation: '75%' }
    },
    {
      title: 'Automação de Serviços Financeiros',
      description: 'Um banco regional implantou agentes de IA para consultas de conta, suporte a transações, solicitações de empréstimo e alertas de fraude. Os agentes fornecem assistência bancária segura e personalizada mantendo conformidade regulatória.',
      result: 'Aumentou o engajamento do cliente em 45% enquanto reduziu custos operacionais em 50%. Agentes processam 85% das consultas bancárias de rotina com 99,2% de precisão na detecção de fraudes.',
      icon: Building2,
      industry: 'Serviços Financeiros',
      stats: { engagement: '45%', cost_savings: '50%', accuracy: '99.2%' }
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '24/7', label: 'Expectativa dos clientes por disponibilidade' },
    { icon: DollarSign, stat: '70%', label: 'Dos custos de atendimento são mão de obra' },
    { icon: AlertTriangle, stat: '60%', label: 'Dos clientes esperam respostas imediatas' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Capacidades conversacionais semelhantes às humanas' },
    { icon: CheckCircle, benefit: 'Tomada de decisão autônoma' },
    { icon: CheckCircle, benefit: 'Implantação multicanal' },
    { icon: CheckCircle, benefit: 'Tecnologia de IA que se auto-aprimora' }
  ];

  const agentCapabilities = [
    {
      title: 'Conversação Natural',
      description: 'Diálogo semelhante ao humano com compreensão de contexto',
      icon: MessageSquare
    },
    {
      title: 'Automação de Tarefas',
      description: 'Execute fluxos de trabalho complexos de múltiplas etapas automaticamente',
      icon: Settings
    },
    {
      title: 'Tomada de Decisão',
      description: 'Tome decisões inteligentes baseadas em regras de negócio',
      icon: Brain
    },
    {
      title: 'Integração de Sistemas',
      description: 'Conecte com CRM, ERP e sistemas empresariais',
      icon: Database
    },
    {
      title: 'Voz e Chat',
      description: 'Suporte a interações por voz e texto',
      icon: Mic
    },
    {
      title: 'Analytics e Insights',
      description: 'Performance em tempo real e insights de clientes',
      icon: BarChart3
    }
  ];

  const deploymentChannels = [
    { channel: 'Chat do Site', icon: Monitor, description: 'Widgets de chat incorporados' },
    { channel: 'Apps Mobile', icon: Smartphone, description: 'Assistência no aplicativo' },
    { channel: 'Sistemas de Voz', icon: Mic, description: 'Telefone e assistentes de voz' },
    { channel: 'Redes Sociais', icon: Globe, description: 'Facebook, Twitter, WhatsApp' },
    { channel: 'Suporte por Email', icon: Mail, description: 'Respostas automáticas por email' },
    { channel: 'Videochamadas', icon: Video, description: 'Assistentes virtuais por vídeo' }
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
                    <Bot className="w-8 h-8 text-ai-blue" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  AI.AGENTS: Assistentes Virtuais que{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Realmente Funcionam
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Implante agentes de IA autônomos que executam tarefas complexas, tomam 
                  decisões inteligentes e interagem naturalmente com clientes e sistemas, operando{' '}
                  <span className="text-ai-green font-bold">24/7 sem supervisão</span>.
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
                    Criar Meu Agente
                    <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button> */}
                  <a href="tel:+15551234567">
                    <Button variant="ai_outline" size="xl" className="group">
                      Ver Agentes em Ação
                      <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative">
                <div 
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                >
                  {/* AI Agent Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Agent Interface */}
                    <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-6 mb-6">
                      {/* Chat Bubbles */}
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-ai-blue text-white px-4 py-2 rounded-lg text-sm max-w-xs">
                            Preciso de ajuda com meu pedido
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            Ficarei feliz em ajudar! Deixe-me verificar o status do seu pedido...
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            ✅ Pedido encontrado. Enviando hoje!
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            Alguma outra coisa que eu possa ajudar?
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Agent Status */}
                    <div className="flex items-center justify-between p-3 bg-ai-green/10 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-ai-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-ai-dark">Agent Ativo</span>
                      </div>
                      <span className="text-xs text-ai-medium">24/7 disponível</span>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">87%</div>
                        <div className="text-xs text-ai-medium">Satisfaction</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">2min</div>
                        <div className="text-xs text-ai-medium">Avg Response</div>
                      </div>
                    </div>

                    {/* Floating Bot Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-blue/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Bot className="w-4 h-4 text-ai-blue" />
                    </div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">O Desafio do Atendimento ao Cliente</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Clientes esperam suporte instantâneo 24/7 em todos os canais, mas chatbots tradicionais 
                    frustram usuários com respostas rígidas e capacidades limitadas. Agentes humanos são 
                    caros, não podem escalar infinitamente e precisam dormir, férias e treinamento.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Automação básica falha em tarefas complexas, conversas nuançadas e compreensão contextual. 
                    Você precisa de agentes inteligentes que possam pensar, aprender e agir 
                    autonomamente enquanto fornecem experiências genuinamente úteis ao cliente.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Revolução em Assistentes Virtuais</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    AI.AGENTS implanta assistentes virtuais verdadeiramente inteligentes que compreendem contexto, 
                    executam fluxos de trabalho complexos e fornecem interações semelhantes às humanas. Esses agentes 
                    trabalham 24/7, escalam infinitamente e melhoram continuamente através de aprendizado de máquina.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Diferente de chatbots simples, nossos agentes tomam decisões, completam transações, 
                    integram com seus sistemas e lidam com necessidades sofisticadas dos clientes. Eles 
                    aprendem com cada interação, tornando-se mais eficazes ao longo do tempo.
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

        {/* Agent Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Capacidades Avançadas dos{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Agentes
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Capacidades abrangentes de IA que permitem aos agentes lidar com interações complexas 
                de clientes e processos de negócios de forma autônoma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {agentCapabilities.map((capability, index) => {
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

            {/* Deployment Channels */}
            <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Implantação Omnichannel
                </h3>
                <p className="text-ai-medium">
                  Implante agentes inteligentes em todos os pontos de contato com o cliente
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {deploymentChannels.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-ai-blue mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.channel}</div>
                      <div className="text-xs text-ai-medium">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Recursos dos Agentes{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Inteligentes
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Descubra as capacidades avançadas de IA que tornam nossos assistentes virtuais 
                os agentes autônomos mais eficazes disponíveis.
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Histórias de Sucesso dos{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Agentes
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Veja como organizações estão revolucionando a experiência do cliente e operações 
                com assistentes virtuais autônomos AI.AGENTS.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-ai-blue" />
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
                            <div className="text-xs text-ai-medium capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="bg-ai-green/10 rounded-xl p-4 border-l-4 border-ai-green">
                        <h4 className="font-bold text-ai-green text-sm mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Resultados Alcançados:
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
              Pronto para Implantar{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Agentes Inteligentes?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se a empresas visionárias que já revolucionaram sua experiência do cliente 
              com AI.AGENTS. Comece a construir sua força de trabalho autônoma hoje.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Bot, value: '24/7', label: 'Sempre Disponível' },
                { icon: TrendingUp, value: '87%', label: 'Satisfação do Cliente' },
                { icon: Zap, value: '90%', label: 'Automação de Tarefas' },
                { icon: Users, value: '100+', label: 'Agentes Implantados' }
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
                  Ver Agentes em Ação
                  <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              {/* <a href="tel:+15551234567">
                <Button variant="ai_outline" size="xl" className="group">
                  Ver Agentes em Ação
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </a> */}
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Agent Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our AI specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              or{' '}
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
