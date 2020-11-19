import BaseLink from '../baseLink/baseLink'

import wrapperStyles from '../../styles/objects/wrappers.module.css'
import styles from './theHeader.module.css'

const TheHeader: React.FunctionComponent = () => {
  return (
    <header className={styles.TheHeader}>
      <div className={wrapperStyles.wrapper}>
        <BaseLink className="t-h1" href={'/'}>
          <strong>TV Bland</strong>
        </BaseLink>
      </div>
    </header>
  )
}

export default TheHeader
