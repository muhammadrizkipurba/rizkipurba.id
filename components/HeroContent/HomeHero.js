import React from 'react'
import DisplayLottie from '../Lotties/DisplayLottie'
import codingJSON from '../../public/lottie/coding.json'

const HomeHero = () => {
  return (
    <div className="row align-items-center mx-3">
      <div className="col-lg-7">
        <h1 className="text-white title ls-min">Hi, I'm Muhammad Rizki Purba</h1>
        <p className="lead text-white fs-16 mt-3 pr-3">
          A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks and cross-platform Mobile Apps with React Native.
        </p>
        <a 
          href="https://rizkipurba.id/api/muhammadrizkipurba-resume.pdf"
          className="btn border-0 text-black btn-round gradient-blue letter-spacing-0 hover-2x" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <i className="fa fa-download mr-2"></i>
          Download resume
        </a>
      </div>
      <div className="col-lg-5 d-flex justify-content-end">
        <div 
          style={{
            backgroundImage: `url('/assets/images/greeting.jpeg')`,
            height: 350,
            width: 350,
            borderRadius: '50%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
        {/* <DisplayLottie height={400} width={400} animationData={codingJSON}/> */}
      </div>
    </div>
  )
}

export default HomeHero
