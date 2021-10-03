import React from "react";
import Link from "next/link";

const BlogSection = () => {
  
  // Get 3 newest blogs
  const blogs = [
    { 
      title: "Where does it come from?", 
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
      img: "blog1.jpeg",
      createdDate: '22/02/2021'
    },
    { 
      title: "Where does it come from?", 
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
      img: "blog2.jpeg",
      createdDate: '02/03/2021'
    },
    { 
      title: "Where does it come from?", 
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
      img: "blog3.jpeg",
      createdDate: '27/03/2021'
    }
  ];

  const render_blogs = blogs.map((item, idx) => {
    
    const col_grid = idx === 2 ? 'col-md-12' : idx === 1 ? 'col-md-7' : 'col-md-5';
    
    return (
      <div className={`${col_grid} mt-md-0 sm-mb-25`} key={`blog-${idx}`}>
        <a href="./sections/page-sections/hero-sections.html">
          <div className="card shadow-lg move-on-hover min-height-160 min-height-160 overflow-hidden">
            <img style={{maxHeight: idx === 2 ? 'auto' : 300}} src={`/assets/images/${item.img}`} alt=""/>
            <div className="p-4">
              <h6 className="font-w600 fs-16">{item.title}</h6>
              <p className="mb-0 text-sc-black" style={{lineHeight: 1.5}}>{item.desc}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className='my-75 sm-px-0'>
      <div className="row flex-column-reverse-sm">
        <div className="col-lg-9">
          <div className="row">
            {render_blogs}
          </div>
        </div>
        <div className="col-lg-3 sm-mb-25">
          <div className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: "100px"}}>
            <h3 className='font-w700 ls-min fs-24'>What's on my mind</h3>
            <h6 className="font-weight-normal fs-16" style={{lineHeight: 1.5}}>Get insights into Web and Mobile app development from my blogs.</h6>
            <Link href='/blog'>
              <div className="btn border-0 text-black fs-18 btn-round gradient-blue letter-spacing-0 hover-2x mt-3 w-100">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-w500 fs-16">Read more blogs</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
