import React from 'react'
import Head from 'next/head'

const CustomHead = ({ title, description, canonicalURL, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Custom font */}
      <link rel="preload" href="/assets/fonts/Lato-Bold.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-BoldItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-Black.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-BlackItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-Thin.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-ThinItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-Italic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-LightItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-Light.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Lato-Regular.ttf" as="font" crossOrigin="" />

      {/* For SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalURL} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:site_name" content="Muhammad Rizki Purba" />
      <meta property="article:publisher" content="https://www.facebook.com/muhammadrizkipurba/" />
      <meta property="article:modified_time" content="2021-11-08T002:20:00+00:00" />
      <meta property="og:image" content="https://rizkipurba.id/logo.png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1280" />
      <meta name="twitter:card" content="summary" />
      {/* For SEO end */}
      
      {children}
    </Head>
  )
}

export default CustomHead
