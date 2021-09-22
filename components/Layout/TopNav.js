import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const social_account= [
  {name: 'facebook', icon_name: 'fa-facebook-square', link: 'https://facebook.com/muhammadrizkipurba'},
  {name: 'instagram', icon_name: 'fa-instagram', link: 'https://instagram.com/muhammadrizkipurba'},
  {name: 'github', icon_name: 'fa-github', link: 'https://github.com/muhammadrizkipurba'},
  {name: 'linkedin', icon_name: 'fa-linkedin', link: 'https://www.linkedin.com/in/muhammadrizkipurba/'},
];

const TopNav = () => {

  const router = useRouter();

  return (
    <div className='container position-sticky z-index-sticky' style={{backgroundColor: 'transparent', top: 0}}>
        <div className='row'>
          <div className='col-12'>
            <nav 
              className='navbar navbar-expand-lg blur blur-rounded z-index-fixed shadow position-absolute my-3 py-2 px-4 mx-4'
              style={{
                top: 0,
                left: 0,
                right: 0
              }}
            >
              {/* LOGO */}
              <a className='navbar-brand'>
                <img src='/logo.png' className='' height={35} />
              </a>

              <button className="navbar-toggler shadow-none flex-grow-1 text-right ms-md-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              
              {/* NAV LINK */}
              <div id='navigation' className='navbar-collapse w-100 pt-3 pb-2 py-lg-0 collapse'>
                <ul className='flex-grow-1 text-center'>
                  <li className='d-inline-block nav-item mx-3'>
                    <Link href='/'>
                      <span className={`top-nav-link fs-18 ${router.pathname === '/' ? 'active' : ''}`}>Home</span>
                    </Link>
                  </li>
                  <li className='d-inline-block mx-3'>
                    <Link href='/about-me'>
                      <span className={`top-nav-link fs-18 ${router.pathname === '/about-me' ? 'active' : ''}`}>About me</span>
                    </Link>
                  </li>
                  <li className='d-inline-block mx-3'>
                    <Link href='/project'>
                      <span className={`top-nav-link fs-18 ${router.pathname === '/project' ? 'active' : ''}`}>Projects</span>
                    </Link>
                  </li>
                  <li className='d-inline-block mx-3'>
                    <Link href='/blog'>
                      <span className={`top-nav-link fs-18 ${router.pathname === '/blog' ? 'active' : ''}`}>Blog</span>
                    </Link>
                  </li>
                  <li className='d-inline-block mx-3'>
                    <Link href='/contact'>
                      <span className={`top-nav-link fs-18 ${router.pathname === '/contact' ? 'active' : ''}`}>Contact</span>
                    </Link>
                  </li>
                </ul>
                {/* SOCIAL MEDIA ICONS */}
                <div className='d-flex align-items-center'>
                  {social_account.map((item, idx) => (
                    <a key={`social-${idx}`} className='ml-3' href={item.link}>
                      <i className={`fa ${item.icon_name} fs-20 `}></i>
                    </a>
                  ))}
                </div>
              </div>  
            </nav>
          </div>
        </div>
    </div>
  )
}

export default TopNav
