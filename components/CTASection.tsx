'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Pronto para Transformar Sua{' '}
          <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
            Empresa?
          </span>
        </h2>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Junte-se a mais de 10 empresas que já revolucionaram seus processos 
          com a ITCygnus AI. Comece sua transformação hoje.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-white/60">
          {[
            'Sem Taxas de Setup',
            'Migração Gratuita',
            'Garantia de 30 Dias',
            'Cancele Quando Quiser'
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-ai-green" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            variant="ai_primary" 
            size="xl" 
            className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
            onClick={() => window.location.href = '/demo'}
          >
            Iniciar Teste Gratuito
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          {/* <Button 
            variant="ai_outline" 
            size="xl" 
            className="border-white text-white hover:bg-white hover:text-ai-dark group"
            onClick={() => window.location.href = '/roi-calculator'}
          >
            Calcular Meu ROI
            <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button> */}
        </div>

        {/* Explore More Button */}
        <div className="mb-8">
          <Link href="/explore">
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white/80 hover:text-white hover:bg-white/10 group border border-white/20 hover:border-white/40"
            >
              Saiba Mais Sobre Transformação Digital
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <p className="text-white/60 text-sm">
          Dúvidas? Ligue para{' '}
          <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
            +55 (11) 5039-4877
          </a>{' '}
          ou email{' '}
          <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
            contact@itcygnus.com
          </a>
        </p>
      </div>
    </section>
  );
}
