import classNames from 'classnames'

import BaseRevealImage from '../baseRevealImage/baseRevealImage'

import styles from './showImage.module.css'

type Props = {
  className?: string
  eager?: boolean
  src: string
  alt: string
  height: number
  width: number
}

const ShowImage: React.FunctionComponent<Props> = ({
  className,
  alt,
  src,
  height,
  width,
  eager = false,
}: Props) => {
  return (
    <div
      data-testid="show-image"
      className={classNames(styles.ShowImage, className)}
    >
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

export default ShowImage
