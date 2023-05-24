import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waldo Vazquez | Proyectos'
}

interface ProjectsLayoutProps {
  children: ReactNode
}

const ProjectsLayout = ({
  children
}: ProjectsLayoutProps) => {
  return (
    <main className='w-full min-h-screen flex items-center bg-dark px-8 py-16 md:px-16 lg:px-32 lg:py-32'>
      {children}
    </main>
  )
}

export default ProjectsLayout
