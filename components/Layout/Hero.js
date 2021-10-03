import React, { Fragment } from 'react'
import HeroWithTitle from '../HeroContent/HeroWithTitle'
import HomeHero from '../HeroContent/HomeHero'

const Hero = ({ page, heroTitle, heroImage, heroBgColor, children }) => {
  return (
    <div 
      className="page-header relative my-0" 
      style={{
        backgroundImage: `url(${heroImage ? heroImage : '/assets/images/curve-1.jpeg'})`,
        minHeight: 800,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: 0
      }}
    >
      <span className={`${page === 'home' ? "mask bg-gradient-primary" : `mask ${heroBgColor}`}`}></span>
      <div className="container sm-mb-150">
        { page === 'home' ? 
          <HomeHero /> 
        : <HeroWithTitle title={heroTitle} /> }
      </div>
      <div className="position-absolute w-100" style={{zIndex: 1, bottom: 0}}>
        <svg 
          className="waves" 
          style={{
            position: 'relative',
            width: '100%',
            height: '10vh',
            marginBottom: '-7px',
          }} 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 24 150 40" preserveAspectRatio="none" 
          shapeRendering="auto"
        >
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
    </div>
  )
}

export default Hero
