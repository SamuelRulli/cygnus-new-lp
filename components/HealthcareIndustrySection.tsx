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
    { icon: ShieldCheck, text: 'Full compliance with medical regulations' },
    { icon: Database, text: 'Integration with hospital systems' },
    { icon: FileText, text: 'Processing of reports and medical records' },
    { icon: Search, text: 'Automatic medical fraud detection' }
  ];

  const healthcareSolutions = [
    {
      title: 'Intelligent Medical Records Processing',
      description: 'Our specialized AI.OCR solution processes medical records, exam reports, and prescriptions with over 99.5% accuracy, recognizing even complex medical handwriting. The system automatically validates critical information like dosages, allergies, and contraindications.',
      details: 'Native integration with hospital systems like Epic, Cerner, and Allscripts allows information to be automatically entered into electronic health records, eliminating rework and reducing transcription errors.',
      icon: FileText,
      product: 'AI.OCR',
      link: '/solutions/ai-ocr'
    },
    {
      title: 'Medical Claims Automation',
      description: 'AI.DATA revolutionizes claims processing, automatically analyzing procedure eligibility, validating procedure codes, and detecting possible fraud in real-time. Our AI understands the complex rules of each health plan.',
      details: 'The system integrates with providers, laboratories, and pharmacies, creating an automated flow that reduces reimbursement time from weeks to hours, improving beneficiary satisfaction.',
      icon: Heart,
      product: 'AI.DATA',
      link: '/solutions/ai-data'
    },
    {
      title: 'Intelligent Medical Document Management',
      description: 'AI.DOC automatically organizes and classifies millions of medical documents, from imaging exams to surgical reports. Our semantic search allows doctors to quickly find relevant histories and critical information.',
      details: 'The system maintains complete audit trails of access and modifications, ensuring compliance with medical regulations and facilitating hospital accreditation processes.',
      icon: FolderOpen,
      product: 'AI.DOC',
      link: '/solutions/ai-doc'
    }
  ];

  const useCases = [
    {
      title: 'Large Hospital Network Transformation',
      description: 'A 25-hospital network implemented our complete AI suite to automate patient records, claims processing, and document management. The system processes 50,000+ patient interactions daily with full Epic integration.',
      result: 'Reduced administrative costs by $12M annually while improving patient care quality scores by 35%. Claims processing time decreased from 7 days to 4 hours, with 99.8% accuracy in medical coding.',
      icon: Hospital,
      industry: 'Hospital Network',
      stats: { savings: '$12M', quality: '35%', time: '4 hours' }
    },
    {
      title: 'Health Insurance Provider Innovation',
      description: 'A major health insurer serving 3M+ members deployed AI.DATA for automated claims processing, fraud detection, and prior authorization. The AI handles complex medical necessity determinations automatically.',
      result: 'Detected $1M+ in fraudulent claims annually while reducing claim denials by 45%. Member satisfaction increased 40% due to faster approvals and fewer administrative delays.',
      icon: Building2,
      industry: 'Health Insurance',
      stats: { fraud_detection: '$1M+', denials: '45%', satisfaction: '40%' }
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
    { icon: Clock, stat: '40%', label: 'Of physician time spent on paperwork' },
    { icon: DollarSign, stat: '$375B', label: 'Annual healthcare administrative costs' },
    { icon: AlertTriangle, stat: '25%', label: 'Claims require manual review' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'HIPAA-compliant AI processing' },
    { icon: CheckCircle, benefit: 'Real-time EMR integration' },
    { icon: CheckCircle, benefit: 'Medical terminology understanding' },
    { icon: CheckCircle, benefit: 'Automated regulatory compliance' }
  ];

  const medicalCapabilities = [
    {
      title: 'Medical Handwriting Recognition',
      description: 'AI trained on physician handwriting patterns',
      icon: FileCheck
    },
    {
      title: 'ICD-10 Code Validation',
      description: 'Automatic diagnosis and procedure coding',
      icon: Clipboard
    },
    {
      title: 'Drug Interaction Analysis',
      description: 'Real-time prescription safety checking',
      icon: Pill
    },
    {
      title: 'Medical Imaging Integration',
      description: 'DICOM file processing and analysis',
      icon: Scan
    },
    {
      title: 'Clinical Decision Support',
      description: 'Evidence-based treatment recommendations',
      icon: Brain
    },
    {
      title: 'Patient Risk Assessment',
      description: 'Predictive analytics for health outcomes',
      icon: Activity
    },
    {
      title: 'Appointment Optimization',
      description: 'Intelligent scheduling and resource allocation',
      icon: Calendar
    },
    {
      title: 'Quality Metrics Tracking',
      description: 'Automated compliance and quality reporting',
      icon: BarChart3
    },
    {
      title: 'Prior Authorization Automation',
      description: 'Streamlined insurance approval processes',
      icon: UserCheck
    }
  ];

  const complianceFeatures = [
    'HIPAA Compliant',
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
                  Specialized AI for{' '}
                  <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                    Healthcare
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Transform operational efficiency of your hospital, clinic, or health plan 
                  with AI solutions developed specifically for the medical environment.{' '}
                  <span className="text-red-500 font-bold">Full compliance</span> with healthcare regulations.
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
                    Schedule Medical Demo
                    <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Download Clinical Case
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
                          <div className="text-xs text-ai-medium">Medical Records</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-blue animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-ai-blue" />
                          </div>
                          <div className="text-xs text-ai-medium">AI Processing</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-ai-green" />
                          </div>
                          <div className="text-xs text-ai-medium">Automated</div>
                        </div>
                      </div>
                    </div>

                    {/* Healthcare Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-red-500 mb-1">99.5%</div>
                        <div className="text-xs text-ai-medium">Medical Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">HIPAA</div>
                        <div className="text-xs text-ai-medium">Compliant</div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">Healthcare's Unique Challenges</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    The healthcare sector faces growing pressure to reduce costs while improving care quality. 
                    Hospitals process thousands of documents daily - from medical records to test results - 
                    but still rely on manual processes that consume precious time from healthcare professionals.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    The complexity of medical terminology, need for absolute precision, and strict sector 
                    regulations make automation a unique challenge. Generic AI solutions simply don't understand 
                    medical context, generating errors that can have serious consequences.
                  </p>

                  <p className="text-lg text-ai-medium leading-relaxed">
                    Health plans face the additional challenge of processing millions of claims monthly, 
                    validating procedures, detecting fraud, and ensuring regulatory compliance.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Our Medical Specialization</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    ITCygnus developed healthcare-specific solutions, trained on millions of real medical 
                    documents and validated by healthcare professionals. Our AI understands medical 
                    terminology, procedure codes, ICD-10, and the particularities of healthcare systems.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    We work with reference hospitals, major health plans, and specialized clinics to create 
                    solutions that not only automate processes but improve care quality and reduce operational 
                    risks. Our technology is certified for medical use and meets all sector regulations.
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
                Advanced Medical{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive AI capabilities specifically designed for healthcare workflows, 
                medical terminology, and regulatory compliance requirements.
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
            <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Hospital System Integrations
                </h3>
                <p className="text-ai-medium">
                  Native integration with major Electronic Medical Record (EMR) systems
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
            </div>

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
                Healthcare{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Specialized AI solutions designed specifically for healthcare workflows, 
                from patient records to claims processing and document management.
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
                            Learn More About {solution.product}
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
                Healthcare{' '}
                <span className="bg-gradient-to-r from-red-500 to-ai-blue bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how healthcare organizations are transforming operations and improving 
                patient care with ITCygnus specialized AI solutions.
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500 to-ai-blue rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-red-400 to-ai-blue bg-clip-text text-transparent">
                Healthcare Operations?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading healthcare organizations that have already revolutionized their operations 
              with ITCygnus specialized AI solutions. Start improving patient care while reducing costs today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Heart, value: '99.5%', label: 'Medical Accuracy' },
                { icon: Shield, value: 'HIPAA', label: 'Compliant' },
                { icon: Clock, value: '75%', label: 'Time Savings' },
                { icon: Users, value: '1000+', label: 'Healthcare Providers' }
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
                Schedule Medical Demo
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
              <Link href="/roi-calculator?type=healthcare">
                <Button 
                  variant="ghost" 
                  size="xl" 
                  className="text-white hover:bg-white/10 group"
                >
                  Healthcare ROI Calculator
                  <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our healthcare specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-red-400 hover:text-red-300 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:healthcare@itcygnus.com" className="text-red-400 hover:text-red-300 transition-colors">
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
