import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/react'  // ✅ make sure this import is correct

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CREAR Lab',
  description: 'Community Research Exploring Adolescent Resilience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Main content starts below navbar */}
        <main className="pt-20">{children}</main>

        {/* Analytics component at the end of the body */}
        <Analytics />
      </body>
    </html>
  )
}
