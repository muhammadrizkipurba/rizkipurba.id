import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

const MyProject = () => {

  const [projects, setProjects] = useState([]);

  const getProjects = useCallback(async() => {
    const res = await fetch('https://api.rizkipurba.id/api/project/all');
    const resp = await res.json();
    
    if(resp.status === 200) {
      setProjects(resp.message.data);
    };

  },[]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  
  const render_projects = projects.map((item, idx) => {
    const slug = item.name.toLowerCase();
    
    return (
      <div key={`my-project-${idx}`} className='p-3 d-flex align-items-center rounded mb-3' style={{backgroundColor: '#3aaae70c'}} >
        <div className='mr-4'>
          <img src={`/assets/images/${item.name}.png`} width={50} />
        </div>
        <Link href="/project/[slug]" as={`/project/${slug}`}>
          <div>
            <h4 className='cursor-pointer fs-14 mb-0 font-w600 lh-short'>{item.title}</h4>
            <p className='cursor-pointer text-muted lh-short fs-12 mb-0 ellipsis-vertical-3'>{item.description[0]}</p>
          </div>
        </Link>
      </div>
    )
  });

  return (
    <div>
      <h3 className="font-w600 mb-3 fs-18">Previous projects</h3>
      { render_projects }
    </div>
  );
};

export default MyProject;
