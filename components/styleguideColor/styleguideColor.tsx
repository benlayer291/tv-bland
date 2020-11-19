import styles from './styleguideColor.module.css'

type Props = {
  color: string
}

const StyleguideColor: React.FunctionComponent<Props> = ({ color }: Props) => {
  return (
    <div
      className={styles.StyleguideColor}
      style={{ backgroundColor: color }}
    />
  )
}

export default StyleguideColor
