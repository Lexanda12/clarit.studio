import type { Metadata } from 'next'
import '../globals.css'
import ShellClient from '@/components/layout/ShellClient'

export const metadata: Metadata = {
  title: 'Eniola Alex — Design Engineer',
  description: 'Design engineer. I build products that look considered and ship complete.',
  metadataBase: new URL('https://clarit.studio'),
  openGraph: {
    title: 'Eniola Alex — Design Engineer',
    description: 'Design engineer. I build products that look considered and ship complete.',
    url: 'https://clarit.studio',
    siteName: 'Clarit Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eniola Alex — Design Engineer',
    description: 'Design engineer. I build products that look considered and ship complete.',
  },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="site-body">
        <ShellClient />
        <main className="site-main">
          {children}
        </main>
      </body>
    </html>
  )
}
