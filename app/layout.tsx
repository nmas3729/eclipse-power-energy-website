import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
})
const inter = Inter({
  variable: '--font-sans-custom',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Eclipse Power Energy | Solar & Battery Systems in South Africa',
  description:
    'Reliable solar energy systems for homes and businesses in South Africa. Stay powered during load shedding and reduce electricity costs with premium Hanchu inverters, lithium batteries and solar kits.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#7cc242',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
