import type { Metadata } from 'next'
import './globals.css'
import '@/styles/themes/active.css'
import CursorFollower from '@/components/ui/CursorFollower'

export const metadata: Metadata = {
  title: 'Site Title',
  description: 'Site description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CursorFollower />
        {children}
      </body>
    </html>
  )
}
