'use client';

import { ArrowRight, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-ai-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-01.png"
                alt="Logo Cygnus"
                className="w-21 h-20 object-contain"
              />
              {/* <span className="text-xl font-bold text-white">ITCygnus</span> */}
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/cygnus-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ai-blue transition-colors"
                >
                  <span className="sr-only">LinkedIn da IT Cygnus</span>
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:contact@itcygnus.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ai-blue transition-colors"
                >
                  <span className="sr-only">Enviar e-mail para IT Cygnus</span>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              {[
                { name: 'AI.OCR', href: '/solutions/ai-ocr' },
                { name: 'AI.DOC', href: '/solutions/ai-doc' },
                { name: 'AI.SAUDE', href: '/solutions/ai-saude' },
                { name: 'AI.PRICEINSIGHTS', href: '/solutions/ai-priceinsights' },
                { name: 'AI.AGENTS', href: '/solutions/ai-agents' },
                // { name: 'Echo AI Hub', href: '/solutions/echo-ai-hub' }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-white/70 hover:text-ai-green transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.industries')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.industriesList.healthcare'), href: '/industries/healthcare' },
                { name: t('footer.industriesList.financial'), href: '/industries/financial' },
                { name: t('footer.industriesList.insurance'), href: '/industries/insurance' },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-white/70 hover:text-ai-green transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.companyList.about'), href: '/company' },
                { name: t('footer.companyList.contact'), href: '/contact' },
                { name: t('footer.companyList.privacy'), href: '/privacy' },
                { name: t('footer.companyList.terms'), href: '/terms' }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-white/70 hover:text-ai-green transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">{t('footer.bottomLinks.privacy')}</Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">{t('footer.bottomLinks.terms')}</Link>
              <Link href="/security" className="text-white/60 hover:text-white transition-colors">{t('footer.bottomLinks.security')}</Link>
              <Link href="/compliance" className="text-white/60 hover:text-white transition-colors">{t('footer.bottomLinks.compliance')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
