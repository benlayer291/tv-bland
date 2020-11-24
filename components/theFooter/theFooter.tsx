import classNames from 'classnames'

import wrapperStyles from '../../styles/objects/wrappers.module.css'
import styles from './theFooter.module.css'

const TheFooter: React.FunctionComponent = () => {
  return (
    <footer className={styles.TheFooter}>
      <div className={wrapperStyles.wrapper}>
        <p className={classNames('t-small', styles.TheFooter__text)}>
          <a
            href="https://github.com/benlayer291"
            target="_blank"
            rel="noreferrer noopener"
          >
            Build
          </a>{' '}
          by{' '}
          <a
            href="https://www.benlayer.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ben Layer
          </a>
        </p>
      </div>
    </footer>
  )
}

export default TheFooter
