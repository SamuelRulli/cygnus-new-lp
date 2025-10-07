'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only show the component after it's mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white/80 hover:text-white hover:bg-white/10 gap-2 relative"
        >
          <Globe className="w-4 h-4" />
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white/95 backdrop-blur-sm border border-ai-light/20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code as 'pt-BR' | 'en-US');
              setIsOpen(false);
            }}
            className={`flex items-center justify-between cursor-pointer py-2 ${
              language === lang.code ? 'bg-ai-light/20' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {language === lang.code && (
              <Check className="w-4 h-4 text-ai-green" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
