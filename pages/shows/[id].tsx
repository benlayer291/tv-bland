import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { fetchSchedule, fetchShow } from '../../services/tvMaze'
import { removeHtmlTagsFromString } from '../../utils/helpers'

import { InterfaceTvShow } from '../../types/interfaces'

import BaseMeta from '../../components/baseMeta/baseMeta'
import BaseSection from '../../components/baseSection/baseSection'
import ShowHero from '../../components/showHero/showHero'
import ShowInfo from '../../components/showInfo/showInfo'
import TheFallback from '../../components/theFallback/theFallback'

type Props = {
  show: InterfaceTvShow
}

const Show: React.FunctionComponent<Props> = ({ show }: Props) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <TheFallback />
  }

  return (
    <>
      <BaseMeta
        image={show.image?.medium || show.image?.original}
        urlPath={`shows/${router.query.id}`}
        title={show.name}
        description={removeHtmlTagsFromString(show.summary)}
      />
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
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id?.[0] : params?.id
  const show = await fetchShow(id as string)

  if (!show) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      show,
    },
    revalidate: 1,
  }
}

export default Show
