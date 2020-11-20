import { AppProps } from 'next/app'
import TheCursor from '../components/theCursor/theCursor'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TheCursor />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
