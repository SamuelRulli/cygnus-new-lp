'use client';

import { useState, useEffect } from 'react';
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
  FileText,
  Download,
  Play,
  Star,
  Award,
  Rocket,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TransformationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSteps = [
    {
      step: 1,
      title: 'Agende uma demonstração gratuita e veja nossa plataforma em ação',
      description: 'Obtenha uma demonstração personalizada adaptada ao seu setor e casos de uso',
      icon: Play,
      duration: '30 minutos'
    },
    {
      step: 2,
      title: 'Calcule seu ROI com nossa ferramenta personalizada',
      description: 'Entenda o impacto financeiro exato e o potencial de economia para sua organização',
      icon: BarChart3,
      duration: '10 minutos'
    },
    {
      step: 3,
      title: 'Inicie um piloto com baixo risco e alto impacto',
      description: 'Comece com uma implementação focada para provar valor antes da implantação completa',
      icon: Rocket,
      duration: '7 Dias'
    },
    {
      step: 4,
      title: 'Escale para toda a empresa com nossa metodologia comprovada',
      description: 'Expanda para todos os departamentos usando nossa estrutura de implementação testada em batalha',
      icon: Globe,
      duration: '90 dias'
    }
  ];

  const guarantees = [
    {
      title: 'Implementação em 30 dias',
      description: 'Garantimos implantação completa com nosso time de engenharia',
      icon: Clock
    },
    {
      title: 'ROI positivo em 6 meses ou ajustamos sem custo',
      description: 'Se você não ver retornos positivos em 6 meses, otimizaremos até conseguir',
      icon: TrendingUp
    },
    {
      title: 'Suporte 24/7 durante todo o projeto',
      description: 'Suporte técnico e estratégico 24 horas por dia da nossa equipe especializada',
      icon: Shield
    },
    {
      title: 'Migração gratuita de sistemas legados',
      description: 'Migração completa de dados e integração de sistemas sem custo adicional',
      icon: Award
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
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Pronto para Transformar Sua{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Empresa?
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Junte-se a mais de <span className="text-ai-green font-bold">500 empresas</span> que já revolucionaram seus processos com a 
                ITCygnus. Comece sua jornada de transformação digital hoje.
              </p>

              {/* Stats Grid */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {[
                  { value: '100+', label: 'Empresas Transformadas', icon: Users },
                  { value: '40%', label: 'Taxa de Crescimento Mais Rápida', icon: TrendingUp },
                  { value: '75%', label: 'Redução de Custos', icon: Target }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-ai-light/50">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      <div className="text-4xl font-bold text-ai-green mb-2">{stat.value}</div>
                      <p className="text-ai-medium font-medium">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main Content */}
            <div 
              className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-ai-light/50 mb-16 transition-all duration-1000 delay-600 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-ai-dark mb-6">
                  A transformação digital não é mais uma opção - é uma necessidade competitiva.
                </h2>
                <p className="text-lg text-ai-medium leading-relaxed mb-8">
                  Empresas que automatizam seus processos com IA estão crescendo <span className="text-ai-green font-bold">40% mais rápido</span> que os concorrentes, 
                  reduzindo custos e melhorando a experiência do cliente simultaneamente. Nossa plataforma foi projetada para entregar resultados desde o primeiro dia.
                </p>
                <p className="text-lg text-ai-medium leading-relaxed">
                  Com <span className="text-ai-blue font-bold">implementação em 30 dias</span>, suporte especializado e garantia de ROI, 
                  você tem tudo o que precisa para liderar a transformação em seu setor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Seu Caminho para a{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Excelência Digital
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Siga nossa metodologia comprovada de 4 etapas, projetada para transformar operações empresariais com precisão e impacto.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {nextSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={step.step} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="mt-4 text-center">
                            <span className="text-2xl font-bold text-ai-blue">{step.step}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold text-ai-dark leading-tight">
                              {step.title}
                            </h3>
                            <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full ml-4 flex-shrink-0">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-ai-medium leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Nossas{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Garantias Sólidas
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Estamos tão confiantes em nossa plataforma que apoiamos cada implementação com garantias abrangentes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-8 border border-ai-light/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-ai-green" />
                      </div>
                      <div>
                        <div className="flex items-start mb-3">
                          <CheckCircle className="w-5 h-5 text-ai-green mt-1 mr-3 flex-shrink-0" />
                          <h3 className="text-lg font-bold text-ai-dark leading-tight">
                            {guarantee.title}
                          </h3>
                        </div>
                        <p className="text-ai-medium leading-relaxed">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                  </div>
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
              Dê o Primeiro Passo Rumo à{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Transformação
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Não deixe seus concorrentes ganharem vantagem. Comece sua jornada de transformação digital hoje 
              com a plataforma confiada por líderes da indústria em todo o mundo.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                <Link href="/demo" className="flex items-center">
                  Solicitar Demo Gratuita
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                <Link href="#" className="flex items-center">
                  Falar com Especialista
                  <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                <Link href="#" className="flex items-center">
                  Baixar Caso de Sucesso
                  <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button> */}
            </div>

            {/* Secondary CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              {/* <Button 
                variant="ghost" 
                size="lg" 
                className="text-white/80 hover:text-white hover:bg-white/10 group"
              >
                <Link href="/roi-calculator" className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Calculate My ROI
                </Link>
              </Button> */}
              
              {/* <Button 
                variant="ghost" 
                size="lg" 
                className="text-white/80 hover:text-white hover:bg-white/10 group"
              >
                <Link href="#" className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Ver Casos de Estudo
                </Link>
              </Button> */}
            </div>

            {/* Contact Info */}
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 mb-4 text-sm">
                Dúvidas? Nossos especialistas em transformação estão prontos para ajudar
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-ai-green" />
                  <a href="tel:+55-11-5190-0860" className="text-ai-green hover:text-ai-green/80 transition-colors">
                    +55 (11) 5039-4877
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-ai-green" />
                  <span className="text-white/80">Disponível 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
