import React from "react";

const ServiceSection = () => {
  return (
    <div className="services-section" className="my-50">
      <div className='mb-5'>
        <h3 className='title text-center'>What I can do</h3>
      </div>
      <div className="row">
        <div className="col-md-4 text-center mb-5">
          <div className="services-item">
            <div className="services-item-icon">
              <img
                alt=""
                className="mb-4"
                height={100}
                src="/assets/images/website-2.svg"
              />
            </div>
            <div className="services-item-title">
              <h3>Front End Development</h3>
            </div>
            <div className="fs-16" style={{ letterSpacing: "-0.4px" }}>
              Fast load times and lag free interaction, my highest priority. My
              layouts will work on any device, big or small.
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-5">
          <div className="services-item">
            <div className="services-item-icon">
              <img
                alt=""
                className="mb-4"
                height={100}
                src="/assets/images/backend-3.svg"
              />
            </div>
            <div className="services-item-title">
              <h3>Back End Development</h3>
            </div>
            <div className="fs-16" style={{ letterSpacing: "-0.4px" }}>
              Create and implement the server-side logic to make the web app
              function working properly and optimizing the application for
              efficiency.
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-5">
          <div className="services-item">
            <div className="services-item-icon">
              <img
                alt=""
                className="mb-4"
                height={100}
                src="/assets/images/mobile-2.svg"
              />
            </div>
            <div className="services-item-title">
              <h3>Mobile Development</h3>
            </div>
            <div className="fs-16" style={{ letterSpacing: "-0.4px" }}>
              Strong preference for easy to use, intuitive UX/UI. Mobile Apps
              don't have to be static, I love making pages come to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
