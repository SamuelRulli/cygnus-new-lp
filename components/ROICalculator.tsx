'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Zap,
  Target,
  Calendar,
  Download,
  Phone,
  Heart,
  Building2,
  Shield,
  Factory,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface ROIInputs {
  calculationType: string;
  monthlyDocuments: number;
  avgProcessingTime: number;
  hourlyRate: number;
  errorRate: number;
  reworkCost: number;
  storageCosts: number;
  // Healthcare specific fields
  monthlyGlosas?: number;
  avgAnalysisTime?: number;
  analystHourlyRate?: number;
  glosaValue?: number;
  recoveryRate?: number;
}

interface ROIResults {
  currentAnnualCost: number;
  automatedAnnualCost: number;
  annualSavings: number;
  paybackMonths: number;
  threeYearROI: number;
  hoursFreedMonthly: number;
  errorReduction: number;
  processingTimeReduction: number;
}

const defaultInputs: ROIInputs = {
  calculationType: '',
  monthlyDocuments: 10000,
  avgProcessingTime: 15,
  hourlyRate: 25,
  errorRate: 5,
  reworkCost: 50,
  storageCosts: 2000,
  // Healthcare defaults
  monthlyGlosas: 5000,
  avgAnalysisTime: 45,
  analystHourlyRate: 35,
  glosaValue: 150,
  recoveryRate: 65
};

const calculationTypes = [
  {
    id: 'healthcare',
    title: 'Saúde - Análise de Glosas',
    description: 'Calcule o ROI da automação de análise de glosas hospitalares',
    icon: Heart,
    color: 'red'
  },
  {
    id: 'automation',
    title: 'Automação Geral',
    description: 'ROI para automação de processos documentais gerais',
    icon: Factory,
    color: 'blue'
  },
  {
    id: 'financial',
    title: 'Setor Financeiro',
    description: 'Automação de processos financeiros e bancários',
    icon: Building2,
    color: 'green'
  },
  {
    id: 'insurance',
    title: 'Seguros',
    description: 'Processamento automatizado de sinistros e apólices',
    icon: Shield,
    color: 'purple'
  },
  {
    id: 'legal',
    title: 'Jurídico',
    description: 'Análise automatizada de contratos e documentos legais',
    icon: Briefcase,
    color: 'indigo'
  }
];

