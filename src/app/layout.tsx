import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

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
        <link
          href="https://cdn.jsdelivr.net/npm/quill@2.0.0-beta.0/dist/quill.snow.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/quill@2.0.0-beta.0/dist/quill.bubble.css"
          rel="stylesheet"
        />
      </head>
      <body className='bg-violet-100 dark:bg-violet-900 transition-colors min-h-screen'>
          <Header />
          {children}
      </body>
    </html>
  )
}
