import classNames from 'classnames'

import ShowInfoText from '../showInfoText/showInfoText'
import ShowInfoImage from '../showInfoImage/showInfoImage'

import styles from './showInfoRow.module.css'

type Props = {
  className?: string
  row: { left: string; right: string; image?: string }
}

const ShowInfoRow: React.FunctionComponent<Props> = ({ row }: Props) => {
  return (
    <div
      className={classNames(styles.ShowInfoRow, {
        [styles['ShowInfoRow--center']]: 'image' in row,
        [styles['ShowInfoRow--full']]: 'image' in row,
      })}
    >
      {'image' in row && (
        <ShowInfoImage
          className={styles['ShowInfoRow__item--noFlex']}
          src={row.image}
          alt={`Portrait of ${row.left}`}
          height={295}
          width={210}
        />
      )}
      <ShowInfoText
        className={styles.ShowInfoRow__item}
        reverse={row.image !== undefined}
        left={<span>{row.left}</span>}
        right={<span>{row.right}</span>}
      />
    </div>
  )
}

export default ShowInfoRow
