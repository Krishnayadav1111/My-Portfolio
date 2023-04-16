import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container mt-2">
          <a href="/" className="navbar-brand text-dark font-weight-bold">
            Krishna yadav
          </a>
          <button className="btn btn-outline-info ml-auto">Contact me</button>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapseNav"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse " id="collapseNav">
            <div className="navbar-nav">
              <a
                href="/"
                className="nav-item nav-link text-dark h6 mx-1 my-auto"
              >
                Projects
              </a>
              <a
                href="/"
                className="nav-item nav-link text-dark h6 mx-1 my-auto"
              >
                Blogs
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
