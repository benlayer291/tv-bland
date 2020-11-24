import classnames from 'classnames'

import styles from './showInfoText.module.css'

type Props = {
  className?: string
  reverse?: boolean
  left: React.ReactNode
  right: React.ReactNode
}

const ShowInfoText: React.FunctionComponent<Props> = ({
  className,
  left,
  right,
  reverse = false,
}: Props) => {
  return (
    <div
      className={classnames(styles.ShowInfoText, className, {
        [styles['ShowInfoText--reverse']]: reverse,
      })}
    >
      <span className={styles.ShowInfoText__left}>{left}</span>
      <span className={styles.ShowInfoText__right}>{right}</span>
    </div>
  )
}

export default ShowInfoText
