import React from "react";

const AboutHeader = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="profile card card-body px-3 pt-3 pb-0">
          <div className="profile-head">
            <div className="photo-content">
              <div className="cover-photo"></div>
            </div>
            <div className="profile-info">
              <div className="profile-photo">
                <img
                  style={{height: 110, width: 110}}
                  src="/assets/images/me-3.png"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="profile-details">
                <div className="profile-name px-3 pt-2">
                  <h1 className="text-primary fs-18 lh-0 mb-0">Muhammad Rizki Purba</h1>
                  <h2 className='fs-16'>React Developer</h2>
                </div>
              </div>
              <div className='w-auto'>
                <a 
                  href="https://rizkipurba.id/api/muhammadrizkipurba-resume.pdf"
                  className="btn border-0 text-black fs-14 btn-round gradient-blue letter-spacing-0 hover-2x mt-3 d-flex align-items-center mx-auto" 
                  rel="noopener noreferrer" 
                  style={{width: 'max-content'}}
                  target="_blank"
                >
                  <i className="fa fa-download mr-2"></i>
                  <span>Download resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
