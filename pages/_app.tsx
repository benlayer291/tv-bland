import Router from 'next/router'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'

import TheLayout from '../components/theLayout/theLayout'
const TheCursor = dynamic(() => import('../components/theCursor/theCursor'), {
  ssr: false,
})

import '../styles/globals.css'

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]')
    allStyleElems.forEach((elem) => {
      elem.removeAttribute('media')
    })
  }
  tempFix()
}

Router.events.on('routeChangeComplete', routeChange)
Router.events.on('routeChangeStart', routeChange)

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <TheCursor />
      <TheLayout>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </TheLayout>
    </>
  )
}

export default MyApp
