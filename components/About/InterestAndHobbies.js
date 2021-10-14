import React from "react";

const InterestAndHobbies = () => {
  return (
    <div>
      <h3 className="mb-4 fs-18 font-w600">My Interests and Hobbies</h3>
      <div className="row mx-auto mt-30">
        <div className="col-2 justify-content-center">
          <div className="interests-icon-wrapper bg-gray-2">
            <img alt="code" src="/assets/images/code.svg" height={24} />
          </div>
        </div>
        <div className="col-2 justify-content-center">
          <div className="interests-icon-wrapper bg-gray-2">
            <img
              alt="badminton"
              src="/assets/images/badminton.svg"
              height={24}
            />
          </div>
        </div>
        <div className="col-2 justify-content-center">
          <div className="interests-icon-wrapper bg-gray-2">
            <img alt="soccer" src="/assets/images/soccer.svg" height={24} />
          </div>
        </div>
        <div className="col-2 justify-content-center">
          <div className="interests-icon-wrapper bg-gray-2">
            <img alt="music" src="/assets/images/headphones.svg" height={24} />
          </div>
        </div>
        <div className="col-2 justify-content-center">
          <div className="interests-icon-wrapper bg-gray-2">
            <img alt="travel" src="/assets/images/travel.svg" height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestAndHobbies;
