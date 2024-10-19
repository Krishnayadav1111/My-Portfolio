import React, { Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

class Projectpage extends Component {
  state = {
    imageUrl: "",
    title: "",
    body: "",
  };
  async componentDidMount() {
    const response = await axios.get(`http://127.0.0.1:9000/api/projects/${this.props.match.params.id}`);
    const isSuccessful = response.data.isSuccessful;
    if (isSuccessful) {
        this.setState({
            imageUrl: response.data.result.imageUrl,
            title: response.data.result.title,
            body: response.data.result.body,
        });
    }
}

  render() {
    // const { projects } = value;
    // const id = this.props.match.params.id;
    // const project = projects.filter((project) => project.id === id)[0];
    // const { imageUrl, title, body } = project;
    // console.log(project);
    const { imageUrl, title, body } = this.state;
    return (
      <>
        <div className="container py-5 my-5 markdown">
          <div className="justify-content-center">
            <img src={imageUrl} alt={title} className=" w-100" />
          </div>
          <h1 className="font-weight-light text-center my-5">{title}</h1>
          <ReactMarkdown source={body} />
        </div>
      </>
    );
  }
}

export default Projectpage;
