import React from "react";

import BlogCards from "./BlogCards";
import { Consumer } from "./context";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <Consumer>
      {(value) => {
        const { Blogs } = value;
        return (
          <>
            <div className="container text-center my-5">
              <h1 className="font-weight-light">
                My <span className="text-info">Blogs</span>
              </h1>
              <div className="lead">
                I build products. Just like this website
              </div>
              <div className="row my-5 pt-3">
                {Blogs.slice(0, 3).map((Blog) => (
                  <div key={Blog.id} className="col-12 col-md-4 my-2">
                    <BlogCards
                      title1={Blog.title1}
                      excerpt1={Blog.excerpt1}
                      imageUrl1={Blog.imageUrl1}
                      id={Blog.id}
                    />
                  </div>
                ))}
              </div>
              <div className="my-5">
                <Link to="/allblogs" className="text-dark text-right">
                  <h5>
                    See my Blogs
                    <i className="fa-solid fa-arrow-right align-middle"></i>
                  </h5>
                </Link>
              </div>
            </div>
          </>
        );
      }}
    </Consumer>
  );
}

export default BlogSection;
