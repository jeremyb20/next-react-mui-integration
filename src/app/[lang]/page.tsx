// import { Metadata } from 'next';

// import { HomeView } from '@/sections/home/view';

// import { getSeoMetadata } from '../../utils/seo-metadata';
// import { getServerLanguage } from '../../locales/get-server-language';

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
import { getServerLanguage } from '@/locales/get-server-language';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  // Esta página solo redirige al middleware
  const language = await getServerLanguage();
  redirect(`/${language.toLowerCase()}` || '/es');
}
