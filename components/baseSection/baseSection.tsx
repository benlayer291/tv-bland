import wrapperStyles from '../../styles/objects/wrappers.module.css'

type Props = {
  children?: React.ReactNode
}

const Section: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <section>
      <div className={wrapperStyles.wrapper}>{children}</div>
    </section>
  )
}

export default Section
