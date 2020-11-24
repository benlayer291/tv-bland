import StyleguideColor from '../styleguideColor/styleguideColor'

import styles from './styleguideColors.module.css'

type Props = {
  colors: string[]
}

const StyleguideColors: React.FunctionComponent<Props> = ({
  colors,
}: Props) => {
  const styleguideColors = colors.map((color) => {
    return (
      <li className={styles.StyleguideColors__item} key={color}>
        <StyleguideColor color={color} />
      </li>
    )
  })
  return <ul className={styles.StyleguideColors}>{styleguideColors}</ul>
}

export default StyleguideColors
