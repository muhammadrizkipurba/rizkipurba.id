import React from 'react'
import Head from 'next/head'

const CustomHead = ({ title, description, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Css Style */}
      <link rel="stylesheet" href="/assets/css/bootstrap.css" />
      <link rel="stylesheet" href="/assets/css/scrollbar.css" />
      <link rel="stylesheet" href="/assets/css/font-awesome.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* Custom font */}
      <link rel="preload" href="/assets/fonts/Karla-Bold.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-BoldItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-ExtraBold.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-ExtraBoldItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-ExtraLight.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-ExtraLightItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-Italic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-LightItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-Light.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-MediumItalic.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-Medium.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-Regular.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-SemiBold.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Karla-SemiBoldItalic.ttf" as="font" crossOrigin="" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="description" content="Hi, my name is Muhammad Rizki Purba. I am a React developer at PT. Whello Indonesia Prima. I will share everything about my experience as a react developer in a blog post on this website." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Muhammad Rizki Purba" />
      <meta property="article:publisher" content="https://www.facebook.com/muhammadrizkipurba/" />
      <meta property="article:modified_time" content="2021-03-25T07:38:36+00:00" />
      <meta property="og:image" content="https://rizkipurba.id/assets/img/home.jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="980" />
      <meta name="twitter:card" content="summary" />
      <meta name="description" content="Portfolio website of Muhammad Rizki Purba - React developer at PT. Whello Indonesia Prima" />
      <meta property="og:title" content="Web developer | Muhammad Rizki Purba" />
      <meta property="og:description" content="Hi, my name is Muhammad Rizki Purba. I am a React developer at PT. Whello Indonesia Prima. I will share everything about my experience as a react developer in a blog post on this website." />
      
      <script src="/assets/vendor/global/global.min.js"></script>
      <script src="/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
      <script src="/assets/vendor/deznav/deznav.min.js"></script>
      <script src="/assets/js/custom.min.js"></script>
      <script src="/assets/js/deznav-init.js"></script>

      {children}
    </Head>
  )
}

export default CustomHead
