'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Download, Play, Calculator, FileText, BookOpen, Shield, Video, Users, Clock, Phone, Mail, MapPin, Calendar, Headphones, Globe, Award, Star, Zap, Target, BarChart3, Lightbulb, Rocket, Building2, ExternalLink, Presentation as PresentationChart, AlertCircle, User, MessageSquare, FileCheck, Briefcase, TrendingUp, Database, Settings, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const freeResources = [
    {
      title: 'Complete Guide: "Implementing AI in 7 Days"',
      description: 'Step-by-step manual for implementing enterprise AI solutions, from initial assessment to go-live. Includes project templates, validation checklists, and detailed timeline based on our proven methodology.',
      type: '45-page PDF',
      downloadType: 'Free Download',
      icon: BookOpen,
      color: 'ai-blue',
      features: [
        'Project templates and checklists',
        'Detailed implementation timeline',
        'Risk assessment frameworks',
        'Success measurement metrics'
      ]
    },
    {
      title: 'Enterprise AI ROI Calculator',
      description: 'Calculate return on investment specific to your use case. Our calculator considers document volume, labor costs, processing time, and complexity to generate accurate savings projections.',
      type: 'Interactive Tool',
      downloadType: 'Free Access',
      icon: Calculator,
      color: 'ai-green',
      features: [
        'Customized ROI projections',
        'Industry-specific calculations',
        'Detailed cost breakdown',
        'Implementation timeline estimates'
      ]
    },
    {
      title: 'Template: "Business Case for AI"',
      description: 'Ready-made presentation to convince your board about AI investments. Includes slides on ROI, risks, timeline, and success metrics, based on real approval cases.',
      type: 'Editable PowerPoint',
      downloadType: 'Free Download',
      icon: PresentationChart,
      color: 'ai-blue',
      features: [
        'Executive-ready presentation',
        'ROI and risk analysis slides',
        'Real success case examples',
        'Customizable for your industry'
      ]
    },
    {
      title: 'Whitepaper: "AI and GDPR - Practical Compliance"',
      description: 'Technical guide on implementing AI while maintaining full GDPR compliance. Includes audit checklist, consent templates, and examples of necessary documentation.',
      type: '32-page PDF',
      downloadType: 'Free Download',
      icon: Shield,
      color: 'ai-green',
      features: [
        'GDPR compliance checklist',
        'Legal consent templates',
        'Data protection guidelines',
        'Audit documentation examples'
      ]
    }
  ];

  const resourceCategories = [
    {
      title: 'Implementation Guides',
      description: 'Step-by-step guides for successful AI deployment',
      icon: Rocket,
      count: '5+ Guides'
    },
    {
      title: 'Templates & Checklists',
      description: 'Ready-to-use templates for project management',
      icon: FileCheck,
      count: '12+ Templates'
    },
    {
      title: 'ROI Calculators',
      description: 'Interactive tools for investment analysis',
      icon: Calculator,
      count: '3+ Calculators'
    },
    {
      title: 'Technical Whitepapers',
      description: 'Deep-dive technical documentation',
      icon: BookOpen,
      count: '8+ Papers'
    },
    {
      title: 'Webinars & Demos',
      description: 'Live and recorded educational content',
      icon: Video,
      count: '20+ Videos'
    },
    {
      title: 'Success Stories',
      description: 'Detailed case studies and results',
      icon: Award,
      count: '15+ Cases'
    }
  ];

  const contactMethods = [
    {
      title: 'Personalized Demo',
      description: 'See our AI platform tailored to your specific industry and use cases',
      duration: '30 minutes',
      icon: Play,
      action: 'Schedule Demo',
      link: '/demo'
    },
    {
      title: 'Free Consulting',
      description: 'Strategic consultation with our AI transformation experts',
      duration: '1 hour',
      icon: MessageSquare,
      action: 'Book Consultation',
      link: '#'
    },
    {
      title: 'ROI Analysis',
      description: 'Detailed return on investment analysis for your specific case',
      duration: 'No commitment',
      icon: BarChart3,
      action: 'Calculate ROI',
      link: '/roi-calculator'
    },
    {
      title: 'Technical Support',
      description: 'Round-the-clock technical assistance and expert guidance',
      duration: '24/7',
      icon: Headphones,
      action: 'Contact Support',
      link: '#'
    }
  ];

  const offices = [
    {
      name: 'São Paulo Office',
      type: 'Headquarters',
      address: 'Av. Paulista, 1.374 - 12th floor',
      city: 'Bela Vista, São Paulo - SP',
      zip: 'ZIP: 01310-100, Brazil',
      phone: '+55 (11) 3456-7890',
      email: 'contato@itcygnus.com',
      flag: '🇧🇷'
    },
    {
      name: 'Orlando Office',
      type: 'International Operations',
      address: '1395 Brickell Ave, Suite 800',
      city: 'Orlando, FL 33131, USA',
      zip: '',
      phone: '+1 (305) 555-0123',
      email: 'contact@itcygnus.com',
      flag: '🇺🇸'
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
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Resources to Accelerate Your{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Digital Transformation
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Access our specialized guides, templates, calculators, and tools developed to help 
                business leaders successfully implement AI. All resources are{' '}
                <span className="text-ai-green font-bold">completely free</span> and based on{' '}
                <span className="text-ai-blue font-bold">proven methodologies</span> from 100+ successful implementations.
              </p>

              {/* Resource Categories Overview */}
              <div 
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {resourceCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-ai-light/50 text-center">
                      <div className="w-10 h-10 bg-ai-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-ai-blue" />
                      </div>
                      <div className="text-xs font-bold text-ai-green mb-1">{category.count}</div>
                      <h3 className="text-sm font-semibold text-ai-dark mb-1">{category.title}</h3>
                      <p className="text-xs text-ai-medium">{category.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Featured{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Free Resources
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Download our most popular resources, used by thousands of business leaders 
                to successfully implement AI in their organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {freeResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Header */}
                      <div className={`bg-gradient-to-r from-${resource.color}/10 to-${resource.color}/5 p-6 border-b border-ai-light/20`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className={`w-16 h-16 bg-${resource.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`w-8 h-8 text-${resource.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <span className={`text-xs font-bold text-${resource.color} bg-${resource.color}/10 px-2 py-1 rounded-full mr-2`}>
                                  {resource.downloadType}
                                </span>
                                <span className="text-xs text-ai-medium font-medium">
                                  {resource.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-ai-dark leading-tight">
                                {resource.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-ai-medium leading-relaxed mb-6">
                          {resource.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-sm font-semibold text-ai-dark mb-3">What's Included:</h4>
                          {resource.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle2 className={`w-4 h-4 text-${resource.color} flex-shrink-0`} />
                              <span className="text-sm text-ai-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button 
                          className={`w-full bg-${resource.color} hover:bg-${resource.color}/90 text-white group`}
                          size="lg"
                        >
                          <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                          Download Now - Free
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Resources CTA */}
            <div className="text-center mt-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Access Our Complete Resource Library
                </h3>
                <p className="text-ai-medium mb-6 leading-relaxed">
                  Get access to our full collection of implementation guides, industry-specific templates, 
                  technical documentation, and exclusive webinar recordings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="ai_primary" size="lg" className="group">
                    Browse All Resources
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="lg" className="group">
                    Subscribe for Updates
                    <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Let's Transform Your{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Company Together
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Contact our specialists to discover how AI can revolutionize your processes. 
                We offer free consulting and personalized demos for your industry.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{method.title}</h3>
                      <p className="text-sm text-ai-medium mb-4 leading-relaxed">{method.description}</p>
                      <div className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full mb-4">
                        {method.duration}
                      </div>
                      <Link href={method.link}>
                        <Button variant="ai_outline" size="sm" className="w-full group">
                          {method.action}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Information */}
            <div className="grid lg:grid-cols-2 gap-12">
              {offices.map((office, index) => (
                <Card key={index} className="shadow-xl border-ai-light/50">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-3xl">{office.flag}</div>
                      <div>
                        <h3 className="text-xl font-bold text-ai-dark">{office.name}</h3>
                        <p className="text-ai-blue font-medium">{office.type}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-ai-green mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-ai-dark font-medium">{office.address}</p>
                          <p className="text-ai-medium">{office.city}</p>
                          {office.zip && <p className="text-ai-medium">{office.zip}</p>}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-ai-blue flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-ai-dark hover:text-ai-blue transition-colors">
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-ai-dark hover:text-ai-green transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-ai-dark mb-6">Business Hours & Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <Calendar className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                    <div className="font-semibold text-ai-dark">Business Hours</div>
                    <div className="text-sm text-ai-medium">Monday to Friday: 8am to 6pm (EST)</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <Headphones className="w-6 h-6 text-ai-green mx-auto mb-2" />
                    <div className="font-semibold text-ai-dark">Technical Support</div>
                    <div className="text-sm text-ai-medium">Available 24/7</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <AlertCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <div className="font-semibold text-ai-dark">Emergencies</div>
                    <div className="text-sm text-ai-medium">
                      <a href="tel:+1-305-555-0199" className="text-red-500 hover:text-red-600 transition-colors">
                        +1 (305) 555-0199
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                AI Journey?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Download our free resources, schedule a personalized demo, or speak directly with our 
              specialists. We're here to help you succeed with AI transformation.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Download, value: '50K+', label: 'Resources Downloaded' },
                { icon: Users, value: '100+', label: 'Successful Implementations' },
                { icon: Star, value: '4.9/5', label: 'Customer Satisfaction' },
                { icon: Headphones, value: '24/7', label: 'Expert Support' }
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
              <Link href="/demo">
                <Button 
                  variant="ai_primary" 
                  size="xl" 
                  className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
                >
                  Schedule Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Download Resources
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Contact Specialist
                <MessageSquare className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact us at{' '}
              <a href="tel:+1-305-555-0123" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (305) 555-0123
              </a>{' '}
              or{' '}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
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