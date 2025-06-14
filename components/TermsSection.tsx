'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Scale, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  FileText, 
  Mail, 
  Phone, 
  Download,
  Calendar,
  User,
  Database,
  Settings,
  Globe,
  AlertCircle,
  Info,
  Book,
  Clock,
  DollarSign,
  Target,
  Award,
  Headphones,
  Lock,
  Eye,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceFeatures = [
    {
      title: 'Document Processing',
      description: 'AI-powered OCR and intelligent document recognition',
      icon: FileText
    },
    {
      title: 'Data Management',
      description: 'Intelligent organization and workflow automation',
      icon: Database
    },
    {
      title: 'Process Automation',
      description: 'Custom integrations and automated workflows',
      icon: Settings
    },
    {
      title: 'API Access',
      description: 'RESTful APIs for seamless integration',
      icon: Globe
    }
  ];

  const warranties = [
    {
      title: '99.9% Uptime',
      description: 'Guaranteed service availability with SLA protection',
      icon: Clock,
      metric: '99.9%'
    },
    {
      title: 'Processing Accuracy',
      description: 'Minimum 99% accuracy in document processing',
      icon: Target,
      metric: '99%+'
    },
    {
      title: 'Technical Support',
      description: '24/7 technical assistance and expert guidance',
      icon: Headphones,
      metric: '24/7'
    },
    {
      title: 'Response Time',
      description: 'Maximum 2-hour response for critical issues',
      icon: Zap,
      metric: '<2hrs'
    }
  ];

  const customerResponsibilities = [
    'Providing accurate data and maintaining data quality',
    'Securing access credentials and user account management',
    'Using services according to provided documentation',
    'Complying with applicable laws regarding processed data',
    'Maintaining backup copies of critical business data',
    'Reporting security incidents or system issues promptly'
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                ITCygnus{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Termos de Serviço
                </span>
              </h1>
              
              <p 
                className={`text-lg text-ai-medium mb-6 transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <strong>Última atualização: 13 de Junho de 2025</strong>
              </p>

              <p 
                className={`text-xl text-ai-medium leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Estes termos regem o uso de nossos serviços e plataforma. Ao utilizar nossos serviços,
                você concorda com estes termos e com nossa política de privacidade.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <FileText className="w-8 h-8 text-ai-blue mr-4" />
                Descrição do Serviço
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                A ITCygnus fornece soluções de inteligência artificial empresarial, incluindo processamento de documentos,
                gestão inteligente de dados e automação de processos. Nossos serviços são disponibilizados através de APIs,
                interfaces web e integrações personalizadas, em conformidade com as normas brasileiras.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 text-center">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{feature.title}</h3>
                        <p className="text-sm text-ai-medium">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <User className="w-8 h-8 text-ai-green mr-4" />
                Responsabilidades do Cliente
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                O cliente é responsável por fornecer dados precisos, manter a segurança das credenciais de acesso,
                utilizar os serviços de acordo com a documentação fornecida e cumprir todas as leis aplicáveis
                relativas aos dados processados, incluindo a LGPD.
              </p>

              <div className="bg-ai-light/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ai-dark mb-6">Suas responsabilidades incluem:</h3>
                <div className="space-y-3">
                  {customerResponsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green mt-1 flex-shrink-0" />
                      <span className="text-ai-dark">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Warranties and Limitations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <Award className="w-8 h-8 text-ai-blue mr-4" />
                Garantias e Limitações
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                Garantimos 99.9% de disponibilidade dos nossos serviços, no mínimo 99% de precisão no processamento de documentos,
                e suporte técnico 24/7. Nossa responsabilidade é limitada ao valor pago pelos serviços
                no período de 12 meses, conforme legislação brasileira aplicável.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {warranties.map((warranty, index) => {
                  const Icon = warranty.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-ai-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-ai-green" />
                        </div>
                        <div className="text-2xl font-bold text-ai-blue mb-2">{warranty.metric}</div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{warranty.title}</h3>
                        <p className="text-sm text-ai-medium">{warranty.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Terms */}
            <div className="space-y-12">
              {/* Acceptable Use */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-ai-blue mr-3" />
                  Política de Uso Aceitável
                </h3>
                <p className="text-ai-medium leading-relaxed mb-6">
                  Você concorda em utilizar nossos serviços apenas para fins legais e de acordo com estes Termos.
                  Usos proibidos incluem, mas não se limitam a:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Processar conteúdo ilegal ou prejudicial',
                    'Tentar violar a segurança do sistema',
                    'Interferir na disponibilidade do serviço',
                    'Violar direitos de propriedade intelectual',
                    'Compartilhar credenciais de acesso com usuários não autorizados',
                    'Usar os serviços para inteligência competitiva'
                  ].map((prohibition, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-ai-dark text-sm">{prohibition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Lock className="w-6 h-6 text-ai-green mr-3" />
                  Proteção de Dados e Privacidade
                </h3>
                <p className="text-ai-medium leading-relaxed mb-4">
                  Estamos comprometidos em proteger seus dados e manter conformidade com as leis de privacidade aplicáveis:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Conformidade com LGPD e GDPR',
                    'Certificação SOC 2 Tipo II',
                    'Criptografia de ponta a ponta',
                    'Auditorias regulares de segurança',
                    'Opções de residência de dados',
                    'Direito à portabilidade de dados'
                  ].map((protection, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark text-sm">{protection}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Book className="w-6 h-6 text-ai-blue mr-3" />
                  Propriedade Intelectual
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  Todos os direitos, títulos e interesses nos serviços, incluindo todos os direitos de propriedade
                  intelectual, permanecem com a ITCygnus. Você mantém a propriedade de seus dados e conteúdo
                  processados através de nossos serviços. Nós concedemos a você uma licença limitada, não exclusiva
                  para usar nossos serviços de acordo com estes Termos.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-ai-green mr-3" />
                  Rescisão
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  Qualquer uma das partes pode rescindir este acordo com 7 dias de aviso prévio por escrito. Podemos
                  imediatamente rescindir ou suspender o acesso por violações destes Termos ou não pagamento. Após a rescisão,
                  você terá 90 dias para exportar seus dados antes que sejam permanentemente excluídos, conforme previsto
                  na LGPD.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 text-ai-blue mr-3" />
                  Limitação de Responsabilidade
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  Na máxima extensão permitida por lei, a responsabilidade total da ITCygnus por quaisquer reclamações
                  decorrentes ou relacionadas aos serviços não excederá o valor pago por você pelos serviços
                  nos 12 meses anteriores ao incidente. Não somos responsáveis por danos indiretos, incidentais
                  ou consequenciais, conforme previsto no Código Civil Brasileiro.
                </p>
              </div>

              {/* Updates to Terms */}
              <div>
                <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-ai-green mr-3" />
                  Atualizações dos Termos
                </h3>
                <p className="text-ai-medium leading-relaxed">
                  Podemos atualizar estes Termos periodicamente. Se fizermos alterações significativas, iremos notificá-lo
                  com pelo menos 7 dias de antecedência antes que as mudanças entrem em vigor. O uso contínuo dos serviços
                  após a data de vigência constitui aceitação dos Termos atualizados.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-ai-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 text-ai-green mr-3" />
                Dúvidas sobre estes Termos?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Se tiver qualquer dúvida sobre estes Termos de Serviço ou precisar de esclarecimentos
                sobre qualquer disposição, entre em contato com nosso time jurídico:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <a href="mailto:legal@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                      legal@itcygnus.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-ai-blue flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <a href="tel:+55-11-98765-4321" className="text-ai-blue hover:text-ai-blue/80 transition-colors">
                      +55 (11) 5039-4877
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
