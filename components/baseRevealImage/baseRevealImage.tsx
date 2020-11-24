import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { removeProtocolFromUrl } from '../../utils/helpers'

import styles from './baseRevealImage.module.css'

type Props = {
  className?: string
  eager?: boolean
  src: string
  alt: string
  height: number
  width: number
}

const BaseRevealImage: React.FunctionComponent<Props> = ({
  className,
  alt,
  src,
  height,
  width,
  eager = false,
}: Props) => {
  const [isRevealed, setIsRevealed] = useState(false)

  const getRandomInt = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
  }

  useEffect(() => {
    const timeInterval = getRandomInt(0, 10) * 1000
    const timeout = setTimeout(() => setIsRevealed(true), timeInterval)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      data-testid="base-reveal-image"
      className={classNames(styles.BaseRevealImage, className, {
        [styles['BaseRevealImage--no-image']]: !src,
        [styles['BaseRevealImage--revealed']]: isRevealed,
      })}
    >
      {src && (
        <>
          <img
            className={styles.BaseRevealImage__image}
            src={removeProtocolFromUrl(src)}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
          />
          <img
            className={styles.BaseRevealImage__filter}
            src={removeProtocolFromUrl(src)}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
          />
        </>
      )}
    </div>
  )
}

export default BaseRevealImage
