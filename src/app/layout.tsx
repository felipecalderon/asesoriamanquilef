import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingButtons from "@/components/formIA";
import Header from '@/components/header'
import Script from 'next/script'
import IndicadoresEc from '@/components/indicadores-economicos'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Asesoría Manquilef - Defensa Legal Estratégica',
  description: 'Barbara Manquilef, abogada, servicio jurídico eficiente, estratégico y antiespecista en Chile. Asesoramiento personalizado en defensa legal.',
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
      <body className='bg-gray-50 dark:bg-violet-900 transition-colors min-h-screen pb-16 sm:pb-6'>
        <Header />
        {children}
        <div className="max-w-sm mx-auto">
          <IndicadoresEc />
        </div>
        <FloatingButtons />
      </body>
    </html>
  )
}
