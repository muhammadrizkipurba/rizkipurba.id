import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BaseLayout from '../../../components/Layout/BaseLayout';
import CustomHead from '../../../components/Reusable/CustomHead';
import { DOMAIN } from '../../../utils';

const ProjectDetails = ({ project, other_projects }) => {
  const router = useRouter();

  const imageLoader = ({src, width}) => {
    return `${src}?w=${width}`;
  };
  
  if(!project) return null;

  const desc_render = project.description.map((text, idx) => {
    return (
      <p key={`${project.name}-desc-${idx}`} className="text-left fs-16 lh-2">{text}</p>
    )
  });
  const challange = project.challanges.short_desc;
  const frontend_opening = project.responsibilities.frontend.short_desc;
  const backend_opening = project.responsibilities.backend.short_desc;
  const backend_points_render = project.responsibilities.backend.points.map((item,idx) => (
    <li key={`backend-point-${idx}`} className='text-left fs-16 lh-2'>
      {item}
    </li>
  ));
  const backend_tools_render = project.responsibilities.backend.tools.map((item, idx) => (
    <div key={`tools_backend_${idx}`} className='mt-2 px-2 justify-content-center tools-icon-wrapper'>
      <img alt={item} src={`/assets/icons/web-development/${item}-icon.png`} className='h-50px'/>
    </div>
  ));
  const frontend_points_render = project.responsibilities.frontend.points.map((item,idx) => (
    <li key={`frontend-point-${idx}`} className='text-left fs-16 lh-2'>
      {item}
    </li>
  ));
  const frontend_tools_render = project.responsibilities.frontend.tools.map((item, idx) => (
    <div key={`tools_frontend_${idx}`} className='mt-2 px-2 justify-content-center tools-icon-wrapper'>
      <img alt={item} src={`/assets/icons/web-development/${item}-icon.png`} className='h-50px'/>
    </div>
  ));

  const render_other_projects = other_projects.map(project => {
    const pathname = project.name.toLowerCase().split(' ').join('-');

    return (
      <div key={project._id} className='col-sm-12 col-md-6 col-lg-12 mb-5'>
        <div className="card shadow-lg move-on-hover overflow-hidden h-auto">
          <div
            style={{
              height: 200,
              backgroundImage: `url(${project.banner})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <h3 className="font-w600 fs-18 mb-0 text-capitalize mb-0">
            {project.title}
          </h3>
          <Link href="/project/[slug]" as={`/project/${pathname}`}>
            <a>
              <span className="font-w500 text-gradient-1 fs-16 cursor-pointer">
                Details
              </span>
              <span className="text-gradient-1 ml-2">&rarr;</span>
            </a>
          </Link>
        </div>
        <div className='mt-3'>
          <p
            className="mb-0 text-sc-black ellipsis-vertical"
            style={{ lineHeight: 1.5 }}
          >
            {project.description[0]}
          </p>
        </div>
      </div>
    )
  })
  
  return (
    <div>
      <CustomHead
        title="Muhammad Rizki Purba | Seindo Travel Project"
        description="Portfolio website of Muhammad Rizki Purba"
        canonicalURL={`${DOMAIN}${router.asPath}`}
      />
      <BaseLayout 
        withHero={false} 
        page="project-details"
      >
        <div className='container my-50'>
          <div className='row'>
            <div className='col-md-12 col-lg-8 mb-5'>
              <h1 className='font-weight-bold mb-4 text-capitalize fs-26'>{project.title}</h1>
              <Image
                loader={imageLoader}
                src={project.mockup_img}
                alt={project.name}
                width={889}
                height={500}
                layout="responsive"
                className='rounded'
              />
              <div className='mt-4'>
                { desc_render }
              </div>
              {/* RESPONSIBILITIES */}
              <div>
                <h4 className="text-left fs-20 font-weight-bold mb-3 mt-20">Back-end Development</h4>
                <div className='mb-4'>
                  <p className="text-left fs-16 lh-2 mb-0">
                    Tools dan teknologi yang saya gunakan pada proses back-end development ini, yaitu : 
                  </p>
                  <div className='row mx-auto my-4'>
                    {backend_tools_render}
                  </div>
                </div>
                <p className="text-left fs-16 lh-2 mb-2">{backend_opening}</p>
                <ul className='pl-4 mb-3' style={{listStyleType: 'circle'}}>
                  {backend_points_render}
                </ul>
              </div>
              <div className='mt-4'>
                <h4 className="text-left fs-20 font-weight-bold mb-3 mt-20">Front-end Development</h4>
                <div className='mb-4'>
                  <p className="text-left fs-16 lh-2 mb-0">
                    Tools dan teknologi yang saya gunakan pada proses front-end development ini, yaitu : 
                  </p>
                  <div className='row mx-auto my-4'>
                    {frontend_tools_render}
                  </div>
                </div>
                <p className="text-left fs-16 lh-2 mb-0">{frontend_opening}</p>
                <ul className='pl-4' style={{listStyleType: 'circle'}}>
                  {frontend_points_render}
                </ul>
              </div>
              {/* CHALLANGES */}
              <div className='mt-4'>
                <h4 className="text-left fs-20 font-weight-bold mb-3 mt-20">Tantangan yang saya dapatkan</h4>
                <p className="text-left fs-16 lh-2 mb-0">{challange}</p>
              </div>
            </div>
            <div className='col-md-12 col-lg-4'>
              <div className='sticky-top' style={{top: 80}}>
                <h2 className='font-weight-bold mb-4'>Another Projects</h2>
                <div className='row'>
                  { other_projects ? render_other_projects : null }
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default ProjectDetails;

export const getStaticProps = async(context) => {
  const { slug } = context.params;
  const singleRes = await fetch(`https://api.rizkipurba.id/api/project/single`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      name: slug
    })
  });

  const allRes = await fetch(`https://api.rizkipurba.id/api/project/all`, {
    method: "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const singleRespJSON = await singleRes.json();
  const allRespJSON = await allRes.json();
  
  let other_projects = [];
  if(allRespJSON.status === 200) {
    other_projects = allRespJSON.message.data.filter(item => item.name !== slug);
  };

  return {
    props: {
      other_projects,
      project: singleRespJSON?.message?.data
    }
  };
};

export const getStaticPaths = async() => {
  const res = await fetch(`https://api.rizkipurba.id/api/project/all`, {
    method: "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  
  const respJSON = await res.json();

  if(respJSON.status === 200) {
    const slugs = await respJSON.message.data.map(item => item.name);
  
    const paths = await slugs.map(slug => ({
      params: { slug }
    }));
  
    return {
      paths,
      fallback: true
    };
  };
  
  return {
    paths: [],
    fallback: true
  };
};
