import classNames from 'classnames'

import wrapperStyles from '../../styles/objects/wrappers.module.css'
import ShowImage from '../showImage/showImage'
import StarRating from '../starRating/starRating'
import styles from './showHero.module.css'

const ShowHero: React.FunctionComponent = () => {
  return (
    <div className={styles.ShowHero}>
      <div className={wrapperStyles.wrapper}>
        <div className={styles.ShowHero__container}>
          <div className={styles.ShowHero__image}>
            <ShowImage />
          </div>
          <div className={styles.ShowHero__info}>
            <StarRating
              className={styles.ShowHero__rating}
              rating={6}
              isLarge
              withText
            />
            <div className={styles.ShowHero__text}>
              <h1>
                This is the title of the TV show which is very long isn&apos;t
                it
              </h1>
              <p
                className={classNames(styles.ShowHero__description, {
                  [styles['Show__description--overflow']]: true,
                })}
              >
                Hinc ille commotus ut iniusta perferens et indigna praefecti
                custodiam protectoribus mandaverat fidis. quo conperto Montius
                tunc quaestor acer quidem sed ad lenitatem propensior, consulens
                in commune.
              </p>
            </div>
            {/* <div className={styles.ShowHero__readMore}>
              <button type="button">Read More</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowHero
