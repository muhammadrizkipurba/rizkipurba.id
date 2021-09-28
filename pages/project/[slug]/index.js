import React, { useEffect, useState } from 'react'
import BaseLayout from '../../../components/Layout/BaseLayout';
import CustomHead from '../../../components/Reusable/CustomHead';

const ProjectDetails = ({ getProjectRes }) => {
  
  const [project, setProject] = useState(null);

  useEffect(() => {
    if(getProjectRes && getProjectRes.status === 200) {
      setProject(getProjectRes.message.data)
    };
  }, [getProjectRes]);

  console.log(project)

  if(!project) return null;
  
  return (
    <div>
      <CustomHead
        title="Muhammad Rizki Purba | Seindo Travel Project"
        description="Portfolio website of Muhammad Rizki Purba"
      >
        <link rel="canonical" href="https://rizkipurba.id/project/seindo-travel" />
        <meta property="og:url" content="https://rizkipurba.id/seindo-travel" />
      </CustomHead>

      <BaseLayout 
        withHero={false} 
        page="project-details"
      >
        <div className='safe-area-view'></div>
        <div className='container my-50'>
          <div className='px-15px'>
            <h1>Project details page</h1>
          </div>
        </div>
      </BaseLayout>
    </div>
  )
}

export const getServerSideProps = async({params}) => {
  const project_name = params.slug.split('-').join(' ');
  
  const res = await fetch(`https://rizkipurba.id/api/project/single`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      name: project_name
    })
  });

  const respJSON = await res.json();

  return {
    props: {
      getProjectRes: respJSON
    }
  };
};

export default ProjectDetails;
