import classNames from 'classnames'
import ShowInfoText from '../showInfoText/showInfoText'
import ShowInfoImage from '../showInfoImage/showInfoImage'

import styles from './showInfo.module.css'

type Props = {
  className?: string
}

const ShowInfo: React.FunctionComponent<Props> = ({ className }: Props) => {
  const showInfo = [
    { left: 'Streamed on', right: 'BBC3' },
    { left: 'Schedule', right: 'Tuesdays' },
    { left: 'Status', right: 'Running' },
    { left: 'Genres', right: 'Drama, Comedy, Music' },
  ]

  const castInfo = [
    { image: '', left: 'Hugo Chegwin', right: 'Beats' },
    { image: '', left: 'Hugo Chegwin', right: 'Beats' },
    { image: '', left: 'Hugo Chegwin', right: 'Beats' },
    { image: '', left: 'Hugo Chegwin', right: 'Beats' },
  ]

  const renderRows = (rowsData) => {
    return rowsData.map((rowData, index) => {
      return (
        <li
          key={index}
          className={classNames(styles.ShowInfo__row, {
            [styles['ShowInfo__row--center']]: rowData.image !== undefined,
            [styles['ShowInfo__row--full']]: rowData.image !== undefined,
          })}
        >
          {rowData.image !== undefined && (
            <ShowInfoImage className={styles['ShowInfo__rowItem--noFlex']} />
          )}
          <ShowInfoText
            className={styles.ShowInfo__rowItem}
            reverse={rowData.image !== undefined}
            left={<span>{rowData.left}</span>}
            right={<span>{rowData.right}</span>}
          />
        </li>
      )
    })
  }

  return (
    <div className={classNames(styles.ShowInfo, className)}>
      <div>
        <h2>Show info</h2>
        <ul className={styles.ShowInfo__container}>{renderRows(showInfo)}</ul>
      </div>
      <div>
        <h2>Starring</h2>
        <ul className={styles.ShowInfo__container}>{renderRows(castInfo)}</ul>
      </div>
    </div>
  )
}
export default ShowInfo
