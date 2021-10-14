import React from "react";
import Link from "next/link";
import { API_URL } from "../../utils/apiConfig";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({ projects }) => {

  const projects_dummy = [
    { 
      title: "seindo", 
      desc: "Travel agency company which sale travel package, booking flight, hotel and transport.", 
      img: "blog1.jpeg",
      createdDate: '22/02/2021'
    },
    { 
      title: "flowently", 
      desc: "A platform for student can find and make an appointment with match tutor to learn languages.", 
      img: "blog2.jpeg",
      createdDate: '02/03/2021'
    },
    { 
      title: "AESIA", 
      desc: "Create a widget to register/login and property rent history and transaction report", 
      img: "blog3.jpeg",
      createdDate: '27/03/2021'
    },
    { 
      title: "Cangkangsawit ID", 
      desc: "Palm shells tender app where tenderer and bidder can find a relate product of palm shell", 
      img: "blog3.jpeg",
      createdDate: '27/03/2021'
    },
    { 
      title: "Seindo Travel Admin Dashboard", 
      desc: "Content Management System of seindo travel website", 
      img: "blog1.jpeg",
      createdDate: '22/02/2021'
    },
    { 
      title: "Flowently Admin Dashboard", 
      desc: "Content Management System of booking.flowently.com", 
      img: "blog2.jpeg",
      createdDate: '02/03/2021'
    },
    { 
      title: "Cangkangsawit ID Dashboard", 
      desc: "Admin dashboard of tender.cangkangsawit.id",
      img: "blog3.jpeg",
      createdDate: '27/03/2021'
    },
  ];

  const render_projects = projects.map((item, idx) => {
    const pathname = item.name.toLowerCase().split(' ').join('-');

    return (
      <ProjectCard 
        key={`project-${idx}`}
        project={item}
        pathname={pathname}
      />
    );
  });

  return (
    <div className='my-100 px-3'>
      <div className="row">
        <div className="col-lg-3">
          <div className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: "100px"}}>
            <h3 className='font-w700 ls-min fs-24'>Previous projects</h3>
            <h6 className="font-weight-normal fs-16" style={{lineHeight: 1.5}}>
              Check out website applications I made using ReactJS, Node.js and other technologies.
            </h6>
            <Link href='/project'>
              <div className="btn border-0 text-black fs-18 btn-round gradient-blue letter-spacing-0 hover-2x mt-3 w-100">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-w500 fs-16">See all projects</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {render_projects}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;