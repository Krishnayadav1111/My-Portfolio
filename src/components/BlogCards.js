import React from "react";

function BlogCards(props) {
  const { title1, excerpt1, imageUrl1 } = props;
  return (
    <>
      <div className="card shadow h-100">
        <img className="card-img-top h-60" src={imageUrl1} alt={title1} />
        <div className="card-body">
          <h4 className="card-title1">{title1}</h4>
          <p className="card-text">{excerpt1}</p>

          <a href="/" className="stretched-link">
            {" "}
          </a>
        </div>
      </div>
    </>
  );
}
export default BlogCards;
