import Timeline from '../components/Timeline'
import { getIconByName } from '../helpers/functions'
import {
  educations,
  skills,
  works
} from '../utils/constants'

const About = () => {
  return (
    <section id='Sobre mí' className='w-full h-full flex flex-col'>
      <section className='w-full flex flex-col gap-8 md:flex-row'>
        <div className='w-full flex flex-col gap-4 md:w-[50%]'>
          <h2 className='pb-4 font-bold uppercase text-lg text-light text-center md:text-left'>Biografía</h2>
          <p className='font-medium text-light text-center md:text-justify'>
            Desde mi infancia, siempre he sentido un gran interés por el desarrollo de páginas web, y una de mis principales inspiraciones fue Facebook. Motivado por esa pasión, decidí ingresar a una carrera relacionada después de terminar la escuela secundaria. Sin embargo, por diversas circunstancias, tuve que abandonarla. No fue hasta hace tres años que finalmente pude retomar mis estudios en desarrollo web.
          </p>
          <p className='font-medium text-light text-center md:text-justify'>
            Como cualquier desarrollador, comencé aprendiendo lo básico, es decir, HTML y CSS. Un año después de empezar mis estudios, tuve la oportunidad de trabajar como maquetador en una software factory. Después de un tiempo en esa empresa, sentí la necesidad de profundizar aún más en mis conocimientos y decidí ingresar a un bootcamp. A pesar de las dificultades, logré completarlo mientras continuaba trabajando. Recuerdo que en ese periodo tuve que esforzarme mucho para equilibrar ambas responsabilidades.
          </p>
          <p className='font-medium text-light text-center md:text-justify'>
            Después de cuatro meses en el bootcamp, finalicé con éxito y comencé a trabajar en proyectos más complejos dentro de la empresa. Tuve la oportunidad de trabajar tanto en el desarrollo del lado del cliente como en el lado del servidor.
          </p>
        </div>
        <div className='w-full flex flex-col gap-4 md:w-[50%]'>
          <h2 className='pb-4 font-bold uppercase text-lg text-light text-center'>Habilidades</h2>
          <ul className='flex flex-wrap gap-4 justify-center'>
            {
              skills.map((name, index) => (
                <li
                  className='w-fit flex gap-2 items-center bg-light text-dark p-2 rounded-lg font-medium select-none'
                  key={`${name}-${index}`}
                >
                  {name}
                  {getIconByName(name)}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <Timeline className='mt-32 md:mt-64 mb-0' events={works} title='Experiencia' />
      <Timeline className='my-32 md:my-64' events={educations} title='Educación' />
    </section>
  )
}

export default About
