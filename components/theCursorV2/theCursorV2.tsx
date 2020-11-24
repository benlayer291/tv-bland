import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { CursorContext } from '../../context/cursorContext'

import { checkDeviceIsMobile as isMobile } from '../../utils/helpers'
import { InterfacePositionCoordinates } from '../../types/interfaces'

import styles from './theCursorV2.module.css'

const TheCursorV2: React.FunctionComponent = () => {
  if (isMobile()) return null

  const router = useRouter()

  const [isActive] = useContext(CursorContext)
  const [position, setPosition] = useState<InterfacePositionCoordinates>({
    x: 0,
    y: 0,
  })

  const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY })

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [router.pathname])

  const [isClicked, setClicked] = useState<boolean>(false)

  const onMouseUp = () => setClicked(false)
  const onMouseDown = () => setClicked(true)

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousedown', onMouseDown)

    return () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousedown', onMouseDown)
    }
  }, [router.pathname])

  const [isHidden, setHidden] = useState<boolean>(false)

  const onMouseEnter = () => setHidden(false)
  const onMouseLeave = () => setHidden(true)

  useEffect(() => {
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [router.pathname])

  return (
    <div
      className={classNames(styles.TheCursor, {
        [styles['TheCursor--hidden']]: isHidden,
        [styles['TheCursor--hovered']]: isActive,
      })}
    >
      <span
        className={styles.TheCursor__pointer}
        style={{
          transform: `translate(-50%, -50%) translate3d(${position.x}px, ${
            position.y
          }px, 0) scale(${isClicked ? 0.8 : 1})`,
        }}
      ></span>
    </div>
  )
}

export default TheCursorV2
