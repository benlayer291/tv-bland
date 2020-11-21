import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { urlWithoutProtocol } from '../../utils/helpers'

import styles from './showImage.module.css'

type Props = {
  className?: string
  eager?: boolean
  src: string
  alt: string
  height: number
  width: number
}

const ShowImage: React.FunctionComponent<Props> = ({
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
      className={classNames(styles.ShowImage, className, {
        [styles['ShowImage--revealed']]: isRevealed,
        [styles['ShowImage--no-image']]: !src,
      })}
    >
      <div className={styles.ShowImage__container}>
        {src && (
          <>
            <img
              className={styles.ShowImage__image}
              src={urlWithoutProtocol(src)}
              alt={alt}
              width={width}
              height={height}
              loading={eager ? 'eager' : 'lazy'}
            />
            <img
              className={styles.ShowImage__filter}
              src={urlWithoutProtocol(src)}
              alt={alt}
              width={width}
              height={height}
              loading={eager ? 'eager' : 'lazy'}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ShowImage
