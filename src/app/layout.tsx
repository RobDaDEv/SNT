import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sheldon and Nitro - Rescued from abandonment, heading to freedom',
  description: 'Two turtles on a mission to freedom. Help Sheldon and Nitro reach $25M market cap and return to the wild!',
  openGraph: {
    title: 'Sheldon and Nitro - TURT',
    description: 'Rescued from abandonment, heading to freedom at $25M market cap',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=Inter:wght@300;400;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-inter bg-gray-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}