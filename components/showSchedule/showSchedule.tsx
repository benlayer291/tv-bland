import classNames from 'classnames'
import ShowCard from '../showCard/showCard'

import styles from './showSchedule.module.css'

type Props = {
  className?: string
  shows: any[]
}

const ShowSchedule: React.FunctionComponent<Props> = ({
  className,
  shows,
}: Props) => {
  const renderShows = shows.map((show, index) => {
    return (
      <div
        key={index}
        className={classNames(styles.ShowSchedule__item, {
          [styles['ShowSchedule__item--large']]: index % 3 === 0,
          [styles['ShowSchedule__item--empty']]: index % 4 === 0,
        })}
      >
        <ShowCard />
      </div>
    )
  })
  return (
    <div className={classNames(styles.ShowSchedule)}>
      <h2 className={classNames(styles.ShowSchedule__title)}>
        Last Added Shows
      </h2>
      <div className={classNames(styles.ShowSchedule__grid, className)}>
        {renderShows}
      </div>
    </div>
  )
}
export default ShowSchedule
