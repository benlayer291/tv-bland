import BaseLink from '../baseLink/baseLink'

import styles from './the404.module.css'
import wrapperStyles from '../../styles/objects/wrappers.module.css'

const The404: React.FunctionComponent = () => {
  return (
    <div className={styles.The404}>
      <div className={wrapperStyles.wrapper}>
        <div className={styles.The404__text}>
          <h1>404</h1>
          <h2>Uh oh... looks like that wasn&apos;t scheduled 😬</h2>
          <p>
            <BaseLink href="/">Return home</BaseLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default The404
