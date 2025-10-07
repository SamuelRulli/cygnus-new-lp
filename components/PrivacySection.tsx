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
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacySection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const privacyPrinciples = [
    {
      title: t('privacy.principles.transparency.title'),
      description: t('privacy.principles.transparency.description'),
      icon: Eye
    },
    {
      title: t('privacy.principles.minimalCollection.title'),
      description: t('privacy.principles.minimalCollection.description'),
      icon: Database
    },
    {
      title: t('privacy.principles.robustSecurity.title'),
      description: t('privacy.principles.robustSecurity.description'),
      icon: Lock
    },
    {
      title: t('privacy.principles.yourControl.title'),
      description: t('privacy.principles.yourControl.description'),
      icon: Settings
    }
  ];

  const dataTypes = [
    {
      category: t('privacy.dataTypes.provided.category'),
      items: t('privacy.dataTypes.provided.items')
    },
    {
      category: t('privacy.dataTypes.technical.category'),
      items: t('privacy.dataTypes.technical.items')
    },
    {
      category: t('privacy.dataTypes.serviceUsage.category'),
      items: t('privacy.dataTypes.serviceUsage.items')
    }
  ];

  const yourRights = [
    {
      right: t('privacy.yourRights.access.right'),
      description: t('privacy.yourRights.access.description'),
      icon: Eye
    },
    {
      right: t('privacy.yourRights.correction.right'),
      description: t('privacy.yourRights.correction.description'),
      icon: Settings
    },
    {
      right: t('privacy.yourRights.deletion.right'),
      description: t('privacy.yourRights.deletion.description'),
      icon: AlertCircle
    },
    {
      right: t('privacy.yourRights.portability.right'),
      description: t('privacy.yourRights.portability.description'),
      icon: Download
    },
    {
      right: t('privacy.yourRights.revoke.right'),
      description: t('privacy.yourRights.revoke.description'),
      icon: User
    },
    {
      right: t('privacy.yourRights.info.right'),
      description: t('privacy.yourRights.info.description'),
      icon: Info
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
                  {t('privacy.title')}
                </span>
              </h1>
              
              <p 
                className={`text-lg text-ai-medium mb-6 transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <strong>{t('privacy.lastUpdated')}</strong>
              </p>

              <p 
                className={`text-xl text-ai-medium leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('privacy.intro')}
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
                {t('privacy.informationWeCollect.title')}
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                {t('privacy.informationWeCollect.description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dataTypes.map((type, index) => (
                  <Card key={index} className="shadow-lg border-ai-light/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-ai-dark mb-4">{type.category}</h3>
                      <ul className="space-y-2">
                        {type.items.map((item: string, itemIndex: number) => (
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
                {t('privacy.howWeUseInformation.title')}
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                {t('privacy.howWeUseInformation.description')}
              </p>

              <div className="bg-ai-light/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ai-dark mb-6">{t('privacy.howWeUseInformation.purposes.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t('privacy.howWeUseInformation.purposes.items').map((purpose: string, index: number) => (
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
                {t('privacy.yourRights.title')}
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                {t('privacy.yourRights.description')}
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
              <p className="text-lg text-ai-medium leading-relaxed mt-8">
                {t('privacy.yourRights.contact.prefix')} <a href="mailto:lgpd@itcygnus.com" className="text-ai-blue hover:text-ai-blue/80 transition-colors">{t('privacy.yourRights.contact.email')}</a>.
              </p>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Data Security */}
              <div className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Lock className="w-6 h-6 text-ai-blue mr-3" />
                {t('privacy.dataSecurity.title')}
              </h3>
              <p className="text-ai-medium leading-relaxed mb-4">
                {t('privacy.dataSecurity.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t('privacy.dataSecurity.items').map((measure: string, index: number) => (
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
                {t('privacy.dataRetention.title')}
              </h3>
              <p className="text-ai-medium leading-relaxed">
                {t('privacy.dataRetention.description')}
              </p>
              </div>

              {/* International Transfers */}
              <div>
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 text-ai-blue mr-3" />
                {t('privacy.internationalTransfers.title')}
              </h3>
              <p className="text-ai-medium leading-relaxed">
                {t('privacy.internationalTransfers.description')}
              </p>
              </div>

              {/* Cookies */}
              <div>
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Settings className="w-6 h-6 text-ai-green mr-3" />
                {t('privacy.cookies.title')}
              </h3>
              <p className="text-ai-medium leading-relaxed">
                {t('privacy.cookies.description')}
              </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-ai-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 text-ai-green mr-3" />
                {t('privacy.contact.title')}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('privacy.contact.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{t('privacy.contact.email.label')}</div>
                    <a href="mailto:lgpd@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                      {t('privacy.contact.email.value')}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-ai-blue flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{t('privacy.contact.phone.label')}</div>
                    <a href="tel:+55-11-98765-4321" className="text-ai-blue hover:text-ai-blue/80 transition-colors">
                      {t('privacy.contact.phone.value')}
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
