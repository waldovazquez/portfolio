import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Waldo Vazquez | Sobre mí'
}

interface AboutLayoutProps {
  children: ReactNode
}

const AboutLayout = ({
  children
}: AboutLayoutProps) => {
  return (
    <main className='w-full min-h-screen flex items-center bg-dark px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32'>
      {children}
    </main>
  )
}

export default AboutLayout
