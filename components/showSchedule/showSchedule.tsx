import classNames from 'classnames'
import ShowCard from '../showCard/showCard'

import { InterfaceTvShow } from '../../types/interfaces'

import styles from './showSchedule.module.css'

type Props = {
  className?: string
  shows: InterfaceTvShow[]
}

const ShowSchedule: React.FunctionComponent<Props> = ({
  className,
  shows,
}: Props) => {
  const renderShows = shows.map((show, index) => {
    return (
      <ShowCard
        show={show}
        key={`${show.id}-${index}`}
        className={styles.ShowSchedule__item}
      />
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
