import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import TheLayout from '../components/theLayout/theLayout'
const TheCursor = dynamic(() => import('../components/theCursor/theCursor'), {
  ssr: false,
})
import CursorContextProvider from '../context/cursorContext'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CursorContextProvider>
      <TheLayout>
        <Component {...pageProps} />
        <TheCursor />
      </TheLayout>
    </CursorContextProvider>
  )
}

export default MyApp
