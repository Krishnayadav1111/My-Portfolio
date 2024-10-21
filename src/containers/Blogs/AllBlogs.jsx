import React from "react";

import { Consumer } from "helpers/context";
import BlogCards from "components/common/BlogCards";

function AllBlogs() {
  return (
    <Consumer>
      {(value) => {
        const { Blogs } = value;
        return (
          <>
            <div className="container text-center my-5">
              <h1 className="font-weight-light py-1">
                All my <span className="text-info">Blogs</span>
              </h1>
              <div className="row my-5 pt-3">
                {Blogs.map((Blog) => (
                  <div key={Blog.id} className="col-12 col-md-6 py-3">
                    <BlogCards
                      title1={Blog.title1}
                      excerpt1={Blog.excerpt1}
                      imageUrl1={Blog.imageUrl1}
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

export default AllBlogs;
