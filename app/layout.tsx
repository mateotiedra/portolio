import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mateo Tiedra',
  description: 'Site portfolio de Mateo Tiedra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
