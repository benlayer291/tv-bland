import classNames from 'classnames'
import Star from '../star/star'

import styles from './starRating.module.css'

type Props = {
  className?: string
  rating: number | null
  isLarge?: boolean
  withText?: boolean
}

const StarRating: React.FunctionComponent<Props> = ({
  className,
  rating,
  isLarge,
  withText,
}: Props) => {
  const ratingOutOfFiveValue = rating ? rating / 2 : 0

  const stars = Array.from({ length: 5 }, (_, starValue) => starValue + 1)
  const renderStars = stars.map((starValue) => {
    return (
      <Star
        key={starValue}
        className={styles.StarRating__icon}
        isActive={starValue <= ratingOutOfFiveValue}
      />
    )
  })

  return (
    <div
      className={classNames(styles.StarRating, className, {
        [styles['StarRating--is-large']]: isLarge,
      })}
    >
      <div className={styles.StarRating__icons}>{renderStars}</div>
      {withText && (
        <span className={styles.StarRating__text}>
          {ratingOutOfFiveValue ? `${ratingOutOfFiveValue}/5` : 'No rating'}
        </span>
      )}
    </div>
  )
}
export default StarRating
