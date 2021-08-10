import React from 'react'
import { Helmet } from 'react-helmet'

export default function MetaHead({
  title = null,
  description = 'Encuentra todos los productos de Platzi Conf Merch',
  image = null,
  url = 'https://platzi-conf-merch-react.vercel.app/',
}) {
  return (
    <Helmet>
      <title>{`PlatziConf Merch - ${title}`}</title>
      <meta content={description} name="description" />
      <meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />
      <link href={url} rel="canonical" />
      <meta content="en_US" property="og:locale" />
      <meta content="article" property="og:type" />
      <meta content={`PlatziConf Merch - ${title}`} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content="PlatziConf Merch" property="og:site_name" />
      <meta content={image} property="og:image" />
      <meta content={image} property="og:image:secure_url" />
      <meta content="1280" property="og:image:width" />
      <meta content="720" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@d1eshi" name="twitter:site" />
      <meta content="@d1eshi" name="twitter:creator" />
      <meta content={`PlatziConf Merch ${title}`} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />
    </Helmet>
  )
}
