'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Target,
  Activity,
  FileText,
  Brain,
  Cpu,
  Database,
  DollarSign,
  CreditCard,
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
  Banknote,
  Scale,
  Landmark,
  Receipt,
  ChartBar,
  Settings,
  Network,
  Fingerprint,
  AlertCircle,
  TrendingDown
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FinancialIndustrySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    // { icon: ShieldCheck, text: 'Regulatory compliance (Fed, OCC, FDIC)' },
    // { icon: UserCheck, text: 'Automated KYC and onboarding' },
    { icon: BarChart3, text: 'Real-time credit analysis' },
    { icon: Eye, text: 'Advanced fraud detection' }
  ];

  const financialSolutions = [
    // {
    //   title: 'Automated KYC & Customer Onboarding',
    //   description: 'Our AI-powered KYC solution processes customer documents, validates identity, and performs background checks automatically. The system integrates with government databases, sanctions lists, and credit bureaus to ensure complete compliance.',
    //   details: 'Advanced document verification detects fraudulent IDs, altered documents, and synthetic identities. Real-time risk scoring enables instant decisions while maintaining audit trails for regulatory compliance.',
    //   icon: UserCheck,
    //   product: 'AI.OCR + AI.DATA',
    //   link: '/solutions/ai-ocr'
    // },
    {
      title: 'Real-Time Credit Analysis & Risk Assessment',
      description: 'Process loan applications with intelligent credit analysis that evaluates traditional and alternative data sources. Our AI assesses credit risk, income verification, and payment capacity in real-time.',
      details: 'Machine learning models analyze bank statements, transaction patterns, and behavioral data to provide accurate credit scoring. Integration with credit bureaus and open banking APIs ensures comprehensive risk assessment.',
      icon: BarChart3,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    },
    {
      title: 'Advanced Fraud Detection & Prevention',
      description: 'AI.DATA monitors transactions in real-time, identifying suspicious patterns and potential fraud before losses occur. Our system learns from historical fraud cases and adapts to new attack vectors.',
      details: 'Multi-layered fraud detection analyzes transaction velocity, merchant patterns, geographic anomalies, and device fingerprinting. Real-time scoring enables instant decisions while minimizing false positives.',
      icon: Eye,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    }
  ];

  const useCases = [
    {
      title: 'Major Regional Bank Transformation',
      description: 'A regional bank with 100+ branches implemented our complete AI suite for customer onboarding, loan processing, and fraud detection. The system processes 50,000+ applications monthly with full regulatory compliance.',
      result: 'Reduced loan approval time from 7 days to 2 hours while improving credit decision accuracy by 45%. Automated 85% of KYC processes and detected $25M in potential fraud annually.',
      icon: Landmark,
      industry: 'Regional Bank',
      stats: { approval_time: '2 hours', accuracy: '45%', kyc_automation: '85%' }
    },
    {
      title: 'Fintech Lending Platform Innovation',
      description: 'A digital lending platform serving SMEs deployed our AI for automated underwriting, document processing, and risk assessment. The platform evaluates alternative data sources for better credit decisions.',
      result: 'Increased loan approval rates by 30% while reducing default rates by 25%. Processing time decreased from 72 hours to 15 minutes with 99.2% accuracy in document verification.',
      icon: CreditCard,
      industry: 'Fintech',
      stats: { approval_rate: '30%', default_reduction: '25%', processing: '15 min' }
    },
    // {
    //   title: 'Credit Union Digital Transformation',
    //   description: 'A federal credit union modernized their operations with AI-powered member onboarding, loan origination, and compliance monitoring. Focus on maintaining personal service while improving efficiency.',
    //   result: 'Enhanced member satisfaction by 40% through faster service delivery. Reduced operational costs by 35% while maintaining 100% regulatory compliance across all processes.',
    //   icon: Building2,
    //   industry: 'Credit Union',
    //   stats: { satisfaction: '40%', cost_reduction: '35%', compliance: '100%' }
    // }
  ];

  const problemStats = [
    { icon: Clock, stat: '72 hours', label: 'Average loan approval time' },
    { icon: DollarSign, stat: '$4.7B', label: 'Annual fraud losses in banking' },
    { icon: AlertTriangle, stat: '65%', label: 'Manual processes in financial services' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Banking-grade security and encryption' },
    { icon: CheckCircle, benefit: 'Full regulatory compliance automation' },
    { icon: CheckCircle, benefit: 'Real-time fraud detection and prevention' },
    { icon: CheckCircle, benefit: 'Seamless core banking integration' }
  ];

  const financialCapabilities = [
    // {
    //   title: 'KYC Automation',
    //   description: 'Automated identity verification and background checks',
    //   icon: UserCheck
    // },
    {
      title: 'Credit Risk Analysis',
      description: 'AI-powered credit scoring and risk assessment',
      icon: BarChart3
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time transaction monitoring and fraud prevention',
      icon: Eye
    },
    // {
    //   title: 'Regulatory Compliance',
    //   description: 'Automated compliance with banking regulations',
    //   icon: ShieldCheck
    // },
    {
      title: 'Document Processing',
      description: 'Intelligent processing of financial documents',
      icon: FileText
    },
    {
      title: 'Anti-Money Laundering',
      description: 'AML screening and suspicious activity detection',
      icon: Shield
    },
    // {
    //   title: 'Loan Origination',
    //   description: 'End-to-end automated loan processing',
    //   icon: Receipt
    // },
    {
      title: 'Transaction Monitoring',
      description: 'Real-time analysis of payment transactions',
      icon: Activity
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation',
      icon: Target
    }
  ];

  const complianceFeatures = [
    'Fed Compliant',
    'OCC Certified',
    'FDIC Approved',
    'SOX Compliant',
    'GDPR Ready',
    'PCI DSS Level 1'
  ];

  const bankingIntegrations = [
    { system: 'Core Banking', icon: Database, description: 'Direct integration with core systems' },
    { system: 'Credit Bureaus', icon: BarChart3, description: 'Real-time credit data access' },
    // { system: 'Payment Networks', icon: Network, description: 'Visa, Mastercard, ACH integration' },
    // { system: 'Regulatory Systems', icon: Scale, description: 'Fed, OCC, FDIC reporting' },
    { system: 'Risk Platforms', icon: Shield, description: 'Enterprise risk management' },
    { system: 'Digital Banking', icon: Globe, description: 'Mobile and web banking platforms' }
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-blue-600 to-ai-green w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  IA Financeira que Acelera{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                    Decisões e Reduz Riscos
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Automatize processos críticos para seu banco, fintech ou instituição financeira 
                  com IA especializada em compliance, análise de crédito e detecção de fraudes.{' '}
                  <span className="text-blue-600 font-bold">Segurança bancária</span> e{' '}
                  <span className="text-ai-green font-bold">conformidade regulatória</span>.
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
                        <span className="text-ai-dark font-medium">{
                          benefit.text === 'Automated KYC and onboarding' ? 'KYC e onboarding automatizados' :
                          benefit.text === 'Real-time credit analysis' ? 'Análise de crédito em tempo real' :
                          'Detecção avançada de fraudes'
                        }</span>
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
                  <Button onClick={handleClick} variant="ai_primary" size="xl" className="group shadow-2xl bg-blue-600 hover:bg-blue-700">
                    Solicitar Demonstração Bancária
                    <Landmark className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  {/* <Button variant="ai_outline" size="xl" className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Compliance Analysis
                    <ShieldCheck className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  {/* Financial Services Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Financial Icons Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Building2, color: 'text-blue-600' },
                        { icon: CreditCard, color: 'text-ai-green' },
                        { icon: Shield, color: 'text-blue-600' },
                        { icon: BarChart3, color: 'text-ai-green' },
                        { icon: Eye, color: 'text-blue-600' },
                        { icon: UserCheck, color: 'text-ai-green' },
                        { icon: Landmark, color: 'text-blue-600' },
                        { icon: Lock, color: 'text-ai-green' },
                        { icon: DollarSign, color: 'text-blue-600' }
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

                    {/* Financial Process Flow */}
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-center">
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-xs text-ai-medium">Application</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-600 animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-ai-green" />
                          </div>
                          <div className="text-xs text-ai-medium">AI Analysis</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-xs text-ai-medium">Approved</div>
                        </div>
                      </div>
                    </div>

                    {/* Banking Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">2 hrs</div>
                        <div className="text-xs text-ai-medium">Loan Approval</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">99.2%</div>
                        <div className="text-xs text-ai-medium">Fraud Detection</div>
                      </div>
                    </div>

                    {/* Floating Bank Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Landmark className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Challenges Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">Complexidade do Setor Financeiro</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Instituições financeiras operam em um ambiente altamente regulado onde precisão e velocidade 
                    são igualmente críticas. Bancos processam milhões de transações diariamente, cada uma exigindo 
                    validação de conformidade, análise de risco e possível detecção de fraudes.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O onboarding de clientes envolve validação de dezenas de documentos, verificação de antecedentes 
                    e análise de capacidade de crédito - tudo mantendo uma experiência fluida e segura para o cliente.
                    Regulamentações como GDPR, normas do banco central e requisitos internacionais tornam a automação 
                    um desafio técnico e regulatório complexo.
                  </p>

                  <p className="text-lg text-ai-medium leading-relaxed">
                    Fintechs enfrentam o desafio adicional de competir com bancos tradicionais oferecendo serviços 
                    mais ágeis e personalizados, mas sem comprometer a segurança e conformidade que o setor exige.
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
                              <div className="text-sm text-red-700">{
                                item.label === 'Average loan approval time' ? 'Tempo médio de aprovação de empréstimo' :
                                item.label === 'Annual fraud losses in banking' ? 'Perdas anuais por fraudes bancárias' :
                                'Processos manuais em serviços financeiros'
                              }</div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Expertise Financeira</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    A ITCygnus desenvolveu soluções específicas para o setor financeiro, com arquitetura de segurança 
                    bancária e conformidade total com regulamentações nacionais e internacionais. Nossa IA foi treinada 
                    em milhões de transações e documentos financeiros, compreendendo padrões de fraude, riscos de crédito 
                    e requisitos regulatórios.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Trabalhamos com grandes bancos, fintechs inovadoras e cooperativas de crédito para criar soluções que 
                    aceleram processos sem comprometer a segurança. Nossa tecnologia é auditada por empresas especializadas 
                    em segurança financeira e certificada para uso bancário.
                  </p>

                  {/* Solution Benefits */}
                  <div className="space-y-3">
                    {solutionBenefits.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-ai-green/10 rounded-lg">
                          <Icon className="w-5 h-5 text-ai-green" />
                          <span className="text-ai-dark font-medium">{
                            item.benefit === 'Banking-grade security and encryption' ? 'Segurança e criptografia bancária' :
                            item.benefit === 'Full regulatory compliance automation' ? 'Automação completa de conformidade regulatória' :
                            item.benefit === 'Real-time fraud detection and prevention' ? 'Detecção e prevenção de fraudes em tempo real' :
                            'Integração perfeita com sistemas bancários centrais'
                          }</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Capacidades Avançadas de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  IA Financeira
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Capacidades abrangentes de IA projetadas especificamente para operações bancárias,
                conformidade regulatória e gerenciamento de riscos financeiros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {financialCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">
                        {capability.title === 'Credit Risk Analysis' ? 'Análise de Risco de Crédito' :
                         capability.title === 'Fraud Detection' ? 'Detecção de Fraudes' :
                         capability.title === 'Document Processing' ? 'Processamento de Documentos' :
                         capability.title === 'Anti-Money Laundering' ? 'Prevenção à Lavagem de Dinheiro' :
                         capability.title === 'Transaction Monitoring' ? 'Monitoramento de Transações' :
                         'Gestão de Riscos'}
                      </h3>
                      <p className="text-sm text-ai-medium">
                        {capability.description === 'AI-powered credit scoring and risk assessment' ? 'Pontuação de crédito e avaliação de risco por IA' :
                         capability.description === 'Real-time transaction monitoring and fraud prevention' ? 'Monitoramento em tempo real e prevenção de fraudes' :
                         capability.description === 'Intelligent processing of financial documents' ? 'Processamento inteligente de documentos financeiros' :
                         capability.description === 'AML screening and suspicious activity detection' ? 'Triagem AML e detecção de atividades suspeitas' :
                         'Avaliação abrangente de riscos e mitigação'}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Banking System Integrations */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Integrações com Sistemas Bancários
                </h3>
                <p className="text-ai-medium">
                  Integração nativa com plataformas bancárias centrais e infraestrutura financeira
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {bankingIntegrations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{
                        item.system === 'Core Banking' ? 'Sistema Bancário Central' :
                        item.system === 'Credit Bureaus' ? 'Bureaus de Crédito' :
                        item.system === 'Risk Platforms' ? 'Plataformas de Risco' :
                        'Plataformas Bancárias Digitais'
                      }</div>
                      <div className="text-xs text-ai-medium">{
                        item.description === 'Direct integration with core systems' ? 'Integração direta com sistemas centrais' :
                        item.description === 'Real-time credit data access' ? 'Acesso em tempo real a dados de crédito' :
                        item.description === 'Enterprise risk management' ? 'Gestão de riscos corporativos' :
                        'Plataformas bancárias móveis e web'
                      }</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance Features */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Regulatory Compliance & Security
                </h3>
                <p className="text-ai-medium">
                  Built to meet the highest financial industry standards and banking regulations
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

        {/* Financial Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Soluções de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  IA Financeira
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Soluções especializadas em IA projetadas especificamente para operações bancárias,
                desde onboarding de clientes até detecção de fraudes e automação de conformidade.
              </p>
            </div>

            <div className="space-y-12">
              {financialSolutions.map((solution, index) => {
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
                            <h3 className="text-2xl font-bold text-ai-dark">{
                              solution.title === 'Real-Time Credit Analysis & Risk Assessment' ? 'Análise de Crédito e Avaliação de Risco em Tempo Real' :
                              'Detecção e Prevenção Avançada de Fraudes'
                            }</h3>
                            <span className="text-sm text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                              {solution.product}
                            </span>
                          </div>
                        </div>
                        
                          <p className="text-lg text-ai-medium leading-relaxed mb-6">{
                            solution.description === 'Process loan applications with intelligent credit analysis that evaluates traditional and alternative data sources. Our AI assesses credit risk, income verification, and payment capacity in real-time.' ? 
                            'Processe aplicações de empréstimo com análise de crédito inteligente que avalia fontes de dados tradicionais e alternativas. Nossa IA avalia risco de crédito, verificação de renda e capacidade de pagamento em tempo real.' :
                            'AI.DATA monitora transações em tempo real, identificando padrões suspeitos e potenciais fraudes antes que ocorram perdas. Nosso sistema aprende com casos históricos de fraude e se adapta a novos vetores de ataque.'
                          }</p>
                          
                          <p className="text-ai-medium leading-relaxed mb-6">{
                            solution.details === 'Machine learning models analyze bank statements, transaction patterns, and behavioral data to provide accurate credit scoring. Integration with credit bureaus and open banking APIs ensures comprehensive risk assessment.' ?
                            'Modelos de machine learning analisam extratos bancários, padrões de transação e dados comportamentais para fornecer pontuação de crédito precisa. Integração com bureaus de crédito e APIs de open banking garante avaliação abrangente de risco.' :
                            'Detecção de fraude em múltiplas camadas analisa velocidade de transações, padrões de comerciantes, anomalias geográficas e impressão digital de dispositivos. Pontuação em tempo real permite decisões instantâneas minimizando falsos positivos.'
                          }</p>

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
              Pronto para Transformar Suas{' '}
              <span className="bg-gradient-to-r from-blue-400 to-ai-green bg-clip-text text-transparent">
                Operações Financeiras?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se às principais instituições financeiras que já revolucionaram suas operações
              com as soluções especializadas em IA da ITCygnus. Comece a reduzir riscos enquanto acelera decisões hoje mesmo.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                // { icon: ShieldCheck, value: '100%', label: 'Conformidade Regulatória' },
                { icon: Clock, value: '1 hrs', label: 'Tempo de Aprovação de Empréstimo' },
                { icon: Eye, value: '99.2%', label: 'Detecção de Fraudes' },
                { icon: Users, value: '10+', label: 'Clientes Financeiros' }
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
              <Button 
                onClick={handleClick}
                variant="ai_primary" 
                size="xl" 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl group"
              >
                Solicitar Demonstração Bancária
                <Landmark className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Compliance Analysis
                <ShieldCheck className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
              {/* <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Financial Guide
                <Download className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Contate nossos especialistas financeiros pelo{' '}
              <a href="tel:+1-800-123-4567" className="text-blue-400 hover:text-blue-300 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              ou{' '}
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
