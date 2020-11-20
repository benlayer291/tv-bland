import { GetStaticPaths, GetStaticProps } from 'next'

import { fetchSchedule, fetchShow } from '../../services/tvMaze'

import { InterfaceTvShow } from '../../types/interfaces'

import ShowHero from '../../components/showHero/showHero'
import BaseSection from '../../components/baseSection/baseSection'
import ShowInfo from '../../components/showInfo/showInfo'

type Props = {
  show: InterfaceTvShow
}

const Show: React.FunctionComponent<Props> = ({ show }: Props) => {
  return (
    <>
      <ShowHero show={show} />
      <BaseSection>
        <ShowInfo show={show} />
      </BaseSection>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchSchedule()
  const paths = data.map(({ show }) => ({
    params: {
      id: show.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id?.[0] : params?.id
  const show = await fetchShow(id as string)

  return {
    props: {
      show,
    },
  }
}

export default Show
