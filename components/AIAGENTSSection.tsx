'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Users,
  MessageSquare,
  Brain,
  Cpu,
  Clock,
  Target,
  Shield,
  Globe,
  Building2,
  ShoppingCart,
  Headphones,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Activity,
  Settings,
  Workflow,
  BarChart3,
  Calendar,
  Search,
  FileText,
  Database,
  Smartphone,
  Monitor,
  Mic,
  Video,
  Heart,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIAGENTSSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Clock, text: '24/7 automated service' },
    { icon: Cpu, text: 'Autonomous task processing' },
    { icon: TrendingUp, text: 'Infinite scalability' },
    { icon: Brain, text: 'Continuous learning' }
  ];

  const features = [
    {
      title: 'Conversational AI Excellence',
      description: 'Our AI agents understand context, maintain conversation flow, and provide human-like interactions across voice, chat, and digital channels. They handle complex customer inquiries with empathy and precision, escalating only when necessary.',
      details: 'Advanced natural language processing enables agents to understand intent, emotion, and context. Multi-turn conversations maintain state and context across interactions, while sentiment analysis ensures appropriate responses.',
      icon: MessageSquare
    },
    {
      title: 'Autonomous Task Execution',
      description: 'AI agents don\'t just answer questions - they complete complex workflows, make decisions based on business rules, and execute multi-step processes without human intervention. From order processing to account management.',
      details: 'Intelligent workflow engine executes business processes automatically, integrating with CRM, ERP, and other systems. Decision trees and business logic ensure consistent, accurate task completion every time.',
      icon: Workflow
    },
    {
      title: 'Omnichannel Integration',
      description: 'Deploy agents across every customer touchpoint - website chat, mobile apps, social media, phone systems, and email. Unified agent intelligence ensures consistent experience regardless of channel.',
      details: 'Single agent intelligence works across all channels, maintaining conversation history and customer context. Seamless handoffs between channels and to human agents when needed.',
      icon: Globe
    },
    {
      title: 'Continuous Learning Engine',
      description: 'Agents improve automatically through every interaction, learning from customer feedback, successful resolutions, and human agent corrections. Performance gets better over time without manual training.',
      details: 'Machine learning algorithms analyze interaction patterns, success rates, and customer satisfaction to continuously improve responses. Automatic updates ensure agents stay current with business changes.',
      icon: Brain
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Customer Service Revolution',
      description: 'A major online retailer deployed AI agents to handle customer inquiries, order tracking, returns, and product recommendations. Agents process orders, resolve shipping issues, and provide personalized shopping assistance 24/7.',
      result: 'Achieved 87% customer satisfaction while reducing support costs by 65%. Agents handle 90% of inquiries automatically, with average resolution time of 2 minutes. Increased sales through AI-powered recommendations.',
      icon: ShoppingCart,
      industry: 'E-commerce',
      stats: { satisfaction: '87%', cost_reduction: '65%', automation: '90%' }
    },
    {
      title: 'Healthcare Patient Engagement',
      description: 'A healthcare network uses AI agents for appointment scheduling, prescription refills, lab result delivery, and basic health inquiries. Agents integrate with EMR systems and provide HIPAA-compliant patient interactions.',
      result: 'Reduced appointment scheduling time by 80% while improving patient satisfaction scores by 35%. Agents handle 75% of routine inquiries, freeing medical staff for critical patient care.',
      icon: Heart,
      industry: 'Healthcare',
      stats: { time_reduction: '80%', satisfaction: '35%', automation: '75%' }
    },
    {
      title: 'Financial Services Automation',
      description: 'A regional bank deployed AI agents for account inquiries, transaction support, loan applications, and fraud alerts. Agents provide secure, personalized banking assistance while maintaining regulatory compliance.',
      result: 'Increased customer engagement by 45% while reducing operational costs by 50%. Agents process 85% of routine banking inquiries with 99.2% accuracy in fraud detection.',
      icon: Building2,
      industry: 'Financial Services',
      stats: { engagement: '45%', cost_savings: '50%', accuracy: '99.2%' }
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '24/7', label: 'Customer expectations for availability' },
    { icon: DollarSign, stat: '70%', label: 'Of customer service costs are labor' },
    { icon: AlertTriangle, stat: '60%', label: 'Of customers expect immediate responses' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Human-like conversational abilities' },
    { icon: CheckCircle, benefit: 'Autonomous decision making' },
    { icon: CheckCircle, benefit: 'Multi-channel deployment' },
    { icon: CheckCircle, benefit: 'Self-improving AI technology' }
  ];

  const agentCapabilities = [
    {
      title: 'Natural Conversation',
      description: 'Human-like dialogue with context understanding',
      icon: MessageSquare
    },
    {
      title: 'Task Automation',
      description: 'Execute complex multi-step workflows automatically',
      icon: Settings
    },
    {
      title: 'Decision Making',
      description: 'Make intelligent decisions based on business rules',
      icon: Brain
    },
    {
      title: 'System Integration',
      description: 'Connect with CRM, ERP, and business systems',
      icon: Database
    },
    {
      title: 'Voice & Chat',
      description: 'Support both voice and text interactions',
      icon: Mic
    },
    {
      title: 'Analytics & Insights',
      description: 'Real-time performance and customer insights',
      icon: BarChart3
    }
  ];

  const deploymentChannels = [
    { channel: 'Website Chat', icon: Monitor, description: 'Embedded chat widgets' },
    { channel: 'Mobile Apps', icon: Smartphone, description: 'In-app assistance' },
    { channel: 'Voice Systems', icon: Mic, description: 'Phone and voice assistants' },
    { channel: 'Social Media', icon: Globe, description: 'Facebook, Twitter, WhatsApp' },
    { channel: 'Email Support', icon: Mail, description: 'Automated email responses' },
    { channel: 'Video Calls', icon: Video, description: 'Virtual video assistants' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mr-4">
                    <Bot className="w-8 h-8 text-ai-blue" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  AI.AGENTS: Virtual Assistants That{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Actually Work
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Deploy autonomous AI agents that execute complex tasks, make 
                  intelligent decisions, and interact naturally with customers and systems, operating{' '}
                  <span className="text-ai-green font-bold">24/7 without supervision</span>.
                </p>

                {/* Key Benefits */}
                <div 
                  className={`grid sm:grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-400 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {keyBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-ai-light/50">
                        <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                        <span className="text-ai-dark font-medium">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                    Create My Agent
                    <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group">
                    See Agents in Action
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative">
                <div 
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                >
                  {/* AI Agent Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Agent Interface */}
                    <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-6 mb-6">
                      {/* Chat Bubbles */}
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-ai-blue text-white px-4 py-2 rounded-lg text-sm max-w-xs">
                            I need help with my order
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            I'd be happy to help! Let me check your order status...
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-ai-green/10 text-ai-dark px-4 py-2 rounded-lg text-sm max-w-xs">
                            ✅ Order found. Shipping today!
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Agent Status */}
                    <div className="flex items-center justify-between p-3 bg-ai-green/10 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-ai-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-ai-dark">Agent Active</span>
                      </div>
                      <span className="text-xs text-ai-medium">24/7 Available</span>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">87%</div>
                        <div className="text-xs text-ai-medium">Satisfaction</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">2min</div>
                        <div className="text-xs text-ai-medium">Avg Response</div>
                      </div>
                    </div>

                    {/* Floating Bot Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-blue/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Bot className="w-4 h-4 text-ai-blue" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-green/30 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">The Customer Service Challenge</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Customers expect instant, 24/7 support across all channels, but traditional chatbots 
                    frustrate users with rigid responses and limited capabilities. Human agents are 
                    expensive, can't scale infinitely, and need sleep, vacation, and training.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Basic automation fails at complex tasks, nuanced conversations, and contextual 
                    understanding. You need intelligent agents that can think, learn, and act 
                    autonomously while providing genuinely helpful customer experiences.
                  </p>

                  {/* Problem Stats */}
                  <div className="grid grid-cols-1 gap-4">
                    {problemStats.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-6 h-6 text-red-500" />
                            <div>
                              <div className="text-2xl font-bold text-red-600">{item.stat}</div>
                              <div className="text-sm text-red-700">{item.label}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-ai-green mr-4" />
                  <h2 className="text-3xl font-bold text-ai-dark">Our Virtual Assistant Revolution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    AI.AGENTS deploy truly intelligent virtual assistants that understand context, 
                    execute complex workflows, and provide human-like interactions. These agents 
                    work 24/7, scale infinitely, and improve continuously through machine learning.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Unlike simple chatbots, our agents make decisions, complete transactions, 
                    integrate with your systems, and handle sophisticated customer needs. They 
                    learn from every interaction, becoming more effective over time.
                  </p>

                  {/* Solution Benefits */}
                  <div className="space-y-3">
                    {solutionBenefits.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-ai-green/10 rounded-lg">
                          <Icon className="w-5 h-5 text-ai-green" />
                          <span className="text-ai-dark font-medium">{item.benefit}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Agent{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive AI capabilities that enable agents to handle complex customer 
                interactions and business processes autonomously.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {agentCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-ai-medium">
                        {capability.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Deployment Channels */}
            <div className="bg-gradient-to-br from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Omnichannel Deployment
                </h3>
                <p className="text-ai-medium">
                  Deploy intelligent agents across every customer touchpoint
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {deploymentChannels.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-ai-blue mx-auto mb-2" />
                      <div className="font-medium text-ai-dark text-sm mb-1">{item.channel}</div>
                      <div className="text-xs text-ai-medium">{item.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Intelligent Agent{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Discover the advanced AI capabilities that make our virtual assistants 
                the most effective autonomous agents available.
              </p>
            </div>

            <div className="space-y-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content */}
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-blue" />
                          </div>
                          <h3 className="text-2xl font-bold text-ai-dark">{feature.title}</h3>
                        </div>
                        
                        <p className="text-lg text-ai-medium leading-relaxed mb-6">
                          {feature.description}
                        </p>
                        
                        <p className="text-ai-medium leading-relaxed">
                          {feature.details}
                        </p>
                      </CardContent>

                      {/* Visual */}
                      <div className={`bg-gradient-to-br from-ai-blue/5 to-ai-green/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-ai-blue/20 rounded w-full"></div>
                              <div className="h-3 bg-ai-green/20 rounded w-3/4"></div>
                              <div className="h-3 bg-ai-blue/20 rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Agent{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how organizations are revolutionizing customer experience and operations 
                with AI.AGENTS autonomous virtual assistants.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-ai-blue" />
                        </div>
                        <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full">
                          {useCase.industry}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-ai-dark mb-4 text-center">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-ai-medium leading-relaxed mb-6">
                        {useCase.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {Object.entries(useCase.stats).map(([key, value], statIndex) => (
                          <div key={statIndex} className="text-center p-2 bg-ai-blue/10 rounded-lg">
                            <div className="text-lg font-bold text-ai-blue">{value}</div>
                            <div className="text-xs text-ai-medium capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="bg-ai-green/10 rounded-xl p-4 border-l-4 border-ai-green">
                        <h4 className="font-bold text-ai-green text-sm mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Results Achieved:
                        </h4>
                        <p className="text-sm text-ai-dark leading-relaxed">
                          {useCase.result}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-ai-dark to-ai-dark/90 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Deploy{' '}
              <span className="bg-gradient-to-r from-ai-blue to-ai-green bg-clip-text text-transparent">
                Intelligent Agents?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking companies that have already revolutionized their customer 
              experience with AI.AGENTS. Start building your autonomous workforce today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Bot, value: '24/7', label: 'Always Available' },
                { icon: TrendingUp, value: '87%', label: 'Customer Satisfaction' },
                { icon: Zap, value: '90%', label: 'Task Automation' },
                { icon: Users, value: '300+', label: 'Deployed Agents' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-ai-green" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="ai_primary" 
                size="xl" 
                className="bg-white text-ai-dark hover:bg-white/90 shadow-2xl group"
              >
                Create My Agent
                <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                See Agents in Action
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Agent Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our AI specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:agents@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                agents@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}