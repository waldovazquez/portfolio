import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

interface DetailsProps {
  description: string;
  place: string;
  placeLink: string;
  time: string;
  title: string;
}

const Details = ({
  description = '',
  place = '',
  placeLink = '',
  time = '',
  title = ''
}: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center']
  })

  return (
    <li ref={ref} className='w-[80%] my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between'>
      <figure className='absolute left-0 stroke-primary'>
        <svg
          aria-label='Círculo animado'
          className='-rotate-90 md:w-[75px] md:h-[75px]'
          height='50'
          viewBox='0 0 100 100'
          width='50'
        >
          <circle
            className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none'
            cx='75'
            cy='50'
            r='20'
          />
          <motion.circle
            className='stroke-[5px] fill-light'
            cx='75'
            cy='50'
            r='20'
            style={{
              pathLength: scrollYProgress
            }}
          />
          <circle
            className='stroke-1 fill-primary dark:fill-primaryDark animate-pulse'
            cx='75'
            cy='50'
            r='10'
          />
        </svg>
      </figure>
      <motion.div
        initial={{
          y: 50
        }}
        whileInView={{
          y: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >
        <h3 className='capitalize text-light font-bold text-xl md:text-2xl'>
          {title}&nbsp;
          <a
            className='text-primary text-xl capitalize md:text-2xl'
            href={placeLink}
            rel='noopener noreferrer'
            target='_blank'
          >
            @{place}
          </a>
        </h3>
        <span className='capitalize font-medium text-primary text-sm md:text-base'>
          {time}
        </span>
        <p className='w-full font-medium text-light text-sm md:text-base md:text-justify'>
          {description}
        </p>
      </motion.div>
    </li>
  )
}

export default Details
