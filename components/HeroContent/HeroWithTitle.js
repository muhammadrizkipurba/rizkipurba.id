import { useRouter } from 'next/router';
import React from 'react'

const HeroWithTitle = () => {

  const router = useRouter();
  const page = router.pathname;
  
  if(page === '/terms-and-conditions') {
    return (
      <div className='text-center'>
        <h1 className='fs-48 mb-0 font-w600 text-white' style={{letterSpacing: -1}}>Terms and Conditions</h1>
        <div className='mt-1 mb-5'>
          <p className='mb-5 text-white fs-16'>
            Please read these terms and conditions carefully.
          </p>
          <p className='mb-0 text-white fs-16'>Last updated: October 15, 2021</p>
        </div>
      </div>
    );
  }; 

  if(page === '/project') {
    return (
      <div className='text-center'>
        <h1 className='fs-48 mb-0 font-w600 text-white' style={{letterSpacing: -1}}>My Projects</h1>
        <div className='mt-3 mb-5'>
          <p className='mb-0 text-white fs-20'>
            I have done it before - I can do it again.
          </p>
          <p className='mb-0 text-white fs-20'>Let my previous work do all the talking</p>
        </div>
      </div>
    );
  }; 

  if(page === '/blog') {
    return (
      <div className='text-center'>
        <h1 className='fs-48 mb-0 font-w600 text-white' style={{letterSpacing: -1}}>Blogs</h1>
        <div className='mt-3 mb-5'>
          <p className='mb-0 text-white fs-20'>
            You will find helpful and practical guides on website building.
          </p>
        </div>
      </div>
    );
  }; 

  return null
};

export default HeroWithTitle
