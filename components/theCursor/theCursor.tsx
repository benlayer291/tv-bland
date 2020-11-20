import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './theCursor.module.css'

const isMobile = () => {
  return (
    typeof navigator !== 'undefined' &&
    /Android|Mobi/i.test(navigator.userAgent)
  )
}

const TheCursor: React.FunctionComponent = () => {
  if (isMobile()) return null

  const router = useRouter()

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHidden, setHidden] = useState(false)
  const [isClicked, setClicked] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  const onMouseEnter = () => {
    setHidden(false)
  }
  const onMouseLeave = () => {
    setHidden(true)
  }
  const onMouseUp = () => {
    setClicked(false)
  }
  const onMouseDown = () => {
    setClicked(true)
  }
  const onLinkEnter = () => {
    setHovered(true)
  }
  const onLinkLeave = () => {
    setHovered(false)
  }
  const onRouteChange = () => {
    setHovered(false)
    setClicked(false)
  }

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousedown', onMouseDown)

    router.events.on('routeChangeComplete', onRouteChange)
  }

  const addLinkListeners = () => {
    const links = Array.from(document.querySelectorAll('a'))

    links.forEach((el) => {
      el.addEventListener('mouseenter', onLinkEnter)
      el.addEventListener('mouseleave', onLinkLeave)
    })
  }

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseenter', onMouseEnter)
    document.removeEventListener('mouseleave', onMouseLeave)
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousedown', onMouseDown)

    router.events.off('routeChangeComplete', onRouteChange)
  }

  useEffect(() => {
    addEventListeners()
    addLinkListeners()

    return () => removeEventListeners()
  }, [router.pathname])

  return (
    <div
      className={classNames(styles.TheCursor, {
        [styles['TheCursor--hidden']]: isHidden,
        [styles['TheCursor--clicked']]: isClicked,
        [styles['TheCursor--hovered']]: isHovered,
      })}
      style={{ left: position.x, top: position.y }}
    />
  )
}

export default TheCursor
