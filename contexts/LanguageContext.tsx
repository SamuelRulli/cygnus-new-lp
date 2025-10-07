'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translation files
import ptBR from '@/translations/pt-BR.json';
import enUS from '@/translations/en-US.json';

const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'pt-BR' || savedLanguage === 'en-US')) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('language', language);
      } catch (error) {
        console.error('Error saving language to localStorage:', error);
      }
    }
  }, [language, isLoaded]);

  const setLanguageAndReload = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  }

  // Translation function
  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Return key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageAndReload, t, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
