import React, { useState } from "react";
import Link from 'next/link';
import moment from "moment";
import 'moment/locale/id';

import DisplayLottie from "../Lotties/DisplayLottie";
import webdevJSON from "../../public/lottie/coding.json";

const ShortAboutMe = () => {
  // const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (e) => {
    // const valueY = e.movementX*-12;
    // const valueX = e.movementY*-12;

    setIsHovered(true);
    // setCoordinates({
    //   x: valueX,
    //   y: valueY,
    // })
  }

  const age = moment('12/15/1996').diff(moment(new Date()), "years");
  const experience = moment('12/01/2017').diff(moment(new Date()), "years");

  return (
    <div>
      <div
        className="position-relative"
        // style={{ minHeight: 500 }}
      >
        <div className="container" style={{ padding: "50px 30px" }}>
          <div className="row">
            <div className='col-12'>
              <h3 className="title">Short story about me</h3>
            </div>
            <div className="col-md-7 d-flex align-items-center">
              <div className='mb-5' style={{zIndex: 1}}>
                <p className='fs-16 mt-4'>
                  Hi, my name is Rizki. I'm {Math.abs(age)} yo. Now
                  I'm working at
                  <span id="company-URL">
                    <a
                      className="text-decoration-none mx-2 text-info"
                      href="https://whello.id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PT. Whello Indonesia Prima,
                    </a>
                  </span>
                  a digital marketing agency from Amsterdam - Netherland based
                  in Bali - Indonesia. I work as a React Developer who handles or
                  creates client's website with React JS (one of the most famous
                  Javascript Libraries) for the client-side development. 
                </p>
                <p className='fs-16 mt-2'>
                  I have {Math.abs(experience)+1} years of experience as a developer and love working with MERN stack. I learn about MERN stack at 
                  <span id="company-URL">
                    <a
                      className="text-decoration-none mx-2 text-info"
                      href="https://purwadhika.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Purwadhika Startup and Coding School.
                    </a>
                  </span>
                </p>
                <Link href='/about-me'>
                  <div role='link' className='btn gradient-blue border-0 mt-4'>
                    <span className='text-black fs-16 font-w600 mb-0'>Read more about me</span>
                    <i className='fa fa-arrow-right fs-15 text-black ml-2'></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-md-5"
              style={{ zIndex: 5 }}
              onMouseMove={onMouseMove}
              onMouseLeave={() => {
                setIsHovered(false);
                // setCoordinates({ x: 0, y: 0});
              }}
            >
              <DisplayLottie 
                height={'100%'}
                width={'100%'}
                animationData={webdevJSON}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAboutMe;
