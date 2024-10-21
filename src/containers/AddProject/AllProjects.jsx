import React from "react";

import { Consumer } from "helpers/context";
import Projectcard from "components/common/Projectcard";

function AllProjects() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <>
            <div className="container text-center my-5">
              <h1 className="font-weight-light py-1">
                All my <span className="text-info">Projects</span>
              </h1>
              <div className="row my-5 pt-3">
                {projects.map((project) => (
                  <div key={project.id} className="col-12 col-md-6 py-3">
                    <Projectcard
                      title={project.title}
                      excerpt={project.excerpt}
                      imageUrl={project.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      }}
    </Consumer>
  );
}

export default AllProjects;
