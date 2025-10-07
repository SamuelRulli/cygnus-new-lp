'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

const certifications = [
  { name: 'AWS Certification', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/certification/aws_certification.png' },
  { name: 'Google Cloud Certification', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/certification/gcp-certificaiton.png' },
  { name: 'Java Certification', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/certification/java-certification-1z0-819-exam.png' },
  { name: 'Oracle Certification', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/certification/oracle.png' },
  { name: 'Scrum Certification', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/certification/scrum.png' },
];

export default function CertificationsSection() {
  const { language } = useLanguage();
  const t = translations[language].certifications;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-ai-medium max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="flex justify-center items-center h-24">
              <img 
                src={cert.logo} 
                alt={cert.name} 
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
