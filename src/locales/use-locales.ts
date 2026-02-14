'use client';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { localStorageGetItem } from '@/utils/storage-available';

import { useSettingsContext } from '@/components/settings';

import { allLangs, defaultLang } from './config-lang';
import { LANGUAGE_NORMALIZATION_MAP } from '../utils/constants';
import { getExchangeRate, DEFAULT_CURRENCY } from '../utils/currency-service';
import { usePathname, useRouter, useSearchParams } from '@/routes/hooks';
import { locales } from './config';

// ----------------------------------------------------------------------

export function useLocales() {
  const langStorage = localStorageGetItem('i18nextLng');

  // Si no hay idioma guardado, usar español por defecto
  if (!langStorage) {
    return {
      allLangs,
      currentLang: defaultLang,
      symbol: defaultLang.numberFormat?.symbol || '$',
      targetCurrency: defaultLang.numberFormat?.currency || 'USD',
      exchangeRate: getExchangeRate(
        DEFAULT_CURRENCY,
        defaultLang.numberFormat?.currency || 'USD'
      ),
      shouldConvert:
        DEFAULT_CURRENCY !== (defaultLang.numberFormat?.currency || 'USD'),
    };
  }

  // Normalizar el idioma
  let normalizedLang = langStorage;

  // 1. Verificar en el mapa de normalización
  if (LANGUAGE_NORMALIZATION_MAP[langStorage]) {
    normalizedLang = LANGUAGE_NORMALIZATION_MAP[langStorage];
  }
  // 2. Si no está en el mapa pero tiene guión, extraer la primera parte
  else if (langStorage.includes('-')) {
    const baseLang = langStorage.split('-')[0];
    // Verificar si el idioma base está en el mapa
    normalizedLang = LANGUAGE_NORMALIZATION_MAP[baseLang] || baseLang;
  }

  // Buscar el idioma normalizado en allLangs
  const currentLang =
    allLangs.find((lang) => lang.value === normalizedLang) || defaultLang;

  const targetCurrency = currentLang.numberFormat?.currency || 'USD';
  const exchangeRate = getExchangeRate(DEFAULT_CURRENCY, targetCurrency);
  const shouldConvert = DEFAULT_CURRENCY !== targetCurrency;

  // Obtener símbolo de moneda
  const symbol =
    currentLang.numberFormat?.symbol ||
    (currentLang.numberFormat?.currency
      ? new Intl.NumberFormat(currentLang.numberFormat.code, {
          style: 'currency',
          currency: currentLang.numberFormat.currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
          .formatToParts(0)
          .find((part) => part.type === 'currency')?.value
      : '$');

  return {
    allLangs,
    currentLang,
    symbol,
    targetCurrency,
    exchangeRate,
    shouldConvert,
  };
}
// ----------------------------------------------------------------------

export function useTranslate() {
  const { t, i18n, ready } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const settings = useSettingsContext();

  const onChangeLang = useCallback(
    (newlang: string) => {
      let pathWithoutLocale = pathname || '/';
      locales.forEach((locale) => {
        if (pathWithoutLocale.startsWith(`/${locale}/`)) {
          pathWithoutLocale = pathWithoutLocale.substring(locale.length + 1);
        } else if (pathWithoutLocale === `/${locale}`) {
          pathWithoutLocale = '/';
        }
      });
      // Construir nueva ruta
      let newPath = `/${newlang}${pathWithoutLocale}`;

      // Asegurar que la ruta no termine con doble slash
      newPath = newPath.replace(/\/\//g, '/');
      if (newPath === '') newPath = '/';

      i18n.changeLanguage(newlang);
      settings.onChangeDirectionByLang(newlang);
      // Solo actualizar la URL si estamos en el cliente y tenemos un pathname
      // if (typeof window !== 'undefined' && pathname) {
      //   // 1. Obtener locales disponibles
      //   const locales = i18n.languages || ['es', 'en', 'pt', 'pt-BR', 'zh'];

      //   // 2. Extraer el path sin locale actual
      //   let pathWithoutLocale = pathname;

      //   for (const locale of locales) {
      //     if (pathname.startsWith(`/${locale}/`)) {
      //       pathWithoutLocale = pathname.substring(locale.length + 1);
      //       break;
      //     } else if (pathname === `/${locale}`) {
      //       pathWithoutLocale = '/';
      //       break;
      //     }
      //   }

      //   // 3. Construir el nuevo path con el nuevo locale
      //   let newPath = pathWithoutLocale;
      //   if (newlang !== 'es') {
      //     // 'es' es tu idioma por defecto
      //     newPath = `/${newlang}${pathWithoutLocale}`;
      //   }

      //   // 4. Mantener los query params si existen
      //   const queryString = searchParams?.toString();
      //   const fullPath = queryString ? `${newPath}?${queryString}` : newPath;

      //   // 5. Usar router.replace() para cambiar la URL sin recargar la página
      //   router.replace(fullPath);
      // }
    },
    [i18n, settings]
  );

  return {
    t,
    i18n,
    ready,
    onChangeLang,
  };
}
