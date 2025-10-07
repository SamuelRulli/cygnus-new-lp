'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

const clients = [
  { name: 'GFT', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/Gft_logo_(2008).svg.png' },
  { name: 'Qintess', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/Qintess.webp' },
  { name: 'Serasa Experian', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/SerasaExperian_White_Logo.png' },
  { name: 'Abastece Ai', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/abastece-ai-se-une-ao-km-de-vantagens-e-oferece-cashback-mais-pontos-km-no-abastecimento-by-81.png' },
  { name: 'Porto Seguro', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/porto-seguro-logo.webp' },
  { name: 'AZ Car Rental', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/AZ-Logo-Nova-Vermelha.png' },
  { name: 'Ecad', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/ecad-logo.png' },
  { name: 'Fornax', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/clients/fornax.webp' },
];

export default function ClientsCarousel() {
  const { language } = useLanguage();
  const t = translations[language].clientsCarousel;

  return (
    <section className="py-20 bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-8 flex items-center justify-center h-24">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
