// import { Metadata } from 'next';

// import { HomeView } from '@/sections/home/view';

// import { HomeView } from '@/sections/home/view';

// import { getSeoMetadata } from '@/utils/seo-metadata';
// import { getServerLanguage } from '@/locales/get-server-language';

// // ----------------------------------------------------------------------

// export async function generateMetadata({
//   params,
// }: {
//   params: { lang: string };
// }): Promise<Metadata> {
//   const language = await getServerLanguage();

//   return getSeoMetadata('home-page-platform', language || 'ES');
// }

// export default function HomePage() {
//   return <HomeView />;
// }

// import { redirect } from 'next/navigation';
// import { headers } from 'next/headers';
// import { match } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';

// export default async function RootPage() {
//   const headersList = await headers();

//   const negotiatorHeaders: Record<string, string> = {};
//   headersList.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales = ['es', 'en', 'pt', 'pt-BR', 'zh', 'ar', 'vi', 'fr'];
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   const locale = match(languages, locales, 'es');

//   redirect(`/${locale}`);
// }

import { Metadata } from 'next';
import { HomeView } from '@/sections/home/view';
import { getSeoMetadata } from '@/utils/seo-metadata';

// ----------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>; // ← Cambio 1: Promise
}): Promise<Metadata> {
  // Cambio 2: await params antes de acceder
  const { lang: langParam } = await params;

  // Obtener el idioma de los params, asegurando que sea válido
  const lang = langParam?.toUpperCase() || 'ES';
  const supportedLanguages = ['ES', 'EN', 'AR', 'VI', 'ZH', 'FR'];
  const validLang = supportedLanguages.includes(lang) ? lang : 'ES';

  return getSeoMetadata('home-page-platform', validLang);
}

export default function HomePage() {
  return <HomeView />;
}
