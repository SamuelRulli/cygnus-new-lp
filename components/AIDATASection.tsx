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
  Zap,
  Activity,
  FileText,
  Brain,
  Cpu,
  Database,
  Hospital,
  Building2,
  Stethoscope,
  TrendingUp,
  Clock,
  Users,
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
  Search
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIDATASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Activity, text: 'Automatic claims processing' },
    { icon: Shield, text: 'Real-time fraud detection' },
    { icon: Globe, text: 'Integration with payers and providers' },
    { icon: Lock, text: 'Full regulatory compliance' }
  ];

  const features = [
    {
      title: 'Medical AI Specialization',
      description: 'AI.DATA was developed based on millions of real medical documents, trained to understand medical terminology, procedure codes, ICD-10, and specific healthcare system procedures. Our AI recognizes complex medical patterns that generic solutions cannot process.',
      details: 'The system automatically validates procedure eligibility, checks compatibility between diagnoses and treatments, and identifies inconsistencies that may indicate errors or fraud. This ensures only legitimate claims are approved, protecting your organization from financial losses.',
      icon: Brain
    },
    {
      title: 'Healthcare Ecosystem Integration',
      description: 'Our solution connects natively with payer systems, service providers, laboratories, and pharmacies, creating an automated information flow that eliminates rework and accelerates approvals.',
      details: 'We integrate with major hospital systems (Epic, Cerner, Allscripts) and payers (Anthem, Aetna, UnitedHealth), ensuring implementation is fast and without operational interruptions.',
      icon: Database
    },
    {
      title: 'Advanced Fraud Detection',
      description: 'Real-time analysis of claim patterns using machine learning algorithms that detect anomalies, duplicate submissions, and suspicious billing patterns before they become costly problems.',
      details: 'Our fraud detection system analyzes provider behavior, patient history, and claim patterns across multiple data points, flagging potentially fraudulent activities with 99.2% accuracy while minimizing false positives.',
      icon: Search
    },
    {
      title: 'Automated Workflow Engine',
      description: 'Intelligent routing and processing of claims based on complexity, value, and risk factors. Automated approvals for routine claims while flagging complex cases for human review.',
      details: 'Configurable business rules engine allows customization of approval workflows, escalation procedures, and exception handling. Complete audit trails ensure regulatory compliance and transparency.',
      icon: Workflow
    }
  ];

  const useCases = [
    {
      title: 'Large Health Insurance Provider',
      description: 'A major health insurer processing 2 million claims monthly implemented AI.DATA to automate their entire claims workflow. The system processes routine claims in under 2 minutes while maintaining rigorous fraud detection protocols.',
      result: 'Reduced claims processing time by 85%, from 7 days to 2 hours average. Detected $12M in fraudulent claims annually while reducing operational costs by $8M. Achieved 99.8% accuracy in automated decisions.',
      icon: Building2,
      industry: 'Health Insurance',
      stats: { time: '85%', savings: '$8M', accuracy: '99.8%' }
    },
    {
      title: 'Regional Hospital Network',
      description: 'A 15-hospital network integrated AI.DATA with their Epic system to automate pre-authorization requests and claims submissions. The AI validates medical necessity and ensures proper coding before submission.',
      result: 'Increased first-pass approval rate from 78% to 95%, reducing resubmission costs by $2.3M annually. Accelerated reimbursement cycles from 45 days to 12 days average.',
      icon: Hospital,
      industry: 'Hospital Network',
      stats: { approval: '95%', cycle: '12 days', savings: '$2.3M' }
    },
    {
      title: 'Specialty Medical Practice',
      description: 'A multi-specialty practice with complex procedures implemented AI.DATA to handle prior authorizations and claims for specialized treatments including oncology, cardiology, and orthopedic procedures.',
      result: 'Reduced administrative overhead by 60%, allowing clinical staff to focus on patient care. Improved cash flow with 40% faster reimbursements and 25% reduction in claim denials.',
      icon: Stethoscope,
      industry: 'Specialty Practice',
      stats: { overhead: '60%', reimbursement: '40%', denials: '25%' }
    }
  ];

  const medicalCapabilities = [
    {
      title: 'ICD-10 and CPT Code Validation',
      description: 'Automatic validation of diagnosis and procedure codes',
      icon: FileText
    },
    {
      title: 'Medical Necessity Assessment',
      description: 'AI-powered evaluation of treatment appropriateness',
      icon: Stethoscope
    },
    {
      title: 'Prior Authorization Automation',
      description: 'Streamlined pre-approval process for treatments',
      icon: CheckCircle
    },
    {
      title: 'Drug Interaction Checking',
      description: 'Automated validation of prescription combinations',
      icon: Activity
    },
    {
      title: 'Provider Credentialing Verification',
      description: 'Real-time validation of healthcare provider credentials',
      icon: Shield
    },
    {
      title: 'Claims Adjudication Rules',
      description: 'Intelligent application of payer-specific rules',
      icon: Brain
    }
  ];

  const complianceFeatures = [
    'HIPAA Compliant Processing',
    'SOC 2 Type II Certified',
    'HL7 FHIR Integration',
    'CMS Compliance Ready',
    'Real-time Audit Trails',
    '256-bit Encryption'
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
                  AI.DATA: Healthcare Claims{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Processing Revolution
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Completely automate your claims process with specialized medical AI. 
                  Reduce processing time from{' '}
                  <span className="text-ai-green font-bold">weeks to hours</span>, with{' '}
                  <span className="text-ai-blue font-bold">99.8% accuracy</span> and automatic fraud detection.
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
                    Request Medical Demo
                    <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group">
                    Calculate Savings
                    <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  {/* Healthcare Processing Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Medical Icons Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Heart, color: 'text-red-500' },
                        { icon: Activity, color: 'text-ai-blue' },
                        { icon: Stethoscope, color: 'text-ai-green' },
                        { icon: FileText, color: 'text-ai-blue' },
                        { icon: Shield, color: 'text-ai-green' },
                        { icon: Brain, color: 'text-ai-blue' },
                        { icon: Database, color: 'text-ai-green' },
                        { icon: Lock, color: 'text-ai-blue' },
                        { icon: CheckCircle, color: 'text-ai-green' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-ai-blue/10 to-ai-green/10"
                          >
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                    {/* Processing Flow */}
                    <div className="bg-ai-dark/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Clock className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="text-xs text-ai-medium">7 Days</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-blue animate-pulse" />
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Zap className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="text-xs text-ai-medium">2 Hours</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">99.8%</div>
                        <div className="text-xs text-ai-medium">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">85%</div>
                        <div className="text-xs text-ai-medium">Faster</div>
                      </div>
                    </div>

                    {/* Floating Medical Cross */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Specialization Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                AI Specifically Trained for{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Healthcare
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Unlike generic solutions, AI.DATA was built from the ground up to understand 
                the complexities of medical claims processing and healthcare regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalCapabilities.map((capability, index) => {
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

            {/* Compliance Features */}
            <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Full Regulatory Compliance
                </h3>
                <p className="text-ai-medium">
                  Built to meet the highest healthcare industry standards and regulations
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-3 bg-ai-green/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-ai-green mx-auto mb-2" />
                    <div className="text-sm font-medium text-ai-dark">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Healthcare{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  AI Features
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Specialized capabilities designed specifically for the healthcare industry's 
                unique requirements and regulatory environment.
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
                Healthcare{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how healthcare organizations are revolutionizing their claims processing 
                with AI.DATA's specialized medical AI.
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
                            <div className="text-xs text-ai-medium capitalize">{key}</div>
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Claims Processing?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading healthcare organizations that have already transformed their claims processing 
              with AI.DATA. Start reducing costs and improving accuracy today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Activity, value: '99.8%', label: 'Processing Accuracy' },
                { icon: Clock, value: '85%', label: 'Time Reduction' },
                { icon: Shield, value: '100%', label: 'HIPAA Compliant' },
                { icon: Users, value: '1000+', label: 'Healthcare Providers' }
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
                Request Medical Demo
                <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Calculate Savings
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Healthcare Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our healthcare specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:healthcare@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                healthcare@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}