import classnames from 'classnames'

import styles from './showInfoImage.module.css'

type Props = {
  className: string
}

const ShowInfoImage: React.FunctionComponent<Props> = ({
  className,
}: Props) => {
  return (
    <div className={classnames(styles.ShowInfoImage, className)}>
      <img
        className={styles['ShowInfoImage__image']}
        src="https://picsum.photos/58"
        alt="Avatar placeholder alt text"
      />
    </div>
  )
}

export default ShowInfoImage
