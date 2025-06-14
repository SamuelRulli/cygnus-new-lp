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
    { icon: Activity, text: 'Análise de mercado em tempo real' },
    { icon: Target, text: '95% de precisão na previsão de demanda' },
    { icon: TrendingUp, text: 'Otimização automática de margem' },
    { icon: Bell, text: 'Alertas de oportunidades de preço' }
  ];

  const features = [
    {
      title: 'Inteligência de Precificação Dinâmica',
      description: 'Nossa IA monitora continuamente condições de mercado, preços da concorrência e padrões de demanda para recomendar preços ótimos que maximizam tanto receita quanto margens de lucro. O sistema se adapta a tendências sazonais, volatilidade do mercado e movimentos competitivos em tempo real.',
      details: 'Algoritmos avançados de machine learning analisam mais de 200 fatores de precificação incluindo movimentos da concorrência, padrões sazonais, níveis de estoque e comportamento do cliente para gerar recomendações de preços que aumentam a lucratividade em média 18%.',
      icon: Brain
    },
    {
      title: 'Análise Competitiva de Mercado',
      description: 'Rastreie preços da concorrência em todos os canais e plataformas automaticamente. Nosso sistema monitora mudanças de preços, atividades promocionais e posicionamento de mercado para garantir que sua estratégia de preços permaneça competitiva protegendo margens.',
      details: 'Monitoramento de concorrentes em tempo real através de plataformas de e-commerce, lojas físicas e canais B2B. Alertas automatizados quando concorrentes mudam preços, lançam promoções ou entram em novos segmentos de mercado.',
      icon: Search
    },
    {
      title: 'Motor de Previsão de Demanda',
      description: 'Preveja demanda do cliente com 95% de precisão usando dados históricos, tendências de mercado e fatores externos. Nossa IA identifica pontos de preço ótimos que maximizam volume de vendas mantendo margens de lucro saudáveis.',
      details: 'Modelos de previsão multivariados incorporam sazonalidade, indicadores econômicos, padrões climáticos e dados de comportamento do consumidor para prever demanda em diferentes pontos de preço com precisão sem precedentes.',
      icon: LineChart
    },
    {
      title: 'Otimização Automatizada de Preços',
      description: 'Defina regras de precificação e deixe nossa IA ajustar preços automaticamente baseado em seus objetivos de negócio. Seja maximizando receita, lucro ou participação de mercado, o sistema otimiza continuamente estratégias de precificação.',
      details: 'Algoritmos de otimização flexíveis que equilibram múltiplos objetivos incluindo crescimento de receita, maximização de lucro, rotatividade de estoque e posicionamento competitivo. Controle completo sobre restrições de preços e regras de negócio.',
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
    { icon: TrendingUp, stat: '87%', label: 'Das empresas lutam com decisões de precificação' },
    { icon: Clock, stat: '40%', label: 'Receita perdida por precificação subótima' },
    { icon: AlertTriangle, stat: '60%', label: 'Decisões de preço baseadas em intuição' }
  ];

  const solutionBenefits = [
    { icon: CheckCircle, benefit: 'Monitoramento de preços da concorrência em tempo real' },
    { icon: CheckCircle, benefit: 'Previsão de demanda alimentada por IA' },
    { icon: CheckCircle, benefit: 'Otimização automática de margem' },
    { icon: CheckCircle, benefit: 'Motor de regras de precificação dinâmica' }
  ];

  const pricingCapabilities = [
    {
      title: 'Inteligência Competitiva',
      description: 'Monitore preços da concorrência em todos os canais',
      icon: Search
    },
    {
      title: 'Análise de Demanda',
      description: 'Preveja demanda do cliente em diferentes pontos de preço',
      icon: BarChart3
    },
    {
      title: 'Otimização de Margem',
      description: 'Maximize margens de lucro mantendo competitividade',
      icon: Percent
    },
    {
      title: 'Análise de Elasticidade de Preço',
      description: 'Entenda como mudanças de preço afetam a demanda',
      icon: Activity
    },
    {
      title: 'Planejamento Promocional',
      description: 'Otimize estratégias de desconto e timing',
      icon: Target
    },
    {
      title: 'Segmentação de Mercado',
      description: 'Personalize preços para diferentes segmentos de clientes',
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
                  AI.PRICEINSIGHTS: Inteligência de Preços que{' '}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    Maximiza Lucros
                  </span>
                </h1>
                
                <p 
                  className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Otimize sua estratégia de preços com IA preditiva avançada. 
                  Monitore mercado, concorrência e demanda em{' '}
                  <span className="text-ai-green font-bold">tempo real</span> para definir preços que maximizam{' '}
                  <span className="text-ai-blue font-bold">margem e competitividade</span>.
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
                      Agendar Demonstração
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
                        <span>Preço</span>
                        <span>Margem</span>
                        <span>Concorrência</span>
                      </div>
                    </div>

                    {/* Pricing Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-xs text-ai-medium mb-1">Preço Ótimo</div>
                        <div className="text-lg font-bold text-ai-green">R$ 47,99</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-xs text-ai-medium mb-1">Margem</div>
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

        {/* Brazilian Pharmaceutical Pricing Tables Section */}
        <section className="py-20 bg-gradient-to-br from-ai-green/5 to-ai-blue/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ai rounded-2xl mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Tabelas de Precificação de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Medicamentos no Brasil
                </span>
              </h2>
              <p className="text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
                No Brasil, as tabelas de precificação de medicamentos são definidas e reguladas por órgãos governamentais, 
                principalmente pela <span className="font-bold text-ai-blue">CMED (Câmara de Regulação do Mercado de Medicamentos)</span>, 
                vinculada à Anvisa.
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
                      <h3 className="text-lg font-bold text-ai-dark">Lista de Preços CMED</h3>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        Anvisa/CMED
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    Publicada mensalmente, traz os preços máximos autorizados para comercialização.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">PMC (Preço Máximo ao Consumidor)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">PF (Preço Fábrica)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Genéricos, Similares, Referência</span>
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
                      <h3 className="text-lg font-bold text-ai-dark">ABC Farma</h3>
                      <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                        Associação Brasileira
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    Publica mensalmente a revista GUIA DA FARMÁCIA, com preços praticados pelo mercado.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Informações comerciais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Preços médios e margem de lucro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Usado por farmácias e drogarias</span>
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
                      <h3 className="text-lg font-bold text-ai-dark">Brasíndice</h3>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        Tabela Privada
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    Tabela privada muito utilizada em hospitais e convênios médicos.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Código Brasíndice</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Medicamentos e materiais hospitalares</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Preço unitário e total</span>
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
                      <h3 className="text-lg font-bold text-ai-dark">Simpro</h3>
                      <span className="text-xs text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                        Hospitais e Convênios
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    Semelhante ao Brasíndice, também utilizado em hospitais e convênios.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Referência para negociação</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Medicamentos e insumos médicos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Ambiente hospitalar</span>
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
                      <h3 className="text-lg font-bold text-ai-dark">BPS</h3>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        Ministério da Saúde
                      </span>
                    </div>
                  </div>
                  <p className="text-ai-medium mb-4">
                    Banco de Preços em Saúde - preços de medicamentos e insumos adquiridos por órgãos públicos.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Compras governamentais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Controle e análise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-ai-green" />
                      <span className="text-sm text-ai-dark">Órgãos públicos</span>
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
                  AI.PRICEINSIGHTS para o Mercado Farmacêutico Brasileiro
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  Nossa plataforma integra todas essas fontes de dados oficiais e privadas para fornecer 
                  inteligência de preços completa e atualizada para o setor farmacêutico brasileiro.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-ai-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-ai-blue mb-2">5+</div>
                  <div className="text-sm font-medium text-ai-dark">Fontes Integradas</div>
                </div>
                <div className="text-center p-4 bg-ai-green/10 rounded-lg">
                  <div className="text-2xl font-bold text-ai-green mb-2">Real-time</div>
                  <div className="text-sm font-medium text-ai-dark">Atualizações</div>
                </div>
                <div className="text-center p-4 bg-ai-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-ai-blue mb-2">100%</div>
                  <div className="text-sm font-medium text-ai-dark">Conformidade</div>
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
                  <h2 className="text-3xl font-bold text-ai-dark">O Desafio da Precificação</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    A maioria das empresas luta com decisões de precificação, frequentemente dependendo de planilhas 
                    desatualizadas, intuição ou modelos simples de custo-mais-margem. Enquanto isso, concorrentes ajustam 
                    preços dinamicamente, mercados mudam rapidamente e oportunidades de otimização de lucro escapam diariamente.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Processos manuais de precificação não conseguem acompanhar a dinâmica moderna do mercado. Quando você 
                    analisa movimentos da concorrência e ajusta seus preços, a oportunidade já passou. Você precisa de 
                    precificação inteligente e automatizada que funciona 24/7.
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
                  <h2 className="text-3xl font-bold text-ai-dark">Nossa Revolução em Inteligência de Preços</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-ai-medium leading-relaxed">
                    O AI.PRICEINSIGHTS transforma precificação de adivinhação em ciência. Nossa IA monitora 
                    continuamente condições de mercado, movimentos da concorrência e padrões de demanda para 
                    recomendar preços ótimos que maximizam tanto receita quanto margens de lucro.
                  </p>
                  
                  <p className="text-lg text-ai-medium leading-relaxed">
                    Com 95% de precisão na previsão de demanda e análise de mercado em tempo real, você sempre 
                    precificará competitivamente protegendo margens. Nosso sistema automatizado funciona 24 horas 
                    por dia, identificando oportunidades e ajustando preços mais rápido que qualquer equipe humana.
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
                Recursos Avançados de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Precificação
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Ferramentas abrangentes de inteligência de preços projetadas para otimizar 
                todos os aspectos da sua estratégia de precificação e maximizar a lucratividade.
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
                Recursos Inteligentes de{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Precificação
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                Descubra as capacidades avançadas de IA que transformam decisões de precificação 
                de adivinhação reativa em otimização proativa de lucros.
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
              Pronto para Maximizar Seus{' '}
              <span className="bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
                Lucros de Precificação?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se às empresas líderes que já revolucionaram suas estratégias de precificação 
              com o AI.PRICEINSIGHTS. Comece a otimizar para máxima lucratividade hoje mesmo.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Target, value: '95%', label: 'Precisão de Previsão' },
                { icon: TrendingUp, value: '23%', label: 'Aumento Médio de Margem' },
                { icon: Zap, value: 'Tempo Real', label: 'Otimização de Preços' },
                // { icon: Users, value: '200+', label: 'Empresas Otimizadas' }
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
                Agendar Demonstração
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
              {/* <Button 
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
              </Button> */}
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm">
              Dúvidas? Entre em contato com nossos especialistas em precificação pelo{' '}
              <a href="tel:+55-11-3456-7890" className="text-ai-green hover:text-ai-green/80 transition-colors">
                +55 (11) 5039-4877
              </a>{' '}
              ou{' '}
              <a href="mailto:contact@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                contact@itcygnus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
