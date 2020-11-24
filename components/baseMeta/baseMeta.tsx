import Head from 'next/head'

import { removeProtocolFromUrl } from '../../utils/helpers'

type Props = {
  description?: string
  title?: string
  image?: string
  urlPath?: string
}

const BaseMeta: React.FunctionComponent<Props> = ({
  title,
  description,
  image,
  urlPath,
}: Props) => {
  const pageTitle = title ? `${title} - TV Bland` : 'TV Bland'
  const pageDescription = description
    ? description
    : 'TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information.'
  const pageImage = image
    ? removeProtocolFromUrl(image)
    : '/imgs/social-default.jpg'
  const pageUrl = urlPath
    ? `https://tv-bland-two.vercel.app/${urlPath}`
    : 'https://tv-bland-two.vercel.app/'

  return (
    <Head>
      <title key="title">{pageTitle}</title>
      <meta name="description" content={pageDescription} key="description" />

      {/* Twitter */}
      <meta
        name="twitter:description"
        content={pageDescription}
        key="twdescription"
      />
      <meta name="twitter:image" content={pageImage} key="twimage" />
      <meta name="twitter:title" content={pageTitle} key="twtitle" />

      {/* Open Graph */}

      <meta property="og:url" content={pageUrl} key="ogurl" />
      <meta property="og:image" content={pageImage} key="ogimage" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={pageDescription} key="ogdesc" />

      {/* DC */}
      <meta property="dcTerms.Title" content={pageTitle} key="dctitle" />
      <meta
        property="dcterms.Description"
        content={pageDescription}
        key="dcdesc"
      />
    </Head>
  )
}

export default BaseMeta
