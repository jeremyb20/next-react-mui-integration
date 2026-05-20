
// import { NextResponse, NextRequest } from 'next/server';
// import acceptLanguage from 'accept-language';
// import {
//   cookieName,
//   fallbackLng,
//   headerName,
//   languages,
// } from '@/app/i18n/settings';

// acceptLanguage.languages(languages);

// export const config = {
//   // matcher: '/:lng*'
//   matcher: [
//     '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
//   ],
// };

// export function middleware(req: NextRequest) {
//   if (
//     req.nextUrl.pathname.indexOf('icon') > -1 ||
//     req.nextUrl.pathname.indexOf('chrome') > -1
//   )
//     return NextResponse.next();
//   let lng: string | undefined | null;
//   if (req.cookies.has(cookieName))
//     lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
//   if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
//   if (!lng) lng = fallbackLng;

//   const lngInPath = languages.find((loc) =>
//     req.nextUrl.pathname.startsWith(`/${loc}`)
//   );
//   const headers = new Headers(req.headers);
//   headers.set(headerName, lngInPath || lng);

//   // Redirect if lng in path is not supported
//   if (!lngInPath && !req.nextUrl.pathname.startsWith('/_next')) {
//     return NextResponse.redirect(
//       new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//     );
//   }

//   if (req.headers.has('referer')) {
//     const refererUrl = new URL(req.headers.get('referer') || '');
//     const lngInReferer = languages.find((l) =>
//       refererUrl.pathname.startsWith(`/${l}`)
//     );
//     const response = NextResponse.next({ headers });
//     if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
//     return response;
//   }

//   return NextResponse.next({ headers });
// }


import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import type { NextRequest } from 'next/server';

import { languages, cookieName, fallbackLng } from './src/app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js)$).*)',
  ],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Verificar si la ruta YA TIENE un idioma válido
  const lngInPath = languages.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 2. Si YA tiene idioma en la ruta, NO redirigir, solo continuar
  if (lngInPath) {
    // Actualizar cookie silenciosamente
    const response = NextResponse.next();
    response.cookies.set(cookieName, lngInPath, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 días
      sameSite: 'lax',
    });
    return response;
  }

  // 3. NO tiene idioma en la ruta → Detectar idioma preferido
  let detectedLng = fallbackLng;

  // 3.1 Buscar en cookie
  const cookieLng = req.cookies.get(cookieName)?.value;
  if (cookieLng && languages.includes(cookieLng as any)) {
    detectedLng = cookieLng;
  } else {
    // 3.2 Buscar en Accept-Language
    const acceptLng = acceptLanguage.get(req.headers.get('Accept-Language'));
    if (acceptLng && languages.includes(acceptLng as any)) {
      detectedLng = acceptLng;
    }
  }

  // 4. Redirigir a la misma ruta pero con el idioma detectado
  const newUrl = new URL(
    `/${detectedLng}${pathname}${req.nextUrl.search}`,
    req.url
  );

  const response = NextResponse.redirect(newUrl);
  response.cookies.set(cookieName, detectedLng, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });

  return response;
}
