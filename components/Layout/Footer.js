import React from "react";
import Link from "next/link";

const Footer = () => {
  const social_account = [
    {
      name: "facebook",
      icon_name: "fa-facebook-square",
      link: "https://facebook.com/muhammadrizkipurba",
    },
    {
      name: "instagram",
      icon_name: "fa-instagram",
      link: "https://instagram.com/muhammadrizkipurba",
    },
    {
      name: "github",
      icon_name: "fa-github",
      link: "https://github.com/muhammadrizkipurba",
    },
    {
      name: "linkedin",
      icon_name: "fa-linkedin",
      link: "https://www.linkedin.com/in/muhammadrizkipurba/",
    },
  ];

  const social_render = social_account.map((item, idx) => (
    <li className="nav-item" key={`social-footer-${idx}`}>
      <a
        className={`nav-link text-link-blue ${idx === 0 ? "pl-0" : "pe-1"}`}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={`fa ${item.icon_name} text-lg fs-20 opacity-8`}
          aria-hidden="true"
        ></i>
      </a>
    </li>
  ));

  return (
    <div>
      <footer className="footer pt-5 mt-5">
        <hr className="horizontal dark mb-5" />
        <div className="container">
          <div className="row">
            {/* QUOTE */}
            <div className="col-lg-4 mb-4 ms-auto">
              <div>
                <h5 className="fs-20 text-gradient-1 ls-min font-w800">
                  RizkiDev
                </h5>
              </div>
              <div className="mt-2">
                <p className="fs-16">
                  You might think that Web Developers are not an artists, but
                  that is an extremely creative profession. It's Logic Based
                  Creativity.
                </p>
              </div>
              <div className="pt-0">
                <h6 className="mt-3 mb-0 fs-16 text-gradient-1 font-w600">
                  Find me
                </h6>
                <ul className="d-flex flex-row ms-n3 nav">{social_render}</ul>
              </div>
            </div>

            {/* Resources */}
            <div className="col-6 col-md-6 col-lg-2 mb-4">
              <div>
                <h6 className="text-gradient-1 fs-16 font-w600">Resources</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link text-link-blue px-0 fs-16 text-black"
                      href="https://fonts.google.com/"
                      target="_blank"
                    >
                      Fonts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-link-blue px-0 fs-16 text-black"
                      href="https://iradesign.io/"
                      target="_blank"
                    >
                      Illustrations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-link-blue px-0 fs-16 text-black"
                      href="https://fontawesome.com/"
                      target="_blank"
                    >
                      Icons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-link-blue px-0 fs-16 text-black"
                      href="https://unsplash.com/"
                      target="_blank"
                    >
                      Images
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Explore */}
            <div className="col-6 col-md-6 col-lg-3 mb-4 me-auto">
              <div>
                <h6 className="text-gradient-1 fs-16 font-w600">Others</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <Link href="/terms-and-conditions">
                      <p className="nav-link cursor-pointer text-link-blue px-0 fs-16 text-black mb-0">
                        Terms & Conditions
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/privacy-policy">
                      <p className="nav-link cursor-pointer text-link-blue px-0 fs-16 text-black mb-0">
                        Privacy policy
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sitemap">
                      <p className="nav-link cursor-pointer text-link-blue px-0 fs-16 text-black mb-0">
                        Sitemap
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="col-12 col-lg-3 mb-4">
              <div className="">
                <h6 className="text-gradient-1 fs-16 font-w600">
                  Get in touch
                </h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <p className="nav-link cursor-default px-0 mb-0 fs-16">
                      <i className="fa fa-map-marker fs-14 mr-2"></i>
                      Bali, Indonesia.
                    </p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link cursor-default px-0 mb-0 fs-16">
                      <i className="fa fa-envelope-o fs-12 mr-2"></i>
                      rizki@whello.id
                    </p>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://api.whatsapp.com/send/?phone=6282167472511"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="nav-link cursor-default px-0 mb-0 fs-16"
                    >
                      <img
                        src="/assets/images/whatsapp.png"
                        alt="+62-82167472511"
                        width={"150"}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="horizontal dark mb-0 mt-4" />
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <p className="my-4 text-sm">
              All rights reserved. Copyright ©{new Date().getFullYear()}{" "}
              <a
                href="https://www.rizkipurba.id"
                className="ls-min fs-14 text-black"
                target="_blank"
              >
                Muhammad Rizki Purba
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
