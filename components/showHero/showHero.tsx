import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { InterfaceTvShow } from '../../types/interfaces'

import BaseButton from '../baseButton/baseButton'
import ShowImage from '../showImage/showImage'
import StarRating from '../starRating/starRating'

import wrapperStyles from '../../styles/objects/wrappers.module.css'
import styles from './showHero.module.css'

type Props = {
  show: InterfaceTvShow
}

const ShowHero: React.FunctionComponent<Props> = ({ show }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [maxHeight, setMaxHeight] = useState<number>(60)
  const [isOverMaxHeight, setIsOverMaxHeight] = useState<boolean>(false)

  const ref = useRef(null)
  const maxHeightMin = 60

  useEffect(() => {
    const maxHeightMax = ref.current.scrollHeight

    setMaxHeight(window.innerWidth >= 600 ? maxHeightMin : maxHeightMax)
    setIsOverMaxHeight(maxHeightMax > maxHeightMin)
  }, [])

  const onToggleClick = () => {
    const maxHeightMax = ref.current.scrollHeight

    setMaxHeight(isOpen ? maxHeightMin : maxHeightMax)
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={classNames(styles.ShowHero, {
        [styles['ShowHero--isOpen']]: isOpen,
        [styles['ShowHero--isOverMaxHeight']]: isOverMaxHeight,
      })}
    >
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
          <div className={styles.ShowHero__infoContainer}>
            <StarRating
              className={styles.ShowHero__rating}
              rating={show.rating?.average}
              isLarge
              withText
            />
            <h1>{show.name}</h1>
            <div
              ref={ref}
              className={styles.ShowHero__descriptionContainer}
              style={{
                maxHeight: maxHeight,
              }}
            >
              <div
                className={classNames(styles.ShowHero__description)}
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            </div>
            <BaseButton
              className={styles.ShowHero__toggle}
              onClick={onToggleClick}
              text={isOpen ? 'Read Less' : 'Read More'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowHero
