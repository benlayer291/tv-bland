import wrapperStyles from '../../styles/objects/wrappers.module.css'
import styles from './theHomeHero.module.css'

const TheHomeHero: React.FunctionComponent = () => {
  return (
    <div className={styles.TheHomeHero}>
      <div className={wrapperStyles.wrapper}>
        <div className={styles.TheHomeHero__text}>
          <h1 className="t-h2">TV Show and web series database.</h1>
          <h2>
            Create personalised schedules. Episode guide, cast, crew and
            character information.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default TheHomeHero
