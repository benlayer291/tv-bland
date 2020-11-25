import { useCursor } from '../../hooks/useCursor'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  className?: string
  href: string
}

const BaseLink: React.FunctionComponent<Props> = ({
  children,
  className,
  href,
}: Props) => {
  const cursorHandler = useCursor()

  return (
    <Link href={href} passHref>
      <a
        className={className}
        onMouseEnter={cursorHandler.onMouseEnter}
        onMouseLeave={cursorHandler.onMouseLeave}
      >
        {children}
      </a>
    </Link>
  )
}

export default BaseLink
