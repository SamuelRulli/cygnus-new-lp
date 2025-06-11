'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Eye, 
  Lock, 
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
  Scale
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const privacyPrinciples = [
    {
      title: 'Transparency',
      description: 'We clearly explain what data we collect and how we use it',
      icon: Eye
    },
    {
      title: 'Minimal Collection',
      description: 'We only collect data necessary to provide our services',
      icon: Database
    },
    {
      title: 'Strong Security',
      description: 'Your data is protected with enterprise-grade security',
      icon: Lock
    },
    {
      title: 'Your Control',
      description: 'You have full control over your personal information',
      icon: Settings
    }
  ];

  const dataTypes = [
    {
      category: 'Information You Provide',
      items: [
        'Contact information (name, email, phone)',
        'Company information and job title',
        'Demo requests and form submissions',
        'Support tickets and communications'
      ]
    },
    {
      category: 'Technical Information',
      items: [
        'IP address and browser information',
        'Website usage and navigation patterns',
        'Performance and analytics data',
        'Cookie and session information'
      ]
    },
    {
      category: 'Service Usage Data',
      items: [
        'Platform usage and feature interactions',
        'Document processing metrics',
        'API calls and system performance',
        'Error logs and diagnostic information'
      ]
    }
  ];

  const yourRights = [
    {
      right: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      icon: Eye
    },
    {
      right: 'Correct Information',
      description: 'Update or correct any inaccurate personal information',
      icon: Settings
    },
    {
      right: 'Delete Data',
      description: 'Request deletion of your personal data (right to be forgotten)',
      icon: AlertCircle
    },
    {
      right: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: Download
    },
    {
      right: 'Restrict Processing',
      description: 'Limit how we process your personal information',
      icon: Lock
    },
    {
      right: 'Withdraw Consent',
      description: 'Revoke consent for data processing at any time',
      icon: User
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

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                ITCygnus{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              
              <p 
                className={`text-lg text-ai-medium mb-6 transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <strong>Last updated: June 8, 2025</strong>
              </p>

              <p 
                className={`text-xl text-ai-medium leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                ITCygnus is committed to protecting the privacy and security of personal data from our 
                users, customers, and visitors. This policy describes how we collect, use, store, and 
                protect your personal information, in full compliance with applicable data protection 
                regulations including GDPR.
              </p>
            </div>

            {/* Privacy Principles */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {privacyPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{principle.title}</h3>
                      <p className="text-sm text-ai-medium">{principle.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Information We Collect */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <Database className="w-8 h-8 text-ai-blue mr-4" />
                Information We Collect
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                We collect only information necessary to provide our services and improve your experience. 
                This includes data voluntarily provided through forms, technical cookies for site functionality, 
                and usage information for performance optimization.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dataTypes.map((type, index) => (
                  <Card key={index} className="shadow-lg border-ai-light/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-ai-dark mb-4">{type.category}</h3>
                      <ul className="space-y-2">
                        {type.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-ai-green mt-1 flex-shrink-0" />
                            <span className="text-sm text-ai-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <Settings className="w-8 h-8 text-ai-green mr-4" />
                How We Use Your Information
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                We use your data exclusively to provide our services, respond to your requests, send relevant 
                communications (only with your consent), and improve our products and services. We never sell 
                or share personal data with third parties for commercial purposes.
              </p>

              <div className="bg-ai-light/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ai-dark mb-6">Our Data Use Purposes:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Providing and maintaining our services',
                    'Processing demo requests and consultations',
                    'Customer support and technical assistance',
                    'Service improvement and feature development',
                    'Security monitoring and fraud prevention',
                    'Legal compliance and regulatory requirements',
                    'Marketing communications (with consent)',
                    'Analytics and performance optimization'
                  ].map((purpose, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">{purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <User className="w-8 h-8 text-ai-blue mr-4" />
                Your Rights
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                You have the right to access, correct, delete, or port your personal data at any time. 
                You can also revoke consents and request information about how we process your data. 
                To exercise these rights, contact us at <a href="mailto:privacy@itcygnus.com" className="text-ai-blue hover:text-ai-blue/80 transition-colors">privacy@itcygnus.com</a>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yourRights.map((right, index) => {
                  const Icon = right.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-ai-green" />
                        </div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{right.right}</h3>
                        <p className="text-sm text-ai-medium">{right.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Data Security */}
              <div className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Lock className="w-6 h-6 text-ai-blue mr-3" />
                  Data Security
                </h3>
                <p className="text-ai-medium leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'End-to-end encryption for data transmission',
                    'SOC 2 Type II certified infrastructure',
                    'Regular security audits and assessments',
                    'Multi-factor authentication requirements',
                    'Secure data centers with physical security',
                    'Employee training on data protection'
                  ].map((measure, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark text-sm">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-ai-green mr-3" />
                  Data Retention
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  We retain personal information only for as long as necessary to fulfill the purposes outlined 
                  in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
                  When data is no longer needed, we securely delete or anonymize it according to our data retention schedule.
                </p>
              </div>

              {/* International Transfers */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-ai-blue mr-3" />
                  International Data Transfers
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  As we operate globally with offices in Brazil and the United States, your personal information 
                  may be transferred to and processed in countries other than your own. We ensure appropriate 
                  safeguards are in place, including Standard Contractual Clauses and adequacy decisions, 
                  to protect your data during international transfers.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-ai-green mr-3" />
                  Cookies and Tracking
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website 
                  traffic, and understand user preferences. You can control cookie settings through your browser 
                  preferences. Essential cookies required for basic functionality cannot be disabled.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-ai-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 text-ai-green mr-3" />
                Privacy Questions?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy, need to exercise your rights, 
                or want to report a privacy concern, please contact our Data Protection Officer:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:privacy@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                      privacy@itcygnus.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-ai-blue flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+1-305-555-0123" className="text-ai-blue hover:text-ai-blue/80 transition-colors">
                      +1 (305) 555-0123
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}