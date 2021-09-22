import React, { Fragment } from 'react'
import HomeHero from '../HeroContent/HomeHero'

const Hero = ({ page, children }) => {
  return (
    <div 
      className="page-header relative my-0" 
      style={{
        backgroundImage: `url('/assets/images/curve-1.jpeg')`,
        minHeight: 800,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: 0
      }}
    >
      <span className="mask bg-gradient-primary"></span>
      <div className="container">
        { page === 'home' ? <HomeHero /> 
          : null
        }
      </div>
        <div className="position-absolute w-100" style={{zIndex: 1, bottom: 0}}>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g className="moving-waves">
              <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.30"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.99)"></use>
            </g>
          </svg>
        </div>
      {/* <div className="position-relative" style={{height: '50px', overflow: 'hidden', marginTop: '-50px', zIndex:'2', position: 'relative' }}>
      </div> */}
    </div>
  )
}

export default Hero
