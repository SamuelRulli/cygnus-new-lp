'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Clock, Target, Users } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '75%',
    label: 'Redução do Tempo de Processamento',
    description: 'Redução média no tempo de processamento manual',
    color: 'ai-green'
  },
  {
    icon: Clock,
    value: '30',
    label: 'Dias de Implementação',
    description: 'Da configuração à implantação completa',
    color: 'ai-blue'
  },
  {
    icon: Target,
    value: '99.9%',
    label: 'Taxa de Precisão',
    description: 'Precisão garantida para todos os processos',
    color: 'ai-green'
  },
  {
    icon: Users,
    value: '10+',
    label: 'Clientes Empresariais',
    description: 'Empresas confiam em nossa plataforma',
    color: 'ai-blue'
  }
];

export default function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics-section" className="py-20 bg-gradient-to-br from-ai-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-4">
            Resultados Comprovados que Impulsionam{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              o Crescimento dos Negócios
            </span>
          </h2>
          <p className="text-lg text-ai-medium max-w-3xl mx-auto">
            Nossa plataforma de IA entrega resultados mensuráveis que transformam como as empresas 
            lidam com seus processos mais críticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-ai-light/50 group hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${metric.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-${metric.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${metric.color}`} />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl lg:text-4xl font-bold text-${metric.color} mb-2`}>
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-ai-dark mb-2">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-ai-medium text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Floating Accent */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-${metric.color}/20 rounded-full animate-pulse-slow`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
