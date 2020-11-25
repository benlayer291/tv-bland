import { useCursor } from '../../hooks/useCursor'
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
  const cursorHandler = useCursor()

  return (
    <button
      className={classNames(styles.BaseButton, className)}
      type="button"
      onClick={onClick}
      onMouseEnter={cursorHandler.onMouseEnter}
      onMouseLeave={cursorHandler.onMouseLeave}
    >
      {text}
    </button>
  )
}

export default BaseButton
