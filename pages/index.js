import React from "react";
import Link from "next/link";

import BaseLayout from "../components/Layout/BaseLayout";
import DisplayLottie from "../components/Lotties/DisplayLottie";
import CustomHead from "../components/Reusable/CustomHead";
import webdevJSON from "../public/lottie/webdev.json";
import buildJSON from "../public/lottie/build.json";
import ServiceSection from "../components/Home/ServiceSection";
import GetInTouch from "../components/Home/GetInTouch";
import ClientSection from "../components/Home/ClientSection";

export default function Home() {
  return (
    <div>
      <CustomHead
        title="Muhammad Rizki Purba | Web developer"
        description="Portfolio website of Muhammad Rizki Purba"
      >
        <link rel="canonical" href="https://rizkipurba.id/" />
        <meta property="og:url" content="https://rizkipurba.id/" />
      </CustomHead>

      <BaseLayout withHero={true} page="home">
        <main className="main">
          <div className='container'>
            <div className="my-xl">
              <ServiceSection />
            </div>
          </div>

          {/* SHORT STORY ABOUT ME */}
          

          {/* CLIENTS SECTION */}
          <div className="container">
            <ClientSection />
          </div>

          {/* GET IN TOUCH */}
          <div className="container">
            <GetInTouch />
          </div>
        </main>
      </BaseLayout>
    </div>
  );
}
