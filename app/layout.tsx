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
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&display=swap&family=Bree+Serif&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: 'black', color: '#C3C3C3' }}>
        {children}
      </body>
    </html>
  )
}
