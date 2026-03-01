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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700;900&family=Pacifico&family=Bree+Serif&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: 'black', color: '#C3C3C3' }}>
        {children}
      </body>
    </html>
  )
}
