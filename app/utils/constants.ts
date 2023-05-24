import {
  Timeline
} from '../interfaces/utils'

import CalculatorPicture from '../../public/assets/projects/calculator.webp'
import CounterPicture from '../../public/assets/projects/counter.webp'
import PokemonPicture from '../../public/assets/projects/pokemon.webp'

export const skills = ['CSS', 'Express.js', 'Git', 'HTML', 'JavaScript', 'MongoDB', 'Next.js', 'Node.js', 'React', 'React Native', 'Redux', 'Tailwind CSS', 'TypeScript']

export const works: Timeline[] = [
  {
    description: `
      Durante mi experiencia laboral anterior, desempeñé un papel integral en el equipo de desarrollo, donde me enfoqué en la creación y mantenimiento de endpoints para un conjunto de aplicaciones.
      Estos endpoints eran los puntos de entrada clave que permitían la comunicación entre el cliente y el servidor.
      Trabajé en el diseño y desarrollo de estos endpoints, asegurándome de que fueran eficientes, seguros y escalables.
      Además de eso, también participé en la implementación de nuevas funcionalidades en el lado del cliente.
      Trabajé en estrecha colaboración con el equipo de diseño y el equipo de back-end para crear características atractivas y funcionales para los usuarios.
      Me aseguré de que estas funcionalidades se integraran sin problemas con el servidor, proporcionando una experiencia de usuario coherente y fluida.
      Una parte significativa de mi trabajo implicó lidiar con código legacy. Me enfrenté al desafío de trabajar con sistemas existentes que requerían mejoras y optimizaciones.
      Me involucré en la refactorización del código heredado, aplicando las mejores prácticas de programación y utilizando patrones de diseño adecuados.
      A través de esta labor, pude mejorar la calidad del código, su mantenibilidad y su rendimiento.
    `,
    place: 'Vision Group',
    placeLink: 'https://visiongroup.nyc/',
    time: '2020-2022',
    title: 'Full Stack Web Developer'
  }
]

export const educations: Timeline[] = [{
  description: `
    He completado exitosamente este riguroso bootcamp centrado en programación, que abarcó más de 800 horas de aprendizaje basado en prácticas y proyectos reales.
    Durante mi participación en el bootcamp, me sumergí en un entorno de inmersión total, dedicando tiempo y esfuerzo significativos para adquirir habilidades sólidas en programación.
    A lo largo de las intensas 800 horas, pude aplicar directamente mis conocimientos en proyectos prácticos y reales, lo que me permitió consolidar mis habilidades y ganar experiencia valiosa en el mundo real de la programación.
    El bootcamp me proporcionó una amplia cobertura de temas y tecnologías relevantes en el campo de la programación.
    A través de una combinación de teoría y práctica, adquirí un sólido conocimiento en áreas clave como lenguajes de programación, estructuras de datos, algoritmos, desarrollo web, bases de datos y metodologías ágiles.
  `,
  place: 'Henry',
  placeLink: 'https://www.soyhenry.com/',
  time: '2021',
  title: 'Full Stack Web Developer'
},
{
  description: `
    He finalizado exitosamente este curso de Node.js que se centró en proporcionar un conocimiento integral de esta tecnología, a través de una combinación de ejercicios prácticos y aplicables en la vida real.
    El curso abarcó una amplia gama de temas relacionados con Node.js y también incluyó la instrucción de tecnologías complementarias como Express.js, MongoDB, Socket.IO, JSON Web Token, TypeScript, MySQL, entre otras.
    Durante el curso, pude sumergirme en ejercicios prácticos que replicaban situaciones reales, lo que me permitió aplicar los conceptos y las técnicas aprendidas en un contexto práctico.
    Esta metodología de aprendizaje basada en proyectos reales me brindó una valiosa experiencia práctica y me ayudó a comprender cómo utilizar Node.js y las tecnologías relacionadas de manera efectiva.
  `,
  place: 'Udemy',
  placeLink: 'https://www.udemy.com/',
  time: '2022',
  title: 'Node: De cero a experto'
},
{
  description: `
    He completado exitosamente este curso el cual estaba enfocado en los principios SOLID y Clean Code, cuyo objetivo principal fue mejorar nuestras habilidades para escribir un código limpio, legible y fácil de mantener.
    El curso se centró en asegurarnos de que las piezas que componen nuestro software tengan sentido tanto para nosotros como para otros desarrolladores que puedan leer nuestro código en el futuro.
    Durante el curso, adquirí conocimientos profundos sobre los principios SOLID, que son un conjunto de pautas de diseño de software que nos ayudan a crear sistemas más flexibles, escalables y fáciles de mantener.
    Aprendí cómo aplicar estos principios, como el Principio de Responsabilidad Única, el Principio de Abierto/Cerrado y otros, para lograr un diseño modular y desacoplado, lo que facilita la comprensión y la modificación del código en el futuro.
    Además, el curso hizo hincapié en la importancia de escribir un código limpio y legible.
    Aprendí técnicas y buenas prácticas para mejorar la claridad y la estructura del código, como la correcta nomenclatura de variables y funciones, la eliminación de duplicaciones y la organización lógica de las partes del código.
    Estas prácticas nos ayudan a reducir la complejidad y mejorar la mantenibilidad del software, permitiendo que nosotros y otros desarrolladores podamos comprenderlo y actualizarlo de manera más eficiente.`,
  place: 'Udemy',
  placeLink: 'https://www.udemy.com/',
  time: '2022',
  title: 'Principios SOLID y Clean Code'
},
{
  description: `
    He finalizado exitosamente este curso de inglés que se centró en mejorar mis habilidades para hablar en este idioma.
    El curso tuvo una duración de 4 meses e incluyó dos clases semanales, cada una con una duración de una hora y media.
    Durante el curso, se enfatizó el desarrollo de mis habilidades de expresión oral en inglés.
    A través de una combinación de actividades interactivas, ejercicios de pronunciación y práctica de conversación, pude mejorar mi fluidez y confianza al comunicarme en inglés.
    Las clases se llevaron a cabo de manera regular, lo que me permitió mantener un ritmo constante de aprendizaje.
    La frecuencia de dos clases por semana proporcionó suficiente tiempo para asimilar los conceptos y practicar activamente mis habilidades lingüísticas.
  `,
  place: 'i.Speak',
  placeLink: 'https://ispeak.team/',
  time: '2022',
  title: 'Middle Level'
}]

