import React, { useEffect, useState } from 'react'
import DisplayLottie from '../Lotties/DisplayLottie'
import codingJSON from '../../public/lottie/coding.json'

const HomeHero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const getScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 990);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenSize);
    getScreenSize();
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return (
    <div>
      {!isLargeScreen && 
        <div className='safe-area-view mt-5'></div>
      }
      <div className="row align-items-center flex-column-reverse-sm mx-3">
        <div className="col-lg-7 text-center-sm">
          <h1 className="text-white title ls-min">Hi, I am Muhammad Rizki Purba</h1>
          <p className="lead text-white fs-18 mt-3 pr-3">
            A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks and cross-platform Mobile Apps with React Native.
          </p>
          <a 
            href="https://rizkipurba.id/api/muhammadrizkipurba-resume.pdf"
            className="btn border-0 text-black fs-18 btn-round gradient-blue letter-spacing-0 hover-2x mt-3" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <i className="fa fa-download mr-2"></i>
            Download resume
          </a>
        </div>
        <div className="col-lg-5 image-hero-md-right">
          {/* <div 
            className='greeting-image'
            style={{
              backgroundImage: `url('/assets/images/greeting.jpeg')`,
              height: 'auto',
              width: 350,
              borderRadius: '50%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div> */}
          <div className='greeting-image'>
            <img 
              alt='rizki'
              src='/assets/images/greeting.jpeg'
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          {/* <DisplayLottie height={400} width={400} animationData={codingJSON}/> */}
        </div>
      </div>
    </div>
  )
}

export default HomeHero
