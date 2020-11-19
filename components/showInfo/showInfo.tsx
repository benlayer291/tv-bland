import classNames from 'classnames'

import { InterfaceTvShow } from '../../types/interfaces'

import ShowInfoText from '../showInfoText/showInfoText'
import ShowInfoImage from '../showInfoImage/showInfoImage'

import styles from './showInfo.module.css'

type Props = {
  className?: string
  show: InterfaceTvShow
}

const ShowInfo: React.FunctionComponent<Props> = ({
  className,
  show,
}: Props) => {
  const showInfo = [
    { left: 'Streamed on', right: show.network.name },
    {
      left: 'Schedule',
      right: `${show.schedule.days.join(', ')} at ${show.schedule.time}`,
    },
    { left: 'Status', right: show.status },
    { left: 'Genres', right: show.genres.join(', ') },
  ]

  const castInfo = show?._embedded?.cast.map((castItem) => {
    return {
      image:
        castItem.character.image?.medium || castItem.character.image?.original,
      left: castItem.character.name,
      right: castItem.person.name,
    }
  })

  const renderRows = (rowsData) => {
    return rowsData.map((rowData, index) => {
      if (!rowData.left || !rowData.right) return

      return (
        <li
          key={index}
          className={classNames(styles.ShowInfo__row, {
            [styles['ShowInfo__row--center']]: rowData.image !== undefined,
            [styles['ShowInfo__row--full']]: rowData.image !== undefined,
          })}
        >
          {'image' in rowData && (
            <ShowInfoImage
              className={styles['ShowInfo__rowItem--noFlex']}
              src={rowData.image}
              alt={`Portrait of ${rowData.left}`}
            />
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
