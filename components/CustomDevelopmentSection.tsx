'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';
import TechnologyGraph from './TechnologyGraph';

export default function CustomDevelopmentSection() {
  const { language } = useLanguage();
  const t = translations[language].customDevelopment;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
            {t.title}{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>
          <p className="text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.services.map((service: any, index: number) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-ai-dark mb-4">{service.title}</h3>
              <p className="text-ai-medium leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-6">
            {t.whyChooseUs.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyChooseUs.points.map((point: any, index: number) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">{point.title}</h3>
                <p className="text-ai-medium leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-6">
            {t.ourProcess.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {t.ourProcess.steps.map((step: any, index: number) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">{step.name}</h3>
                <p className="text-ai-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-6">
            {t.technologies.title}
          </h2>
          <br></br>
          <br></br>
          <TechnologyGraph />
        </div>
      </div>
    </section>
  );
}
