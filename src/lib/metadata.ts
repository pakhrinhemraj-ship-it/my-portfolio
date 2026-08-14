// SEO and metadata utilities
import { siteMetadata } from '@/constants/metadata';

export function generatePageMetadata(page: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  return {
    title: page.title || siteMetadata.title,
    description: page.description || siteMetadata.description,
    openGraph: {
      title: page.title || siteMetadata.title,
      description: page.description || siteMetadata.description,
      url: page.url || siteMetadata.url,
      siteName: siteMetadata.name,
      images: [
        {
          url: page.image || `${siteMetadata.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteMetadata.name,
        },
      ],
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: page.title || siteMetadata.title,
      description: page.description || siteMetadata.description,
      images: [page.image || `${siteMetadata.url}/og-image.jpg`],
    },
  };
}

export function generateCanonical(path: string): string {
  return `${siteMetadata.url}${path}`;
}

export function generateJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  });
}
