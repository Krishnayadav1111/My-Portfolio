import React from "react";
import krishna from "../asset/krishna.png";

function Title(props) {
  const { name, leadText } = props;

  return (
    <div>
      <div className="container">
        <div className="row text-center align-items-center my-5">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid rounded-circle my-3 w-75"
              src={krishna}
              alt="Krishna"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="font-weight-light" style={{ fontSize: "50px" }}>
              Hi,I am <span className="text-info">{name}</span>
            </div>
            <h4 className="font-weight-light">{leadText}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

Title.defaultProps = {
  name: "Krishna Yadav",
  loadText: "I'm a freelancer from India",
};

export default Title;
