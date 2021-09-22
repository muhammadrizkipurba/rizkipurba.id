import React from 'react';
import Lottie from 'react-lottie';
import Loading from '../Reusable/Loading'

const DisplayLottie = ({height, width, animationData}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
    
  return (
    <div onClick={() => null}>
      {/* To override default onClick pause by Lottie */}
      <Lottie 
        height={height}
        width={width}
        options={defaultOptions}
      />
    </div>
  )
}
 
export default DisplayLottie;