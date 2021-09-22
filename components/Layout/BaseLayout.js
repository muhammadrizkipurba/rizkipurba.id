import React from 'react'
import HomeHero from '../HeroContent/HomeHero'
import Footer from './Footer'
import Hero from './Hero'
import TopNav from './TopNav'

const BaseLayout = ({ withHero, page, children }) => {
  return (
    <div>
      <TopNav />
      { withHero &&
        <Hero page={page}>
          <div className='container mx-auto'>
            { 
              page === 'home' 
              ? <HomeHero />
              : null
            }
          </div>
        </Hero>
      }
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
