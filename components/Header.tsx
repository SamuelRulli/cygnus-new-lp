'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSolutionsDropdown, setActiveSolutionsDropdown] = useState(false);
  const [activeIndustriesDropdown, setActiveIndustriesDropdown] = useState(false);
  
  const { t } = useLanguage();
  
  // Refs para controlar o hover delay
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    };
  }, []);

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setActiveSolutionsDropdown(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setActiveSolutionsDropdown(false);
    }, 150); // 150ms delay
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setActiveIndustriesDropdown(true);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setActiveIndustriesDropdown(false);
    }, 150); // 150ms delay
  };

  const solutions = [
    {
      title: 'AI.OCR',
      subtitle: t('solutions.items.aiOCR.subtitle'),
      description: t('solutions.items.aiOCR.description').substring(0, 100) + '...',
      href: '/solutions/ai-ocr'
    },
    {
      title: 'AI.DOC',
      subtitle: t('solutions.items.aiDOC.subtitle'),
      description: t('solutions.items.aiDOC.description').substring(0, 100) + '...',
      href: '/solutions/ai-doc'
    },
    {
      title: 'AI.SAUDE',
      subtitle: t('solutions.items.aiSAUDE.subtitle'),
      description: t('solutions.items.aiSAUDE.description').substring(0, 100) + '...',
      href: '/solutions/ai-saude'
    },
    {
      title: 'AI.PRICEINSIGHTS',
      subtitle: t('solutions.items.aiPRICEINSIGHTS.subtitle'),
      description: t('solutions.items.aiPRICEINSIGHTS.description').substring(0, 100) + '...',
      href: '/solutions/ai-priceinsights'
    },
    {
      title: 'AI.AGENTS',
      subtitle: t('solutions.items.aiAGENTS.subtitle'),
      description: t('solutions.items.aiAGENTS.description').substring(0, 100) + '...',
      href: '/solutions/ai-agents'
    },
    // {
    //   title: 'Echo AI Hub',
    //   subtitle: t('solutions.items.echoAIHub.subtitle'),
    //   description: t('solutions.items.echoAIHub.description').substring(0, 100) + '...',
    //   href: '/solutions/echo-ai-hub'
    // }
  ];

  const industries = [
    {
      title: 'Financeiro',
      description: 'IA com padrão bancário e conformidade regulatória',
      href: '/industries/financial'
    },
    {
      title: 'Saúde',
      description: 'IA especializada para hospitais, clínicas e operadoras de saúde',
      href: '/industries/healthcare'
    },
    {
      title: 'Seguros',
      description: 'Processamento de sinistros e detecção de fraudes para seguradoras',
      href: '/industries/insurance'
    }
    // {
    //   title: 'Manufacturing',
    //   description: 'Optimize production and supply chain processes',
    //   href: '/industries/manufacturing'
    // },
    // {
    //   title: 'Government',
    //   description: 'Modernize public services with secure AI',
    //   href: '/industries/government'
    // },
    // {
    //   title: 'Retail & E-commerce',
    //   description: 'Enhance customer experience and operations',
    //   href: '/industries/retail'
    // }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ai-dark/95 backdrop-blur-md shadow-lg' : 'bg-ai-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-01.png"
              alt="Logo Cygnus"
              className="w-22 h-20 object-contain"
            />
            {/* <span className="text-xl font-bold text-white">ITCygnus</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button className="flex items-center text-white/80 hover:text-ai-green transition-colors font-medium py-2">
                {t('header.solutions')}
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeSolutionsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {activeSolutionsDropdown && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-2xl shadow-2xl border border-ai-light/20 p-6 animate-fade-in-down">
                  <div className="grid grid-cols-1 gap-3">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        href={solution.href}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-ai-light/20 transition-colors group"
                        onClick={() => setActiveSolutionsDropdown(false)}
                      >
                        <div className="w-2 h-2 bg-ai-blue rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                        <div>
                          <div className="font-semibold text-ai-dark group-hover:text-ai-blue transition-colors">
                            {solution.title}
                          </div>
                          <div className="text-xs text-ai-green font-medium mb-1">
                            {solution.subtitle}
                          </div>
                          <div className="text-sm text-ai-medium">
                            {solution.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              <button className="flex items-center text-white/80 hover:text-ai-green transition-colors font-medium py-2">
                {t('header.industries')}
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeIndustriesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {activeIndustriesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-ai-light/20 p-6 animate-fade-in-down">
                  <div className="grid grid-cols-1 gap-3">
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        href={industry.href}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-ai-light/20 transition-colors group"
                        onClick={() => setActiveIndustriesDropdown(false)}
                      >
                        <div className="w-2 h-2 bg-ai-green rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                        <div>
                          <div className="font-semibold text-ai-dark group-hover:text-ai-green transition-colors">
                            {industry.title}
                          </div>
                          <div className="text-sm text-ai-medium">
                            {industry.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {/* <Link href="/resources" className="text-white/80 hover:text-ai-green transition-colors font-medium">
              {t('header.resources')}
            </Link> */}
            <Link href="/company" className="text-white/80 hover:text-ai-green transition-colors font-medium">
              {t('header.company')}
            </Link>
          </nav>

          {/* Desktop CTA & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <LanguageToggle />
            <Button variant="ghost" className="text-white/80 hover:text-ai-green">
              {t('header.signIn')}
            </Button> */}
            <Link href="/demo">
              <Button 
                variant="ai_primary" 
                size="lg" 
                className="bg-white text-ai-dark hover:bg-white/90 group"
              >
                {t('header.requestDemo')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-ai-green transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-ai-dark shadow-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Language Toggle */}
              <div className="flex justify-center pb-4 border-b border-white/10">
                <LanguageToggle />
              </div>

              {/* Mobile Solutions */}
              <div>
                <div className="text-white font-medium mb-3">{t('header.solutions')}</div>
                <div className="space-y-2 pl-4">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      href={solution.href}
                      className="block text-white/70 hover:text-ai-green transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Industries */}
              <div>
                <div className="text-white font-medium mb-3">{t('header.industries')}</div>
                <div className="space-y-2 pl-4">
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      href={industry.href}
                      className="block text-white/70 hover:text-ai-green transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/resources" 
                className="block text-white/80 hover:text-ai-green transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.resources')}
              </Link>
              <Link 
                href="/company" 
                className="block text-white/80 hover:text-ai-green transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.company')}
              </Link>
              
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full text-white/80 hover:text-ai-green">
                  {t('header.signIn')}
                </Button>
                <Link href="/demo">
                  {/* <Button 
                    variant="ai_primary" 
                    size="lg" 
                    className="w-full bg-white text-ai-dark hover:bg-white/90 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('header.requestDemo')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
