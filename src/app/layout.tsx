import { ClientProviders } from '@/components/ClientProviders';
import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const robotCondensed = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swapi App',
  description: 'Simple app to search for Star Wars characters and movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body className={robotCondensed.className}>
        <Nav />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
