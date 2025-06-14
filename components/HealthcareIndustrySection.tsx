'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Stethoscope,
  Activity,
  FileText,
  Brain,
  Cpu,
  Database,
  Hospital,
  Building2,
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
  DollarSign,
  Target,
  Workflow,
  Search,
  Eye,
  FolderOpen,
  Zap,
  Calendar,
  Pill,
  Clipboard,
  UserCheck,
  Microscope,
  Bandage,
  Thermometer,
  HeartHandshake,
  FileCheck,
  ShieldCheck,
  BookOpen,
  Scan
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HealthcareIndustrySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: ShieldCheck, text: 'Conformidade total com regulamentações médicas' },
    { icon: Database, text: 'Integração com sistemas hospitalares' },
    { icon: FileText, text: 'Processamento de laudos e prontuários' },
    { icon: Search, text: 'Detecção automática de fraudes médicas' }
  ];

  const healthcareSolutions = [
    {
      title: 'Processamento Inteligente de Prontuários',
      description: 'Nossa solução AI.OCR especializada processa prontuários, laudos e receitas com mais de 99,5% de precisão, reconhecendo até mesmo caligrafia médica complexa. O sistema valida automaticamente informações críticas como dosagens, alergias e contraindicações.',
      details: 'A integração nativa com sistemas hospitalares como Epic, Cerner e Allscripts permite que as informações sejam automaticamente inseridas em prontuários eletrônicos, eliminando retrabalho e reduzindo erros de transcrição.',
      icon: FileText,
      product: 'AI.OCR',
      link: '/solutions/ai-ocr'
    },
    {
      title: 'Automação de Reembolsos Médicos',
      description: 'O AI.SAUDE revoluciona o processamento de reembolsos, analisando automaticamente a elegibilidade de procedimentos, validando códigos e detectando possíveis fraudes em tempo real. Nossa IA compreende as regras complexas de cada plano de saúde.',
      details: 'O sistema integra-se com provedores, laboratórios e farmácias, criando um fluxo automatizado que reduz o tempo de reembolso de semanas para horas, melhorando a satisfação dos beneficiários.',
      icon: Heart,
      product: 'AI.SAUDE',
      link: '/solutions/ai-saude'
    },
    {
      title: 'Gestão Inteligente de Documentos Médicos',
      description: 'O AI.DOC organiza e classifica automaticamente milhões de documentos médicos, desde exames de imagem até relatórios cirúrgicos. Nossa busca semântica permite que médicos encontrem rapidamente históricos relevantes e informações críticas.',
      details: 'O sistema mantém trilhas completas de auditoria de acessos e modificações, garantindo conformidade com regulamentações médicas e facilitando processos de acreditação hospitalar.',
      icon: FolderOpen,
      product: 'AI.DOC',
      link: '/solutions/ai-doc'
    }
  ];

  const useCases = [
    // {
    //   title: 'Transformação de Rede Hospitalar',
    //   description: 'Uma rede com 25 hospitais implementou nosso pacote completo de IA para automatizar prontuários, processamento de reembolsos e gestão documental. O sistema processa mais de 50.000 interações diárias com integração total ao Epic.',
    //   result: 'Redução de custos administrativos em $12M anuais enquanto melhorava os índices de qualidade em 35%. Tempo de processamento de reembolsos caiu de 7 dias para 4 horas, com 99,8% de precisão na codificação médica.',
    //   icon: Hospital,
    //   industry: 'Rede Hospitalar',
    //   stats: { savings: '$12M', quality: '35%', time: '4 horas' }
    // },
    {
      title: 'Inovação em Operadora de Saúde',
      description: 'Uma grande operadora com 3M+ beneficiários implementou o AI.SAUDE para automação de reembolsos e detecção de fraudes. A IA processa automaticamente determinações de necessidade médica complexas.',
      result: 'Detectou mais de R$1M+ em fraudes anualmente enquanto reduzia negativas em 45%. Satisfação dos beneficiários aumentou 40% devido a aprovações mais rápidas e menos atrasos administrativos.',
      icon: Building2,
      industry: 'Operadora de Saúde',
      stats: { fraud_detection: 'R$1M+', denials: '45%', satisfaction: '40%' }
    },
    // {
    //   title: 'Specialty Medical Practice Efficiency',
    //   description: 'A multi-specialty practice with oncology, cardiology, and orthopedic departments uses our AI for patient scheduling, medical records digitization, and prior authorization management.',
    //   result: 'Increased physician productivity by 30% through automated administrative tasks. Patient wait times reduced by 50% while improving clinical documentation quality and compliance scores.',
    //   icon: Stethoscope,
    //   industry: 'Specialty Practice',
    //   stats: { productivity: '30%', wait_time: '50%', compliance: '95%' }
    // }
  ];

  const problemStats = [
    { icon: Clock, stat: '40%', label: 'Do tempo dos médicos gasto com burocracia' },
    { icon: DollarSign, stat: 'R$80B', label: 'Custos administrativos anuais em saúde' },
    { icon: AlertTriangle, stat: '25%', label: 'Reembolsos exigem revisão manual' }
  ];

  const solutionBenefits = [
  { icon: CheckCircle, benefit: 'Processamento de IA com conformidade à LGPD' },
  { icon: CheckCircle, benefit: 'Integração em tempo real com prontuários eletrônicos' },
  { icon: CheckCircle, benefit: 'Interpretação avançada de terminologia médica' },
  { icon: CheckCircle, benefit: 'Automação de conformidade regulatória' },
  { icon: CheckCircle, benefit: 'Conectividade com mais de 300 prefeituras' },
  { icon: CheckCircle, benefit: 'Análise e identificação de glosas em qualquer tipo de documento' },
  { icon: CheckCircle, benefit: 'Integração com principais bureaus de dados' },
  { icon: CheckCircle, benefit: 'Agentes autônomos executando fluxos completos de análise' }
];

  const medicalCapabilities = [
    {
      title: 'Reconhecimento de Caligrafia Médica',
      description: 'IA treinada em padrões de escrita de médicos',
      icon: FileCheck
    },
    {
      title: 'Validação de Códigos CID-10',
      description: 'Codificação automática de diagnósticos e procedimentos',
      icon: Clipboard
    },
    {
      title: 'Análise de Interações Medicamentosas',
      description: 'Verificação em tempo real de segurança de prescrições',
      icon: Pill
    },
    {
      title: 'Integração de Imagens Médicas',
      description: 'Processamento e análise de arquivos DICOM',
      icon: Scan
    },
    {
      title: 'Suporte a Decisão Clínica',
      description: 'Recomendações de tratamento baseadas em evidências',
      icon: Brain
    },
    {
      title: 'Avaliação de Risco do Paciente',
      description: 'Análise preditiva de resultados de saúde',
      icon: Activity
    },
    {
      title: 'Otimização de Agendamentos',
      description: 'Alocação inteligente de recursos e horários',
      icon: Calendar
    },
    {
      title: 'Monitoramento de Métricas de Qualidade',
      description: 'Relatórios automatizados de conformidade e qualidade',
      icon: BarChart3
    },
    {
      title: 'Automação de Autorizações Prévia',
      description: 'Processos simplificados de aprovação por operadoras',
      icon: UserCheck
    }
  ];

  const complianceFeatures = [
    'LGPD Compliant',
    'SOC 2 Type II',
    'HL7 FHIR',
    'FDA 21 CFR Part 11',
    'HITECH Compliant',
    'ISO 27001'
  ];

  const hospitalIntegrations = [
    { system: 'Epic', icon: Database, description: 'Complete EMR integration' },
    { system: 'Cerner', icon: Database, description: 'Real-time data sync' },
    { system: 'Allscripts', icon: Database, description: 'Workflow automation' },
    { system: 'MEDITECH', icon: Database, description: 'Legacy system support' },
    { system: 'athenahealth', icon: Database, description: 'Cloud-native integration' },
    { system: 'NextGen', icon: Database, description: 'Practice management' }
  ];

  const handleClick = () => {
    window.location.href = '/demo';
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                    <Heart className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-red-500 to-ai-blue w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  IA Especializada para{' '}
                  <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                    Saúde
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Transforme a eficiência operacional do seu hospital, clínica ou operadora de saúde 
                  com soluções de IA desenvolvidas especificamente para o ambiente médico.{' '}
                  <span className="text-red-500 font-bold">Conformidade total</span> com regulamentações de saúde.
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
                  <Button onClick={handleClick} variant="ai_primary" size="xl" className="group shadow-2xl bg-red-500 hover:bg-red-600">
                    Agendar Demonstração
                    <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  {/* <Button variant="ai_outline" size="xl" className="group border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Baixar Caso Clínico
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
                  {/* Healthcare Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Medical Icons Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Heart, color: 'text-red-500' },
                        { icon: Stethoscope, color: 'text-ai-blue' },
                        { icon: Activity, color: 'text-ai-green' },
                        { icon: Pill, color: 'text-red-500' },
                        { icon: FileText, color: 'text-ai-blue' },
                        { icon: Brain, color: 'text-ai-green' },
                        { icon: Hospital, color: 'text-red-500' },
                        { icon: Shield, color: 'text-ai-blue' },
                        { icon: Microscope, color: 'text-ai-green' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-red-50 to-blue-50"
                          >
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                    {/* Medical Workflow */}
                    <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-center">
                        <div>
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FileText className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="text-xs text-ai-medium">Documentos</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-blue animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-ai-blue" />
                          </div>
                          <div className="text-xs text-ai-medium">Processamento por IA</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-ai-green" />
                          </div>
                          <div className="text-xs text-ai-medium">Automatizado</div>
                        </div>
                      </div>
                    </div>

                    {/* Healthcare Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-red-500 mb-1">99.5%</div>
                        <div className="text-xs text-ai-medium">Precisão Médica</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">LGPD</div>
                        <div className="text-xs text-ai-medium">Conformidade</div>
                      </div>
                    </div>

                    {/* Floating Medical Cross */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-4 h-1 bg-red-500 absolute"></div>
                      <div className="w-1 h-4 bg-red-500 absolute"></div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-blue/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Challenges Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">Desafios Únicos da Saúde</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O setor de saúde enfrenta pressão crescente para reduzir custos enquanto melhora a qualidade do atendimento.
                    Hospitais processam milhares de documentos diariamente - desde prontuários até resultados de exames -
                    mas ainda dependem de processos manuais que consomem tempo precioso dos profissionais de saúde.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    A complexidade da terminologia médica, a necessidade de precisão absoluta e as rigorosas regulamentações
                    do setor tornam a automação um desafio único. Soluções genéricas de IA simplesmente não entendem
                    o contexto médico, gerando erros que podem ter consequências graves.
                  </p>

                  <p className="text-lg text-ai-medium leading-relaxed">
                    Operadoras de saúde enfrentam o desafio adicional de processar milhões de reembolsos mensalmente,
                    validando procedimentos, detectando fraudes e garantindo conformidade regulatória.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Especialização Médica</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    A ITCygnus desenvolveu soluções específicas para saúde, treinadas em milhões de documentos
                    médicos reais e validadas por profissionais da área. Nossa IA compreende terminologia médica,
                    códigos de procedimento, CID-10 e as particularidades dos sistemas de saúde.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Trabalhamos com hospitais de referência, grandes operadoras e clínicas especializadas para criar
                    soluções que não apenas automatizam processos, mas melhoram a qualidade do atendimento e reduzem
                    riscos operacionais. Nossa tecnologia é certificada para uso médico e atende a todas as regulamentações do setor.
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

        {/* Medical Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Capacidades Avançadas de{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  IA Médica
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Capacidades abrangentes de IA projetadas especificamente para fluxos de trabalho em saúde,
                terminologia médica e requisitos de conformidade regulatória.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {medicalCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-red-500" />
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

            {/* Hospital System Integrations */}
            {/* <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Integrações com Sistemas Hospitalares
                </h3>
                <p className="text-ai-medium">
                  Integração nativa com os principais sistemas de Prontuário Eletrônico (EMR)
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {hospitalIntegrations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-ai-blue mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.system}</div>
                      <div className="text-xs text-ai-medium">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {/* Compliance Features */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Healthcare Compliance & Security
                </h3>
                <p className="text-ai-medium">
                  Built to meet the highest healthcare industry standards and regulations
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-3 bg-ai-green/10 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-ai-green mx-auto mb-2" />
                    <div className="text-sm font-medium text-ai-dark">{feature}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* Healthcare Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Soluções de{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  IA para Saúde
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Soluções especializadas de IA projetadas especificamente para fluxos de trabalho em saúde,
                desde prontuários até processamento de reembolsos e gestão documental.
              </p>
            </div>

            <div className="space-y-12">
              {healthcareSolutions.map((solution, index) => {
                const Icon = solution.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content */}
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-red-500" />
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
                      <div className={`bg-gradient-to-br from-red-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-ai-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-red-200 rounded w-full"></div>
                              <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                              <div className="h-3 bg-red-200 rounded w-1/2"></div>
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
                Casos de{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  Sucesso em Saúde
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Veja como organizações de saúde estão transformando operações e melhorando
                o atendimento ao paciente com nossas soluções especializadas de IA.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-red-500" />
                        </div>
                        <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-3 py-1 rounded-full">
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
                          <div key={statIndex} className="text-center p-2 bg-red-50 rounded-lg">
                            <div className="text-lg font-bold text-red-500">{value}</div>
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500 to-ai-blue rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Pronto para Transformar suas{' '}
              <span className="bg-gradient-to-r from-red-400 to-ai-blue bg-clip-text text-transparent">
                Operações de Saúde?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se às principais organizações de saúde que já revolucionaram suas operações
              com nossas soluções especializadas de IA. Comece a melhorar o atendimento ao paciente enquanto reduz custos hoje.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Heart, value: '99.5%', label: 'Precisão Médica' },
                  { icon: Shield, value: 'LGPD', label: 'Conformidade' },
                  { icon: Clock, value: '75%', label: 'Economia de Tempo' },
                  { icon: Users, value: '10+', label: 'Provedores de Saúde' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-red-400" />
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
                onClick={handleClick}
                variant="ai_primary" 
                size="xl" 
                className="bg-red-500 hover:bg-red-600 text-white shadow-2xl group"
              >
                Agendar Demonstração
                <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Download Clinical Case
                <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
              {/* <Link href="/roi-calculator?type=healthcare">
                <Button 
                  variant="ghost" 
                  size="xl" 
                  className="text-white hover:bg-white/10 group"
                >
                  Calculadora de ROI
                  <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Fale com nossos especialistas em saúde pelo{' '}
              <a href="tel:+1-800-123-4567" className="text-red-400 hover:text-red-300 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              or{' '}
              <a href="mailto:contact@itcygnus.com" className="text-red-400 hover:text-red-300 transition-colors">
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
