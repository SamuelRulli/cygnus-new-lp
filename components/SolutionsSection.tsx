'use client';

import { useEffect, useState } from 'react';
import { 
  Bot, 
  Shield, 
  Zap, 
  BarChart3, 
  Cog, 
  Users,
  Eye,
  FolderOpen,
  TrendingUp,
  Headphones,
  Brain,
  CheckCircle,
  ArrowRight,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const solutions = [
  {
    id: 'ai-ocr',
    icon: Eye,
    title: 'AI.OCR',
    subtitle: 'Intelligent Recognition',
    description: 'Transform any physical or digital document into structured data with over 99.9% accuracy. Our AI-powered OCR technology processes contracts, invoices, medical reports, and forms in seconds, eliminating human errors and reducing operational costs.',
    benefits: [
      '50x faster processing than manual typing',
      'Native integration with ERP and CRM systems',
      'Support for 40+ languages',
      'Automatic validation of extracted data'
    ],
    color: 'ai-blue',
    gradient: 'from-ai-blue/20 to-ai-blue/5',
    link: '/solutions/ai-ocr'
  },
  {
    id: 'ai-doc',
    icon: FolderOpen,
    title: 'AI.DOC',
    subtitle: 'Intelligent Document Management',
    description: 'Organize, classify, and manage millions of documents automatically. Our solution uses machine learning to categorize, index, and make critical information available when you need it, transforming document chaos into structured knowledge.',
    benefits: [
      'Automatic classification by type and content',
      'Advanced semantic search',
      'Complete version control and audit trail',
      'Automated approval workflows'
    ],
    color: 'ai-green',
    gradient: 'from-ai-green/20 to-ai-green/5',
    link: '/solutions/ai-doc'
  },
  {
    id: 'ai-data',
    icon: Heart,
    title: 'AI.DATA',
    subtitle: 'Healthcare Claims Processing',
    description: 'Revolutionize your healthcare claims process with complete automation. From document receipt to final approval, our AI analyzes, validates, and processes claims with medical precision, reducing processing time from weeks to hours.',
    benefits: [
      'Automatic eligibility analysis',
      'Real-time fraud detection',
      'Integration with payers and providers',
      'Full regulatory compliance'
    ],
    color: 'ai-blue',
    gradient: 'from-ai-blue/20 to-ai-blue/5',
    link: '/solutions/ai-data'
  },
  {
    id: 'ai-priceinsights',
    icon: TrendingUp,
    title: 'AI.PRICEINSIGHTS',
    subtitle: 'Pricing Intelligence',
    description: 'Optimize your pricing strategy with advanced predictive analytics. Our AI monitors market, competition, and demand in real-time, suggesting optimal prices that maximize both margin and competitiveness simultaneously.',
    benefits: [
      'Real-time market analysis',
      '95% accurate demand forecasting',
      'Automatic margin optimization',
      'Pricing opportunity alerts'
    ],
    color: 'ai-green',
    gradient: 'from-ai-green/20 to-ai-green/5',
    link: '/solutions/ai-priceinsights'
  },
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'AI.AGENTS',
    subtitle: 'Autonomous Agents',
    description: 'Deploy virtual assistants that actually work. Our AI agents execute complex tasks, make decisions based on business rules, and interact naturally with customers and systems, operating 24/7 without supervision.',
    benefits: [
      '24/7 automated service',
      'Autonomous task processing',
      'Infinite scalability',
      'Continuous learning'
    ],
    color: 'ai-blue',
    gradient: 'from-ai-blue/20 to-ai-blue/5',
    link: '/solutions/ai-agents'
  },
  {
    id: 'echo-ai-hub',
    icon: Headphones,
    title: 'Echo AI Hub',
    subtitle: 'Intelligent Contact Center',
    description: 'Transform your customer service with next-generation conversational AI. Our platform integrates voice, text, and data to deliver personalized experiences that resolve 90% of requests automatically.',
    benefits: [
      '90% automatic case resolution',
      'Complete omnichannel integration',
      'Real-time sentiment analysis',
      'Intelligent escalation to humans'
    ],
    color: 'ai-green',
    gradient: 'from-ai-green/20 to-ai-green/5',
    link: '/solutions/echo-ai-hub'
  }
];

export default function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

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

    const element = document.getElementById('solutions-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions-section" className="py-20 bg-gradient-to-br from-white via-ai-light/10 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="h-px bg-gradient-ai w-24"></div>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-ai-dark mb-6">
            Our Enterprise{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
            A comprehensive platform that automates everything from document recognition to intelligent 
            decision-making, tailored to your specific business needs.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isActive = activeCard === solution.id;
            
            return (
              <div
                key={solution.id}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-ai-light/50 hover:border-${solution.color}/30 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                } ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveCard(solution.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-ai rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-${solution.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 text-${solution.color}`} />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold text-${solution.color} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                          {solution.title}
                        </h3>
                        <p className="text-ai-medium font-medium">
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className={`w-3 h-3 bg-${solution.color} rounded-full animate-pulse-slow`}></div>
                  </div>

                  {/* Description */}
                  <p className="text-ai-medium leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-ai-dark font-semibold text-sm uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefitIndex} 
                          className="flex items-start space-x-3 text-sm text-ai-medium"
                        >
                          <CheckCircle className={`w-4 h-4 text-${solution.color} mt-0.5 flex-shrink-0`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  {solution.link !== '#' ? (
                    <Link href={solution.link}>
                      <Button 
                        variant="ghost" 
                        className={`w-full text-${solution.color} hover:bg-${solution.color}/10 group/btn border border-${solution.color}/20 hover:border-${solution.color}/40`}
                      >
                        Learn More About {solution.title}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className={`w-full text-${solution.color} hover:bg-${solution.color}/10 group/btn border border-${solution.color}/20 hover:border-${solution.color}/40`}
                    >
                      Learn More About {solution.title}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-ai-dark mb-4">
              Ready to Transform Your Business Processes?
            </h3>
            <p className="text-ai-medium mb-6 leading-relaxed">
              Discover how our AI solutions can be customized for your specific industry and use cases. 
              Schedule a personalized demo to see the technology in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="ai_primary" 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/demo'}
              >
                Schedule Custom Demo
                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="ai_outline" size="lg" className="group">
                Download Solution Brief
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}