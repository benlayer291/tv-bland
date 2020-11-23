import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'

import { fetchSchedule } from '../services/tvMaze'
import { transition } from '../utils/transitions'

import { InterfaceTvShow } from '../types/interfaces'

import TheHomeHero from '../components/theHomeHero/theHomeHero'
import ShowSchedule from '../components/showSchedule/showSchedule'
import BaseSection from '../components/baseSection/baseSection'
import BaseMeta from '../components/baseMeta/baseMeta'

type Props = {
  shows: InterfaceTvShow[]
}

const Home: React.FunctionComponent<Props> = ({ shows }: Props) => {
  return (
    <motion.div
      onAnimationComplete={() => window.scrollTo(0, 0)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <BaseMeta />
      <TheHomeHero />
      <BaseSection>
        <ShowSchedule shows={shows} />
      </BaseSection>
    </motion.div>
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
