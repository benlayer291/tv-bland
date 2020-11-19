import { GetStaticPaths, GetStaticProps } from 'next'

import { fetchSchedule, fetchShow } from '../../services/tvMaze'

import { InterfaceTvShow } from '../../types/interfaces'

import ShowHero from '../../components/showHero/showHero'
import BaseSection from '../../components/baseSection/baseSection'
import TheLayout from '../../components/theLayout/theLayout'
import ShowInfo from '../../components/showInfo/showInfo'

type Props = {
  show: InterfaceTvShow
}

const Show: React.FunctionComponent<Props> = ({ show }: Props) => {
  return (
    <TheLayout>
      <ShowHero show={show} />
      <BaseSection>
        <ShowInfo show={show} />
      </BaseSection>
    </TheLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchSchedule()

  if (!data) return

  const paths = data.map(({ show }) => ({
    params: {
      id: show.id.toString(),
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id?.[0] : params?.id
  const show = await fetchShow(id)

  return {
    props: {
      show,
    },
  }
}

export default Show
