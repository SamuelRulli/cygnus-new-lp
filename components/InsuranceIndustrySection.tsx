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
    { icon: FileText, text: 'Automatic claims processing' },
    { icon: Eye, text: 'Advanced fraud detection' },
    { icon: BarChart3, text: 'Automated risk underwriting' },
    { icon: Network, text: 'Integration with brokers and providers' }
  ];

  const insuranceSolutions = [
    {
      title: 'Intelligent Claims Processing',
      description: 'Our AI processes insurance claims from first notice of loss to settlement, automatically validating coverage, assessing damages, and detecting potential fraud. The system understands policy terms, exclusions, and coverage limits.',
      details: 'Advanced damage assessment uses computer vision and expert systems to evaluate property damage, vehicle accidents, and liability claims. Integration with repair networks and medical providers enables automated cost estimation and settlement recommendations.',
      icon: FileText,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    },
    {
      title: 'Advanced Fraud Detection',
      description: 'AI.DATA analyzes claim patterns, policyholder behavior, and external data sources to identify sophisticated fraud schemes. Our system detects staged accidents, inflated claims, and organized fraud rings before losses occur.',
      details: 'Machine learning models trained on millions of fraud cases identify suspicious patterns including claim frequency, timing anomalies, and network connections between claimants, providers, and attorneys.',
      icon: Eye,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    },
    {
      title: 'Automated Risk Underwriting',
      description: 'Transform underwriting with AI that evaluates risk factors across multiple data sources, from traditional applications to satellite imagery and IoT data. Our system provides consistent, accurate risk assessment at scale.',
      details: 'Real-time risk scoring integrates property data, credit information, claims history, and external risk factors. Automated underwriting guidelines ensure consistent application of pricing models and risk selection criteria.',
      icon: BarChart3,
      product: 'AI.DOC + AI.DATA',
      link: '/solutions/ai-doc'
    }
  ];

  const useCases = [
    {
      title: 'Major Property & Casualty Insurer',
      description: 'A top-10 P&C insurer implemented our AI platform for auto claims processing, property damage assessment, and fraud detection. The system processes 100,000+ claims monthly across multiple lines of business.',
      result: 'Reduced claims processing time from 15 days to 3 hours for straightforward claims. Detected $45M in fraudulent claims annually while improving customer satisfaction by 35% through faster settlements.',
      icon: Car,
      industry: 'Property & Casualty',
      stats: { processing_time: '3 hours', fraud_detected: '$45M', satisfaction: '35%' }
    },
    {
      title: 'Life Insurance Digital Transformation',
      description: 'A life insurance company modernized underwriting and claims with AI-powered medical record analysis, risk assessment, and beneficiary verification. The system processes complex life and disability claims automatically.',
      result: 'Accelerated underwriting decisions from 6 weeks to 48 hours while maintaining 99.5% accuracy. Reduced operational costs by 40% and improved policy issuance rates by 25%.',
      icon: HeartHandshake,
      industry: 'Life Insurance',
      stats: { underwriting: '48 hours', cost_reduction: '40%', issuance: '25%' }
    },
    {
      title: 'Commercial Insurance Innovation',
      description: 'A commercial lines insurer uses our AI for complex risk assessment, policy administration, and large loss claims. The platform handles everything from workers comp to cyber liability coverage.',
      result: 'Improved underwriting accuracy by 30% while reducing quote turnaround time by 60%. Enhanced risk selection resulted in 20% improvement in loss ratios across commercial lines.',
      icon: Building,
      industry: 'Commercial Insurance',
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
      title: 'Claims Intake & Processing',
      description: 'Automated first notice of loss and claim routing',
      icon: FileText
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time analysis of suspicious claim patterns',
      icon: Eye
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive underwriting and risk evaluation',
      icon: BarChart3
    },
    {
      title: 'Policy Administration',
      description: 'Automated policy management and updates',
      icon: Clipboard
    },
    {
      title: 'Damage Assessment',
      description: 'AI-powered evaluation of property and vehicle damage',
      icon: ScanLine
    },
    {
      title: 'Medical Record Analysis',
      description: 'Intelligent processing of medical documentation',
      icon: FileSearch
    },
    {
      title: 'Subrogation Management',
      description: 'Automated recovery and subrogation processes',
      icon: Target
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance with insurance regulations',
      icon: BadgeCheck
    },
    {
      title: 'Actuarial Analysis',
      description: 'Advanced pricing and reserving calculations',
      icon: Calculator
    }
  ];

  const insuranceLines = [
    { line: 'Auto Insurance', icon: Car, description: 'Comprehensive auto claims and underwriting' },
    { line: 'Property Insurance', icon: Home, description: 'Property damage assessment and processing' },
    { line: 'Life Insurance', icon: HeartHandshake, description: 'Life and disability claims automation' },
    { line: 'Workers Compensation', icon: Briefcase, description: 'Work injury claims and case management' },
    { line: 'Commercial Lines', icon: Building, description: 'Complex commercial risk assessment' },
    { line: 'Specialty Insurance', icon: Plane, description: 'Aviation, marine, and specialty coverage' }
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
                  Specialized AI for{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                    Insurance Companies and Brokers
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Revolutionize claims processing, risk underwriting, and policyholder service with AI 
                  that understands policies, detects fraud, and accelerates approvals.{' '}
                  <span className="text-blue-600 font-bold">Efficiency and precision</span> for the insurance market.
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
                  <Button variant="ai_primary" size="xl" className="group shadow-2xl bg-blue-600 hover:bg-blue-700">
                    Request Insurance Demo
                    <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Claims Analysis
                    <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                          <div className="text-xs text-ai-medium">Claim Filed</div>
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
                          <div className="text-xs text-ai-medium">Settled</div>
                        </div>
                      </div>
                    </div>

                    {/* Insurance Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">3hrs</div>
                        <div className="text-xs text-ai-medium">Claims Processing</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">95%</div>
                        <div className="text-xs text-ai-medium">Fraud Detection</div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">Deep Understanding of Insurance Market</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    The insurance sector operates with tight margins and complex risks, where each underwriting 
                    or claims decision directly impacts profitability. Insurers process millions of policies 
                    and claims annually, each requiring detailed risk analysis, coverage validation, and possible fraud detection.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    The complexity of insurance products, from life insurance to specialized business coverages, 
                    requires deep understanding of technical terms, specific regulations, and risk patterns that 
                    generic solutions simply cannot process adequately.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Our Specialized Solution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    AI.DATA was developed specifically for the insurance market, trained on millions of policies, 
                    claims, and sector documents. Our AI understands insurance technical language, identifies 
                    sophisticated fraud patterns, and accelerates underwriting processes while maintaining the 
                    precision necessary to protect insurer profitability.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    The system integrates with brokers, service providers, and credentialed networks, creating 
                    an automated ecosystem that benefits all participants in the insurance value chain.
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

        {/* Insurance Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Insurance{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive AI capabilities specifically designed for insurance operations, 
                from claims processing to risk assessment and fraud detection.
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
                  Insurance Lines Coverage
                </h3>
                <p className="text-ai-medium">
                  Comprehensive AI solutions across all major insurance product lines
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Insurance Compliance & Security
                </h3>
                <p className="text-ai-medium">
                  Built to meet insurance industry standards and regulatory requirements
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
            </div>
          </div>
        </section>

        {/* Insurance Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Insurance{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Specialized AI solutions designed specifically for insurance operations, 
                from claims processing to risk underwriting and fraud detection.
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
                Insurance{' '}
                <span className="bg-gradient-to-r from-blue-600 to-ai-green bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how insurance companies and brokers are transforming operations and 
                improving profitability with ITCygnus specialized AI solutions.
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
                Insurance Operations?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading insurance companies that have already revolutionized their claims processing 
              and underwriting with ITCygnus specialized AI solutions. Start improving profitability today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: FileText, value: '3 hrs', label: 'Claims Processing' },
                { icon: Eye, value: '95%', label: 'Fraud Detection' },
                { icon: BarChart3, value: '30%', label: 'Faster Underwriting' },
                { icon: Users, value: '200+', label: 'Insurance Clients' }
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
                variant="ai_primary" 
                size="xl" 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl group"
              >
                Request Insurance Demo
                <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Claims Analysis
                <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Insurance Guide
                <Download className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our insurance specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-blue-400 hover:text-blue-300 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:insurance@itcygnus.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                insurance@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}