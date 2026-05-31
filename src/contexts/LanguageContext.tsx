import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import pt from '../locales/pt.json';
import es from '../locales/es.json';
import enGB from '../locales/en-GB.json';
import enUS from '../locales/en-US.json';
import fr from '../locales/fr.json';

type Language = 'pt' | 'es' | 'en-GB' | 'en-US' | 'fr';

interface Translations {
  [key: string]: any;
}

const translations: Record<Language, Translations> = {
  pt,
  es,
  'en-GB': enGB,
  'en-US': enUS,
  fr,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'pt';
    } catch (e) {
      return 'pt';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      console.warn('localStorage not available');
    }
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let current: any = translations[language];
    
    // Fallback for some bundlers that nest json under .default
    if (current && current.default) {
      current = current.default;
    }
    
    for (const k of keys) {
      if (current === undefined || current === null) return key;
      current = current[k];
    }
    
    return current !== undefined ? current : key;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
