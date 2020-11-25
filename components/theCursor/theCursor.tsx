import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { CursorContext } from '../../context/cursorContext'

import { checkDeviceIsMobile as isMobile } from '../../utils/helpers'
import { InterfacePositionCoordinates } from '../../types/interfaces'

import styles from './theCursor.module.css'

const TheCursor: React.FunctionComponent = () => {
  if (isMobile()) return null

  const router = useRouter()

  const [isActive, setIsActive] = useContext(CursorContext)
  const [position, setPosition] = useState<InterfacePositionCoordinates>({
    x: 0,
    y: 0,
  })
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY })

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  useEffect(() => {
    const onMouseUp = () => setIsClicked(false)
    const onMouseDown = () => setIsClicked(true)

    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousedown', onMouseDown)

    return () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousedown', onMouseDown)
    }
  }, [])

  useEffect(() => {
    const onMouseEnter = () => setIsHidden(false)
    const onMouseLeave = () => setIsHidden(true)

    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  // Listen for route change to ensure cursor active state is reset upon route change
  // after following link on previous route that was hovered and then clicked
  useEffect(() => {
    const onRouteChange = () => setIsActive(false)

    router.events.on('routeChangeComplete', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    }
  }, [])

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

export default TheCursor
