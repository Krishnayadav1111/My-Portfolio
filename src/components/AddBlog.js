import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";

class AddBlog extends Component {
  state = {
    imageUrl1: "",
    title1: "",
    excerpt1: "",
    body1: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //   for storing th data of SimpleMDE?
  //   onBodyChange = (value) => {
  //     this.setState({
  //       body1: value,
  //     });
  //   };

  onSubmit = (handler, event) => {
    event.preventDefault();
    let isSuccessful = true;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Blog publish sucessfully`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Publish failed :(",
        submitMessageTextColor: "text-danger",
      });
    }

    const newBlog = {
      id: uuid(),
      imageUrl1: this.state.imageUrl1,
      title1: this.state.title1,
      excerpt1: this.state.excerpt1,
      body1: this.state.body1,
    };

    handler("ADD_BLOG", newBlog);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl1,
            title1,
            body1,
            submitMessageTextColor,
            submitMessage,
          } = this.state;
          const { handler } = value;
          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-center my-5 font-weight-light">
                Add <span className="text-info">Blog</span>
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl1">Featured Image Url* </label>
                      <input
                        name="imageUrl1"
                        className="form-control"
                        id="imageUrl1"
                        onChange={this.onChange}
                        placeholder="ImageUrl"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title1">Title*</label>
                      <input
                        type="text"
                        name="title1"
                        className="form-control"
                        id="title1"
                        onChange={this.onChange}
                        placeholder="Title"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="excerpt1">Excerpt*</label>
                      <input
                        className="form-control"
                        id="excerpt1"
                        name="excerpt1"
                        onChange={this.onChange}
                        required
                      ></input>
                    </div>
                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block my-5"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                  </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={imageUrl1} alt={title1} />
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {title1}
                  </h1>
                  <ReactMarkdown children={body1} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddBlog;
