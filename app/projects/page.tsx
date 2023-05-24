import ProjectCard from '../components/ProjectCard'
import { projects } from '../utils/constants'

const Projects = () => {
  return (
    <section id='Proyectos'>
      <ul className='flex flex-col gap-8'>
        {projects.map((project, index) => (
          <ProjectCard
            description={project.description}
            github={project.github}
            image={project.image}
            key={`${project.name}-${index}`}
            name={project.name}
            technologies={project.technologies}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects
