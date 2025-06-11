'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FolderOpen,
  CheckCircle,
  ArrowRight,
  Play,
  Search,
  Workflow,
  FileText,
  Shield,
  Clock,
  Brain,
  Cpu,
  Database,
  Hospital,
  Building2,
  Landmark,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Archive,
  GitBranch,
  Zap,
  Target,
  BookOpen,
  Settings,
  Network
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIDOCSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Brain, text: 'AI-powered automatic classification' },
    { icon: Search, text: 'Instant semantic search' },
    { icon: Workflow, text: 'Automated approval workflows' },
    { icon: Archive, text: 'Complete audit trail and versioning' }
  ];

  const features = [
    {
      title: 'Intelligent Document Classification',
      description: 'Our AI automatically categorizes documents by type, content, importance, and business context. The system understands document relationships and creates intelligent taxonomies that evolve with your business needs.',
      details: 'Machine learning algorithms analyze document structure, content patterns, and metadata to provide accurate classification. The system learns from user corrections and feedback, continuously improving classification accuracy over time.',
      icon: Brain
    },
    {
      title: 'Advanced Semantic Search',
      description: 'Find any document using natural language queries, even when you don\'t remember exact keywords. Our semantic search understands context, synonyms, and business terminology specific to your industry.',
      details: 'The search engine uses natural language processing to understand user intent, searching across content, metadata, and document relationships. Results are ranked by relevance, recency, and user behavior patterns.',
      icon: Search
    },
    {
      title: 'Automated Workflow Engine',
      description: 'Streamline document approval processes with intelligent routing based on content, value thresholds, and business rules. Automated notifications and escalations ensure nothing falls through the cracks.',
      details: 'Configurable workflow templates adapt to your business processes, with conditional logic, parallel approvals, and integration with external systems. Complete audit trails track every action and decision point.',
      icon: Workflow
    },
    {
      title: 'Version Control & Collaboration',
      description: 'Maintain complete document lifecycle management with automatic versioning, change tracking, and collaborative editing capabilities. Ensure teams always work with the latest approved versions.',
      details: 'Advanced version control prevents document conflicts while maintaining detailed change histories. Real-time collaboration tools enable secure sharing and editing with granular permission controls.',
      icon: GitBranch
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Documentation Management',
      description: 'Hospitals and medical practices organize patient records, medical protocols, and compliance documents with automatic classification and instant retrieval. HIPAA-compliant workflows ensure secure handling of sensitive information.',
      result: 'A medical center reduced document search time by 85% and improved compliance audit preparation from weeks to hours, while ensuring 100% HIPAA compliance across 50,000+ patient documents.',
      icon: Hospital,
      industry: 'Healthcare'
    },
    {
      title: 'Financial Services Compliance',
      description: 'Banks and financial institutions manage regulatory documents, client files, and internal policies with automated compliance workflows. Risk-based classification ensures critical documents receive appropriate oversight.',
      result: 'A regional bank automated 90% of compliance document processing, reduced regulatory preparation time by 70%, and achieved 100% audit readiness across all regulatory requirements.',
      icon: Building2,
      industry: 'Financial Services'
    },
    {
      title: 'Legal Document Management',
      description: 'Law firms and legal departments organize contracts, case files, and legal research with intelligent categorization and matter-based workflows. Advanced search capabilities enable rapid case preparation and research.',
      result: 'A law firm increased billable time by 30% through automated document organization, reduced case preparation time by 60%, and improved client service with instant document access.',
      icon: Landmark,
      industry: 'Legal Services'
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '30%', label: 'Time spent searching for documents' },
    { icon: TrendingUp, stat: '40%', label: 'Increase in document volume yearly' },
    { icon: AlertTriangle, stat: '60%', label: 'Work done on outdated versions' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Automatic document classification and tagging' },
    { icon: CheckCircle, benefit: 'Intelligent content-based relationships' },
    { icon: CheckCircle, benefit: 'Continuous learning and improvement' },
    { icon: CheckCircle, benefit: 'Seamless integration with existing systems' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                    <FolderOpen className="w-8 h-8 text-ai-green" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  AI.DOC: Intelligent Enterprise{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Document Management
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Organize, classify, and find any document in seconds. Our AI transforms 
                  document chaos into structured knowledge, with{' '}
                  <span className="text-ai-green font-bold">advanced semantic search</span> and{' '}
                  <span className="text-ai-blue font-bold">automated workflow</span>.
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
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group">
                    Schedule Demo
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
                  {/* Document Management Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Document Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[...Array(9)].map((_, i) => (
                        <div 
                          key={i}
                          className={`aspect-square rounded-lg p-3 flex items-center justify-center ${
                            i % 3 === 0 ? 'bg-ai-green/10' : i % 3 === 1 ? 'bg-ai-blue/10' : 'bg-ai-green/10'
                          }`}
                        >
                          <FileText className={`w-6 h-6 ${
                            i % 3 === 0 ? 'text-ai-green' : i % 3 === 1 ? 'text-ai-blue' : 'text-ai-green'
                          }`} />
                        </div>
                      ))}
                    </div>

                    {/* Search Bar */}
                    <div className="bg-ai-dark/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-ai-blue" />
                        <div className="flex-1 h-2 bg-ai-blue/20 rounded animate-pulse-slow"></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">85%</div>
                        <div className="text-xs text-ai-medium">Faster Search</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">100%</div>
                        <div className="text-xs text-ai-medium">Organized</div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-blue/30 rounded-full animate-pulse-slow"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">Document Chaos That Paralyzes Companies</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Your organization has thousands of documents scattered across different systems, 
                    disorganized folders, and lost emails. Employees spend 30% of their time searching 
                    for information, outdated versions circulate causing errors, and critical documents 
                    simply disappear when you need them most.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Traditional document management systems are rigid, require manual classification, 
                    and fail in search when you need them most. Compliance and auditing become nightmares 
                    when documents aren't found or are disorganized.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Our Document Management Revolution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    AI.DOC uses artificial intelligence to understand each document's content, automatically 
                    classifying by type, subject, importance, and relationships. Our semantic search finds 
                    documents even when you don't remember exact keywords.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    The system learns from your team's behavior, suggesting classifications, identifying 
                    duplicates, and creating intelligent connections between related documents. Automated 
                    workflows ensure documents follow correct approval and review processes.
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

        {/* Features & Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Document Management{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Discover the intelligent features that transform document chaos into organized, 
                searchable, and actionable business intelligence.
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
                          <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-green" />
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
                      <div className={`bg-gradient-to-br from-ai-green/5 to-ai-blue/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-ai-green/20 rounded w-full"></div>
                              <div className="h-3 bg-ai-blue/20 rounded w-3/4"></div>
                              <div className="h-3 bg-ai-green/20 rounded w-1/2"></div>
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
                Industry{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how organizations across industries are eliminating document chaos 
                and transforming their information management with AI.DOC.
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
                        <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-ai-green" />
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

                      {/* Results */}
                      <div className="bg-ai-blue/10 rounded-xl p-4 border-l-4 border-ai-blue">
                        <h4 className="font-bold text-ai-blue text-sm mb-2 flex items-center">
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to End Document{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                Chaos Forever?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of organizations that have transformed their document management 
              with AI.DOC. Start organizing, finding, and collaborating more effectively today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Search, value: '85%', label: 'Faster Search' },
                { icon: Users, value: '10+', label: 'Companies Organized' },
                { icon: Clock, value: '7 Days', label: 'Free Trial' },
                { icon: Shield, value: '100%', label: 'Compliant' }
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our document management specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:ai-doc@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                ai-doc@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}