import Head from 'next/head'

import TheFooter from '../theFooter/theFooter'
import TheHeader from '../theHeader/theHeader'

type Props = {
  children?: React.ReactNode
  home?: boolean
}

const TheLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>TV Bland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  )
}

export default TheLayout
