import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import TheLayout from '../components/theLayout/theLayout'
const TheCursorV2 = dynamic(
  () => import('../components/theCursorV2/theCursorV2'),
  {
    ssr: false,
  }
)
import CursorContextProvider from '../context/cursorContext'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CursorContextProvider>
      <TheLayout>
        <Component {...pageProps} />
        <TheCursorV2 />
      </TheLayout>
    </CursorContextProvider>
  )
}

export default MyApp
