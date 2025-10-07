'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export default function LanguageLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  
  useEffect(() => {
    if (document && language) {
      document.documentElement.lang = language;
    }
  }, [language]);

  return <>{children}</>;
}
