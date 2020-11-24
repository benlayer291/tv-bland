import styles from './theFallback.module.css'
import wrapperStyles from '../../styles/objects/wrappers.module.css'

const TheFallback: React.FunctionComponent = () => {
  return (
    <div className={styles.TheFallback}>
      <div className={wrapperStyles.wrapper}>
        <div className={styles.TheFallback__text}>
          <h1>Loading...</h1>
          <h2>TV is just warming up... 📺</h2>
        </div>
      </div>
    </div>
  )
}

export default TheFallback
