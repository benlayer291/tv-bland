import classNames from 'classnames'
import styles from './star.module.css'

type Props = {
  className?: string
  isActive?: boolean
}

const Star: React.FunctionComponent<Props> = ({
  className,
  isActive = false,
}: Props) => {
  return (
    <svg
      className={classNames(styles.Star, className, {
        [styles['Star--is-active']]: isActive,
      })}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.667 9.95L2.547 12l.786-4.342L0 4.584l4.607-.634L6.667 0l2.06 3.95 4.606.634L10 7.658 10.787 12l-4.12-2.05z"
      />
    </svg>
  )
}

export default Star
