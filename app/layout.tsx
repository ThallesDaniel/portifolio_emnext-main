import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/header';
import { Toaster } from './components/toaster';

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Thalles Andrade',
  },
  icons: [
    {
      url: '/images/logo.png',
    },
  ],
  description: 'Thalles Andrade is a talented web developer with a passion for creating innovative and user-friendly websites. Explore his portfolio to see his impressive projects and skills.',
  keywords: 'web developer, portfolio, Thalles Andrade, Thalles Daniel, website development, frontend, backend, fullstack, programming, coding, technology, developer, programador, site, tecnologia, angular, codar',
  viewport: 'width=device-width, initial-scale=1',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
      </head>
      <body>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}