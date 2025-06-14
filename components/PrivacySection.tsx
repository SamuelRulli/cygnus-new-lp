'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Eye, 
  Lock, 
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
  Scale
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const privacyPrinciples = [
    {
      title: 'Transparência',
      description: 'Explicamos claramente quais dados coletamos e como os utilizamos',
      icon: Eye
    },
    {
      title: 'Coleta Mínima',
      description: 'Coletamos apenas os dados necessários para fornecer nossos serviços',
      icon: Database
    },
    {
      title: 'Segurança Robusta',
      description: 'Seus dados são protegidos com segurança de nível empresarial',
      icon: Lock
    },
    {
      title: 'Seu Controle',
      description: 'Você tem total controle sobre suas informações pessoais',
      icon: Settings
    }
  ];

  const dataTypes = [
    {
      category: 'Informações Fornecidas por Você',
      items: [
        'Informações de contato (nome, e-mail, telefone)',
        'Informações da empresa e cargo',
        'Solicitações de demonstração e envios de formulários',
        'Tickets de suporte e comunicações'
      ]
    },
    {
      category: 'Informações Técnicas',
      items: [
        'Endereço IP e informações do navegador',
        'Padrões de uso e navegação no site',
        'Dados de desempenho e análises',
        'Informações de cookies e sessão'
      ]
    },
    {
      category: 'Dados de Uso do Serviço',
      items: [
        'Uso da plataforma e interações com recursos',
        'Métricas de processamento de documentos',
        'Chamadas de API e desempenho do sistema',
        'Logs de erro e informações de diagnóstico'
      ]
    }
  ];

  const yourRights = [
    {
      right: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      icon: Eye
    },
    {
      right: 'Correct Information',
      description: 'Update or correct any inaccurate personal information',
      icon: Settings
    },
    {
      right: 'Delete Data',
      description: 'Request deletion of your personal data (right to be forgotten)',
      icon: AlertCircle
    },
    {
      right: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: Download
    },
    {
      right: 'Restrict Processing',
      description: 'Limit how we process your personal information',
      icon: Lock
    },
    {
      right: 'Withdraw Consent',
      description: 'Revoke consent for data processing at any time',
      icon: User
    }
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
                  <Shield className="w-8 h-8 text-white" />
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
                  Política de Privacidade
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
                A ITCygnus está comprometida em proteger a privacidade e segurança dos dados pessoais de nossos 
                usuários, clientes e visitantes. Esta política descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais, em total conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei 13.709/2018) e GDPR.
              </p>
            </div>

            {/* Privacy Principles */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {privacyPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{principle.title}</h3>
                      <p className="text-sm text-ai-medium">{principle.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Information We Collect */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <Database className="w-8 h-8 text-ai-blue mr-4" />
                Informações que Coletamos
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                Coletamos apenas informações necessárias para fornecer nossos serviços e melhorar sua experiência. 
                Isso inclui dados fornecidos voluntariamente através de formulários, cookies técnicos para funcionalidade do site, 
                e informações de uso para otimização de desempenho.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    category: 'Informações Fornecidas por Você',
                    items: [
                      'Informações de contato (nome, e-mail, telefone)',
                      'Informações da empresa e cargo',
                      'Solicitações de demonstração e envios de formulários',
                      'Tickets de suporte e comunicações'
                    ]
                  },
                  {
                    category: 'Informações Técnicas',
                    items: [
                      'Endereço IP e informações do navegador',
                      'Padrões de uso e navegação no site',
                      'Dados de desempenho e análises',
                      'Informações de cookies e sessão'
                    ]
                  },
                  {
                    category: 'Dados de Uso do Serviço',
                    items: [
                      'Uso da plataforma e interações com recursos',
                      'Métricas de processamento de documentos',
                      'Chamadas de API e desempenho do sistema',
                      'Logs de erro e informações de diagnóstico'
                    ]
                  }
                ].map((type, index) => (
                  <Card key={index} className="shadow-lg border-ai-light/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-ai-dark mb-4">{type.category}</h3>
                      <ul className="space-y-2">
                        {type.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-ai-green mt-1 flex-shrink-0" />
                            <span className="text-sm text-ai-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <Settings className="w-8 h-8 text-ai-green mr-4" />
                Como Utilizamos Suas Informações
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                Utilizamos seus dados exclusivamente para fornecer nossos serviços, responder a suas solicitações, enviar comunicações 
                relevantes (apenas com seu consentimento) e melhorar nossos produtos e serviços. Nunca vendemos 
                ou compartilhamos dados pessoais com terceiros para fins comerciais.
              </p>

              <div className="bg-ai-light/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ai-dark mb-6">Finalidades do Tratamento de Dados:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Fornecimento e manutenção de nossos serviços',
                    'Processamento de solicitações de demonstração e consultas',
                    'Suporte ao cliente e assistência técnica',
                    'Melhoria de serviços e desenvolvimento de recursos',
                    'Monitoramento de segurança e prevenção de fraudes',
                    'Conformidade legal e requisitos regulatórios',
                    'Comunicações de marketing (com consentimento)',
                    'Análises e otimização de desempenho'
                  ].map((purpose, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-ai-green flex-shrink-0" />
                      <span className="text-ai-dark">{purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-ai-dark mb-8 flex items-center">
                <User className="w-8 h-8 text-ai-blue mr-4" />
                Seus Direitos LGPD
              </h2>
              <p className="text-lg text-ai-medium leading-relaxed mb-8">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    right: 'Acesso aos Dados',
                    description: 'Solicitar confirmação e acesso aos seus dados pessoais',
                    icon: Eye
                  },
                  {
                    right: 'Correção',
                    description: 'Retificar dados incompletos, inexatos ou desatualizados',
                    icon: Settings
                  },
                  {
                    right: 'Exclusão',
                    description: 'Solicitar anonimização, bloqueio ou eliminação de dados desnecessários',
                    icon: AlertCircle
                  },
                  {
                    right: 'Portabilidade',
                    description: 'Solicitar a transferência dos seus dados para outro fornecedor',
                    icon: Download
                  },
                  {
                    right: 'Revogar Consentimento',
                    description: 'Revogar seu consentimento a qualquer momento',
                    icon: User
                  },
                  {
                    right: 'Informação',
                    description: 'Saber com quem compartilhamos seus dados',
                    icon: Info
                  }
                ].map((right, index) => {
                  const Icon = right.icon;
                  return (
                    <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-ai-green/10 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-ai-green" />
                        </div>
                        <h3 className="text-lg font-bold text-ai-dark mb-2">{right.right}</h3>
                        <p className="text-sm text-ai-medium">{right.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <p className="text-lg text-ai-medium leading-relaxed mt-8">
                Para exercer esses direitos, entre em contato com nosso Encarregado de Dados (DPO) em <a href="mailto:lgpd@itcygnus.com" className="text-ai-blue hover:text-ai-blue/80 transition-colors">lgpd@itcygnus.com</a>.
              </p>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Data Security */}
              <div className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Lock className="w-6 h-6 text-ai-blue mr-3" />
                Segurança de Dados
              </h3>
              <p className="text-ai-medium leading-relaxed mb-4">
                Implementamos medidas de segurança padrão do setor para proteger suas informações pessoais, incluindo:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Criptografia de ponta a ponta para transmissão de dados',
                  'Infraestrutura certificada SOC 2 Tipo II',
                  'Auditorias e avaliações regulares de segurança',
                  'Requisitos de autenticação multifator',
                  'Data centers seguros com proteção física',
                  'Treinamento de funcionários em proteção de dados'
                ].map((measure, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-ai-green flex-shrink-0" />
                    <span className="text-ai-dark text-sm">{measure}</span>
                  </div>
                ))}
              </div>
              </div>

              {/* Data Retention */}
              <div>
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-ai-green mr-3" />
                Retenção de Dados
              </h3>
              <p className="text-ai-medium leading-relaxed">
                Mantemos as informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos 
                nesta política de privacidade, cumprir obrigações legais, resolver disputas e fazer valer nossos acordos. 
                Quando os dados não são mais necessários, nós os excluímos ou anonimizamos com segurança de acordo com nosso cronograma de retenção de dados.
              </p>
              </div>

              {/* International Transfers */}
              <div>
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 text-ai-blue mr-3" />
                Transferência Internacional de Dados
              </h3>
              <p className="text-ai-medium leading-relaxed">
                Como operamos globalmente com escritórios no Brasil e nos Estados Unidos, suas informações pessoais 
                podem ser transferidas e processadas em outros países. Garantimos que medidas de proteção adequadas 
                estejam em vigor, incluindo Cláusulas Contratuais Padrão e decisões de adequação, 
                para proteger seus dados durante transferências internacionais, em conformidade com a LGPD.
              </p>
              </div>

              {/* Cookies */}
              <div>
              <h3 className="text-2xl font-bold text-ai-dark mb-6 flex items-center">
                <Settings className="w-6 h-6 text-ai-green mr-3" />
                Cookies e Rastreamento
              </h3>
              <p className="text-ai-medium leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, analisar tráfego 
                do site e entender preferências dos usuários. Você pode controlar as configurações de cookies através 
                das preferências do seu navegador. Cookies essenciais para funcionalidades básicas não podem ser desativados.
              </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-ai-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 text-ai-green mr-3" />
                Dúvidas sobre Privacidade?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Se tiver qualquer dúvida sobre esta Política de Privacidade, precisar exercer seus direitos
                ou quiser reportar uma preocupação com privacidade, entre em contato com nosso Encarregado de Dados (DPO):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-ai-green flex-shrink-0" />
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <a href="mailto:lgpd@itcygnus.com" className="text-ai-green hover:text-ai-green/80 transition-colors">
                      lgpd@itcygnus.com
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
