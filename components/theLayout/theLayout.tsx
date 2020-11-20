import Head from 'next/head'

import TheHeader from '../theHeader/theHeader'
import TheFooter from '../theFooter/theFooter'

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
