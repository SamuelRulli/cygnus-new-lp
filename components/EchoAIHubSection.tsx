'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Headphones,
  CheckCircle,
  ArrowRight,
  Play,
  MessageSquare,
  Brain,
  Activity,
  Globe,
  Phone,
  Smartphone,
  Mail,
  Monitor,
  Users,
  BarChart3,
  Clock,
  Target,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Building2,
  ShoppingCart,
  Heart,
  Mic,
  Video,
  Settings,
  Database,
  Workflow,
  Search,
  Bell,
  ThumbsUp,
  Headset,
  Radio,
  Layers,
  Network
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EchoAIHubSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Target, text: '90% automatic resolution' },
    { icon: Globe, text: 'Omnichannel integration' },
    { icon: Activity, text: 'Real-time sentiment analysis' },
    { icon: Users, text: 'Intelligent escalation to humans' }
  ];

  const features = [
    {
      title: 'Next-Generation Conversational AI',
      description: 'Our advanced AI understands customer intent, context, and emotion across voice and text channels. Unlike basic chatbots, Echo AI Hub maintains natural conversations, remembers context, and provides personalized responses that feel genuinely human.',
      details: 'Advanced NLP and machine learning models trained on millions of customer interactions enable natural dialogue flow, emotional intelligence, and contextual understanding. The system recognizes sentiment shifts and adjusts tone accordingly.',
      icon: Brain
    },
    {
      title: 'Omnichannel Excellence',
      description: 'Seamless integration across phone, chat, email, social media, and video channels. Customers can switch between channels without losing context, while agents access unified customer histories and interaction data.',
      details: 'Universal customer profiles maintain conversation history, preferences, and context across all touchpoints. Smart routing ensures customers reach the right resource through their preferred channel every time.',
      icon: Globe
    },
    {
      title: 'Real-Time Analytics & Insights',
      description: 'Advanced analytics provide instant visibility into customer satisfaction, conversation trends, and service performance. Real-time sentiment analysis alerts managers to escalating situations before they become problems.',
      details: 'Machine learning algorithms analyze conversation patterns, resolution rates, and customer feedback to identify improvement opportunities. Predictive analytics forecast call volumes and resource needs.',
      icon: BarChart3
    },
    {
      title: 'Intelligent Escalation Engine',
      description: 'Smart routing system knows when and how to escalate conversations to human agents, providing complete context and suggested solutions. Agents receive warm handoffs with full conversation history and recommended actions.',
      details: 'AI-powered decision trees evaluate conversation complexity, customer emotion, and resolution confidence to determine optimal escalation timing. Seamless agent collaboration tools ensure smooth transitions.',
      icon: Workflow
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Customer Support Revolution',
      description: 'A major online retailer deployed Echo AI Hub to handle order inquiries, returns, shipping questions, and product support. The AI provides instant order status, processes returns automatically, and offers personalized product recommendations.',
      result: 'Achieved 92% customer satisfaction while reducing support costs by 60%. Average resolution time decreased from 12 minutes to 90 seconds. Agents now focus on complex issues and relationship building.',
      icon: ShoppingCart,
      industry: 'E-commerce',
      stats: { satisfaction: '92%', cost_reduction: '60%', resolution_time: '90sec' }
    },
    {
      title: 'Healthcare Patient Communication Hub',
      description: 'A hospital network uses Echo AI Hub for appointment scheduling, prescription inquiries, test result delivery, and general health questions. HIPAA-compliant conversations ensure secure patient interactions.',
      result: 'Reduced wait times by 75% while improving patient satisfaction scores by 40%. Automated 85% of routine inquiries, allowing staff to focus on critical patient care and complex medical consultations.',
      icon: Heart,
      industry: 'Healthcare',
      stats: { wait_reduction: '75%', satisfaction: '40%', automation: '85%' }
    },
    {
      title: 'Financial Services Customer Care',
      description: 'A regional bank implemented Echo AI Hub for account inquiries, transaction support, loan applications, and fraud alerts. Secure, personalized banking assistance maintains strict regulatory compliance.',
      result: 'Increased customer engagement by 50% while reducing operational costs by 45%. AI handles 88% of routine banking inquiries with 99.7% accuracy in fraud detection and prevention.',
      icon: Building2,
      industry: 'Financial Services',
      stats: { engagement: '50%', cost_savings: '45%', accuracy: '99.7%' }
    }
  ];

  const problemStats = [
    { icon: Clock, stat: '45%', label: 'Of customers hang up due to long waits' },
    { icon: TrendingUp, stat: '80%', label: 'Increase in support volume yearly' },
    { icon: AlertTriangle, stat: '65%', label: 'Of issues could be resolved automatically' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Natural conversational AI across all channels' },
    { icon: CheckCircle, benefit: 'Real-time sentiment and emotion detection' },
    { icon: CheckCircle, benefit: 'Seamless human agent collaboration' },
    { icon: CheckCircle, benefit: 'Advanced analytics and performance insights' }
  ];

  const contactCenterCapabilities = [
    {
      title: 'Voice Intelligence',
      description: 'Advanced speech recognition and natural voice synthesis',
      icon: Mic
    },
    {
      title: 'Live Chat Excellence',
      description: 'Real-time text conversations with contextual understanding',
      icon: MessageSquare
    },
    {
      title: 'Video Support',
      description: 'Face-to-face assistance with screen sharing capabilities',
      icon: Video
    },
    {
      title: 'Social Media Integration',
      description: 'Unified responses across all social platforms',
      icon: Globe
    },
    {
      title: 'Email Automation',
      description: 'Intelligent email responses and ticket management',
      icon: Mail
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time insights and optimization recommendations',
      icon: BarChart3
    }
  ];

  const channelIntegrations = [
    { channel: 'Voice Calls', icon: Phone, description: 'Intelligent call routing and handling' },
    { channel: 'Live Chat', icon: MessageSquare, description: 'Website and app chat integration' },
    { channel: 'Email Support', icon: Mail, description: 'Automated email response system' },
    { channel: 'Social Media', icon: Globe, description: 'Facebook, Twitter, Instagram support' },
    { channel: 'Video Calls', icon: Video, description: 'Face-to-face customer interactions' },
    { channel: 'Mobile Apps', icon: Smartphone, description: 'In-app customer support' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                    <Headphones className="w-8 h-8 text-ai-green" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Echo AI Hub: Intelligent{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Contact Center
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Transform your customer service with next-generation conversational AI. 
                  Resolve{' '}
                  <span className="text-ai-green font-bold">90% of requests automatically</span> with{' '}
                  <span className="text-ai-blue font-bold">complete omnichannel integration</span>.
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
                    Implement AI Service
                    <Headset className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group">
                    Test Conversation
                    <MessageSquare className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  {/* Contact Center Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Channel Icons */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Phone, color: 'text-ai-blue' },
                        { icon: MessageSquare, color: 'text-ai-green' },
                        { icon: Mail, color: 'text-ai-blue' },
                        { icon: Video, color: 'text-ai-green' },
                        { icon: Globe, color: 'text-ai-blue' },
                        { icon: Smartphone, color: 'text-ai-green' },
                        { icon: Headphones, color: 'text-ai-blue' },
                        { icon: Monitor, color: 'text-ai-green' },
                        { icon: Brain, color: 'text-ai-blue' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            className="aspect-square rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-ai-green/10 to-ai-blue/10"
                          >
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                        );
                      })}
                    </div>

                    {/* Conversation Flow */}
                    <div className="bg-ai-dark/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-center">
                        <div>
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Users className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="text-xs text-ai-medium">Queue</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-ai-green animate-pulse" />
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Brain className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="text-xs text-ai-medium">AI Response</div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-green mb-1">90%</div>
                        <div className="text-xs text-ai-medium">Auto Resolution</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-ai-blue mb-1">24/7</div>
                        <div className="text-xs text-ai-medium">Available</div>
                      </div>
                    </div>

                    {/* Floating Headphones Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-green/30 rounded-full flex items-center justify-center animate-pulse-slow">
                      <Headphones className="w-4 h-4 text-ai-green" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-blue/30 rounded-full animate-float"></div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">The Contact Center Crisis</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Modern customers expect instant, personalized support across every channel, but traditional 
                    contact centers struggle with long wait times, inconsistent experiences, and skyrocketing 
                    operational costs. Support volume grows 80% yearly while customer patience decreases.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Basic chatbots frustrate customers with robotic responses and limited capabilities. 
                    Meanwhile, human agents burn out handling repetitive inquiries that could be automated. 
                    You need intelligent technology that enhances both customer and agent experiences.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Our Contact Center Revolution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Echo AI Hub transforms contact centers with conversational AI that thinks, learns, and 
                    responds like your best human agents. Our platform resolves 90% of inquiries automatically 
                    while providing seamless escalation when human expertise is needed.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Real-time sentiment analysis detects customer emotions, while omnichannel integration 
                    ensures consistent experiences across phone, chat, email, and social media. Your agents 
                    become strategic advisors instead of ticket processors.
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

        {/* Contact Center Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Contact Center{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive AI-powered features designed to transform every aspect 
                of your customer service operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {contactCenterCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-ai-green" />
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

            {/* Channel Integrations */}
            <div className="bg-gradient-to-br from-ai-green/5 to-ai-blue/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  Omnichannel Integration
                </h3>
                <p className="text-ai-medium">
                  Unified customer experience across every communication channel
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {channelIntegrations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Icon className="w-8 h-8 text-ai-green mx-auto mb-2" />
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
                Intelligent Contact Center{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Discover the advanced AI capabilities that make Echo AI Hub the most 
                effective intelligent contact center platform available.
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
                          <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-ai-green" />
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
                      <div className={`bg-gradient-to-br from-ai-green/5 to-ai-blue/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                        <div className="w-full max-w-xs">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 bg-ai-green/20 rounded w-full"></div>
                              <div className="h-3 bg-ai-blue/20 rounded w-3/4"></div>
                              <div className="h-3 bg-ai-green/20 rounded w-1/2"></div>
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
                Contact Center{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how organizations are revolutionizing customer service and reducing 
                costs with Echo AI Hub's intelligent contact center platform.
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
                        <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-ai-green" />
                        </div>
                        <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-3 py-1 rounded-full">
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
                          <div key={statIndex} className="text-center p-2 bg-ai-green/10 rounded-lg">
                            <div className="text-lg font-bold text-ai-green">{value}</div>
                            <div className="text-xs text-ai-medium capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="bg-ai-blue/10 rounded-xl p-4 border-l-4 border-ai-blue">
                        <h4 className="font-bold text-ai-blue text-sm mb-2 flex items-center">
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
            <div className="absolute top-10 left-10 w-32 h-32 bg-ai-green rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-ai-blue rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                Contact Center?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading organizations that have already revolutionized their customer service 
              with Echo AI Hub. Start delivering exceptional experiences while reducing costs today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Target, value: '90%', label: 'Auto Resolution' },
                { icon: ThumbsUp, value: '92%', label: 'Customer Satisfaction' },
                { icon: Clock, value: '24/7', label: 'Always Available' },
                { icon: TrendingUp, value: '60%', label: 'Cost Reduction' }
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
                Implement AI Service
                <Headset className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                Test Conversation
                <MessageSquare className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Contact Center Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our contact center specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              or{' '}
              <a href="mailto:contactcenter@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                contactcenter@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}