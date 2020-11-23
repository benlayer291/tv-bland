import classNames from 'classnames'
import styles from './baseButton.module.css'

type Props = {
  className?: string
  text: string
  onClick: () => void
}

const BaseButton: React.FunctionComponent<Props> = ({
  className,
  text,
  onClick,
}: Props) => {
  return (
    <button
      className={classNames(styles.BaseButton, className)}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default BaseButton
