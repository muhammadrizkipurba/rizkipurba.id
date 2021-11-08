import React from "react";
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

      <BaseLayout>
        <div className="main">
          <h1>Blog page</h1>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Blog;