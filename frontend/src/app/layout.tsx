import type { Metadata } from 'next';

import '@/styles/globals.css';
import { inter, lato } from '@/confg/fonts';
import { cn } from '@/lib/tailwind/utils';
import { siteConfig } from '@/confg/site';
import { HeaderLayout } from '@/components/layouts';
import { Providers } from '@/components/providers/Providers';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          lato.className
        )}
      >
        <Providers>
          <HeaderLayout>{children}</HeaderLayout>
        </Providers>
      </body>
    </html>
  );
}