export default function ROICalculator() {
  const { t } = useLanguage();
  const [inputs, setInputs] = useState<ROIInputs>(defaultInputs);
  const [results, setResults] = useState<ROIResults | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);

  // Check for URL parameters to pre-select calculation type
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get('type');
      if (type && calculationTypes.some(ct => ct.id === type)) {
        setInputs(prev => ({ ...prev, calculationType: type }));
      }
    }
  }, []);

  // Get translated calculation types
  const getCalculationTypes = () => [
    {
      id: 'healthcare',
      title: t('roiCalculator.typeSelection.types.healthcare.title'),
      description: t('roiCalculator.typeSelection.types.healthcare.description'),
      icon: Heart,
      color: 'red'
    },
    {
      id: 'automation',
      title: t('roiCalculator.typeSelection.types.automation.title'),
      description: t('roiCalculator.typeSelection.types.automation.description'),
      icon: Factory,
      color: 'blue'
    },
    {
      id: 'financial',
      title: t('roiCalculator.typeSelection.types.financial.title'),
      description: t('roiCalculator.typeSelection.types.financial.description'),
      icon: Building2,
      color: 'green'
    },
    {
      id: 'insurance',
      title: t('roiCalculator.typeSelection.types.insurance.title'),
      description: t('roiCalculator.typeSelection.types.insurance.description'),
      icon: Shield,
      color: 'purple'
    },
    {
      id: 'legal',
      title: t('roiCalculator.typeSelection.types.legal.title'),
      description: t('roiCalculator.typeSelection.types.legal.description'),
      icon: Briefcase,
      color: 'indigo'
    }
  ];

  // Function to calculate cost per document based on volume ranges
  const getCostPerDocument = (monthlyVolume: number): number => {
    if (monthlyVolume <= 50000) {
      return 0.52; // Range 1: 1 to 50k
    } else if (monthlyVolume <= 500000) {
      return 0.43; // Range 2: 51k to 500k
    } else if (monthlyVolume <= 1000000) {
      return 0.35; // Range 3: 501k to 1000k
    } else {
      return 0.25; // Range 4: 1001k+
    }
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      let currentAnnualCost, automatedAnnualCost, annualSavings, paybackMonths, threeYearROI, hoursFreedMonthly, errorReduction, processingTimeReduction;

      if (inputs.calculationType === 'healthcare') {
        // Healthcare-specific calculations for glosa analysis
        const {
          monthlyGlosas = 0,
          avgAnalysisTime = 0,
          analystHourlyRate = 0,
          glosaValue = 0,
          recoveryRate = 0,
          storageCosts = 0
        } = inputs;

        // Dynamic cost per document analysis based on volume
        const costPerDocumentAnalysis = getCostPerDocument(monthlyGlosas);
        
        // Current state calculations for healthcare
        const monthlyAnalysisCost = monthlyGlosas * costPerDocumentAnalysis;
        
        // Current recovery value (what they're currently recovering)
        const currentMonthlyRecovery = (monthlyGlosas * glosaValue * recoveryRate) / 100;
        
        // Lost opportunity cost (glosas not recovered due to manual limitations)
        const lostOpportunityRate = 0.25; // 25% of glosas could be recovered with better analysis
        const monthlyLostOpportunity = (monthlyGlosas * glosaValue * lostOpportunityRate);
        
        const currentMonthlyCost = monthlyAnalysisCost + storageCosts + monthlyLostOpportunity;
        currentAnnualCost = currentMonthlyCost * 12;

        // Automated state calculations for healthcare
        const automationReduction = 0.80; // 80% reduction in analysis cost
        const recoveryImprovement = 0.15; // 15% improvement in recovery rate
        const storageReduction = 0.70; // 70% storage cost reduction
        
        const automatedMonthlyAnalysisCost = monthlyAnalysisCost * (1 - automationReduction);
        const automatedStorageCosts = storageCosts * (1 - storageReduction);
        
        // Improved recovery with automation
        const improvedRecoveryRate = Math.min(recoveryRate + (recoveryImprovement * 100), 95); // Cap at 95%
        const automatedMonthlyRecovery = (monthlyGlosas * glosaValue * improvedRecoveryRate) / 100;
        const additionalRecovery = automatedMonthlyRecovery - currentMonthlyRecovery;
        
        // Reduced lost opportunity
        const automatedLostOpportunity = monthlyLostOpportunity * 0.3; // 70% reduction in lost opportunities
        
        const platformCost = 8000; // Monthly platform cost for healthcare
        const automatedMonthlyCost = automatedMonthlyAnalysisCost + automatedStorageCosts + automatedLostOpportunity + platformCost;
        automatedAnnualCost = automatedMonthlyCost * 12;

        // Add additional recovery as savings
        const additionalAnnualRecovery = additionalRecovery * 12;
        const baseSavings = currentAnnualCost - automatedAnnualCost;
        annualSavings = baseSavings + additionalAnnualRecovery;

        // ROI calculations
        const implementationCost = 75000; // Higher implementation cost for healthcare
        paybackMonths = implementationCost / (annualSavings / 12);
        const threeYearSavings = (annualSavings * 3) - implementationCost;
        threeYearROI = (threeYearSavings / implementationCost) * 100;
        
        // Calculate hours freed based on cost reduction
        const monthlyCostSavings = monthlyAnalysisCost * automationReduction;
        hoursFreedMonthly = monthlyCostSavings / (analystHourlyRate || 35); // Use provided rate or default
        processingTimeReduction = automationReduction * 100;
        errorReduction = 85; // 85% reduction in analysis errors

      } else {
        // General automation calculations for all other sectors
        const {
          monthlyDocuments,
          avgProcessingTime,
          hourlyRate,
          errorRate,
          reworkCost,
          storageCosts
        } = inputs;

        // Dynamic cost per document analysis based on volume
        const costPerDocumentAnalysis = getCostPerDocument(monthlyDocuments);

        // Current state calculations
        const monthlyProcessingHours = (monthlyDocuments * avgProcessingTime) / 60;
        const monthlyLaborCost = monthlyProcessingHours * hourlyRate;
        const monthlyErrorCost = (monthlyDocuments * errorRate / 100) * reworkCost;
        const monthlyDocumentAnalysisCost = monthlyDocuments * costPerDocumentAnalysis;
        const currentMonthlyCost = monthlyLaborCost + monthlyErrorCost + monthlyDocumentAnalysisCost + storageCosts;
        currentAnnualCost = currentMonthlyCost * 12;

        // Automated state calculations (based on typical improvements)
        const automationReduction = 0.75; // 75% reduction in processing time
        const errorReductionRate = 0.90; // 90% error reduction
        const storageReduction = 0.60; // 60% storage cost reduction
        const analysisReduction = 0.80; // 80% reduction in analysis cost
        
        const automatedMonthlyLaborCost = monthlyLaborCost * (1 - automationReduction);
        const automatedMonthlyErrorCost = monthlyErrorCost * (1 - errorReductionRate);
        const automatedStorageCosts = storageCosts * (1 - storageReduction);
        const automatedDocumentAnalysisCost = monthlyDocumentAnalysisCost * (1 - analysisReduction);
        const platformCost = 5000; // Monthly platform cost
        
        const automatedMonthlyCost = automatedMonthlyLaborCost + automatedMonthlyErrorCost + automatedDocumentAnalysisCost + automatedStorageCosts + platformCost;
        automatedAnnualCost = automatedMonthlyCost * 12;

        // ROI calculations
        annualSavings = currentAnnualCost - automatedAnnualCost;
        const implementationCost = 50000; // One-time implementation cost
        paybackMonths = implementationCost / (annualSavings / 12);
        const threeYearSavings = (annualSavings * 3) - implementationCost;
        threeYearROI = (threeYearSavings / implementationCost) * 100;
        
        hoursFreedMonthly = monthlyProcessingHours * automationReduction;
        processingTimeReduction = automationReduction * 100;
        errorReduction = errorReductionRate * 100;
      }

      setResults({
        currentAnnualCost,
        automatedAnnualCost,
        annualSavings,
        paybackMonths,
        threeYearROI,
        hoursFreedMonthly,
        errorReduction,
        processingTimeReduction
      });

      setIsCalculating(false);
      setCurrentStep(3);
    }, 2000);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-br').format(Math.round(value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
      {/* Header */}
      <header className="bg-ai-dark text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-01.png"
                alt="Logo Cygnus"
                className="w-22 h-20 object-contain"
              />
              {/* <span className="text-xl font-bold text-white">ITCygnus</span> */}
            </Link>
            <div className="flex items-center space-x-4">
              <Calculator className="w-6 h-6 text-ai-green" />
              <span className="text-lg font-semibold">Calculadora de Retorno sobre Investimento</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
            {t('roiCalculator.title')}{' '}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              Demonstração Personalizada
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
            {t('roiCalculator.subtitle')}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[
              { step: 1, title: t('roiCalculator.steps.currentAnalysis'), icon: BarChart3 },
              { step: 2, title: t('roiCalculator.steps.calculateROI'), icon: Calculator },
              { step: 3, title: t('roiCalculator.steps.viewResults'), icon: TrendingUp }
            ].map((item, index) => {
              const Icon = item.icon;
              const isActive = currentStep === item.step;
              const isCompleted = currentStep > item.step;
              
              return (
                <div key={item.step} className="flex items-center">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-ai-blue text-white' : 
                    isCompleted ? 'bg-ai-green text-white' : 
                    'bg-ai-light text-ai-medium'
                  }`}>
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {index < 2 && (
                    <ArrowRight className={`w-5 h-5 mx-2 ${
                      currentStep > item.step ? 'text-ai-green' : 'text-ai-light'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 0: Calculation Type Selection */}
        {currentStep === 1 && !inputs.calculationType && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ai-dark mb-4">
                {t('roiCalculator.typeSelection.title')}
              </h2>
              <p className="text-lg text-ai-medium">
                {t('roiCalculator.typeSelection.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCalculationTypes().map((type) => {
                const Icon = type.icon;
                const colorClasses = {
                  red: 'border-red-500 hover:bg-red-50 text-red-500',
                  blue: 'border-ai-blue hover:bg-ai-blue/5 text-ai-blue',
                  green: 'border-ai-green hover:bg-ai-green/5 text-ai-green',
                  purple: 'border-purple-500 hover:bg-purple-50 text-purple-500',
                  indigo: 'border-indigo-500 hover:bg-indigo-50 text-indigo-500'
                };
                
                return (
                  <Card 
                    key={type.id} 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${colorClasses[type.color as keyof typeof colorClasses]}`}
                    onClick={() => setInputs({...inputs, calculationType: type.id})}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-${type.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 text-${type.color}-500`} />
                      </div>
                      <h3 className="text-xl font-bold text-ai-dark mb-3">
                        {type.title}
                      </h3>
                      <p className="text-ai-medium text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 1: Input Form */}
        {currentStep === 1 && inputs.calculationType && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <Card className="shadow-xl border-ai-light/50">
                <CardHeader className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5">
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <FileText className="w-6 h-6 text-ai-blue" />
                    <span>Insira os Dados do Seu Processo Atual</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {inputs.calculationType === 'healthcare' ? (
                    // Healthcare specific form
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="monthlyGlosas" className="text-ai-dark font-medium">
                          Volume Mensal para Análise
                        </Label>
                        <Input
                          id="monthlyGlosas"
                          type="number"
                          value={inputs.monthlyGlosas || 0}
                          onChange={(e) => setInputs({...inputs, monthlyGlosas: Number(e.target.value)})}
                          className="mt-2"
                        />
                        <p className="text-xs text-ai-medium mt-1">Número de glosas que precisam ser analisadas mensalmente</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="avgAnalysisTime" className="text-ai-dark font-medium">
                          Tempo Médio de Análise (minutos)
                        </Label>
                        <Input
                          id="avgAnalysisTime"
                          type="number"
                          value={inputs.avgAnalysisTime || 0}
                          onChange={(e) => setInputs({...inputs, avgAnalysisTime: Number(e.target.value)})}
                          className="mt-2"
                        />
                        <p className="text-xs text-ai-medium mt-1">Tempo que um analista leva para analisar uma glosa</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="analystHourlyRate" className="text-ai-dark font-medium">
                          Custo Hora do Analista (R$)
                        </Label>
                        <Input
                          id="analystHourlyRate"
                          type="number"
                          value={inputs.analystHourlyRate || 0}
                          onChange={(e) => setInputs({...inputs, analystHourlyRate: Number(e.target.value)})}
                          className="mt-2"
                        />
                        <p className="text-xs text-ai-medium mt-1">Custo por hora do profissional que analisa glosas</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="glosaValue" className="text-ai-dark font-medium">
                          Valor Médio por Glosa (R$)
                        </Label>
                        <Input
                          id="glosaValue"
                          type="number"
                          value={inputs.glosaValue || 0}
                          onChange={(e) => setInputs({...inputs, glosaValue: Number(e.target.value)})}
                          className="mt-2"
                        />
                        <p className="text-xs text-ai-medium mt-1">Valor médio em dólares de cada glosa</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="recoveryRate" className="text-ai-dark font-medium">
                          Taxa de Recuperação Atual (%)
                        </Label>
                        <Input
                          id="recoveryRate"
                          type="number"
                          value={inputs.recoveryRate || 0}
                          onChange={(e) => setInputs({...inputs, recoveryRate: Number(e.target.value)})}
                          className="mt-2"
                        />
                        <p className="text-xs text-ai-medium mt-1">Percentual de glosas que conseguem ser revertidas atualmente</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="storageCosts" className="text-ai-dark font-medium">
                          Custos de Armazenamento Mensal (R$)
                        </Label>
                        <Input
                          id="storageCosts"
                          type="number"
                          value={inputs.storageCosts}
                          onChange={(e) => setInputs({...inputs, storageCosts: Number(e.target.value)})}
                          className="mt-2"
                        />
                        <p className="text-xs text-ai-medium mt-1">Custos mensais com armazenamento de documentos</p>
                      </div>
                    </div>
                  ) : (
                    // General automation form
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="monthlyDocuments" className="text-ai-dark font-medium">
                          Documentos Processados Mensalmente
                        </Label>
                        <Input
                          id="monthlyDocuments"
                          type="number"
                          value={inputs.monthlyDocuments}
                          onChange={(e) => setInputs({...inputs, monthlyDocuments: Number(e.target.value)})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="avgProcessingTime" className="text-ai-dark font-medium">
                          Tempo Médio de Processamento (minutos)
                        </Label>
                        <Input
                          id="avgProcessingTime"
                          type="number"
                          value={inputs.avgProcessingTime}
                          onChange={(e) => setInputs({...inputs, avgProcessingTime: Number(e.target.value)})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="hourlyRate" className="text-ai-dark font-medium">
                          Custo por Hora (R$)
                        </Label>
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={inputs.hourlyRate}
                          onChange={(e) => setInputs({...inputs, hourlyRate: Number(e.target.value)})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="errorRate" className="text-ai-dark font-medium">
                          Taxa de Erros (%)
                        </Label>
                        <Input
                          id="errorRate"
                          type="number"
                          value={inputs.errorRate}
                          onChange={(e) => setInputs({...inputs, errorRate: Number(e.target.value)})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="reworkCost" className="text-ai-dark font-medium">
                          Custo por Retrabalho (R$)
                        </Label>
                        <Input
                          id="reworkCost"
                          type="number"
                          value={inputs.reworkCost}
                          onChange={(e) => setInputs({...inputs, reworkCost: Number(e.target.value)})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="storageCosts" className="text-ai-dark font-medium">
                          Custos Mensais de Armazenamento (R$)
                        </Label>
                        <Input
                          id="storageCosts"
                          type="number"
                          value={inputs.storageCosts}
                          onChange={(e) => setInputs({...inputs, storageCosts: Number(e.target.value)})}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    onClick={() => setCurrentStep(2)} 
                    className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white"
                    size="lg"
                  >
                    Continuar para Cálculo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <Card className="shadow-lg border-ai-light/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <Target className="w-6 h-6 text-ai-green" />
                    <span>Como Funciona</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { step: 1, title: 'Análise Atual', desc: 'Insira dados sobre seus processos manuais atuais' },
                    { step: 2, title: 'Projeção Automatizada', desc: 'Veja como a automação impactaria seus números' },
                    { step: 3, title: 'Relatório Detalhado', desc: 'Receba análise completa com cronograma de retorno' },
                    { step: 4, title: 'Consulta Personalizada', desc: 'Agende reunião para validar resultados' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ai-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-ai-blue">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ai-dark">{item.title}</h4>
                        <p className="text-sm text-ai-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-ai-light/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <CheckCircle className="w-6 h-6 text-ai-green" />
                    <span>Fatores Considerados</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-ai-medium">
                    {(inputs.calculationType === 'healthcare' ? [
                      'Volume mensal de glosas para análise',
                      // 'Custo base de R$0.34 por documento analisado',
                      'Taxa de recuperação atual de glosas',
                      'Valor médio por glosa processada',
                      'Custos de armazenamento e infraestrutura',
                      'Oportunidades perdidas por análise manual'
                    ] : [
                      'Volume mensal de documentos processados',
                      'Tempo médio de processamento por documento',
                      'Custo horário da equipe envolvida',
                      'Taxa de erro atual e custo de retrabalho',
                      'Custos de armazenamento e infraestrutura',
                      'Tempo de implementação e treinamento'
                    ]).map((factor, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-ai-green rounded-full"></div>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Step 2: Calculating */}
        {currentStep === 2 && (
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
                <Calculator className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-ai-dark mb-4">
                Calculando seu ROI...
              </h2>
              <p className="text-lg text-ai-medium mb-8">
                Nossa IA analisa seus dados e aplica conhecimento de implementação do mundo real para entregar projeções precisas e acionáveis.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 bg-ai-blue rounded-full animate-pulse-slow"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
              <Button 
                onClick={calculateROI}
                disabled={isCalculating}
                className="bg-ai-green hover:bg-ai-green/90 text-white"
                size="lg"
              >
                {isCalculating ? 'Calculando...' : 'Gerar Relatório de ROI'}
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {currentStep === 3 && results && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: 'Economia Anual',
                  value: formatCurrency(results.annualSavings),
                  color: 'ai-green',
                  description: 'Total cost reduction per year'
                },
                {
                  icon: Calendar,
                  title: 'Período de Retorno',
                  value: `${Math.round(results.paybackMonths)} months`,
                  color: 'ai-blue',
                  description: 'Time to recover investment'
                },
                {
                  icon: TrendingUp,
                  title: 'ROI em 3 Anos',
                  value: `${Math.round(results.threeYearROI)}%`,
                  color: 'ai-green',
                  description: 'Return on investment over 3 years'
                },
                {
                  icon: Clock,
                  title: 'Horas Liberadas',
                  value: `${formatNumber(results.hoursFreedMonthly)}/month`,
                  color: 'ai-blue',
                  description: 'Staff time available for strategic work'
                }
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="shadow-xl border-ai-light/50 hover:shadow-2xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 bg-${metric.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-6 h-6 text-${metric.color}`} />
                      </div>
                      <div className={`text-2xl font-bold text-${metric.color} mb-2`}>
                        {metric.value}
                      </div>
                      <h3 className="font-semibold text-ai-dark mb-1">
                        {metric.title}
                      </h3>
                      <p className="text-sm text-ai-medium">
                        {metric.title === 'Annual Savings' ? 'Redução de custo anual' : 
                         metric.title === 'Payback Period' ? 'Tempo para recuperar investimento' :
                         metric.title === '3-Year ROI' ? 'Retorno sobre investimento em 3 anos' :
                         'Tempo disponível para trabalho estratégico'}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Detailed Breakdown */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-xl border-ai-light/50">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <BarChart3 className="w-6 h-6 text-ai-blue" />
                    <span>Comparação de Custos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                      <span className="font-medium text-ai-dark">Custo Anual Atual</span>
                      <span className="text-xl font-bold text-red-600">
                        {formatCurrency(results.currentAnnualCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-ai-dark">Custo Anual Automatizado</span>
                      <span className="text-xl font-bold text-green-600">
                        {formatCurrency(results.automatedAnnualCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-ai-blue/10 rounded-lg border-2 border-ai-blue/20">
                      <span className="font-bold text-ai-dark">Economia Anual</span>
                      <span className="text-2xl font-bold text-ai-blue">
                        {formatCurrency(results.annualSavings)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-ai-light/50">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <Target className="w-6 h-6 text-ai-green" />
                    <span>Melhorias no Processo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: 'Redução no Tempo de Processamento',
                      value: `${Math.round(results.processingTimeReduction)}%`,
                      color: 'ai-blue'
                    },
                    {
                      title: 'Redução na Taxa de Erros',
                      value: `${Math.round(results.errorReduction)}%`,
                      color: 'ai-green'
                    },
                    {
                      title: 'Horas Liberadas Mensalmente',
                      value: formatNumber(results.hoursFreedMonthly),
                      color: 'ai-blue'
                    }
                  ].map((improvement, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white border border-ai-light rounded-lg">
                      <span className="font-medium text-ai-dark">{improvement.title}</span>
                      <span className={`text-xl font-bold text-${improvement.color}`}>
                        {improvement.value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Example Comparison */}
            <Card className="shadow-xl border-ai-light/50 bg-gradient-to-r from-ai-blue/5 to-ai-green/5">
              <CardHeader>
                    <CardTitle className="text-center text-ai-dark">
                      Seus Resultados vs. Cliente Típico ITCygnus
                    </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-white rounded-xl shadow-lg">
                    <h4 className="font-bold text-ai-dark mb-2">Sua Economia Projetada</h4>
                    <div className="text-3xl font-bold text-ai-green mb-2">
                      {formatCurrency(results.annualSavings)}
                    </div>
                    <p className="text-sm text-ai-medium">Redução de custo anual</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-lg">
                    <h4 className="font-bold text-ai-dark mb-2">Cliente Típico</h4>
                    <div className="text-3xl font-bold text-ai-blue mb-2">$480,000</div>
                    <p className="text-sm text-ai-medium">Economia média anual</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-lg">
                    <h4 className="font-bold text-ai-dark mb-2">Seu ROI</h4>
                    <div className="text-3xl font-bold text-ai-green mb-2">
                      {Math.round(results.threeYearROI)}%
                    </div>
                    <p className="text-sm text-ai-medium">Retorno em 3 anos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="shadow-xl border-ai-light/50 bg-ai-dark text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto para alcançar esses resultados?
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Agende uma consulta personalizada para validar essas projeções e criar
                  um plano de implementação customizado para sua organização.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="ai_primary" size="lg" className="bg-white text-ai-dark hover:bg-white/90 group">
                    Agendar Consulta
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ai_outline" size="lg" className="border-white text-white hover:bg-white hover:text-ai-dark group">
                    Baixar Relatório Completo
                    <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-white/60 mt-6 text-sm">
                  Questions? Call us at{' '}
                  <a href="tel:+1-800-123-4567" className="text-ai-green hover:text-ai-green/80 transition-colors">
                    +55 (11) 5039-4877
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
