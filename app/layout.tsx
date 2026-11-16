import type { Metadata } from 'next';
import './globals.css';

const url =
  'https://belanova-tu-semana-mas-bonita.romanticoenmilano.chatgpt.site';

const title = 'Black Friday Belanova · Tu semana, más bonita';

const description =
  'Planes especiales para atenderte martes y miércoles en Belanova. Conoce los tratamientos y solicita tu visita en Providencia. Cupos limitados.';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Belanova',
    url,
    title,
    description,
    images: [
      {
        url: '/og-black-friday-clean.png',
        width: 1732,
        height: 908,
        alt: 'Black Friday Belanova. Tu semana, más bonita.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-black-friday-clean.png'],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
