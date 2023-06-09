import React from "react";
import { Link } from "react-router-dom";

function Projectcard(props) {
  const { id, title, excerpt, imageUrl } = props;
  return (
    <>
      <div className="card shadow h-100">
        <img className="card-img-top h-60" src={imageUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`/project/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    </>
  );
}

export default Projectcard;
