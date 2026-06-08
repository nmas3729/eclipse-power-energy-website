import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig } from '@/lib/site-config'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'solar panels',
    'solar installation',
    'solar energy',
    'renewable energy',
    'battery backup',
    'hybrid solar systems',
    'commercial solar',
    'residential solar',
    'South Africa solar',
    'load shedding solutions',
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/hero-solar.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} solar installation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/hero-solar.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/eclipse-logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressCountry: 'ZA',
    },
    sameAs: Object.values(siteConfig.social),
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {process.env.NODE_ENV === 'production' && (
          <> 
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-MPW0RYNDDY"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MPW0RYNDDY');`}
            </Script>
          </>
        )}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
