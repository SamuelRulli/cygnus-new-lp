'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar,
  Building2,
  Users,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Star,
  Play,
  BarChart3,
  Clock,
  Award,
  Shield,
  Download
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrgencyElements from '@/components/UrgencyElements';
import SocialProofNotifications from '@/components/SocialProofNotifications';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  companySize: string;
  country: string;
  monthlyDocuments: string;
  currentChallenges: string;
  timeline: string;
  demoType: string;
  newsletter: boolean;
  privacy: boolean;
}

const defaultFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  industry: '',
  companySize: '',
  country: '',
  monthlyDocuments: '',
  currentChallenges: '',
  timeline: '',
  demoType: '',
  newsletter: false,
  privacy: false
};

export default function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Erro ao enviar formulário');
        // Aqui você pode adicionar uma notificação de erro para o usuário
        alert('Erro ao enviar formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.company && formData.jobTitle && formData.industry && formData.companySize;
      case 3:
        return formData.monthlyDocuments && formData.timeline && formData.demoType && formData.privacy;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <SocialProofNotifications />
        <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
          <div className="pt-20 lg:pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-ai-green rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
                Demonstração Solicitada com{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Sucesso!
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-ai-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                Obrigado pelo seu interesse na ITCygnus. Nossos especialistas em IA empresarial entrarão em contato
                em até 24 horas para agendar sua demonstração personalizada.
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Clock, title: '24 Horas', desc: 'Tempo de resposta garantido' },
                  { icon: Users, title: '100+', desc: 'Implementações bem-sucedidas' },
                  { icon: Target, title: '75%', desc: 'Economia média de tempo' }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-ai-light/50">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <div className="text-2xl font-bold text-ai-green mb-2">{metric.title}</div>
                      <p className="text-sm text-ai-medium">{metric.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-ai-light/50 mb-12">
                <h3 className="text-2xl font-bold text-ai-dark mb-6">O Que Acontece Depois?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    { step: 1, title: 'Contato Inicial', desc: 'Nosso especialista entrará em contato em até 24 horas', time: '24 horas', icon: Phone },
                    { step: 2, title: 'Avaliação de Necessidades', desc: 'Discussão breve sobre seus requisitos específicos', time: '30 minutos', icon: FileText },
                    { step: 3, title: 'Demonstração Personalizada', desc: 'Apresentação personalizada com seus casos de uso', time: '45 minutos', icon: Play },
                    { step: 4, title: 'Análise de ROI', desc: 'Projeção detalhada de benefícios para sua organização', time: '1 semana', icon: BarChart3 }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.step} className="flex items-start space-x-4 p-4 bg-ai-light/20 rounded-xl">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-ai-dark">{item.title}</h4>
                            <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-sm text-ai-medium">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="ai_outline" size="lg" className="group">
                    Voltar à Página Inicial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {/* <Link href="/roi-calculator">
                  <Button variant="ai_primary" size="lg" className="group">
                    Calcular Seu ROI
                    <Target className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        <SocialProofNotifications />
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
                <Play className="w-6 h-6 text-ai-green" />
                <span className="text-lg font-semibold">Solicitar Demonstração</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Urgency Elements */}
          <div className="mb-8 space-y-4">
            <UrgencyElements type="limited_spots" />
            <UrgencyElements type="discount" />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
              Veja a ITCygnus em Ação com uma{' '}
              <span className="bg-gradient-ai bg-clip-text text-transparent">
                Demonstração Personalizada
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
              Obtenha uma demonstração personalizada da nossa plataforma de IA adaptada às necessidades do seu negócio.
              Nossos especialistas mostrarão exatamente como a ITCygnus pode transformar seus fluxos de trabalho de processamento de documentos.
            </p>
          </div>

          {/* Demo Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[ 
                { 
                  title: 'Demonstração Geral', 
                  desc: 'Apresentação rápida e focada', 
                  time: '30 min',
                  icon: Play,
                  popular: false
                },
                { 
                  title: 'Demonstração Específica', 
                  desc: 'Personalizada para seu setor', 
                  time: '45 min',
                  icon: Building2,
                  popular: true
                },
                { 
                  title: 'Prova de Conceito', 
                  desc: 'Teste com seus dados', 
                  time: '1 semana',
                  icon: Target,
                  popular: false
                }
            ].map((demo, index) => {
              const Icon = demo.icon;
              return (
                <Card key={index} className={`shadow-lg border-ai-light/50 text-center hover:shadow-xl transition-all duration-300 ${demo.popular ? 'ring-2 ring-ai-green relative' : ''}`}>
                  {demo.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-ai-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-ai-blue" />
                    </div>
                    <h3 className="font-bold text-ai-dark mb-2">{demo.title}</h3>
                    <p className="text-sm text-ai-medium mb-3">{demo.desc}</p>
                    <div className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                      {demo.time}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[
                { step: 1, title: 'Informações Pessoais', icon: Users },
                { step: 2, title: 'Detalhes da Empresa', icon: Building2 },
                { step: 3, title: 'Preferências da Demo', icon: FileText }
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

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-ai-light/50">
                <CardHeader className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5">
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    {currentStep === 1 && <Users className="w-6 h-6 text-ai-blue" />}
                    {currentStep === 2 && <Building2 className="w-6 h-6 text-ai-blue" />}
                    {currentStep === 3 && <FileText className="w-6 h-6 text-ai-blue" />}
                    <span>
                      {currentStep === 1 && 'Informações Pessoais'}
                      {currentStep === 2 && 'Detalhes da Empresa'}
                      {currentStep === 3 && 'Preferências da Demo'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="text-ai-dark font-medium">
                            Nome Completo *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => updateFormData('firstName', e.target.value)}
                            className="mt-2"
                            placeholder="João"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-ai-dark font-medium">
                            Sobrenome *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => updateFormData('lastName', e.target.value)}
                            className="mt-2"
                            placeholder="Silva"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-ai-dark font-medium">
                          E-mail Corporativo *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className="mt-2"
                          placeholder="joao.silva@empresa.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-ai-dark font-medium">
                          Telefone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className="mt-2"
                          placeholder="+55 (11) 5039-4877"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Company Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="company" className="text-ai-dark font-medium">
                          Empresa *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateFormData('company', e.target.value)}
                          className="mt-2"
                          placeholder="Empresa XYZ"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="jobTitle" className="text-ai-dark font-medium">
                          Cargo *
                        </Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => updateFormData('jobTitle', e.target.value)}
                          className="mt-2"
                          placeholder="Diretor de Tecnologia"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="industry" className="text-ai-dark font-medium">
                            Setor *
                          </Label>
                          <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Selecione o setor" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="healthcare">Saúde</SelectItem>
                              <SelectItem value="financial">Serviços Financeiros</SelectItem>
                              <SelectItem value="manufacturing">Manufatura</SelectItem>
                              <SelectItem value="retail">Varejo & E-commerce</SelectItem>
                              <SelectItem value="government">Governo</SelectItem>
                              <SelectItem value="education">Educação</SelectItem>
                              <SelectItem value="insurance">Seguros</SelectItem>
                              <SelectItem value="logistics">Logística & Cadeia de Suprimentos</SelectItem>
                              <SelectItem value="other">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="companySize" className="text-ai-dark font-medium">
                            Número de Funcionários *
                          </Label>
                          <Select value={formData.companySize} onValueChange={(value) => updateFormData('companySize', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Selecione o tamanho" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">1-50 funcionários</SelectItem>
                              <SelectItem value="small">51-200 funcionários</SelectItem>
                              <SelectItem value="medium">201-1000 funcionários</SelectItem>
                              <SelectItem value="large">1001-5000 funcionários</SelectItem>
                              <SelectItem value="enterprise">Mais de 5000 funcionários</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Demo Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="monthlyDocuments" className="text-ai-dark font-medium">
                            Principal Desafio com Documentos *
                          </Label>
                          <Select value={formData.monthlyDocuments} onValueChange={(value) => updateFormData('monthlyDocuments', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Selecione o desafio" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="volume">Alto volume de documentos</SelectItem>
                              <SelectItem value="accuracy">Precisão na extração de dados</SelectItem>
                              <SelectItem value="speed">Velocidade de processamento</SelectItem>
                              <SelectItem value="integration">Integração com sistemas</SelectItem>
                              <SelectItem value="compliance">Conformidade regulatória</SelectItem>
                              <SelectItem value="costs">Custos operacionais</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="timeline" className="text-ai-dark font-medium">
                            Prazo para Implementação *
                          </Label>
                          <Select value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Selecione o prazo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Imediato (0-7 dias)</SelectItem>
                              <SelectItem value="short">Curto prazo (1-3 meses)</SelectItem>
                              <SelectItem value="medium">Médio prazo (3-6 meses)</SelectItem>
                              <SelectItem value="long">Longo prazo (6+ meses)</SelectItem>
                              <SelectItem value="exploring">Apenas explorando</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                          <Label htmlFor="demoType" className="text-ai-dark font-medium">
                            Tipo de Demonstração Preferida *
                          </Label>
                          <Select value={formData.demoType} onValueChange={(value) => updateFormData('demoType', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">Demonstração Geral (30 min)</SelectItem>
                              <SelectItem value="industry">Demonstração Específica (45 min)</SelectItem>
                              <SelectItem value="poc">Prova de Conceito (1 semana)</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentChallenges" className="text-ai-dark font-medium">
                          Desafios Atuais e Objetivos
                        </Label>
                        <Textarea
                          id="currentChallenges"
                          value={formData.currentChallenges}
                          onChange={(e) => updateFormData('currentChallenges', e.target.value)}
                          className="mt-2"
                          rows={4}
                          placeholder="Conte-nos sobre seus desafios atuais no processamento de documentos e o que você espera alcançar com automação..."
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => updateFormData('newsletter', checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="newsletter" className="text-sm text-ai-medium leading-relaxed">
                            Eu gostaria de receber atualizações sobre produtos ITCygnus, insights do setor e melhores práticas
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="privacy"
                            checked={formData.privacy}
                            onCheckedChange={(checked) => updateFormData('privacy', checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="privacy" className="text-sm text-ai-medium leading-relaxed">
                            Eu concordo com a <Link href="/privacy" className="text-ai-blue hover:underline">Política de Privacidade</Link> e 
                            <Link href="/terms" className="text-ai-blue hover:underline ml-1">Termos de Serviço</Link> *
                          </Label>
                        </div>
                      </div>

                      {/* Supporting Text */}
                      <div className="bg-ai-green/10 rounded-lg p-4 border border-ai-green/20">
                        <p className="text-sm text-ai-dark font-medium mb-2">Sem compromisso. Cancele quando quiser.</p>
                        <p className="text-xs text-ai-medium">
                          Sua demonstração é completamente gratuita e sem obrigações. Respeitamos seu tempo e forneceremos
                          insights valiosos independentemente de você decidir prosseguir ou não.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-ai-light">
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                      className="text-ai-medium"
                    >
                      Anterior
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!isStepValid(currentStep)}
                        className="bg-ai-blue hover:bg-ai-blue/90 text-white"
                      >
                        Continuar
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={!isStepValid(currentStep) || isSubmitting}
                        className="bg-ai-green hover:bg-ai-green/90 text-white"
                      >
                        {isSubmitting ? 'Agendando...' : 'Agendar Demonstração Gratuita'}
                        <Play className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card className="shadow-lg border-ai-light/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <Star className="w-6 h-6 text-ai-green" />
                    <span>O Que Esperar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: 'Demonstração Personalizada', desc: 'Veja a ITCygnus configurada para seu caso de uso específico' },
                    { title: 'Análise de ROI', desc: 'Obtenha projeções preliminares de economia de custos' },
                    { title: 'Perguntas Técnicas', desc: 'Tire dúvidas com nossos especialistas sobre integração e segurança' },
                    { title: 'Próximos Passos', desc: 'Discuta programa piloto e cronograma de implementação' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ai-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-ai-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ai-dark text-sm">{item.title}</h4>
                        <p className="text-xs text-ai-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Customer Success */}
              <Card className="shadow-lg border-ai-light/50 bg-gradient-to-br from-ai-blue/5 to-ai-green/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ai-blue mb-2">100+</div>
                    <div className="text-sm font-semibold text-ai-dark mb-3">Implementações Bem-Sucedidas</div>
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-ai-green fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-ai-medium leading-relaxed">
                      "Anteriormente, o processo de digitação dos prontuários médicos em nosso sistema era totalmente manual, o que tornava tudo muito demorado.
Buscando uma solução para agilizar esse processo e migrar para um modelo digital, encontramos a Cygnus, que oferece tecnologia de OCR.
A implementação da tecnologia da Cygnus foi fundamental para resolver esse desafio, pois nos atendeu com rapidez, alta eficiência e ainda contribuiu com insights valiosos para o desenvolvimento do projeto."
                    </p>
                    <div className="text-xs text-ai-dark font-medium mt-2">
                      - Empresa Fortune 500 do Setor de Saúde
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgency Element */}
              <UrgencyElements type="poc_slots" />

              {/* Contact Info */}
              <Card className="shadow-lg border-ai-light/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-ai-dark mb-4">Precisa de Ajuda?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-ai-blue" />
                      <span className="text-ai-medium">+55 (11) 5039-4877</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-ai-blue" />
                      <span className="text-ai-medium">contact@itcygnus.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
