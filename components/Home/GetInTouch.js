import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className="position-relative overflow-hidden">
      <img
        src="/assets/images/wave-pattern.svg"
        alt="pattern-lines"
        className="position-absolute top-0 opacity-5"
      />
      <div
        className="gradient-dark border-radius-md d-flex align-items-center justify-content-center py-4 px-3 px-sm-2"
        style={{ minHeight: 150 }}
      >
        <div className="row align-items-center w-100">
          <div className="col-md-4">
            <h3 className="font-w700 mb-0 fs-34 text-white text-center-md mb-4 mb-lg-0 text-center-sm">
              Let's collaborate
            </h3>
          </div>
          <div className="col-md-5 text-center mb-4 mb-lg-0">
            <p className="mb-0 text-center fs-16 text-white font-w300">
              Interested in working together? <br /> We should queue up a chat.
              I’ll buy the coffee.
            </p>
          </div>
          <div className="col-md-3 text-lg-right text-center-sm">
            <Link href="/contact">
              <div className="btn border-0 text-black btn-round gradient-blue letter-spacing-0 hover-2x px-5">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-w600 fs-16">Let's talk</span>
                  <img
                    src="/assets/images/coffee.svg"
                    className="ml-2"
                    height={15}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
