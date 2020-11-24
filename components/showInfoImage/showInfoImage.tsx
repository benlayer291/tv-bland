import classnames from 'classnames'

import BaseRevealImage from '../baseRevealImage/baseRevealImage'

import styles from './showInfoImage.module.css'

type Props = {
  className?: string
  eager?: boolean
  src: string
  alt: string
  height: number
  width: number
}

const ShowInfoImage: React.FunctionComponent<Props> = ({
  className,
  src,
  alt,
  height,
  width,
  eager = false,
}: Props) => {
  return (
    <div className={classnames(styles.ShowInfoImage, className)}>
      <BaseRevealImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        eager={eager}
      />
    </div>
  )
}

export default ShowInfoImage
