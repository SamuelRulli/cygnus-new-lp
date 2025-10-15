import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageLayoutWrapper from '@/components/LanguageLayoutWrapper';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IT Cygnus - Transforme sua Empresa com IA que entrega resultados mensuráveis',
  description: 'A única plataforma de IA empresarial que reduz o tempo de processamento manual em 75%, com implementação em 30 dias e ROI comprovado. Mais de 100+ empresas confiam na ITCygnus para automatizar seus processos críticos de negócio.',
  keywords: [
    'inteligência artificial',
    'Reembolso saúde',
    'gestão de saúde',
    'gestão de reembolso',
    'gestão de benefícios',
    'gestão de processos',
    'gestão de documentos',
    'gestão de contratos',
    'gestão de compliance',
    'gestão de riscos',
    'gestão de dados',
    'gestão de informações',
    'gestão de processos empresariais',
    'IA empresarial',
    'automação de processos',
    'transformação digital',
    'ROI comprovado',
    'implementação rápida',
    'processamento de documentos',
    'OCR inteligente',
    'chatbots empresariais',
    'análise de preços',
    'saúde digital',
    'compliance automatizado',
    'segurança de dados',
    'LGPD',
    'tecnologia brasileira',
    'receita saude validacao'
  ],
  authors: [{ name: 'Cygnus IT Services' }],
  creator: 'Cygnus IT Services',
  publisher: 'Cygnus IT Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cygnusit.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'IT Cygnus - Transforme sua Empresa com IA que entrega resultados mensuráveis',
    description: 'A única plataforma de IA empresarial que reduz o tempo de processamento manual em 75%, com implementação em 30 dias e ROI comprovado.',
    url: 'https://cygnusit.com.br',
    siteName: 'Cygnus IT Services',
    images: [
      {
        url: 'https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png',
        width: 1200,
        height: 630,
        alt: 'Cygnus IT Services - Inteligência Artificial Empresarial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Cygnus - Transforme sua Empresa com IA que entrega resultados mensuráveis',
    description: 'A única plataforma de IA empresarial que reduz o tempo de processamento manual em 75%, com implementação em 30 dias e ROI comprovado.',
    images: ['https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png'],
    creator: '@cygnusit',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png',
    shortcut: 'https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png',
    apple: 'https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png',
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
    yahoo: 'yahoo-site-verification-code-here',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#598E71" />
        <link rel="canonical" href="https://itcygnus.com" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageLayoutWrapper>
            {children}
          </LanguageLayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
