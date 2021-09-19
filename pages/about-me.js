import React from 'react'
import CustomHead from '../components/Reusable/CustomHead'
import BaseLayout from '../components/Layout/BaseLayout'

const AboutPage = () => {
  return (
    <div className='container mx-auto'>
      <CustomHead
        title='About me | Muhammad Rizki Purba'
        description="My name is Muhammad Rizki Purba and I am currently working as a React developer. "
      >
        <link rel="canonical" href="https://rizkipurba.id/about-me" />
        <meta property="og:url" content="https://rizkipurba.id/about-me" />
      </CustomHead>
      
      <BaseLayout>
        <div className='main'>
          <h1>About page</h1>
        </div>
      </BaseLayout>
    </div>
  )
}

export default AboutPage
