import { BiLinkExternal } from 'react-icons/bi'

const Home = () => {
  return (
    <main className='w-full min-h-screen flex items-center bg-dark px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32'>
      <section className='w-full flex flex-col items-center' id='Home'>
        <h1 className='text-2xl font-bold text-light text-center md:text-4xl'>
          Hola &#128075;, Mi nombre es&nbsp;
          <span className='text-primary'>
            Waldo
          </span>
        </h1>
        <h2 className='text-2xl font-bold text-light text-center md:text-4xl'>Soy un Full Stack Web Developer</h2>
        <p className='max-w-[90%] text-sm text-center font-medium text-light mt-6 sm:text-base md:max-w-[70%]'>
          Soy una persona resolutiva y orientada a los resultados, con 2 años de experiencia en el desarrollo de aplicaciones móviles y web, desde la concepción hasta la implementación final. Durante este tiempo, he adquirido habilidades sólidas en diversas tecnologías y metodologías ágiles, lo que me permite entregar soluciones de calidad en tiempo y forma. He participado en proyectos desafiantes, incluyendo IoT, e-commerce, aplicaciones de seguridad basadas en GPS y Multitenant, enfrentando con éxito retos técnicos y funcionales. Además, he colaborado eficientemente con equipos multidisciplinarios, demostrando habilidades de comunicación y trabajo en equipo. Con una actitud proactiva y un enfoque en el aprendizaje continuo, estoy emocionado por seguir creciendo profesionalmente y enfrentar nuevos desafíos en el campo del desarrollo de aplicaciones.
        </p>
        <div className='flex flex-col gap-4 mt-6 md:flex-row'>
          <a
            aria-label='Descargar currículum'
            className='flex items-center justify-center bg-light text-dark p-3 rounded-xl text-base font-semibold border-2 border-solid border-transparent gap-2 hover:bg-dark hover:text-light hover:border-primary md:text-lg'
            download='CV-Waldo-Vazquez.pdf'
            href='/curriculum.pdf'
            rel='noopener noreferrer'
            target='_blank'
          >
            Currículum
            <BiLinkExternal size={24} />
          </a>
          <a
            aria-label='Enviar correo electrónico'
            className='flex items-center justify-center bg-light text-dark p-3 rounded-xl text-base font-semibold border-2 border-solid border-transparent gap-2 hover:bg-dark hover:text-light hover:border-primary md:text-lg'
            href='mailto:wvazquezdev@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            Contáctame
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
