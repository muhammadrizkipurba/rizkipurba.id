import React from 'react'
import CustomHead from '../components/Reusable/CustomHead'
import BaseLayout from '../components/Layout/BaseLayout'
import { DOMAIN } from '../utils'
import AboutHeader from '../components/About/AboutHeader'
import ProjectCard from '../components/Home/ProjectCard'

const Portfolio = ({ projects }) => {
  
  const render_projects = projects.map((project) => {
    const pathname = project.name.toLowerCase().split(' ').join('-');

    return (
      <ProjectCard
        key={project._id}
        wrapperClassName='col-12 col-md-6 col-lg-4 mb-4'
        project={project}
        pathname={pathname}
      />
    )
  });
  
  return (
    <div className=''>
      <CustomHead
        title='Portfolio projects | Muhammad Rizki Purba'
        description="Portfolio projects of Muhammad Rizki Purba"
        canonicalURL={`${DOMAIN}/project`}
      />

      <BaseLayout 
        withHero={true} 
        page="projects"
        heroImage="/assets/images/about.jpeg"
      >
        <div className='container'>
          <div className='row'>
            {projects ? render_projects : null}
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Portfolio

export const getServerSideProps = async() => {
  const res = await fetch(`https://api.rizkipurba.id/api/project/all`, {
    method: "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  const respJSON = await res.json();

  return {
    props: {
      projects: respJSON?.message?.data
    }
  };
};