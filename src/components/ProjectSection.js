import React from "react";
import Project1 from "../asset/Project1.jpg";
import project2 from "../asset/project2.jpg";
import Project3 from "../asset/Project3.jpg";
import Projectcard from "./Projectcard.js";

function ProjectSection() {
  const projects = [
    {
      id: "1",
      title: "Project 1",
      imageUrl: Project1,
      excerpt: "This is my project about...",
    },
    {
      id: "2",
      title: "Project 2",
      imageUrl: project2,
      excerpt: "This is my project about...",
    },
    {
      id: "3",
      title: "Project 3",
      imageUrl: Project3,
      excerpt: "This is my project about...",
    },
  ];

  return (
    <>
      <div className="container text-center my-5">
        <h1 className="font-weight-light">
          My <span className="text-info">Projects</span>
        </h1>
        <div className="lead">I build products. Just like this website</div>
        <div className="row my-5 pt-3">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-4 my-2">
              <Projectcard
                title={project.title}
                excerpt={project.excerpt}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
        <div className="my-5">
          <a href="/" className="text-dark text-right">
            <h5>
              See my projects
              <i className="fa-solid fa-arrow-right align-middle"></i>
            </h5>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