export const projects = [
  {
    description: `
      El objetivo principal de este proyecto fue aprender y aplicar los conceptos fundamentales de React al crear una aplicación web funcional y atractiva.
      A lo largo del proceso de desarrollo, se adquirieron habilidades en el manejo del estado, la creación de componentes reutilizables y la gestión de rutas.
      Además, se exploraron técnicas de integración con API para obtener datos externos y mostrarlos de manera efectiva.
    `,
    github: 'https://github.com/waldovazquez/pokemon-frontend',
    image: PokemonPicture,
    name: 'Pokemon',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
  },
  {
    description: `
      Durante el desarrollo de este proyecto, se aplicaron conceptos fundamentales de React Native, como la creación y gestión de componentes, el manejo del estado de la aplicación y la respuesta a los eventos de interacción del usuario.
      Además, se utilizó el lenguaje de programación JavaScript para implementar la lógica de la calculadora, aprovechando al máximo las capacidades de React Native para generar una interfaz nativa compatible con dispositivos iOS y Android.
      El proyecto de práctica de una calculadora en React Native resultó en una aplicación funcional y completa que brinda una experiencia de usuario intuitiva para realizar operaciones matemáticas básicas.
      Los usuarios pueden interactuar de manera sencilla con los botones numéricos y operadores para ingresar valores y realizar cálculos en tiempo real.
      Los resultados se muestran de forma clara y concisa en la pantalla de la calculadora, permitiendo a los usuarios realizar sus cálculos de manera eficiente.
    `,
    github: 'https://github.com/waldovazquez/react-native-calculator',
    image: CalculatorPicture,
    name: 'Calculadora',
    technologies: ['React Native']
  },
  {
    description: `
      Durante el desarrollo de este proyecto, se aplicaron conceptos fundamentales de React Native, como el uso de componentes, manejo de estado y eventos de interacción.
      Se utilizó el lenguaje de programación JavaScript para escribir la lógica del contador y se aprovechó la capacidad de React Native para generar una interfaz nativa compatible con dispositivos móviles iOS y Android.
      El proyecto de práctica de un contador en React Native resultó en una aplicación funcional que brinda una experiencia de usuario intuitiva para realizar operaciones de incremento y decremento en un valor numérico.
      Esta práctica permitió adquirir conocimientos esenciales sobre el desarrollo de aplicaciones móviles utilizando React Native y sentó las bases para explorar proyectos más complejos en el futuro.
    `,
    github: 'https://github.com/waldovazquez/react-native-counter',
    image: CounterPicture,
    name: 'Contador',
    technologies: ['React Native']
  }
]
