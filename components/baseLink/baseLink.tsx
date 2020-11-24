import { useContext, useCallback } from 'react'
import { CursorContext } from '../../context/cursorContext'
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
  const [cursorIsActive, setCursorIsActive] = useContext(CursorContext)
  const updateCursor = useCallback(() => {
    setCursorIsActive((cursorIsActive) => !cursorIsActive)
  }, [cursorIsActive])

  return (
    <Link href={href} passHref>
      <a
        className={className}
        onMouseEnter={updateCursor}
        onMouseLeave={updateCursor}
      >
        {children}
      </a>
    </Link>
  )
}

export default BaseLink
