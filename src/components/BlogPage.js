import React from "react";

function BlogPage(props) {
  return (
    <div>
      <div className="py-5 my-5">
        <h1>Project {props.match.params.id}</h1>
      </div>
    </div>
  );
}

export default BlogPage;
