// src/app/[lang]/layout.tsx
import { locales } from '@/locales/config';
import { notFound } from 'next/navigation';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Validar que el idioma sea soportado
  if (!locales.includes(lang as any)) {
    notFound();
  }

  return (
    <>
      {/* Aquí puedes inyectar el idioma a tus providers si es necesario */}
      {children}
    </>
  );
}
