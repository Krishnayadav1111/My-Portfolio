import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div
          className="container-fluid text-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="pt-5">
            <h2 className="text-light">Interested in working with me?</h2>
            <button className="btn btn-outline-light btn-lg">Let's talk</button>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 py-3">
              <h5 className="text-info">More Links</h5>
              <a href="/" className="text-light d-block">
                Blogs
              </a>
              <a href="/" className="text-light d-block">
                Home
              </a>
              <a href="/" className="text-light d-block">
                Contact me
              </a>
              <a href="/" className="text-light d-block">
                Write a recommendation
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <div className="col-12 col-md-4 text-light text-justify py-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt commodi nostrum voluptatum eligendi quisquam,
                blanditiis, dignissimos tempora aut distinctio error quibusdam
                dolores nisi consectetur minus. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quibusdam, exercitationem
                repudiandae ipsa repellendus nobis voluptatem magni rem dicta
                voluptatum, quas distinctio dignissimos explicabo tenetur? Quasi
                ex officia nostrum quo suscipit.
              </p>
            </div>
            <div className="col-12 col-md-4 py-3">
              <h5 className="text-info">Social</h5>
              <a href="/">
                <i className="fa-brands fa-linkedin text-light fa-lg"></i>
              </a>
              <br />
              <a href="/">
                <i className="fa-brands fa-github text-light fa-lg"></i>
              </a>
              <br />
              <a href="/">
                <i className="fa-solid fa-envelope text-light fa-lg"></i>
              </a>
              <br />
              <a href="/">
                <i className="fa-brands fa-facebook text-light fa-lg"></i>
              </a>
            </div>
          </div>

          <div className="text-muted py-3">
            <p>Copyright © Krishna yadav</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
