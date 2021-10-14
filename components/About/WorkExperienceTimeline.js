import React from "react";

const experiences = [
  { 
    title: "PT. Whello Indonesia Prima",
    years: "2019 - now",
    position: "React Developer",
    image: "/assets/images/whello.png",
    jobdesc: []
  },
  { 
    title: "Freelance",
    years: "2018 - 2019",
    position: "Web developer",
    image: "/assets/images/freelance.jpeg",
    jobdesc: []
  },
]

const WorkExperienceTimeline = () => {

  const render_experiences = experiences.map((item, idx) => {
    return (
      <li key={`work-experience-${idx}`}>
        <div className="timeline-badge primary"></div>
        <div className="timeline-panel w-100">
          <div className="d-flex align-items-center">
            <img className="rounded mr-3" src={item.image} height={50} alt="whello" />
            <div>
              <h4 className="mb-1">
                <strong className="text-main-blue">{item.title}</strong>
              </h4>
              <p className="font-w600 fs-14 mb-0 lh-short">
                {item.position}
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
        <h3 className='fs-18 font-w600 mb-3'>Working experiences</h3>
      </div>
      <ul className="timeline mb-0 ml-0">
        {render_experiences}
      </ul>
    </div>
  );
};

export default WorkExperienceTimeline;
