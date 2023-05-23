import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  authors: { name: 'Waldo Vazquez', url: 'https://www.linkedin.com/in/waldo-vazquez/' },
  colorScheme: 'dark',
  description: 'Portfolio creado por Waldo Vazquez',
  icons: {
    icon: '/favicon.ico'
  },
  keywords: ['Next.js', 'React', 'React Native', 'JavaScript', 'TypeScript', 'Node.js'],
  publisher: 'Waldo Vazquez',
  title: 'Waldo Vazquez',
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({
  children
}: RootLayoutProps) => {
  return (
    <html lang='es' className={`${montserrat.variable} font-montserrat`}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
