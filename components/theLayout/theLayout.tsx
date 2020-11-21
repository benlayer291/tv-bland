import Head from 'next/head'

import TheHeader from '../theHeader/theHeader'
import TheFooter from '../theFooter/theFooter'

type Props = {
  children?: React.ReactNode
}

const TheLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title key="title">TV Bland</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information."
          key="description"
        />
        <meta
          name="keywords"
          content="TV Bland, Ben Layer, Next.js, React"
          key="keywords"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_GB" key="oglocale" />
        <meta property="og:site_name" content="TV Bland" key="ogsite_name" />
        <meta property="og:type" content="website" key="ogtype" />

        {/* DC */}
        <meta property="dcterms.Language" content="en_GB" key="dclang" />
        <meta property="dcterms.Type" content="website" key="dctype" />
        <meta
          property="dcterms.Creator"
          content="benlayer291"
          key="dccreator"
        />
        <meta property="dcterms.Format" content="text/html" key="dcformat" />

        {/* PWA */}
        <meta name="theme-color" content="#317EFB" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      </Head>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  )
}

export default TheLayout
