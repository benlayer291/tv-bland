import { useContext, useCallback } from 'react'
import { CursorContext } from '../../context/cursorContext'
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
  const [cursorIsActive, setCursorIsActive] = useContext(CursorContext)
  const updateCursor = useCallback(() => {
    setCursorIsActive((cursorIsActive) => !cursorIsActive)
  }, [cursorIsActive])

  return (
    <button
      className={classNames(styles.BaseButton, className)}
      type="button"
      onClick={onClick}
      onMouseEnter={updateCursor}
      onMouseLeave={updateCursor}
    >
      {text}
    </button>
  )
}

export default BaseButton
