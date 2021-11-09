import React, { useEffect, useState } from "react";
import Link from "next/link";

import BaseLayout from "../components/Layout/BaseLayout";
import DisplayLottie from "../components/Lotties/DisplayLottie";
import CustomHead from "../components/Reusable/CustomHead";
import webdevJSON from "../public/lottie/webdev.json";
import buildJSON from "../public/lottie/build.json";
import ServiceSection from "../components/Home/ServiceSection";
import GetInTouch from "../components/Home/GetInTouch";
import ClientSection from "../components/Home/ClientSection";
import ShortAboutMe from "../components/Home/ShortAboutMe";
// import BlogSection from "../components/Home/BlogSection";
import ProjectSection from "../components/Home/ProjectSection";
import ExperienceSection from "../components/Home/ExperienceSection";
import { DOMAIN } from "../utils";

export default function Home({ getProjectResp }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (getProjectResp && getProjectResp.status === 200) {
      setProjects(getProjectResp.message.data);
    }
  }, [getProjectResp]);

  return (
    <div>
      <CustomHead
        title="Muhammad Rizki Purba | Web developer"
        description="Portfolio website of Muhammad Rizki Purba"
        canonicalURL={`${DOMAIN}/`}
      />
      <BaseLayout withHero={true} page="home">
        <main className="px-3">
          <div className="container">
            <ServiceSection />
          </div>

          {/* SHORT STORY ABOUT ME */}
          <ShortAboutMe />

          {/* CLIENTS SECTION */}
          <div className="container">
            <ClientSection />
          </div>

          {/* PROJECTS */}
          <div className="container">
            <ProjectSection projects={projects} />
          </div>


          {/* TOOLS */}
          <div className="container">
            <ExperienceSection />
          </div>

          {/* BLOGS */}
          {/* <div className="container">
            <BlogSection />
          </div> */}

          {/* GET IN TOUCH */}
          <div className="container">
            <GetInTouch />
          </div>
        </main>
      </BaseLayout>
    </div>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch(`${API_URL}/project/all`);
  const res = await fetch(`https://rizkipurba.id/api/project/all`);

  const resJSON = await res.json();

  return {
    props: {
      getProjectResp: resJSON,
    },
  };
};
