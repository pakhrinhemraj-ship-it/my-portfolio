import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: ['Hemraj Pakhrin', 'Developer', 'React', 'Next.js', 'Portfolio'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ink text-silver overflow-x-hidden">
        <div className="scan-lines" />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
