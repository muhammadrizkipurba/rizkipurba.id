import React from "react";

const educations = [
  { 
    title: "Purwadhika Startup and Coding School",
    years: "2018",
    subject: "Web and Mobile Development",
    image: "/assets/images/purwadhika.png",
    jobdesc: []
  },
  { 
    title: "SMA Sutomo 2",
    years: "2012 - 2015",
    subject: "Science",
    image: "/assets/images/sutomo.jpeg",
    jobdesc: []
  },
]

const EducationTimeline = () => {

  const render_educations = educations.map((item, idx) => {
    return (
      <li key={`education-${idx}`}>
        <div className="timeline-badge primary"></div>
        <div className="timeline-panel w-100">
          <div className="d-flex align-items-center">
            <img className="rounded mr-3" src={item.image} height={50} alt="whello" />
            <div>
              <h4 className="mb-1">
                <strong className="text-main-blue">{item.title}</strong>
              </h4>
              <p className="font-w600 fs-14 mb-0 lh-short">
                {item.subject}
                <span className="text-muted mb-0 lh-short">{item.years}</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div
      id="DZ_W_TimeLine"
      className="widget-timeline dz-scroll ps ps--active-y mt-4"
    >
      <div className='mb-3'>
        <h3 className='fs-18 font-w600 mb-3'>Education</h3>
      </div>
      <ul className="timeline ml-0">
        {render_educations}
      </ul>
    </div>
  );
};

export default EducationTimeline;
