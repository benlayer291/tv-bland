import { useEffect, useState } from 'react'
import { useScrollPosition as onScroll } from '@n8tb1t/use-scroll-position'
import classNames from 'classnames'

import BaseLink from '../baseLink/baseLink'

import wrapperStyles from '../../styles/objects/wrappers.module.css'
import styles from './theHeader.module.css'

const TheHeader: React.FunctionComponent = () => {
  const [isHidden, setIsHidden] = useState(false)

  onScroll(
    ({ prevPos, currPos }) => {
      const prevScroll = prevPos.y
      const currScroll = currPos.y
      const scrollThresh = 100

      if (currScroll > prevScroll && currScroll > scrollThresh && !isHidden) {
        setIsHidden(true)
      } else if (currScroll <= scrollThresh && isHidden) {
        setIsHidden(false)
      }
    },
    [isHidden],
    null,
    true
  )

  useEffect(() => {
    setIsHidden(window.scrollY > 100)
  }, [])

  return (
    <header
      className={classNames(styles.TheHeader, {
        [styles['TheHeader--hidden']]: isHidden,
      })}
    >
      <div className={wrapperStyles.wrapper}>
        <BaseLink className="t-h1" href={'/'}>
          <strong>TV Bland</strong>
        </BaseLink>
      </div>
    </header>
  )
}

export default TheHeader
