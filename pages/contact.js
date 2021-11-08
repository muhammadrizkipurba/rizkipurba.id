import React from 'react'
import CustomHead from '../components/Reusable/CustomHead'
import BaseLayout from '../components/Layout/BaseLayout'
import { DOMAIN } from '../utils';

const Contact = () => {
  return (
    <div className=''>
      <CustomHead
        title='Contact | Muhammad Rizki Purba'
        description="Want to know about me or my work? Let's get in touch."
        canonicalURL={`${DOMAIN}/contact`}
      />
      
      <BaseLayout>
        <div className='main'>
          <h1>Contact page</h1>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Contact
