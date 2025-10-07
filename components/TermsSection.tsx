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
  Clock,
  DollarSign,
  Target,
  Award,
  Headphones,
  Lock,
  Eye,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceFeatures = [
    {
      title: t('terms.serviceDescription.features.docProcessing.title'),
      description: t('terms.serviceDescription.features.docProcessing.description'),
      icon: FileText
    },
    {
      title: t('terms.serviceDescription.features.dataManagement.title'),
      description: t('terms.serviceDescription.features.dataManagement.description'),
      icon: Database
    },
    {
      title: t('terms.serviceDescription.features.processAutomation.title'),
      description: t('terms.serviceDescription.features.processAutomation.description'),
      icon: Settings
    },
    {
      title: t('terms.serviceDescription.features.apiAccess.title'),
      description: t('terms.serviceDescription.features.apiAccess.description'),
      icon: Globe
    }
  ];

  const warranties = [
    {
      title: t('terms.warranties.uptime.title'),
      description: t('terms.warranties.uptime.description'),
      icon: Clock,
      metric: '99.9%'
    },
    {
      title: t('terms.warranties.accuracy.title'),
      description: t('terms.warranties.accuracy.description'),
      icon: Target,
      metric: '99%+'
    },
    {
      title: t('terms.warranties.support.title'),
      description: t('terms.warranties.support.description'),
      icon: Headphones,
      metric: '24/7'
    },
    {
      title: t('terms.warranties.response.title'),
      description: t('terms.warranties.response.description'),
      icon: Zap,
      metric: '<2hrs'
    }
  ];

  const customerResponsibilities = t('terms.customerResponsibilities.responsibilitiesList');
  const acceptableUseProhibitions = t('terms.acceptableUse.prohibitions');
  const dataProtectionItems = t('terms.dataProtection.protectionItems');

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
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('terms.hero.title')}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t('terms.hero.titleHighlight')}
                </span>
              </h1>
              
              <p 
                className={`text-lg text-ai-medium mb-6 transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <strong>{t('terms.hero.lastUpdated')}</strong>
              </p>

              <p 
                className={`text-xl text-ai-medium leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('terms.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <FileText className="w-8 h-8 text-ai-blue mr-4" />
                {t('terms.serviceDescription.title')}
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                {t('terms.serviceDescription.description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 text-center">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{feature.title}</h3>
                        <p className="text-sm text-ai-medium">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <User className="w-8 h-8 text-ai-green mr-4" />
                {t('terms.customerResponsibilities.title')}
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                {t('terms.customerResponsibilities.description')}
              </p>

              <div className="bg-ai-light/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ai-dark mb-6">{t('terms.customerResponsibilities.responsibilitiesTitle')}</h3>
                <div className="space-y-3">
                  {Array.isArray(customerResponsibilities) && customerResponsibilities.map((responsibility: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green mt-1 flex-shrink-0" />
                      <span className="text-ai-dark">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Warranties and Limitations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <Award className="w-8 h-8 text-ai-blue mr-4" />
                {t('terms.warranties.title')}
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                {t('terms.warranties.description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {warranties.map((warranty, index) => {
                  const Icon = warranty.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-ai-green" />
                        </div>
                        <div className="text-2xl font-bold text-ai-blue mb-2">{warranty.metric}</div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{warranty.title}</h3>
                        <p className="text-sm text-ai-medium">{warranty.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Terms */}
            <div className="space-y-12">
              {/* Acceptable Use */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-ai-blue mr-3" />
                  {t('terms.acceptableUse.title')}
                </h3>
                <p className="text-ai-medium leading-relaxed mb-6">
                  {t('terms.acceptableUse.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(acceptableUseProhibitions) && acceptableUseProhibitions.map((prohibition: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-ai-dark text-sm">{prohibition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Lock className="w-6 h-6 text-ai-green mr-3" />
                  {t('terms.dataProtection.title')}
                </h3>
                <p className="text-ai-medium leading-relaxed mb-4">
                  {t('terms.dataProtection.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(dataProtectionItems) && dataProtectionItems.map((protection: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark text-sm">{protection}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Book className="w-6 h-6 text-ai-blue mr-3" />
                  {t('terms.intellectualProperty.title')}
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  {t('terms.intellectualProperty.description')}
                </p>
              </div>

              {/* Termination */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-ai-green mr-3" />
                  {t('terms.termination.title')}
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  {t('terms.termination.description')}
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 text-ai-blue mr-3" />
                  {t('terms.limitationOfLiability.title')}
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  {t('terms.limitationOfLiability.description')}
                </p>
              </div>

              {/* Updates to Terms */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-ai-green mr-3" />
                  {t('terms.updatesToTerms.title')}
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  {t('terms.updatesToTerms.description')}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-ai-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 text-ai-green mr-3" />
                {t('terms.contact.title')}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('terms.contact.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{t('terms.contact.emailLabel')}</div>
                    <a href={`mailto:${t('terms.contact.email')}`} className="text-ai-green hover:text-ai-green/80 transition-colors">
                      {t('terms.contact.email')}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-ai-blue flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{t('terms.contact.phoneLabel')}</div>
                    <a href={`tel:${t('terms.contact.phone')}`} className="text-ai-blue hover:text-ai-blue/80 transition-colors">
                      {t('terms.contact.phone')}
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
