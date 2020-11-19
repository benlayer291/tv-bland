import classNames from 'classnames'

import styles from './showImage.module.css'

type Props = {
  className?: string
}

const ShowImage: React.FunctionComponent<Props> = ({ className }: Props) => {
  return (
    <div className={classNames(styles.ShowImage, className)}>
      {/* TODO: conditional rendering of image if src is present */}
      <img
        className={styles.ShowImage__image}
        src="https://picsum.photos/200/300"
        alt="placeholder alt text"
      />

      <img
        className={styles.ShowImage__filter}
        src="https://picsum.photos/200/300"
        alt="placeholder alt text"
      />
    </div>
  )
}

export default ShowImage
