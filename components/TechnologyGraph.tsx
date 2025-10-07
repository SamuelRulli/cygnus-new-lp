'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

const technologies = [
  { name: 'React', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/React-icon.svg.png' },
  { name: 'Node.js', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/node.js.png' },
  { name: 'Python', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/python.png' },
  { name: 'AWS', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/aws.png' },
  { name: 'GCP', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/gcp.png' },
  { name: 'Next.js', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/next.js.png' },
  { name: 'Java', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/java.webp' },
  { name: 'Rust', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/rust.png' },
  { name: 'Docker', logo: 'https://storage.googleapis.com/agentpro-cdn/cygnus/tech/docker.png' },
];

export default function TechnologyGraph() {
  const { language } = useLanguage();
  const t = translations[language].customDevelopment.technologies;

  return (
    <div className="relative flex items-center justify-center h-96 my-16">
      <div className="absolute w-48 h-48 bg-gradient-ai rounded-full animate-pulse blur-xl"></div>
      <div className="absolute w-40 h-40 bg-ai-dark rounded-full flex items-center justify-center text-center">
        <span className="text-white font-bold text-lg">Cygnus<br/>Team</span>
      </div>

      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="absolute w-20 h-20"
          style={{
            transform: `rotate(${index * (360 / technologies.length)}deg) translateX(16rem) rotate(-${index * (360 / technologies.length)}deg)`,
            animation: `orbit 20s linear infinite`,
            animationDelay: `-${index * (20 / technologies.length)}s`,
          }}
        >
          <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center p-4 border border-white/20 backdrop-blur-sm hover:scale-110 hover:bg-white/20 transition-transform duration-300">
            <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(16rem) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(16rem) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
