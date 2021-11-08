import React from 'react'
import CustomHead from '../components/Reusable/CustomHead'
import BaseLayout from '../components/Layout/BaseLayout'
import { DOMAIN } from '../utils'

const Portfolio = () => {
  return (
    <div className=''>
      <CustomHead
        title='Portfolio projects | Muhammad Rizki Purba'
        description="Portfolio projects of Muhammad Rizki Purba"
        canonicalURL={`${DOMAIN}/project`}
      />

      <BaseLayout>
        <div className='main container'>

        </div>
      </BaseLayout>
    </div>
  )
}

export default Portfolio
