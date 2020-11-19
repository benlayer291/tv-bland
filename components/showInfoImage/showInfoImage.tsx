import classnames from 'classnames'

import styles from './showInfoImage.module.css'

type Props = {
  className: string
  src: string
  alt: string
}

const ShowInfoImage: React.FunctionComponent<Props> = ({
  className,
  src,
  alt,
}: Props) => {
  return (
    <div
      className={classnames(styles.ShowInfoImage, className, {
        [styles['ShowInfoImage--no-image']]: !src,
      })}
    >
      {src && (
        <img className={styles['ShowInfoImage__image']} src={src} alt={alt} />
      )}
    </div>
  )
}

export default ShowInfoImage
