import React from "react";
import { Link } from "react-router-dom";

function BlogCards(props) {
  const { id, title1, excerpt1, imageUrl1 } = props;
  return (
    <>
      <div className="card shadow h-100">
        <img className="card-img-top h-60" src={imageUrl1} alt={title1} />
        <div className="card-body">
          <h4 className="card-title1">{title1}</h4>
          <p className="card-text">{excerpt1}</p>
          <Link to={`/blog/${id}`} className="Stretched-link"></Link>
        </div>
      </div>
    </>
  );
}
export default BlogCards;
