import BaseLink from '../baseLink/baseLink'
import ShowImage from '../showImage/showImage'
import StarRating from '../starRating/starRating'

import styles from './showCard.module.css'

const ShowCard: React.FunctionComponent = () => {
  return (
    <BaseLink className={styles.ShowCard} href={'/shows/123abc'}>
      <div className={styles.ShowCard__main}>
        <ShowImage className={styles.ShowCard__image} />
        <StarRating className={styles.ShowCard__rating} rating={8} />
        <p className={styles.ShowCard__text}>
          This is the title of the TV show which is very long isn&apos;t it
        </p>
      </div>
    </BaseLink>
  )
}

export default ShowCard
