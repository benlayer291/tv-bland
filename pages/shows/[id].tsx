import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { fetchSchedule, fetchShow } from '../../services/tvMaze'
import { removeHtmlTagsFromString } from '../../utils/helpers'
import { transition } from '../../utils/transitions'

import { InterfaceTvShow } from '../../types/interfaces'

import ShowHero from '../../components/showHero/showHero'
import BaseSection from '../../components/baseSection/baseSection'
import ShowInfo from '../../components/showInfo/showInfo'
import BaseMeta from '../../components/baseMeta/baseMeta'

type Props = {
  show: InterfaceTvShow
}

const Show: React.FunctionComponent<Props> = ({ show }: Props) => {
  const router = useRouter()

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
      onAnimationComplete={() => setCanScroll(true)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
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
    </motion.div>
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
