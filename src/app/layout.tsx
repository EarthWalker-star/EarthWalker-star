import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Андрей Иванов | Портфолио разработчика',
  description: 'Персональное портфолио frontend-разработчика',
  keywords: ['разработчик', 'портфолио', 'frontend', 'React', 'Next.js'],
  authors: [{ name: 'Андрей Иванов' }],
  openGraph: {
    title: 'Андрей Иванов | Портфолио разработчика',
    description: 'Персональное портфолио frontend-разработчика',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
