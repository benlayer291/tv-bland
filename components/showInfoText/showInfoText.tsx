import classnames from 'classnames'

import styles from './showInfoText.module.css'

type Props = {
  className: string
  left: React.ReactNode
  right: React.ReactNode
  reverse?: boolean
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
      <div className={styles.ShowInfoText__left}>{left}</div>
      <div className={styles.ShowInfoText__right}>{right}</div>
    </div>
  )
}

export default ShowInfoText
