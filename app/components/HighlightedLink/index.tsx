'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HighlightedLinkProps {
  href: string;
  title: string;
}

const HighlightedLink = ({
  href,
  title
}: HighlightedLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className='relative group font-medium text-light'>
      {title}
      <span
        className={`
                    h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300 bg-primary ${isActive ? 'w-full' : 'w-0'}
                `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default HighlightedLink
