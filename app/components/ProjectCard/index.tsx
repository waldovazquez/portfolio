import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { getIconByName } from '../../helpers/functions'
import { Project } from '@/app/interfaces/utils'

const ProjectCard = ({
  description,
  github,
  image,
  name,
  technologies
}: Project) => {
  return (
    <li className='flex flex-col gap-8 rounded-3xl xl:flex-row'>
      <div className='w-full md:h-[500px] xl:w-[80%]'>
        <a
          href={github}
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            alt={name}
            className='w-full object-cover rounded-3xl hover:shadow-lg hover:shadow-primary hover:opacity-50 hidden md:flex md:h-full'
            priority
            src={image}
          />
        </a>
      </div>
      <div className='w-full flex flex-col gap-2 xl:w-[50%]'>
        <h2 className='text-primary text-2xl text-center font-bold md:text-3xl xl:text-start'>
          {name}
        </h2>
        <p aria-label='Descripción del proyecto' className='leading-7 text-light text-sm text-center xl:text-left'>
          {description}
        </p>
        <ul className='flex flex-wrap gap-4 justify-center xl:justify-start'>
          {
            technologies.map((name, index) => (
              <li
                className='w-fit flex items-center bg-light p-2 rounded-lg gap-2 text-dark font-medium select-none'
                key={`${name}-${index}`}
              >
                {name}
                {getIconByName(name)}
              </li>
            ))
          }
        </ul>
        <div className='flex justify-center xl:justify-start'>
          <a
            aria-label='Ir al repositorio de GitHub'
            className='w-fit flex items-center bg-light text-dark p-2 rounded-lg border-2 border-solid font-medium border-transparent gap-2 hover:bg-dark hover:text-light hover:border-primary'
            href={github}
            rel='noopener noreferrer'
            target='_blank'
          >
            GitHub
            <SiGithub size={24} />
          </a>
        </div>
      </div>
    </li>
  )
}

export default ProjectCard
