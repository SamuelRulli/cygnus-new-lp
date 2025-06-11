'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  Zap,
  BarChart3,
  LineChart,
  Brain,
  Cpu,
  Database,
  Building2,
  ShoppingCart,
  DollarSign,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Download,
  Star,
  AlertTriangle,
  Lightbulb,
  Activity,
  Globe,
  Search,
  Bell,
  Calculator,
  Percent,
  PieChart
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIPRICEINSIGHTSSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    { icon: Activity, text: 'Real-time market analysis' },
    { icon: Target, text: '95% accurate demand forecasting' },
    { icon: TrendingUp, text: 'Automatic margin optimization' },
    { icon: Bell, text: 'Pricing opportunity alerts' }
  ];

  const features = [
    {
      title: 'Dynamic Pricing Intelligence',
      description: 'Our AI continuously monitors market conditions, competitor pricing, and demand patterns to recommend optimal prices that maximize both revenue and profit margins. The system adapts to seasonal trends, market volatility, and competitive movements in real-time.',
      details: 'Advanced machine learning algorithms analyze over 200 pricing factors including competitor movements, seasonal patterns, inventory levels, and customer behavior to generate pricing recommendations that increase profitability by an average of 18%.',
      icon: Brain
    },
    {
      title: 'Competitive Market Analysis',
      description: 'Track competitor pricing across all channels and platforms automatically. Our system monitors price changes, promotional activities, and market positioning to ensure your pricing strategy remains competitive while protecting margins.',
      details: 'Real-time competitor monitoring across e-commerce platforms, retail stores, and B2B channels. Automated alerts when competitors change prices, launch promotions, or enter new market segments.',
      icon: Search
    },
    {
      title: 'Demand Forecasting Engine',
      description: 'Predict customer demand with 95% accuracy using historical data, market trends, and external factors. Our AI identifies optimal price points that maximize sales volume while maintaining healthy profit margins.',
      details: 'Multi-variate forecasting models incorporate seasonality, economic indicators, weather patterns, and consumer behavior data to predict demand at different price points with unprecedented accuracy.',
      icon: LineChart
    },
    {
      title: 'Automated Price Optimization',
      description: 'Set pricing rules and let our AI automatically adjust prices based on your business objectives. Whether maximizing revenue, profit, or market share, the system continuously optimizes pricing strategies.',
      details: 'Flexible optimization algorithms that balance multiple objectives including revenue growth, profit maximization, inventory turnover, and competitive positioning. Complete control over pricing constraints and business rules.',
      icon: Cpu
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Marketplace Optimization',
      description: 'A major e-commerce retailer with 500,000+ SKUs implemented AI.PRICEINSIGHTS to optimize pricing across multiple platforms. The AI analyzes competitor prices, demand elasticity, and inventory levels to set optimal prices automatically.',
      result: 'Increased profit margins by 23% while maintaining competitive positioning. Automated pricing reduced manual workload by 90% and improved price competitiveness on 85% of products.',
      icon: ShoppingCart,
      industry: 'E-commerce',
      stats: { margin: '23%', automation: '90%', competitiveness: '85%' }
    },
    {
      title: 'Manufacturing Price Strategy',
      description: 'A B2B manufacturer implemented dynamic pricing for industrial components based on material costs, market demand, and competitive landscape. The AI adjusts prices daily based on supply chain conditions and market dynamics.',
      result: 'Achieved 15% revenue increase through optimized pricing strategies. Reduced pricing decision time from weeks to minutes while improving customer satisfaction scores by 12%.',
      icon: Building2,
      industry: 'Manufacturing',
      stats: { revenue: '15%', speed: 'minutes', satisfaction: '12%' }
    },
    {
      title: 'Retail Chain Optimization',
      description: 'A national retail chain uses AI.PRICEINSIGHTS to optimize pricing across 2,000+ stores based on local market conditions, competitor presence, and demographic factors. The system adjusts prices by location and product category.',
      result: 'Improved overall profitability by 19% through location-based pricing optimization. Reduced inventory carrying costs by 25% through better demand-price correlation.',
      icon: Globe,
      industry: 'Retail Chain',
      stats: { profitability: '19%', inventory: '25%', stores: '2000+' }
    }
  ];

  const problemStats = [
    { icon: TrendingUp, stat: '87%', label: 'Of companies struggle with pricing decisions' },
    { icon: Clock, stat: '40%', label: 'Revenue lost to suboptimal pricing' },
    { icon: AlertTriangle, stat: '60%', label: 'Pricing decisions based on gut feeling' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Real-time competitor price monitoring' },
    { icon: CheckCircle, benefit: 'AI-powered demand forecasting' },
    { icon: CheckCircle, benefit: 'Automated margin optimization' },
    { icon: CheckCircle, benefit: 'Dynamic pricing rule engine' }
  ];

  const pricingCapabilities = [
    {
      title: 'Competitive Intelligence',
      description: 'Monitor competitor pricing across all channels',
      icon: Search
    },
    {
      title: 'Demand Analytics',
      description: 'Predict customer demand at different price points',
      icon: BarChart3
    },
    {
      title: 'Margin Optimization',
      description: 'Maximize profit margins while staying competitive',
      icon: Percent
    },
    {
      title: 'Price Elasticity Analysis',
      description: 'Understand how price changes affect demand',
      icon: Activity
    },
    {
      title: 'Promotional Planning',
      description: 'Optimize discount strategies and timing',
      icon: Target
    },
    {
      title: 'Market Segmentation',
      description: 'Tailor pricing for different customer segments',
      icon: PieChart
    }
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
                    <TrendingUp className="w-8 h-8 text-ai-green" />
                  </div>
                  <div className="h-px bg-gradient-ai w-24"></div>
                </div>

                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  AI.PRICEINSIGHTS: Pricing Intelligence That{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Maximizes Profits
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Optimize your pricing strategy with advanced predictive AI. 
                  Monitor market, competition, and demand in{' '}
                  <span className="text-ai-green font-bold">real-time</span> to set prices that maximize both{' '}
                  <span className="text-ai-blue font-bold">margin and competitiveness</span>.
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
                    Test Price Optimization
                    <Calculator className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="xl" className="group">
                    View Market Analysis
                    <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                  {/* Pricing Analytics Visualization */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-ai-light/50">
                    {/* Pricing Chart Simulation */}
                    <div className="bg-gradient-to-br from-ai-green/5 to-ai-blue/5 rounded-2xl p-6 mb-6">
                      <div className="flex items-end justify-between space-x-2 h-24">
                        {[65, 78, 82, 95, 88, 91, 97].map((height, i) => (
                          <div 
                            key={i}
                            className="bg-gradient-ai rounded-t opacity-80 flex-1"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-ai-medium mt-2">
                        <span>Price</span>
                        <span>Margin</span>
                        <span>Competition</span>
                      </div>
                    </div>

                    {/* Pricing Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-xs text-ai-medium mb-1">Optimal Price</div>
                        <div className="text-lg font-bold text-ai-green">$47.99</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-xs text-ai-medium mb-1">Margin</div>
                        <div className="text-lg font-bold text-ai-blue">23%</div>
                      </div>
                    </div>

                    {/* Real-time Indicators */}
                    <div className="flex items-center justify-between p-3 bg-ai-green/10 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-ai-green rounded-full animate-pulse"></div>
                        <span className="text-xs text-ai-dark">Live Market Data</span>
                      </div>
                      <TrendingUp className="w-4 h-4 text-ai-green" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-green/30 rounded-full animate-pulse-slow"></div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">The Pricing Challenge</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Most companies struggle with pricing decisions, often relying on outdated spreadsheets, 
                    gut feelings, or simple cost-plus models. Meanwhile, competitors adjust prices dynamically, 
                    markets shift rapidly, and opportunities for profit optimization slip away daily.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Manual pricing processes can't keep up with modern market dynamics. By the time you 
                    analyze competitor movements and adjust your prices, the opportunity has already passed. 
                    You need intelligent, automated pricing that works 24/7.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Our Pricing Intelligence Revolution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    AI.PRICEINSIGHTS transforms pricing from guesswork into science. Our AI continuously 
                    monitors market conditions, competitor movements, and demand patterns to recommend 
                    optimal prices that maximize both revenue and profit margins.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    With 95% accurate demand forecasting and real-time market analysis, you'll always 
                    price competitively while protecting margins. Our automated system works around the 
                    clock, identifying opportunities and adjusting prices faster than any human team could.
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

        {/* Pricing Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Advanced Pricing{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Comprehensive pricing intelligence tools designed to optimize every aspect 
                of your pricing strategy and maximize profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingCapabilities.map((capability, index) => {
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
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Intelligent Pricing{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Discover the advanced AI capabilities that transform pricing decisions 
                from reactive guesswork into proactive profit optimization.
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
                Pricing{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                See how companies across industries are maximizing profits with 
                AI.PRICEINSIGHTS intelligent pricing optimization.
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
                            <div className="text-xs text-ai-medium capitalize">{key}</div>
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
              Ready to Maximize Your{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                Pricing Profits?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading companies that have already revolutionized their pricing strategies 
              with AI.PRICEINSIGHTS. Start optimizing for maximum profitability today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Target, value: '95%', label: 'Forecast Accuracy' },
                { icon: TrendingUp, value: '23%', label: 'Average Margin Increase' },
                { icon: Zap, value: 'Real-time', label: 'Price Optimization' },
                { icon: Users, value: '200+', label: 'Companies Optimized' }
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
                Test Price Optimization
                <Calculator className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ai_outline" 
                size="xl" 
                className="border-white text-white hover:bg-white hover:text-ai-dark group"
              >
                View Market Analysis
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                Download Pricing Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Questions? Contact our pricing specialists at{' '}
              <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +1 (800) 123-4567
              </a>{' '}
              or{' '}
              <a href="mailto:pricing@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                pricing@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}