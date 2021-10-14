import React, { useEffect, useState } from 'react'
import HomeHero from '../HeroContent/HomeHero'
import Footer from './Footer'
import Hero from './Hero'
import TopNav from './TopNav'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import 'react-burger-menu/lib/helpers/baseStyles'

const social_account= [
  {name: 'facebook', icon_name: 'fa-facebook-square', link: 'https://facebook.com/muhammadrizkipurba'},
  {name: 'instagram', icon_name: 'fa-instagram', link: 'https://instagram.com/muhammadrizkipurba'},
  {name: 'github', icon_name: 'fa-github', link: 'https://github.com/muhammadrizkipurba'},
  {name: 'linkedin', icon_name: 'fa-linkedin', link: 'https://www.linkedin.com/in/muhammadrizkipurba/'},
];

const BaseLayout = ({ withHero, heroImage, heroTitle, heroBgColor, page, children }) => {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleChangeSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const getScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenSize);
    getScreenSize();
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);


  return (
    <div className='' id='outer-container'>
      <Menu
        width={isSmallScreen ? '240px' : '350px'}
        // noOverlay
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        isOpen={isOpenSidebar}
        menuClassName="bg-white"
        burgerButtonClassName='d-none'
        onClose={() => setIsOpenSidebar(!isOpenSidebar)}
        right={true}
      >
        <div className='py-5'>{" "}</div>
        <Link href="/">
          <div className='px-3 py-2 fs-16'>
            <p id="home" className="menu-item text-center">Home</p>
          </div>
        </Link>
        <Link href="/about-me">
          <div className='px-3 py-2 fs-16'>
            <p id="about" className="menu-item text-center">About</p>
          </div>
        </Link>
        <Link href="/project">
          <div className='px-3 py-2 fs-16'>
            <p className="menu-item text-center">Projects</p>
          </div>
        </Link>
        <Link href="/blog">
          <div className='px-3 py-2 fs-16'>
            <p className="menu-item text-center">Blog</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className='px-3 py-2 fs-16'>
            <p id="contact" className="menu-item text-center">Contact</p>
          </div>
        </Link> 
        <div style={{marginTop: "100px"}}>
          <p className='text-center fs-16 font-w600'>Find me on :</p>
          <div className='d-flex align-items-center justify-content-center'>
            {social_account.map((item, idx) => (
              <a key={`social-${idx}`} className={idx === 0 ? '' : 'ml-3'} href={item.link}>
                <i className={`fa ${item.icon_name} fs-20 `}></i>
              </a>
            ))}
          </div>
        </div>
      </Menu>
      <div id='page-wrap'>
        <TopNav handleChangeSidebar={handleChangeSidebar} />
        { withHero &&
          <Hero page={page} heroTitle={heroTitle} heroImage={heroImage} heroBgColor={heroBgColor} />
        }
        <div className='container mx-auto'>
          <div className='safe-area-view mb-0 mb-lg-4'></div>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
