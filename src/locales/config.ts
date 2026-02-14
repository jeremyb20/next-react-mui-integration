// i18n/config.ts
export const locales = ['ar', 'en', 'es', 'fr', 'vi', 'zh'] as const;
export const defaultLocale = 'es' as const;
export type Locale = (typeof locales)[number];

export function isLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
