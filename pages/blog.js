import React from "react";
import CustomHead from "../components/Reusable/CustomHead";
import BaseLayout from "../components/Layout/BaseLayout";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <CustomHead
        title="Blog | Muhammad Rizki Purba"
        description="This is some articles about web and mobile developer to help you to learn about web and mobile development"
      >
        <link rel="canonical" href="https://rizkipurba.id/blog" />
        <meta property="og:url" content="https://rizkipurba.id/blog" />
      </CustomHead>

      <BaseLayout>
        <div className="main">
          <h1>Blog page</h1>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Blog;