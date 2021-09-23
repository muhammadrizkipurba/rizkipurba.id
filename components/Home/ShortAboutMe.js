import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/id';
import Link from 'next/link';

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
    <div style={{ margin: "0 20px" }}>
      <div
        className="bg-light-blue border-radius-md position-relative"
        style={{ minHeight: 500 }}
      >
        <div className="container" style={{ padding: "50px 30px" }}>
          <div className="row" style={{ height: "500px" }}>
            <div className="col-md-7 d-flex align-items-center">
              <div className='mb-5' style={{zIndex: 1}}>
                <h3 className="title">Short story about me</h3>
                <p className='fs-18 pr-5 mt-4'>
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
                <p className='fs-18 pr-5 mt-2'>
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
                    <span className='text-white fs-16 font-w600 mb-0'>Read more about me</span>
                    <i className='fa fa-arrow-right fs-15 text-white ml-2'></i>
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
              <div
                className="card card-background card-background-mask-primary tilt"
                data-tilt=""
                style={{
                  overflow: "hidden",
                  // willChange: "transform",
                  // transform: `perspective(900px) rotateX(${coordinates.x}deg) rotateY(${coordinates.y}deg) scale3d(1, 1, 1)`,
                }}
              >
                <div
                  className="full-background"
                  style={{
                    transition: "0.5s all ease-in-out",
                    backgroundImage: `url('/assets/images/me.jpg')`,
                    transform: !isHovered
                      ? "scale(1)"
                      : "scale(1.5) translateY(-80px)",
                  }}
                ></div>
                {!isHovered && (
                  <div className="card-body text-center d-flex flex-column align-items-center justify-content-center opacity-0">
                    <h2
                      className="text-white font-weight-bold up mb-0 fs-36"
                      style={{ lineHeight: 1.6 }}
                    >
                      Coolest <br /> Guys
                    </h2>
                    <div className="icon icon-lg up my-1">
                      <img
                        alt="code"
                        src="/assets/images/code-icon.svg"
                        height={70}
                      />
                    </div>
                    <h2
                      className="text-white font-weight-bold up mb-0 fs-36"
                      style={{ lineHeight: 1.6 }}
                    >
                      Write <br /> Code
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAboutMe;
