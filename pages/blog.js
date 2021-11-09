import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomHead from "../components/Reusable/CustomHead";
import BaseLayout from "../components/Layout/BaseLayout";
import { DOMAIN } from "../utils";

const Blog = () => {
  return (
    <div className="">
      <CustomHead
        title="Blog | Muhammad Rizki Purba"
        description="This is some articles about web and mobile developer to help you to learn about web and mobile development"
        canonicalURL={`${DOMAIN}/blog`}
      />

      <BaseLayout 
        withHero={true}
        page="blog"
      >
        <div className="container">
          <div className='d-flex flex-column align-items-center justify-content-center' style={{minHeight: 500}}>
            <Image 
              src='/assets/images/page-construction.png' 
              alt='under construction'
              height={300}
              width={300}
            />
            <h2 className='fs-25 font-weight-bold'>Ooppss...</h2>
            <p className='mb-0 fs-18'>Sorry, this page is under maintenance</p>
            <Link href='/'>
              <a className='btn gradient-blue text-black fs-16 mt-4'>
                Back to home
              </a>
            </Link>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Blog;