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
    { icon: UserCheck, text: 'Automated KYC and onboarding' },
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
                  Financial AI That Accelerates{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                    Decisions and Reduces Risk
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Automate critical processes for your bank, fintech, or financial institution 
                  with AI specialized in compliance, credit analysis, and fraud detection.{' '}
                  <span className="text-blue-600 font-bold">Banking-grade security</span> and{' '}
                  <span className="text-ai-green font-bold">regulatory compliance</span>.
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
                  <Button onClick={handleClick} variant="ai_primary" size="xl" className="group shadow-2xl bg-blue-600 hover:bg-blue-700">
                    Request Banking Demo
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
                  <h2 className="text-3xl font-bold text-ai-dark">Financial Sector Complexity</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Financial institutions operate in a highly regulated environment where precision and speed 
                    are equally critical. Banks process millions of transactions daily, each requiring compliance 
                    validation, risk analysis, and possible fraud detection.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Customer onboarding involves validating dozens of documents, background verification, and 
                    credit capacity analysis - all while maintaining a fluid and secure customer experience. 
                    Regulations like GDPR, central bank norms, and international requirements make automation 
                    a complex technical and regulatory challenge.
                  </p>

                  <p className="text-lg text-ai-medium leading-relaxed">
                    Fintechs face the additional challenge of competing with traditional banks by offering 
                    more agile and personalized services, but without compromising the security and compliance 
                    the sector demands.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Our Financial Expertise</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    ITCygnus developed solutions specific to the financial sector, with banking-grade security 
                    architecture and full compliance with national and international regulations. Our AI was 
                    trained on millions of transactions and financial documents, understanding fraud patterns, 
                    credit risks, and regulatory requirements.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    We work with large banks, innovative fintechs, and credit unions to create solutions that 
                    accelerate processes without compromising security. Our technology is audited by companies 
                    specialized in financial security and certified for banking use.
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

        {/* Financial Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Financial{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive AI capabilities specifically designed for banking operations, 
                regulatory compliance, and financial risk management.
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

            {/* Banking System Integrations */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Banking System Integrations
                </h3>
                <p className="text-ai-medium">
                  Native integration with core banking platforms and financial infrastructure
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {bankingIntegrations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.system}</div>
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
                Financial{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Specialized AI solutions designed specifically for banking operations, 
                from customer onboarding to fraud detection and compliance automation.
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
                            Learn More About {solution.product}
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

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Financial Services{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how financial institutions are transforming operations and reducing 
                risk with ITCygnus specialized AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-blue-600" />
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
                          <div key={statIndex} className="text-center p-2 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-ai-medium capitalize">{key.replace('_', ' ')}</div>
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600 to-ai-green rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-ai-green bg-clip-text text-transparent">
                Financial Operations?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading financial institutions that have already revolutionized their operations 
              with ITCygnus specialized AI solutions. Start reducing risk while accelerating decisions today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                // { icon: ShieldCheck, value: '100%', label: 'Regulatory Compliant' },
                { icon: Clock, value: '2 hrs', label: 'Loan Approval Time' },
                { icon: Eye, value: '99.2%', label: 'Fraud Detection' },
                { icon: Users, value: '100+', label: 'Financial Clients' }
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
                Request Banking Demo
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
              Questions? Contact our financial specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-blue-400 hover:text-blue-300 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:financial@itcygnus.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                financial@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}