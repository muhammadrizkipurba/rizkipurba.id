import React from "react";
import CustomHead from "../components/Reusable/CustomHead";
import BaseLayout from "../components/Layout/BaseLayout";
import AboutHeader from "../components/About/AboutHeader";
import InterestAndHobbies from "../components/About/InterestAndHobbies";
import AboutMe from "../components/About/AboutMe";
import PersonalInfo from "../components/About/PersonalInfo";
import WorkExperienceTimeline from "../components/About/WorkExperienceTimeline";
import EducationTimeline from "../components/About/EducationTimeline";
import ContactMe from "../components/About/ContactMe";
import MyProject from "../components/About/MyProject";
import DOMAIN from "../utils";

const AboutPage = () => {
  return (
    <div>
      <CustomHead
        title="About me | Muhammad Rizki Purba"
        description="My name is Muhammad Rizki Purba and I am currently working as a React developer. "
        canonicalURL={`${DOMAIN}/about-me`}
      />

      <BaseLayout>
        <div className="container" style={{ padding: "0 15px" }}>
          <AboutHeader />
          <div className="row">
            <div className="col-xl-8">
              <div className="card-body pl-0">
                <AboutMe />
                <PersonalInfo />
                <WorkExperienceTimeline />
                <EducationTimeline />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row position-sticky">
                <div className="col-12">
                  <div className="card card-body">
                    <ContactMe />
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-body">
                    <InterestAndHobbies />
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-body">
                    <MyProject />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default AboutPage;
