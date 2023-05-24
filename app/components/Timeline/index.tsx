'use client'

import { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Details from '../Details'

interface TimelineProps {
  className?: string;
  title: string;
  events: Array<{
    place: string;
    placeLink: string;
    description: string;
    title: string;
    time: string;
  }>
}

const Timeline = ({
  className = '',
  title,
  events
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <section aria-label={title} className={className} id={title}>
      <h2 className='w-full font-bold text-4xl mb-16 text-center text-light md:text-8xl md:mb-32'>
        {title}
      </h2>
      <div ref={ref} className='w-full md:w-[75%] mx-auto relative'>
        <motion.div
          style={{
            scaleY: scrollYProgress
          }}
          className='w-[3px] h-full absolute left-[24px] top-0 bg-light origin-top md:left-[36px] md:w-[4px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-6'>
          {
            events.map(({ description, place, placeLink, time, title }) => (
              <Details
                description={description}
                key={`${place}-${time}-${title}`}
                place={place}
                placeLink={placeLink}
                time={time}
                title={title}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Timeline
