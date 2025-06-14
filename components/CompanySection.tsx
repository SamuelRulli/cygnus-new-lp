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
  Download,
  Play,
  Star,
  Award,
  Rocket,
  Globe,
  Building2,
  MapPin,
  Calendar,
  Lightbulb,
  Heart,
  Eye,
  FolderOpen,
  Bot,
  Headphones,
  Brain,
  Flag,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Settings,
  Handshake,
  Cpu,
  Network,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompanySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    {
      year: '2012',
      title: 'Foundation as Software Accelerators',
      description: 'ITCygnus founded as software acceleration specialists for large Brazilian enterprises. Focused on optimizing legacy systems and accelerating digital transformation processes.',
      icon: Rocket,
      color: 'ai-blue'
    },
    {
      year: '2015',
      title: 'Enterprise Optimization Expertise',
      description: 'Developed proprietary methodologies for enterprise software acceleration. Worked with Fortune 500 companies in Brazil to modernize critical business processes.',
      icon: Settings,
      color: 'ai-green'
    },
    {
      year: '2018',
      title: 'AI Research & Development',
      description: 'Pivoted to artificial intelligence research after identifying automation opportunities in enterprise processes. Started developing AI-powered document processing solutions.',
      icon: Brain,
      color: 'ai-blue'
    },
    {
      year: '2019',
      title: 'AI.OCR Launch',
      description: 'Launched AI.OCR after months of research in hospitals and offices. First AI product focused on solving real business problems with intelligent document recognition.',
      icon: Eye,
      color: 'ai-green'
    },
    {
      year: '2020',
      title: 'AI.DOC & Pandemic Growth',
      description: 'Expanded platform with intelligent document management. Pandemic accelerated digitization needs, making our solution essential for remote operations.',
      icon: FolderOpen,
      color: 'ai-blue'
    },
    {
      year: '2021',
      title: 'Healthcare Specialization',
      description: 'Entered healthcare market with AI.DATA, developed in partnership with major health plans. Became vertical AI specialists with deep industry expertise.',
      icon: Heart,
      color: 'ai-green'
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'Expanded to American market, adapting solutions for international regulations. Now serve clients in 4 countries with 40+ languages supported.',
      icon: Globe,
      color: 'ai-blue'
    },
    {
      year: '2024',
      title: 'Complete AI Platform',
      description: 'Launched comprehensive AI platform with autonomous agents and conversational AI. Leading enterprise transformation worldwide with full AI suite.',
      icon: Bot,
      color: 'ai-green'
    }
  ];

  const stats = [
    { icon: Users, value: '10+', label: 'Organizações que Confiam', color: 'ai-blue' },
    { icon: Globe, value: '2', label: 'Países Atendidos', color: 'ai-green' },
    { icon: Flag, value: '40+', label: 'Tipos de Documentos', color: 'ai-blue' },
    { icon: Briefcase, value: '20+', label: 'Team Members', color: 'ai-green' }
  ];

  const offices = [
    {
      city: 'São Paulo',
      country: 'Brazil',
      description: 'Sede Global & Centro de Desenvolvimento',
      icon: Building2,
      details: 'Principal centro de desenvolvimento com 80+ engenheiros e cientistas de dados'
    },
    {
      city: 'Orlando',
      country: 'USA',
      description: 'Centro de Operações das Américas',
      icon: Building2,
      details: 'Vendas, suporte e operações de sucesso do cliente na América do Norte'
    },
    {
      city: 'San Diego',
      country: 'USA',
      description: 'Laboratório de Inovação & Pesquisa',
      icon: Building2,
      details: 'Pesquisa avançada em IA e desenvolvimento de tecnologias emergentes'
    }
  ];

  const values = [
    {
      title: 'Abordagem Empresarial',
      description: 'Nascida do trabalho com grandes empresas, entendemos a complexidade e requisitos de escala que soluções empresariais reais demandam.',
      icon: Building2
    },
    {
      title: 'Inovação Orientada a Resultados',
      description: 'Acreditamos que a IA deve resolver problemas reais de negócios, não apenas impressionar com tecnologia. Cada solução que construímos entrega resultados mensuráveis.',
      icon: Target
    },
    {
      title: 'Implementação Rápida',
      description: 'Velocidade é crucial nos negócios. Nossas metodologias comprovadas de 13 anos de trabalho empresarial garantem que você veja valor rapidamente sem comprometer a qualidade.',
      icon: Zap
    },
    {
      title: 'Especialização Profunda',
      description: 'Soluções genéricas falham em indústrias complexas. Desenvolvemos IA vertical que entende seu setor específico e regulamentações.',
      icon: Brain
    }
  ];

  const team = [
    {
      role: 'Cientistas de Dados',
      count: '6+',
      description: 'Pesquisadores de IA com PhD e especialistas em machine learning',
      icon: GraduationCap
    },
    {
      role: 'Engenheiros de Software',
      count: '10+',
      description: 'Desenvolvedores full-stack e arquitetos de plataforma',
      icon: Code
    },
    {
      role: 'Arquitetos Empresariais',
      count: '4+',
      description: 'Ex-especialistas de grandes corporações com conhecimento profundo em ambientes empresariais',
      icon: Network
    },
    {
      role: 'Consultores de Implementação',
      count: '50+',
      description: 'Especialistas em transformação digital e gestão de mudanças',
      icon: Settings
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
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Pioneiros em{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  IA Empresarial
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Desde 2012, a ITCygnus acelera a transformação digital de grandes empresas com 
                soluções tecnológicas de ponta. Da aceleração de software à inovação baseada em IA, 
                <span className="text-ai-green font-bold"> marcas líderes confiam em nós</span> para automatizar e revolucionar seus processos de negócios mais críticos.
              </p>

              {/* Mission Statement */}
              <div 
                className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-ai-light/50 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-2xl font-bold text-ai-dark mb-4">Nossa Missão</h2>
                <p className="text-lg text-ai-medium leading-relaxed">
                  <span className="text-ai-blue font-semibold">Democratizar o acesso à inteligência artificial empresarial</span>, 
                  tornando tecnologias avançadas acessíveis a organizações de todos os tamanhos, sempre com foco em{' '}
                  <span className="text-ai-green font-semibold">resultados mensuráveis</span> e{' '}
                  <span className="text-ai-blue font-semibold">implementação rápida</span>.
                </p>
              </div>

              {/* Company Stats */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-ai-light/50 text-center">
                      <div className={`w-12 h-12 bg-${stat.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-6 h-6 text-${stat.color}`} />
                      </div>
                      <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                      <p className="text-sm text-ai-medium font-medium">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Nossa{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Jornada
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Da aceleração de software empresarial à inovação em IA - 13 anos transformando 
                a forma como grandes organizações trabalham.
              </p>
            </div>

            {/* Story Content */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6">Legado de Aceleração de Software Empresarial</h3>
                <div className="space-y-6 text-lg text-ai-medium leading-relaxed">
                  <p>
                    A ITCygnus foi fundada em <span className="text-ai-blue font-semibold">2012 como especialista em aceleração de software</span> para grandes empresas brasileiras. Ajudamos empresas Fortune 500 a otimizar sistemas legados, modernizar processos críticos e acelerar sua jornada de transformação digital.
                  </p>
                  <p>
                    Trabalhando de perto com clientes empresariais, desenvolvemos profunda expertise em entender necessidades organizacionais complexas, requisitos regulatórios e desafios de escala que apenas grandes corporações enfrentam.
                  </p>
                  <p>
                    Essa base focada em empresas tornou-se nosso DNA, moldando como abordamos cada solução - sempre pensando em <span className="text-ai-green font-semibold">escala, segurança e integração perfeita</span>.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6">Evolução para Liderança em IA</h3>
                <div className="space-y-6 text-lg text-ai-medium leading-relaxed">
                  <p>
                    Em 2018, identificamos uma grande oportunidade: <span className="text-ai-blue font-semibold">aplicar inteligência artificial para resolver os desafios de automação de documentos e processos</span> que estávamos enfrentando manualmente há anos.
                  </p>
                  <p>
                    Nosso primeiro produto de IA, o AI.OCR, nasceu de meses de pesquisa em hospitais e escritórios, observando como profissionais perdiam horas em tarefas que poderiam ser automatizadas.
                  </p>
                  <p>
                    Hoje, processamos documentos em <span className="text-ai-green font-semibold">mais de 40 padrões</span> e atendemos clientes em <span className="text-ai-blue font-semibold">2 países</span>, com uma equipe que cresceu de 5 para mais de 20 especialistas.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-ai-dark mb-12 text-center">13 Anos de Inovação</h3>
              
              {/* Desktop Timeline */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-ai"></div>
                  
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div key={index} className={`relative flex items-center mb-16 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-ai-light flex items-center justify-center z-10">
                          <div className={`w-8 h-8 bg-${item.color}/10 rounded-full flex items-center justify-center`}>
                            <Icon className={`w-4 h-4 text-${item.color}`} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                          <Card className="shadow-lg border-ai-light/50">
                            <CardContent className="p-6">
                              <div className={`text-3xl font-bold text-${item.color} mb-2`}>{item.year}</div>
                              <h4 className="text-xl font-bold text-ai-dark mb-3">{item.title}</h4>
                              <p className="text-ai-medium leading-relaxed">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="lg:hidden space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mr-4`}>
                            <Icon className={`w-6 h-6 text-${item.color}`} />
                          </div>
                          <div className={`text-2xl font-bold text-${item.color}`}>{item.year}</div>
                        </div>
                        <h4 className="text-lg font-bold text-ai-dark mb-3">{item.title}</h4>
                        <p className="text-ai-medium leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Nossos{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Valores
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Os princípios forjados em 13 anos de trabalho empresarial que guiam tudo o que fazemos
                e moldam como construímos soluções de IA para transformação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-ai-dark mb-4">{value.title}</h3>
                      <p className="text-ai-medium leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Nossa{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Equipe Especializada
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                20+ profissionais incluindo cientistas de dados, arquitetos empresariais e especialistas
                em transformação com vasta experiência em implementações em larga escala.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((role, index) => {
                const Icon = role.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      <div className="text-3xl font-bold text-ai-green mb-2">{role.count}</div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{role.role}</h3>
                      <p className="text-sm text-ai-medium">{role.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Presença{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Global
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Localizações estratégicas em mercados-chave nas Américas, permitindo-nos atender clientes 
                empresariais com expertise local e escala global.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => {
                const Icon = office.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 text-center hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-green" />
                      </div>
                      <h3 className="text-xl font-bold text-ai-dark mb-2">{office.city}</h3>
                      <p className="text-ai-blue font-medium mb-3">{office.country}</p>
                      <p className="text-sm text-ai-dark font-medium mb-2">{office.description}</p>
                      <p className="text-xs text-ai-medium">{office.details}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Details */}
            <div className="mt-16 bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Localizados Estrategicamente nas Américas
                </h3>
                <p className="text-ai-medium max-w-2xl mx-auto">
                  Nossas três localizações estratégicas permitem operações 24/7 e fornecem cobertura abrangente
                  para clientes nos mercados da América do Norte e do Sul.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                  <div className="font-bold text-ai-dark">Hub São Paulo</div>
                  <div className="text-sm text-ai-medium">Centro principal de desenvolvimento e engenharia</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-ai-green mx-auto mb-2" />
                  <div className="font-bold text-ai-dark">Operações Orlando</div>
                  <div className="text-sm text-ai-medium">Sucesso do cliente e operações comerciais</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                  <div className="font-bold text-ai-dark">Inovação San Diego</div>
                  <div className="text-sm text-ai-medium">Pesquisa em IA e tecnologias emergentes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Pronto para fazer parte da nossa{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                História de Sucesso?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se às marcas que já estão transformando suas operações com a IT Cygnus.
              Vamos construir o futuro da IA empresarial juntos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/demo">
                <Button 
                  variant="ai_primary" 
                  size="xl" 
                  className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                >
                  Solicitar Demonstração
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Fale com Nossa Equipe
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Company Overview
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Entre em contato conosco pelo{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              ou{' '}
              <a href="mailto:contato@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                contato@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
