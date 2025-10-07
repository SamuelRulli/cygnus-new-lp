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
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIPRICEINSIGHTSSection() {
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = translations.aiPriceInsights;

  if (!t) {
    return null;
  }

  const keyBenefits = [
    { icon: Activity, text: t.hero.keyBenefits.benefit1 },
    { icon: Target, text: t.hero.keyBenefits.benefit2 },
    { icon: TrendingUp, text: t.hero.keyBenefits.benefit3 },
    { icon: Bell, text: t.hero.keyBenefits.benefit4 }
  ];

  const features = [
    {
      title: t.features.dynamicPricing.title,
      description: t.features.dynamicPricing.description,
      details: t.features.dynamicPricing.details,
      icon: Brain
    },
    {
      title: t.features.competitiveAnalysis.title,
      description: t.features.competitiveAnalysis.description,
      details: t.features.competitiveAnalysis.details,
      icon: Search
    },
    {
      title: t.features.demandForecasting.title,
      description: t.features.demandForecasting.description,
      details: t.features.demandForecasting.details,
      icon: LineChart
    },
    {
      title: t.features.automatedOptimization.title,
      description: t.features.automatedOptimization.description,
      details: t.features.automatedOptimization.details,
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
    { icon: TrendingUp, stat: '87%', label: t.problemSolution.problem.stats.stat1 },
    { icon: Clock, stat: '40%', label: t.problemSolution.problem.stats.stat2 },
    { icon: AlertTriangle, stat: '60%', label: t.problemSolution.problem.stats.stat3 }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: t.problemSolution.solution.benefits.benefit1 },
    { icon: CheckCircle, benefit: t.problemSolution.solution.benefits.benefit2 },
    { icon: CheckCircle, benefit: t.problemSolution.solution.benefits.benefit3 },
    { icon: CheckCircle, benefit: t.problemSolution.solution.benefits.benefit4 }
  ];

  const pricingCapabilities = [
    {
      title: t.pricingCapabilities.competitiveIntelligence.title,
      description: t.pricingCapabilities.competitiveIntelligence.description,
      icon: Search
    },
    {
      title: t.pricingCapabilities.demandAnalysis.title,
      description: t.pricingCapabilities.demandAnalysis.description,
      icon: BarChart3
    },
    {
      title: t.pricingCapabilities.marginOptimization.title,
      description: t.pricingCapabilities.marginOptimization.description,
      icon: Percent
    },
    {
      title: t.pricingCapabilities.priceElasticityAnalysis.title,
      description: t.pricingCapabilities.priceElasticityAnalysis.description,
      icon: Activity
    },
    {
      title: t.pricingCapabilities.promotionalPlanning.title,
      description: t.pricingCapabilities.promotionalPlanning.description,
      icon: Target
    },
    {
      title: t.pricingCapabilities.marketSegmentation.title,
      description: t.pricingCapabilities.marketSegmentation.description,
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
                  {t.hero.title}{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {t.hero.subtitle}{' '}
                  <span className="text-ai-green font-bold">{t.hero.subtitleEmphasis1}</span> {t.hero.subtitleEmphasis2}{' '}
                  <span className="text-ai-blue font-bold">{t.hero.subtitleEmphasis3}</span>.
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
                  {/* <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                    Test Price Optimization
                    <Calculator className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button> */}
                  {/* <Button variant="ai_outline" size="xl" className="group">
                    View Market Analysis
                    <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button> */}
                  <Link href="/demo">
                    <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                      {t.hero.cta}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
                        <span>{t.hero.visual.price}</span>
                        <span>{t.hero.visual.margin}</span>
                        <span>{t.hero.visual.competition}</span>
                      </div>
                    </div>

                    {/* Pricing Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-xs text-ai-medium mb-1">{t.hero.visual.optimalPrice}</div>
                        <div className="text-lg font-bold text-ai-green">R$ 47,99</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-xs text-ai-medium mb-1">{t.hero.visual.margin}</div>
                        <div className="text-lg font-bold text-ai-blue">23%</div>
                      </div>
                    </div>

                    {/* Real-time Indicators */}
                    <div className="flex items-center justify-between p-3 bg-ai-green/10 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-ai-green rounded-full animate-pulse"></div>
                        <span className="text-xs text-ai-dark">{t.hero.visual.liveMarketData}</span>
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

        {/* Brazilian Pharmaceutical Pricing Tables Section */}
        <section className="py-20 bg-gradient-to-br from-ai-green/5 to-ai-blue/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ai rounded-2xl mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                {t.pricingTables.title}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t.pricingTables.titleHighlight}
                </span>
              </h2>
              <p className="text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
                {t.pricingTables.subtitle}{' '}
                <span className="font-bold text-ai-blue">{t.pricingTables.subtitleEmphasis}</span>
                {t.pricingTables.subtitleEnd}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {/* CMED/Anvisa */}
              <Card className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-ai-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ai-dark">{t.pricingTables.cmed.title}</h3>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        {t.pricingTables.cmed.source}
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    {t.pricingTables.cmed.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.cmed.item1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.cmed.item2}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.cmed.item3}</span>
                    </div>
                  </div>
                  <a 
                    href="https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" 
                    target="_blank"
                    className="text-ai-blue hover:text-ai-blue/80 text-sm font-medium"
                  >
                  </a>
                </CardContent>
              </Card>

              {/* ABC Farma */}
              <Card className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-ai-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ai-dark">{t.pricingTables.abcFarma.title}</h3>
                      <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                        {t.pricingTables.abcFarma.source}
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    {t.pricingTables.abcFarma.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.abcFarma.item1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.abcFarma.item2}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.abcFarma.item3}</span>
                    </div>
                  </div>
                  <a 
                    href="https://www.abcfarma.org.br/" 
                    target="_blank"
                    className="text-ai-blue hover:text-ai-blue/80 text-sm font-medium"
                  >
                  </a>
                </CardContent>
              </Card>

              {/* Brasíndice */}
              <Card className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-ai-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ai-dark">{t.pricingTables.brasindice.title}</h3>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        {t.pricingTables.brasindice.source}
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    {t.pricingTables.brasindice.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.brasindice.item1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.brasindice.item2}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.brasindice.item3}</span>
                    </div>
                  </div>
                  <a 
                    href="https://brasindice.com.br/" 
                    target="_blank"
                    className="text-ai-blue hover:text-ai-blue/80 text-sm font-medium"
                  >
                  </a>
                </CardContent>
              </Card>

              {/* Simpro */}
              <Card className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center mr-4">
                      <Activity className="w-6 h-6 text-ai-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ai-dark">{t.pricingTables.simpro.title}</h3>
                      <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                        {t.pricingTables.simpro.source}
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    {t.pricingTables.simpro.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.simpro.item1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.simpro.item2}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.simpro.item3}</span>
                    </div>
                  </div>
                  <a 
                    href="https://simpro.com.br/" 
                    target="_blank"
                    className="text-ai-blue hover:text-ai-blue/80 text-sm font-medium"
                  >
                  </a>
                </CardContent>
              </Card>

              {/* BPS */}
              <Card className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 lg:col-span-2 xl:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-ai-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ai-dark">{t.pricingTables.bps.title}</h3>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        {t.pricingTables.bps.source}
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    {t.pricingTables.bps.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.bps.item1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.bps.item2}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">{t.pricingTables.bps.item3}</span>
                    </div>
                  </div>
                  <a 
                    href="https://consultapublica.saude.gov.br/bps/" 
                    target="_blank"
                    className="text-ai-blue hover:text-ai-blue/80 text-sm font-medium"
                  >
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ai-light/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-ai-dark mb-4">
                  {t.pricingTables.integration.title}
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  {t.pricingTables.integration.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-ai-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-ai-blue mb-2">5+</div>
                  <div className="text-sm font-medium text-ai-dark">{t.pricingTables.integration.stat1}</div>
                </div>
                <div className="text-center p-4 bg-ai-green/10 rounded-lg">
                  <div className="text-2xl font-bold text-ai-green mb-2">Real-time</div>
                  <div className="text-sm font-medium text-ai-dark">{t.pricingTables.integration.stat2}</div>
                </div>
                <div className="text-center p-4 bg-ai-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-ai-blue mb-2">100%</div>
                  <div className="text-sm font-medium text-ai-dark">{t.pricingTables.integration.stat3}</div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">{t.problemSolution.problem.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.problemSolution.problem.p1}
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.problemSolution.problem.p2}
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
                  <h2 className="text-3xl font-bold text-ai-dark">{t.problemSolution.solution.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.problemSolution.solution.p1}
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    {t.problemSolution.solution.p2}
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
                {t.advancedFeatures.title}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t.advancedFeatures.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t.advancedFeatures.subtitle}
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
                {t.intelligentFeatures.title}{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  {t.intelligentFeatures.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                {t.intelligentFeatures.subtitle}
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
              {t.finalCta.title}{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                {t.finalCta.titleHighlight}
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.finalCta.subtitle}
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Target, value: '95%', label: t.finalCta.trustIndicators.forecastAccuracy },
                { icon: TrendingUp, value: '23%', label: t.finalCta.trustIndicators.avgMarginIncrease },
                { icon: Zap, value: 'Tempo Real', label: t.finalCta.trustIndicators.realTimeOptimization },
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
              <Link href="/demo">
              <Button variant="ai_primary" size="xl" className="group shadow-2xl">
                {t.finalCta.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              {t.finalCta.contact.text1}{' '}
              <a href="tel:+55-11-3456-7890" className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t.finalCta.contact.phone}
              </a>{' '}
              {t.finalCta.contact.text2}{' '}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                {t.finalCta.contact.email}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
