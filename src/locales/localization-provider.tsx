// src/locales/localization-provider.tsx
'use client';

import { useState, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useLocales } from './use-locales';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// Adapter locales para date-fns
const adapterLocales: Record<string, any> = {
  en: () => import('date-fns/locale/en-US'),
  es: () => import('date-fns/locale/es'),
  fr: () => import('date-fns/locale/fr'),
  ar: () => import('date-fns/locale/ar-SA'),
  vi: () => import('date-fns/locale/vi'),
  zh: () => import('date-fns/locale/zh-CN'),
};

export default function LocalizationProvider({ children }: Props) {
  const { currentLang } = useLocales();
  const [adapterLocale, setAdapterLocale] = useState<any>(null);

  // Cargar el locale de date-fns dinámicamente
  useEffect(() => {
    const loadLocale = async () => {
      try {
        const localeLoader =
          adapterLocales[currentLang.value] || adapterLocales.es;
        const localeModule = await localeLoader();
        setAdapterLocale(localeModule.default || localeModule);
      } catch (error) {
        console.error('Failed to load date-fns locale:', error);
        // Cargar español como fallback
        const esLocale = await adapterLocales.es();
        setAdapterLocale(esLocale.default || esLocale);
      }
    };

    loadLocale();
  }, [currentLang.value]);

  // Si no se ha cargado el locale, mostrar loading o null
  if (!adapterLocale) {
    return <>{children}</>;
  }

  return (
    <MuiLocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={adapterLocale}
    >
      {children}
    </MuiLocalizationProvider>
  );
}
