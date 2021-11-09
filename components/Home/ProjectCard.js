import React from "react";
import Link from "next/link";

const ProjectCard = ({ project, wrapperClassName, pathname }) => {
  return (
    <div className={wrapperClassName ? wrapperClassName : `col-md-6 mt-md-0 mb-5`}>
      <div className="card shadow-lg move-on-hover overflow-hidden h-auto">
        <div
          style={{
            height: 200,
            backgroundImage: `url(${project.banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
      <h6 className="font-w600 fs-16 mb-0 text-capitalize mb-3">
        {project.title}
      </h6>
      <p
        className="mb-0 text-sc-black ellipsis-vertical"
        style={{ lineHeight: 1.5 }}
      >
        {project.description[0]}
      </p>
      <Link href="/project/[slug]" as={`/project/${pathname}`}>
        <div className="mt-3">
          <span className="font-w500 text-gradient-1 fs-16 cursor-pointer">
            Read details
          </span>
          <span className="text-gradient-1 ml-2">&rarr;</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
