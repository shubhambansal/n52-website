import en from '../../messages/en.json';
import de from '../../messages/de.json';

export const translations = {
  en,
  de,
} as const;

export type Locale = keyof typeof translations;

export function useTranslations(locale: Locale = 'en') {
  return function t(key: string) {
    const keys = key.split('.');
    let value: unknown = translations[locale];
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    
    return (value as string) || key;
  };
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
