import React from 'react'
import CustomHead from '../components/Reusable/CustomHead'
import BaseLayout from '../components/Layout/BaseLayout'

const Portfolio = () => {
  return (
    <div className=''>
      <CustomHead
        title='Portfolio projects | Muhammad Rizki Purba'
        description="Portfolio projects of Muhammad Rizki Purba"
      >
        <link rel="canonical" href="https://rizkipurba.id/projects" />
        <meta property="og:url" content="https://rizkipurba.id/projects" />
      </CustomHead>

      <BaseLayout>
        <div className='main'>
          <h1>Portfolio page</h1>
        </div>
      </BaseLayout>
    </div>
  )
}

export default Portfolio
