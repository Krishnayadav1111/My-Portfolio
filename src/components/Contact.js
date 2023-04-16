import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container my-5">
          <h1 className="font-weight-light text-cener py-5">
            <span className="text-info">Thank you!</span> for your interest
          </h1>
          <div className="row justify-content-center">
            <div className="col-11 col-lg-5">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address*</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">
                    Tell me about your Project*
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
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
          <div className="py-5 mx-2 text-center">{}</div>
        </div>
      </>
    );
  }
}
