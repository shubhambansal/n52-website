import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

const locales = ['en', 'de'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return <>{children}</>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
