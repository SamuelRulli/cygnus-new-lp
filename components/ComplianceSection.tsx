'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Scale, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  FileText, 
  Mail, 
  Phone, 
  Download,
  Calendar,
  User,
  Database,
  Settings,
  Globe,
  AlertCircle,
  Info,
  Book,
  Star,
  Award,
  Target,
  Zap,
  Clock,
  Users,
  Building2,
  Flag,
  Eye,
  Lock,
  Search,
  Activity,
  BarChart3,
  FileCheck,
  BadgeCheck,
  ShieldCheck,
  Gavel,
  Briefcase,
  Clipboard,
  Archive,
  Folder,
  HelpCircle,
  TrendingUp,
  PieChart,
  FileSearch,
  AlertTriangle,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComplianceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const complianceFrameworks = [
    {
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      region: 'European Union',
      status: 'Compliant',
      description: 'Comprehensive data protection and privacy regulation',
      icon: Globe,
      color: 'ai-blue',
      flag: '🇪🇺'
    },
    {
      name: 'HIPAA',
      fullName: 'Health Insurance Portability and Accountability Act',
      region: 'United States',
      status: 'Compliant',
      description: 'Healthcare information privacy and security standards',
      icon: Shield,
      color: 'ai-green',
      flag: '🇺🇸'
    },
    {
      name: 'SOX',
      fullName: 'Sarbanes-Oxley Act',
      region: 'United States',
      status: 'Compliant',
      description: 'Financial reporting and corporate governance standards',
      icon: BarChart3,
      color: 'ai-blue',
      flag: '🇺🇸'
    },
    {
      name: 'CCPA',
      fullName: 'California Consumer Privacy Act',
      region: 'California, USA',
      status: 'Compliant',
      description: 'Consumer privacy rights and data protection',
      icon: User,
      color: 'ai-green',
      flag: '🇺🇸'
    },
    {
      name: 'LGPD',
      fullName: 'Lei Geral de Proteção de Dados',
      region: 'Brazil',
      status: 'Compliant',
      description: 'Brazilian general data protection law',
      icon: Flag,
      color: 'ai-blue',
      flag: '🇧🇷'
    },
    {
      name: 'ISO 27001',
      fullName: 'Information Security Management',
      region: 'International',
      status: 'Certified',
      description: 'Information security management system standard',
      icon: Award,
      color: 'ai-green',
      flag: '🌍'
    }
  ];

  const complianceCapabilities = [
    {
      title: 'Data Governance',
      description: 'Comprehensive data classification, retention, and lifecycle management',
      icon: Database,
      features: [
        'Automated data classification',
        'Retention policy enforcement',
        'Data lineage tracking',
        'Privacy impact assessments'
      ]
    },
    {
      title: 'Audit Management',
      description: 'Complete audit trail and evidence collection for regulatory compliance',
      icon: Search,
      features: [
        'Immutable audit logs',
        'Automated evidence collection',
        'Compliance reporting',
        'Real-time monitoring'
      ]
    },
    {
      title: 'Risk Assessment',
      description: 'Continuous compliance risk monitoring and assessment frameworks',
      icon: AlertTriangle,
      features: [
        'Risk scoring models',
        'Compliance gap analysis',
        'Automated risk alerts',
        'Mitigation tracking'
      ]
    },
    {
      title: 'Policy Management',
      description: 'Centralized policy creation, distribution, and compliance tracking',
      icon: FileText,
      features: [
        'Policy versioning',
        'Automated distribution',
        'Acknowledgment tracking',
        'Compliance verification'
      ]
    }
  ];

  const regulatoryRequirements = [
    {
      regulation: 'GDPR Article 32',
      requirement: 'Security of Processing',
      implementation: 'End-to-end encryption, access controls, and regular security assessments',
      status: 'Implemented',
      icon: Lock
    },
    {
      regulation: 'HIPAA 164.312',
      requirement: 'Technical Safeguards',
      implementation: 'Multi-factor authentication, audit logs, and data integrity controls',
      status: 'Implemented',
      icon: Shield
    },
    {
      regulation: 'SOX Section 404',
      requirement: 'Internal Controls',
      implementation: 'Automated control testing and financial data protection',
      status: 'Implemented',
      icon: BarChart3
    },
    {
      regulation: 'CCPA Section 1798.100',
      requirement: 'Consumer Rights',
      implementation: 'Data subject request portal and automated response workflows',
      status: 'Implemented',
      icon: User
    }
  ];

  const auditProcess = [
    {
      phase: 'Planning',
      description: 'Audit scope definition and evidence collection planning',
      duration: '1-2 weeks',
      icon: Clipboard,
      activities: ['Scope definition', 'Evidence mapping', 'Timeline planning', 'Resource allocation']
    },
    {
      phase: 'Evidence Collection',
      description: 'Automated collection of compliance evidence and documentation',
      duration: '2-3 weeks',
      icon: Archive,
      activities: ['Log extraction', 'Control testing', 'Document review', 'Interview scheduling']
    },
    {
      phase: 'Assessment',
      description: 'Compliance gap analysis and risk evaluation',
      duration: '1-2 weeks',
      icon: Search,
      activities: ['Gap analysis', 'Risk assessment', 'Control evaluation', 'Finding documentation']
    },
    {
      phase: 'Reporting',
      description: 'Compliance report generation and remediation planning',
      duration: '1 week',
      icon: FileText,
      activities: ['Report generation', 'Finding prioritization', 'Remediation planning', 'Stakeholder review']
    }
  ];

  const complianceMetrics = [
    { metric: '100%', label: 'Audit Success Rate', icon: Award },
    { metric: '24/7', label: 'Compliance Monitoring', icon: Eye },
    { metric: '< 7 Days', label: 'Audit Response Time', icon: Clock },
    { metric: '99.99%', label: 'Control Effectiveness', icon: Target }
  ];

  const dataRights = [
    {
      right: 'Right to Access',
      description: 'Request access to personal data we process',
      implementation: 'Self-service portal with automated data export',
      regulation: 'GDPR Art. 15, CCPA',
      icon: Eye
    },
    {
      right: 'Right to Rectification',
      description: 'Correct inaccurate or incomplete personal data',
      implementation: 'Online correction forms with immediate processing',
      regulation: 'GDPR Art. 16, CCPA',
      icon: Settings
    },
    {
      right: 'Right to Erasure',
      description: 'Request deletion of personal data',
      implementation: 'Automated deletion workflows with verification',
      regulation: 'GDPR Art. 17, CCPA',
      icon: AlertCircle
    },
    {
      right: 'Right to Data Portability',
      description: 'Receive personal data in structured format',
      implementation: 'Standardized export formats and secure transfer',
      regulation: 'GDPR Art. 20, CCPA',
      icon: Download
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Regulatory{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Compliance
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Comprehensive compliance framework ensuring adherence to global regulations 
                including GDPR, HIPAA, SOX, and industry-specific requirements. Built-in 
                compliance{' '}
                <span className="text-ai-blue font-bold">automation and monitoring</span> for{' '}
                <span className="text-ai-green font-bold">continuous assurance</span>.
              </p>

              {/* Compliance Metrics */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {complianceMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-ai-light/50 text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <div className="text-2xl font-bold text-ai-green mb-2">{metric.metric}</div>
                      <p className="text-sm text-ai-medium font-medium">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Global Compliance{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Frameworks
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Certified compliance with major international and regional regulations, 
                ensuring your data and operations meet the highest legal standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => {
                const Icon = framework.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-${framework.color}/10 rounded-xl flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 text-${framework.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-ai-dark">{framework.name}</h3>
                            <div className="text-xs text-ai-medium flex items-center space-x-1">
                              <span>{framework.flag}</span>
                              <span>{framework.region}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`text-xs font-bold text-${framework.color} bg-${framework.color}/10 px-2 py-1 rounded-full`}>
                          {framework.status}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold text-ai-dark mb-2">{framework.fullName}</h4>
                      <p className="text-sm text-ai-medium">{framework.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Compliance{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive compliance management capabilities built into our platform, 
                providing automated monitoring, reporting, and evidence collection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-ai-dark">{capability.title}</h3>
                      </div>
                      
                      <p className="text-ai-medium leading-relaxed mb-6">{capability.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-ai-dark">Key Features:</h4>
                        {capability.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-ai-green mt-1 flex-shrink-0" />
                            <span className="text-sm text-ai-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regulatory Requirements Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Regulatory{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Implementation
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Detailed implementation of specific regulatory requirements with 
                automated controls and continuous monitoring.
              </p>
            </div>

            <div className="space-y-6">
              {regulatoryRequirements.map((req, index) => (
                <Card key={index} className="shadow-lg border-ai-light/50">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-ai-blue/10 rounded-lg flex items-center justify-center">
                          <req.icon className="w-5 h-5 text-ai-blue" />
                        </div>
                        <div>
                          <div className="font-bold text-ai-dark">{req.regulation}</div>
                          <div className="text-sm text-ai-medium">{req.requirement}</div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <p className="text-ai-medium">{req.implementation}</p>
                      </div>
                      
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ai-green/10 text-ai-green">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {req.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Rights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Data Subject{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Rights
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive implementation of data subject rights with automated 
                request processing and response workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataRights.map((right, index) => {
                const Icon = right.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-ai-green" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-ai-dark mb-2">{right.right}</h3>
                          <p className="text-sm text-ai-medium mb-3">{right.description}</p>
                          <div className="text-xs text-ai-blue bg-ai-blue/10 px-2 py-1 rounded-full inline-block">
                            {right.regulation}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-ai-light/20 rounded-lg p-4">
                        <h4 className="font-semibold text-ai-dark mb-2">Implementation:</h4>
                        <p className="text-sm text-ai-medium">{right.implementation}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Audit Process Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Compliance{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Audit Process
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Streamlined audit process with automated evidence collection and 
                comprehensive compliance reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditProcess.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      
                      <div className="text-sm text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full mb-4">
                        {phase.duration}
                      </div>
                      
                      <h3 className="text-lg font-bold text-ai-dark mb-3">{phase.phase}</h3>
                      <p className="text-sm text-ai-medium mb-4">{phase.description}</p>
                      
                      <div className="space-y-2">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="text-xs text-ai-medium bg-ai-light/20 px-2 py-1 rounded">
                            {activity}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Contact Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Compliance{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our compliance team is ready to assist with audit requests, provide compliance 
              documentation, or discuss specific regulatory requirements for your industry.
            </p>

            {/* Compliance Team Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Compliance Office',
                  contact: 'compliance@itcygnus.com',
                  description: 'General compliance inquiries',
                  icon: Scale
                },
                {
                  title: 'Audit Support',
                  contact: 'audit@itcygnus.com',
                  description: 'Audit requests and documentation',
                  icon: FileSearch
                },
                {
                  title: 'Legal Team',
                  contact: 'legal@itcygnus.com',
                  description: 'Legal and regulatory questions',
                  icon: Gavel
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-ai-green" />
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{contact.title}</div>
                    <div className="text-ai-green mb-2">{contact.contact}</div>
                    <div className="text-white/60 text-sm">{contact.description}</div>
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
                Request Compliance Assessment
                <Scale className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Download Compliance Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            <p className="text-white/60 text-sm">
              Need immediate assistance? Call our compliance hotline at{' '}
              <a href="tel:+1-305-555-0123" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (305) 555-0123
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}