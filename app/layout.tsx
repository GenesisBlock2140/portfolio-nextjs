import './globals.css'
import type { Metadata } from 'next'
import { Sulphur_Point } from 'next/font/google'

const SulphurPoint = Sulphur_Point({subsets: ['latin'], weight: ['300','400','700']})

export const metadata: Metadata = {
  title: 'Portfolio Développeur Front-end - NC',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={SulphurPoint.className}>{children}</body>
    </html>
  )
}
