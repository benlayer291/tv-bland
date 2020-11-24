import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import TheLayout from '../components/theLayout/theLayout'
const TheCursor = dynamic(() => import('../components/theCursor/theCursor'), {
  ssr: false,
})

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TheLayout>
      <TheCursor />
      <Component {...pageProps} />
    </TheLayout>
  )
}

export default MyApp
