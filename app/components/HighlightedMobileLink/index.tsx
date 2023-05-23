import { useRouter } from 'next/navigation'

interface HighlightedMobileLinkProps {
  href: string;
  onClose: () => void;
  title: string;
}

const HighlightedMobileLink = ({
  href,
  onClose,
  title
}: HighlightedMobileLinkProps) => {
  const router = useRouter()

  const handleClick = () => {
    onClose()
    router.push(href)
  }

  return (
    <button
      className='font-medium text-dark'
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default HighlightedMobileLink
