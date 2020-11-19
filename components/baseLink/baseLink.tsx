import Link from 'next/link'
import classNames from 'classnames'

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
  return (
    <Link href={href} passHref>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default BaseLink
