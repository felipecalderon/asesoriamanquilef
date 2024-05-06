import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Asesoría Manquilef',
  description: 'Barbara Manquilef - Abogada en Temuco, asesorías legales.',
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es_ES" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-NG5ZYNKELJ' strategy="afterInteractive" async={true} />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-NG5ZYNKELJ');
          `}
        </Script>
      </head>
      <body className='bg-violet-100 dark:bg-violet-900 transition-colors min-h-screen'>
        <Header />
        {children}
      </body>
    </html>
  )
}
