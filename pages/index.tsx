import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { fetchSchedule } from '../services/tvMaze'

import { InterfaceTvShow } from '../types/interfaces'

import TheHomeHero from '../components/theHomeHero/theHomeHero'
import ShowSchedule from '../components/showSchedule/showSchedule'
import BaseSection from '../components/baseSection/baseSection'
import BaseMeta from '../components/baseMeta/baseMeta'

type Props = {
  shows: InterfaceTvShow[]
}

const Home: React.FunctionComponent<Props> = ({ shows }: Props) => {
  const [canScroll, setCanScroll] = useState(true)

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }
  }, [canScroll])

  return (
    <motion.div
      onAnimationStart={() => setCanScroll(false)}
      onAnimationComplete={() => window.scrollTo(0, 0)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeIn', duration: 0.75 }}
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
