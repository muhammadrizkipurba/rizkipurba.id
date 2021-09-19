import React from 'react'
import Footer from './Footer'
import TopNav from './TopNav'

const BaseLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
