'use client';

import { useEffect, useState } from 'react';
import { Bot, Shield, Zap, BarChart3, Cog, Users } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Advanced AI algorithms that learn and adapt to your business processes, continuously improving efficiency and accuracy.',
    benefits: ['Self-learning algorithms', 'Process optimization', 'Adaptive workflows']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with full regulatory compliance including SOC 2, HIPAA, and GDPR requirements.',
    benefits: ['SOC 2 compliant', 'HIPAA certified', 'GDPR ready']
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in 7 Days with our proven implementation methodology and dedicated support team.',
    benefits: ['30-day implementation', 'Dedicated support', 'Zero downtime migration']
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards and reporting tools that provide instant insights into your process performance.',
    benefits: ['Live dashboards', 'Custom reports', 'Performance insights']
  },
  {
    icon: Cog,
    title: 'Seamless Integration',
    description: 'Connect with your existing systems through our robust API and pre-built integrations with major platforms.',
    benefits: ['API-first design', '100+ integrations', 'Custom connectors']
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock enterprise support with dedicated account managers and technical experts.',
    benefits: ['24/7 availability', 'Dedicated managers', 'Expert technical team']
  }
];

export default function FeaturesSection() {
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

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-4">
            Enterprise-Grade Features Built for{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="text-lg text-ai-medium max-w-3xl mx-auto">
            Every feature is designed to meet the demanding requirements of enterprise 
            environments while maintaining the simplicity your teams need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-ai-light/50 hover:border-ai-blue/30 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-ai-green/30 rounded-full animate-pulse-slow"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-ai-dark mb-4 group-hover:text-ai-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-ai-medium mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-ai-medium">
                      <div className="w-2 h-2 bg-ai-green rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}