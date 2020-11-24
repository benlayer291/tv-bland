import classNames from 'classnames'
import { InterfaceTvShow } from '../../types/interfaces'

import BaseLink from '../baseLink/baseLink'
import ShowImage from '../showImage/showImage'
import StarRating from '../starRating/starRating'

import styles from './showCard.module.css'

type Props = {
  show: InterfaceTvShow
}

const ShowCard: React.FunctionComponent<Props> = ({ show }: Props) => {
  return (
    <BaseLink className={styles.ShowCard} href={`/shows/${show.id}`}>
      <div className={styles.ShowCard__main}>
        <ShowImage
          className={styles.ShowCard__image}
          src={show.image?.medium || show.image?.original}
          alt={`Cover image for ${show.name}`}
          height={295}
          width={210}
        />
        <StarRating
          className={styles.ShowCard__rating}
          rating={show.rating?.average}
        />
        <h3 className={classNames('t-para', styles.ShowCard__text)}>
          {show.name}
        </h3>
      </div>
    </BaseLink>
  )
}

export default ShowCard
