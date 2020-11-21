import classnames from 'classnames'
import { useEffect, useState } from 'react'

import { urlWithoutProtocol } from '../../utils/helpers'

import styles from './showInfoImage.module.css'

type Props = {
  className: string
  src: string
  alt: string
  height: number
  width: number
  eager?: boolean
}

const ShowInfoImage: React.FunctionComponent<Props> = ({
  className,
  src,
  alt,
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
      className={classnames(styles.ShowInfoImage, className, {
        [styles['ShowInfoImage--no-image']]: !src,
        [styles['ShowInfoImage--revealed']]: isRevealed,
      })}
    >
      {src && (
        <>
          <img
            className={styles['ShowInfoImage__image']}
            src={urlWithoutProtocol(src)}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
          />
          <img
            className={styles['ShowInfoImage__filter']}
            src={urlWithoutProtocol(src)}
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

export default ShowInfoImage
