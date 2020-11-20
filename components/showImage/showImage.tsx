import classNames from 'classnames'
import { useEffect, useState } from 'react'

import styles from './showImage.module.css'

type Props = {
  className?: string
  src: string
  alt: string
}

const ShowImage: React.FunctionComponent<Props> = ({
  className,
  alt,
  src,
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
            <img className={styles.ShowImage__image} src={src} alt={alt} />
            <img className={styles.ShowImage__filter} src={src} alt={alt} />
          </>
        )}
      </div>
    </div>
  )
}

export default ShowImage
