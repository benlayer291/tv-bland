import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'

import TheLayout from '../components/theLayout/theLayout'
const TheCursor = dynamic(() => import('../components/theCursor/theCursor'), {
  ssr: false,
})

import '../styles/globals.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <TheLayout>
      <TheCursor />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </TheLayout>
  )
}

export default MyApp
