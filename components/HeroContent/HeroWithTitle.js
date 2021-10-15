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

  return null
};

export default HeroWithTitle
