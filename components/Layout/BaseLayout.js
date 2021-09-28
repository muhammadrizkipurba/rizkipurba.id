import React from 'react'
import HomeHero from '../HeroContent/HomeHero'
import Footer from './Footer'
import Hero from './Hero'
import TopNav from './TopNav'

const BaseLayout = ({ withHero, heroImage, heroTitle, heroBgColor, page, children }) => {

  return (
    <div>
      <TopNav />
      { withHero &&
        <Hero page={page} heroTitle={heroTitle} heroImage={heroImage} heroBgColor={heroBgColor} />
      }
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
