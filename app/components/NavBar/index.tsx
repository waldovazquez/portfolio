'use client'

import { useState } from 'react'
import HighlightedLink from '../HighlightedLink'

import {
  SiGithub,
  SiLinkedin
} from 'react-icons/si'

import {
  AiOutlineClose,
  AiOutlineMenu
} from 'react-icons/ai'

import HighlightedMobileLink from '../HighlightedMobileLink'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='p-8 bg-dark relative lg:px-32 lg:py-8'>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        className='lg:hidden'
        onClick={handleClick}
      >
        {isOpen ? <AiOutlineClose size={24} className='text-light' /> : <AiOutlineMenu size={24} className='text-light' />}
      </button>
      <div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center'>
        <nav className='w-full flex items-center justify-between'>
          <ul className='flex gap-4'>
            <li>
              <HighlightedLink
                href='/'
                title='Inicio'
              />
            </li>
            <li>
              <HighlightedLink
                href='/about'
                title='Sobre mí'
              />
            </li>
            <li>
              <HighlightedLink
                href='/projects'
                title='Proyectos'
              />
            </li>
          </ul>
          <ul className='flex items-center flex-wrap gap-4'>
            <li className='hover:-translate-y-1 transition-transform'>
              <a
                className='sr-only'
                href='https://www.linkedin.com/in/waldo-vazquez'
                rel='noopener noreferrer'
                target='_blank'
              >
                LinkedIn
              </a>
              <a
                href='https://www.linkedin.com/in/waldo-vazquez'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SiLinkedin size={24} className='hover:text-primary text-light' />
              </a>
            </li>
            <li className='hover:-translate-y-1 transition-transform'>
              <a
                className='sr-only'
                href='https://github.com/waldovazquez'
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub
              </a>
              <a
                href='https://github.com/waldovazquez'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SiGithub size={24} className='hover:text-primary text-light' />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className={`
        min-w-[70vw] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
        bg-light/70 rounded-3xl backdrop-blur-sm p-32
      `}
        >
          <nav className='flex flex-col gap-4'>
            <ul className='flex flex-col gap-2 items-center'>
              <li>
                <HighlightedMobileLink
                  href='/'
                  onClose={handleClick}
                  title='Inicio'
                />
              </li>
              <li>
                <HighlightedMobileLink
                  href='/about'
                  onClose={handleClick}
                  title='Sobre mí'
                />
              </li>
              <li>
                <HighlightedMobileLink
                  href='/projects'
                  onClose={handleClick}
                  title='Proyectos'
                />
              </li>
            </ul>
            <ul className='flex justify-center gap-4'>
              <li>
                <a
                  href='https://www.linkedin.com/in/waldo-vazquez/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <SiLinkedin size={24} className='text-dark' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/waldovazquez'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <SiGithub size={24} className='text-dark' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
