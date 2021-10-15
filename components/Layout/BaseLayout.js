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
        width={isSmallScreen ? '80%' : '450px'}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        isOpen={isOpenSidebar}
        menuClassName="bg-white"
        burgerButtonClassName='d-none'
        onClose={() => setIsOpenSidebar(!isOpenSidebar)}
        right={true}
      >
        <div className='py-5 text-center'>
          <div className='d-flex align-items-center justify-content-center'>
            <div
              style={{
                backgroundImage: 'url("/assets/images/me-2.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'top center',
                height: 200,
                width: 200,
                borderRadius: '50%'
              }}
            >
            </div>
          </div>
          <h3 className='mb-0 fs-18 font-w600 lh-short mt-4'>Muhammad Rizki Purba</h3>
          <p className='mb-0 fs-14 text-muted'>React developer</p>
        </div>
        <div className='px-3 py-3 fs-18'>
          <Link href="/">
            <p id="home" className="menu-item mb-0 font-w600 text-center">Home</p>
          </Link>
        </div>
        <div className='px-3 py-3 fs-18'>
          <Link href="/about-me">
            <p id="about" className="menu-item mb-0 font-w600 text-center">About</p>
          </Link>
        </div>
        <div className='px-3 py-3 fs-18'>
          <Link href="/project">
            <p className="menu-item mb-0 font-w600 text-center">Projects</p>
          </Link>
        </div>
        <div className='px-3 py-3 fs-18'>
          <Link href="/blog">
            <p className="menu-item mb-0 font-w600 text-center">Blog</p>
          </Link>
        </div>
        <div className='px-3 py-3 fs-18'>
          <Link href="/contact">
            <p id="contact" className="menu-item mb-0 font-w600 text-center">Contact</p>
          </Link> 
        </div>
        <div style={{marginTop: "100px"}}>
          <p className='text-center fs-18 font-w600'>Find me on :</p>
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
