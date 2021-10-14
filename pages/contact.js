import React from 'react'
import CustomHead from '../components/Reusable/CustomHead'
import BaseLayout from '../components/Layout/BaseLayout'

const Contact = () => {
  return (
    <div className=''>
      <CustomHead
        title='Contact | Muhammad Rizki Purba'
        description="Want to know about me or my work? Let's get in touch."
      >
        <link rel="canonical" href="https://rizkipurba.id/contact" />
        <meta property="og:url" content="https://rizkipurba.id/contact" />
      </CustomHead>
      
      <BaseLayout>
        <div className='main'>
          <h1>Contact page</h1>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Contact
