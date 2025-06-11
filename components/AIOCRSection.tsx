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
    { icon: Target, text: '99.9% guaranteed accuracy' },
    { icon: Zap, text: '50x faster processing' },
    { icon: Globe, text: '40+ language support' },
    { icon: Shield, text: 'Integration with any system' }
  ];

  const features = [
    {
      title: 'Intelligent Context Recognition',
      description: 'Our AI doesn\'t just identify individual characters but understands the contextual meaning of each word and phrase. This enables automatic error correction, data validation, and intelligent information structuring, even in poor-quality documents or complex handwriting.',
      details: 'The system recognizes specific patterns like SSNs, tax IDs, dates, monetary values, and codes, applying automatic validation and standardized formatting. This eliminates common typing errors and ensures consistency in extracted data.',
      icon: Brain
    },
    {
      title: 'Complex Document Processing',
      description: 'Unlike basic solutions that fail with non-standardized layouts, AI.OCR processes complex tables, multi-column forms, handwritten documents, and even low-quality images with exceptional accuracy.',
      details: 'Our intelligent segmentation technology automatically identifies different document sections, extracting relevant information and organizing it into useful data structures for your downstream systems.',
      icon: FileText
    },
    {
      title: 'Native Integration and Robust APIs',
      description: 'AI.OCR integrates seamlessly with your existing systems through RESTful APIs, webhooks, and pre-built connectors for popular ERPs like SAP, Oracle, and Microsoft Dynamics.',
      details: 'Our microservices architecture enables gradual implementation, starting with specific use cases and expanding as you prove value. We support both batch and real-time processing, adapting to your operational needs.',
      icon: Cpu
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Transformation',
      description: 'Hospitals and clinics use AI.OCR to digitize medical records, process exam results, and automate data entry into hospital systems. Our technology recognizes medical handwriting with 98% accuracy, including prescriptions and clinical notes.',
      result: 'A 500-bed hospital saved $240,000 annually by automating the processing of 8,000 medical documents monthly, reducing result availability time from 24 hours to 15 minutes.',
      icon: Hospital,
      industry: 'Healthcare'
    },
    {
      title: 'Financial Sector Revolution',
      description: 'Banks and insurers process contracts, policies, and KYC documents automatically, accelerating approvals and reducing operational risks. Our solution extracts critical data like values, due dates, and customer information with banking-grade accuracy.',
      result: 'An insurance company reduced claims processing time from 5 days to 2 hours, automatically processing 15,000 documents monthly and saving $180,000 in operational costs.',
      icon: Building2,
      industry: 'Financial Services'
    },
    {
      title: 'Public Sector Modernization',
      description: 'Government agencies digitize historical archives, process citizen forms, and automate administrative protocols. Our technology processes documents with superior accuracy, including handwritten forms and official stamps.',
      result: 'A city government digitized 500,000 historical documents in 6 months, creating a searchable digital archive that improved citizen service and reduced storage costs by 70%.',
      icon: Landmark,
      industry: 'Government'
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
                  AI.OCR: Transform Any Document into{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Structured Data
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  The most accurate optical character recognition solution in the market. 
                  Process contracts, invoices, medical reports, and forms with{' '}
                  <span className="text-ai-green font-bold">99.9% accuracy</span>,{' '}
                  <span className="text-ai-blue font-bold">50x faster</span> than manual typing.
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
                    Try Free for 7 Days
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group">
                    Watch Live Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  <h2 className="text-3xl font-bold text-ai-dark">The Problem You Face</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Your company processes thousands of documents monthly, but still relies on manual typing 
                    or inaccurate OCR solutions that generate more work than savings. Transcription errors cost 
                    time, money, and credibility, while your team wastes hours on repetitive tasks that could be automated.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Handwritten documents, complex forms, and non-standardized layouts are nightmares for traditional 
                    OCR solutions. You need technology that understands context, automatically corrects errors, 
                    and adapts to your specific documents, not the other way around.
                  </p>

                  {/* Problem Stats */}
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
                    <h4 className="font-bold text-red-800 mb-4">Current Challenges:</h4>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-center"><Clock className="w-4 h-4 mr-2" />Hours wasted on manual data entry</li>
                      <li className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />High error rates costing credibility</li>
                      <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2" />Rising operational costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-ai-green mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">Our Revolutionary Solution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    AI.OCR uses advanced neural networks trained on millions of documents to recognize text 
                    with human accuracy but superhuman speed. Our AI doesn't just read characters - 
                    it understands context, validates information, and structures data automatically.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Unlike generic solutions, our system learns from your specific documents, continuously 
                    improving accuracy for your use cases. Whether medical handwriting, government forms, 
                    or legal contracts, AI.OCR adapts and evolves.
                  </p>

                  {/* Solution Benefits */}
                  <div className="bg-ai-green/10 rounded-2xl p-6 border-l-4 border-ai-green">
                    <h4 className="font-bold text-ai-green mb-4">AI.OCR Advantages:</h4>
                    <ul className="space-y-2 text-ai-dark">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-ai-green" />Human-level accuracy with machine speed</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-ai-green" />Context-aware processing</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-ai-green" />Continuous learning and improvement</li>
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
                Advanced Technical{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Discover the cutting-edge technology that makes AI.OCR the most accurate 
                and reliable document processing solution available.
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
                Real-World{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how organizations across industries are transforming their operations with AI.OCR.
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
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Document Processing?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of organizations that have already revolutionized their operations with AI.OCR. 
              Start your free trial today and experience the future of document processing.
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
                Try Free for 7 Days
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Watch Live Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Datasheet
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our AI specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:ai-ocr@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                ai-ocr@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}