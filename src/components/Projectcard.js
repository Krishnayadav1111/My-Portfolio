import React from "react";

function Projectcard(props) {
  const { title, excerpt, imageUrl } = props;
  return (
    <>
      <div className="card shadow h-100">
        <img className="card-img-top h-60" src={imageUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <a href="/" className="stretched-link"></a>
        </div>
      </div>
    </>
  );
}

export default Projectcard;
