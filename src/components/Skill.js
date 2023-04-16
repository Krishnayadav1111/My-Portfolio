import React from "react";
import { v4 as uuid } from "uuid";

function Skill(props) {
  let starsList = [];
  const { name, imageUrl2, starsTotal, starsActive } = props.skill;
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starsList.push(
        <span key={uuid()} className="text-info">
          ★
        </span>
      );
    } else {
      starsList.push(<span key={uuid()}>★</span>);
    }
  }
  return (
    <>
      <div>
        <img
          src={imageUrl2}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <div>{starsList}</div>
      </div>
    </>
  );
}

export default Skill;
