import classNames from 'classnames'

import { InterfaceTvShow } from '../../types/interfaces'

import ShowImage from '../showImage/showImage'
import StarRating from '../starRating/starRating'

import wrapperStyles from '../../styles/objects/wrappers.module.css'
import styles from './showHero.module.css'

type Props = {
  show: InterfaceTvShow
}

const ShowHero: React.FunctionComponent<Props> = ({ show }: Props) => {
  return (
    <div className={styles.ShowHero}>
      <div className={wrapperStyles.wrapper}>
        <div className={styles.ShowHero__container}>
          <div className={styles.ShowHero__imageContainer}>
            <div className={styles.ShowHero__imageContainerInner}>
              <ShowImage
                className={styles.ShowHero__image}
                src={show.image?.medium || show.image?.original}
                alt={`Cover image for ${show.name}`}
                height={295}
                width={210}
                eager={true}
              />
            </div>
          </div>
          <div className={styles.ShowHero__info}>
            <StarRating
              className={styles.ShowHero__rating}
              rating={show.rating?.average}
              isLarge
              withText
            />
            <div className={styles.ShowHero__text}>
              <h1>{show.name}</h1>
              <div
                className={classNames(styles.ShowHero__description)}
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowHero
