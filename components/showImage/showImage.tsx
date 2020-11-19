import classNames from 'classnames'

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
  return (
    <div
      className={classNames(styles.ShowImage, className, {
        [styles['ShowImage--no-image']]: !src,
      })}
    >
      {src && (
        <>
          <img className={styles.ShowImage__image} src={src} alt={alt} />
          <img className={styles.ShowImage__filter} src={src} alt={alt} />
        </>
      )}
    </div>
  )
}

export default ShowImage
