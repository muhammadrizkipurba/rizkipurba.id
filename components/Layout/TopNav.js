import React from 'react'
import Link from 'next/link'

const TopNav = () => {
  return (
    <div>
      <Link href='/'>
        Home
      </Link>
      <Link href='/about-me'>
        About me
      </Link>
      <Link href='/portfolio'>
        Portfolios
      </Link>
      <Link href='/blog'>
        Blog
      </Link>
      <Link href='/contact'>
        Contact
      </Link>
    </div>
  )
}

export default TopNav
