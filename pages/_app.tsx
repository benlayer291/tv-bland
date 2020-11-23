import React from 'react'
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
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        <React.Fragment key={router.route}>
          <Component {...pageProps} />
        </React.Fragment>
      </AnimatePresence>
    </TheLayout>
  )
}

export default MyApp
