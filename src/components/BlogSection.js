import React from "react";
import Blog1 from "../asset/Blog1.jpg";
import Blog2 from "../asset/Blog2.jpg";
import Blog3 from "../asset/Blog3.jpg";
import BlogCards from "./BlogCards";

function BlogSection() {
  const Blogs = [
    {
      id: "1",
      title1: "Blog 1",
      imageUrl1: Blog1,
      excerpt1: "This is my Blog about...",
    },
    {
      id: "2",
      title1: "Blog 2",
      imageUrl1: Blog2,
      excerpt1: "This is my Blog about...",
    },
    {
      id: "3",
      title1: "Blog 3",
      imageUrl1: Blog3,
      excerpt11: "This is my Blog about...",
    },
  ];

  return (
    <>
      <div className="container text-center my-5">
        <h1 className="font-weight-light">
          My <span className="text-info">Blogs</span>
        </h1>
        <div className="lead">I build products. Just like this website</div>
        <div className="row my-5 pt-3">
          {Blogs.map((Blog) => (
            <div key={Blog.id} className="col-12 col-md-4 my-2">
              <BlogCards
                title1={Blog.title1}
                excerpt1={Blog.excerpt1}
                imageUrl1={Blog.imageUrl1}
              />
            </div>
          ))}
        </div>
        <div className="my-5">
          <a href="/" className="text-dark text-right">
            <h5>
              See my Blogs
              <i className="fa-solid fa-arrow-right align-middle"></i>
            </h5>
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
