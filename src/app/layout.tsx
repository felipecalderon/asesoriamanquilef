import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asesoría Manquilef',
  description: 'Barbara Manquilef - Abogada en Temuco, asesorías legales.',
  manifest: '/manifest.json',
  icons: {
    apple: '/images/icons/icon-512x512.png'
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es_ES" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon-white.png" sizes="any" />
      </head>
      <body className='bg-violet-100 dark:bg-violet-900'>{children}</body>
    </html>
  )
}
