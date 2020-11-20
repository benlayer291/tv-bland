import { GetServerSideProps } from 'next'

import { fetchSchedule } from '../services/tvMaze'

import { InterfaceTvShow } from '../types/interfaces'

import TheHomeHero from '../components/theHomeHero/theHomeHero'
import ShowSchedule from '../components/showSchedule/showSchedule'
import BaseSection from '../components/baseSection/baseSection'

type Props = {
  shows: InterfaceTvShow[]
}

const Home: React.FunctionComponent<Props> = ({ shows }: Props) => {
  return (
    <>
      <TheHomeHero />
      <BaseSection>
        <ShowSchedule shows={shows} />
      </BaseSection>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchSchedule()

    if (!data) {
      return {
        notFound: true,
      }
    }

    const shows = data.map(({ show }) => show)

    return {
      props: { shows },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default Home
