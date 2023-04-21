// import { event } from "jquery";
import React, { Component } from "react";

export default class Contact extends Component {
  // constructor() {
  //   super();

  state = {
    name: "",
    email: "",
    description: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };
  // }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I will contact you soon!`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Please try again later :(",
        submitMessageTextColor: "text-danger",
      });
    }
  };

  render() {
    const { submitMessageTextColor, submitMessage } = this.state;
    return (
      <>
        <div className="container my-5">
          <h1 className="font-weight-light text-cener py-5">
            <span className="text-info">Thank you!</span> for your interest
          </h1>
          <div className="row justify-content-center">
            <div className="col-11 col-lg-5">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    name="name"
                    className="form-control"
                    id="name"
                    onChange={this.onChange}
                    placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address*</label>
                  <input
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.onChange}
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Tell me about your Project*
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="description"
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark float-right"
                  style={{ backgroundColor: "black" }}
                >
                  Let's talk business
                </button>
              </form>
            </div>
          </div>
          <div className="py-5 mx-2 text-center">
            <h5 className={submitMessageTextColor}> {submitMessage}</h5>
          </div>
        </div>
      </>
    );
  }
}
