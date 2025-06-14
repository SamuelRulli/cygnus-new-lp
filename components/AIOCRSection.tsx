'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Eye,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  Zap,
  Shield,
  Globe,
  Brain,
  Cpu,
  FileText,
  Hospital,
  Building2,
  Landmark,
  TrendingUp,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIOCRSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Target, text: '99,9% de precisão garantida' },
    { icon: Zap, text: 'Processamento 50x mais rápido' },
    { icon: Globe, text: 'Suporte a mais de 40 idiomas' },
    { icon: Shield, text: 'Integração com qualquer sistema' }
  ];

  const features = [
    {
      title: 'Reconhecimento Inteligente de Contexto',
      description: 'Nossa IA não apenas identifica caracteres individuais, mas entende o significado contextual de cada palavra e frase. Isso permite correção automática de erros, validação de dados e estruturação inteligente de informações, mesmo em documentos de baixa qualidade ou caligrafia complexa.',
      details: 'O sistema reconhece padrões específicos como CPFs, CNPJs, datas, valores monetários e códigos, aplicando validação automática e formatação padronizada. Isso elimina erros comuns de digitação e garante consistência nos dados extraídos.',
      icon: Brain
    },
    {
      title: 'Processamento de Documentos Complexos',
      description: 'Diferente de soluções básicas que falham com layouts não padronizados, o AI.OCR processa tabelas complexas, formulários multi-coluna, documentos manuscritos e até imagens de baixa qualidade com precisão excepcional.',
      details: 'Nossa tecnologia de segmentação inteligente identifica automaticamente diferentes seções do documento, extraindo informações relevantes e organizando-as em estruturas de dados úteis para seus sistemas downstream.',
      icon: FileText
    },
    {
      title: 'Integração Nativa e APIs Robustas',
      description: 'O AI.OCR se integra perfeitamente com seus sistemas existentes através de APIs RESTful, webhooks e conectores pré-construídos para ERPs populares como SAP, Oracle e Microsoft Dynamics.',
      details: 'Nossa arquitetura de microsserviços permite implementação gradual, começando com casos de uso específicos e expandindo conforme você comprova o valor. Suportamos processamento em lote e tempo real, adaptando-se às suas necessidades operacionais.',
      icon: Cpu
    }
  ];

  const useCases = [
    {
      title: 'Transformação na Saúde',
      description: 'Hospitais e clínicas usam o AI.OCR para digitalizar prontuários médicos, processar resultados de exames e automatizar entrada de dados em sistemas hospitalares. Nossa tecnologia reconhece caligrafia médica com 98% de precisão, incluindo prescrições e anotações clínicas.',
      result: 'Um hospital de 500 leitos economizou R$ 1,2M anualmente automatizando o processamento de 8.000 documentos médicos mensais, reduzindo o tempo de disponibilidade de resultados de 24 horas para 15 minutos.',
      icon: Hospital,
      industry: 'Saúde'
    },
    {
      title: 'Revolução no Setor Financeiro',
      description: 'Bancos e seguradoras processam contratos, apólices e documentos KYC automaticamente, acelerando aprovações e reduzindo riscos operacionais. Nossa solução extrai dados críticos como valores, datas de vencimento e informações de clientes com precisão bancária.',
      result: 'Uma seguradora reduziu o tempo de processamento de sinistros de 5 dias para 2 horas, processando automaticamente 15.000 documentos mensais e economizando R$ 900.000 em custos operacionais.',
      icon: Building2,
      industry: 'Serviços Financeiros'
    },
    {
      title: 'Modernização do Setor Público',
      description: 'Órgãos governamentais digitalizam arquivos históricos, processam formulários de cidadãos e automatizam protocolos administrativos. Nossa tecnologia processa documentos com precisão superior, incluindo formulários manuscritos e carimbos oficiais.',
      result: 'Uma prefeitura digitalizou 500.000 documentos históricos em 6 meses, criando um arquivo digital pesquisável que melhorou o atendimento ao cidadão e reduziu custos de armazenamento em 70%.',
      icon: Landmark,
      industry: 'Governo'
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
                  AI.OCR: Transforme Qualquer Documento em{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Dados Estruturados
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  A solução de reconhecimento óptico de caracteres mais precisa do mercado. 
                  Processe contratos, faturas, relatórios médicos e formulários com{' '}
                  <span className="text-ai-green font-bold">99,9% de precisão</span>,{' '}
                  <span className="text-ai-blue font-bold">50x mais rápido</span> que digitação manual.
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
                  <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                    Teste Grátis por 7 Dias
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  {/* <Button variant="ai_outline" size="xl" className="group">
                    Assistir Demo ao Vivo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  {/* OCR Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Document Preview */}
                    <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-6 mb-6">
                      <div className="space-y-3">
                        <div className="h-4 bg-ai-blue/20 rounded w-3/4"></div>
                        <div className="h-4 bg-ai-green/20 rounded w-1/2"></div>
                        <div className="h-4 bg-ai-blue/20 rounded w-2/3"></div>
                        <div className="h-4 bg-ai-green/20 rounded w-4/5"></div>
                      </div>
                    </div>

                    {/* Processing Arrow */}
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center animate-pulse-slow">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Structured Data Output */}
                    <div className="bg-ai-dark/5 rounded-2xl p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-ai-blue mb-1">99.9%</div>
                          <div className="text-xs text-ai-medium">Accuracy</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-ai-green mb-1">50x</div>
                          <div className="text-xs text-ai-medium">Faster</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-green/30 rounded-full animate-pulse-slow"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-blue/30 rounded-full animate-float"></div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">O Problema Que Você Enfrenta</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Sua empresa processa milhares de documentos mensalmente, mas ainda depende de digitação manual 
                    ou soluções OCR imprecisas que geram mais trabalho do que economia. Erros de transcrição custam 
                    tempo, dinheiro e credibilidade, enquanto sua equipe desperdiça horas em tarefas repetitivas que poderiam ser automatizadas.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Documentos manuscritos, formulários complexos e layouts não padronizados são pesadelos para soluções 
                    OCR tradicionais. Você precisa de tecnologia que entenda contexto, corrija erros automaticamente 
                    e se adapte aos seus documentos específicos, não o contrário.
                  </p>

                  {/* Problem Stats */}
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
                    <h4 className="font-bold text-red-800 mb-4">Desafios Atuais:</h4>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-center"><Clock className="w-4 h-4 mr-2" />Horas desperdiçadas em entrada manual de dados</li>
                      <li className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />Altas taxas de erro custando credibilidade</li>
                      <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2" />Custos operacionais crescentes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-ai-green mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Solução Revolucionária</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O AI.OCR usa redes neurais avançadas treinadas em milhões de documentos para reconhecer texto 
                    com precisão humana, mas velocidade sobre-humana. Nossa IA não apenas lê caracteres - 
                    ela entende contexto, valida informações e estrutura dados automaticamente.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Diferente de soluções genéricas, nosso sistema aprende com seus documentos específicos, melhorando 
                    continuamente a precisão para seus casos de uso. Seja caligrafia médica, formulários governamentais 
                    ou contratos legais, o AI.OCR se adapta e evolui.
                  </p>

                  {/* Solution Benefits */}
                  <div className="bg-ai-green/10 rounded-2xl p-6 border-l-4 border-ai-green">
                    <h4 className="font-bold text-ai-green mb-4">Vantagens do AI.OCR:</h4>
                    <ul className="space-y-2 text-ai-dark">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-ai-green" />Precisão humana com velocidade de máquina</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-ai-green" />Processamento consciente de contexto</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-ai-green" />Aprendizado contínuo e melhoria</li>
                    </ul>
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
                Recursos Técnicos{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Avançados
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Descubra a tecnologia de ponta que torna o AI.OCR a solução de processamento 
                de documentos mais precisa e confiável disponível.
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
                Casos de Sucesso{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  do Mundo Real
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Veja como organizações de diversos setores estão transformando suas operações com o AI.OCR.
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
              Pronto para Transformar Seu{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Processamento de Documentos?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se a milhares de organizações que já revolucionaram suas operações com o AI.OCR. 
              Comece seu teste gratuito hoje e experimente o futuro do processamento de documentos.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Target, value: '99.9%', label: 'Accuracy Rate' },
                { icon: Users, value: '10+', label: 'Happy Customers' },
                { icon: Clock, value: '7 Days', label: 'Free Trial' },
                { icon: Shield, value: '24/7', label: 'Support' }
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
              <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                Teste Grátis por 7 Dias
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Assistir Demo ao Vivo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Baixar Ficha Técnica
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Entre em contato com nossos especialistas em IA pelo{' '}
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
