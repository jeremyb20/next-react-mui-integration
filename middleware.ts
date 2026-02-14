// import { NextRequest, NextResponse } from 'next/server';
// import { match as matchLocale } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';
// import i18n from '@/locales/i18n';

// function getLocale(request: NextRequest): string {
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales = i18n.options.supportedLngs || ['es'];
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   return matchLocale(
//     languages,
//     locales as string[],
//     i18n.options.fallbackLng as string
//   );
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const locales = (i18n.options.supportedLngs as string[]) || ['es'];

//   // Caso 1: Si la ruta ya tiene un locale (incluyendo "es")
//   const pathHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathHasLocale) {
//     return NextResponse.next();
//   }

//   // Caso 2: Si la ruta NO tiene locale
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     // Si detecta "es", no agregamos locale a la URL
//     if (locale === 'es') {
//       return NextResponse.next();
//     }

//     // Para otros idiomas, agregamos el locale
//     return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

///test 2

// import { NextRequest, NextResponse } from 'next/server';
// import { match as matchLocale } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';
// import i18n from '@/locales/i18n';

// function getLocale(request: NextRequest): string {
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales = i18n.options.supportedLngs || ['es'];
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   return matchLocale(
//     languages,
//     locales as string[],
//     i18n.options.fallbackLng as string
//   );
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const locales = (i18n.options.supportedLngs as string[]) || ['es'];

//   // Verificar si la ruta actual YA TIENE un locale válido
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   // Si la ruta YA tiene un locale, la dejamos pasar sin cambios
//   if (pathnameHasLocale) {
//     return NextResponse.next();
//   }

//   // Si la ruta NO tiene locale, obtenemos el idioma preferido del navegador
//   const locale = getLocale(request);

//   // Redirigimos a la misma ruta pero con el locale como prefijo
//   // Ejemplo: /games -> /es/games (o /en/games, etc.)
//   const newUrl = new URL(`/${locale}${pathname}`, request.url);
//   return NextResponse.redirect(newUrl);
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

///test 3

import { NextResponse, NextRequest } from 'next/server';
import acceptLanguage from 'accept-language';
import {
  cookieName,
  fallbackLng,
  headerName,
  languages,
} from '@/app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.indexOf('icon') > -1 ||
    req.nextUrl.pathname.indexOf('chrome') > -1
  )
    return NextResponse.next();
  let lng: string | undefined | null;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  const lngInPath = languages.find((loc) =>
    req.nextUrl.pathname.startsWith(`/${loc}`)
  );
  const headers = new Headers(req.headers);
  headers.set(headerName, lngInPath || lng);

  // Redirect if lng in path is not supported
  if (!lngInPath && !req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '');
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next({ headers });
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next({ headers });
}
