import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BaseLayout from '../../../components/Layout/BaseLayout';
import CustomHead from '../../../components/Reusable/CustomHead';
import { DOMAIN } from '../../../utils';

const ProjectDetails = ({ project }) => {
  const router = useRouter();

  const imageLoader = ({src}) => {
    return src;
  };
  
  if(!project) return null;
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
          <div className='px-15px'>
            <Image
              loader={imageLoader}
              src={project.mockup_img}
              alt={project.name}
              width={889}
              height={500}
            />
            <h1 className='text-capitalize'>{project.title}</h1>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default ProjectDetails;

export const getStaticProps = async(context) => {
  const { slug } = context.params;
  const res = await fetch(`https://rizkipurba.id/api/project/single`, {
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

  const respJSON = await res.json();

  return {
    props: {
      project: respJSON?.message?.data
    }
  };
};

export const getStaticPaths = async() => {
  const res = await fetch(`https://rizkipurba.id/api/project/all`, {
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
