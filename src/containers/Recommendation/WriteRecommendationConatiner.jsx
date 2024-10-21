import { Consumer } from "helpers/context";
import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class WriteRecommendationConatiner extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommendationMessage: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (handler, event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. for the recommendation! I really appricate`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Please try again later :(",
        submitMessageTextColor: "text-danger",
      });
    }

    const newRecommendation = {
      id: uuid(),
      name: this.state.name,
      company: this.state.company,
      designation: this.state.designation,
      message: this.state.recommendationMessage,
    };
    handler("ADD_RECOMMENDATION", newRecommendation);
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { submitMessageTextColor, submitMessage } = this.state;
          const { handler } = value;
          return (
            <>
              <div className="container my-5">
                <h1 className="font-weight-light text-center py-5">
                  <span className="text-info">Thank you!</span> for your taking
                  your time.
                </h1>
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-5">
                    <form onSubmit={this.onSubmit.bind(this, handler)}>
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
                        <label htmlFor="exampleInputEmail1">
                          Email address*
                        </label>
                        <input
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={this.onChange}
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company/Institution*</label>
                        <input
                          name="company"
                          className="form-control"
                          id="company"
                          onChange={this.onChange}
                          placeholder="Company/Institutione"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="designation">Designation*</label>
                        <input
                          name="designation"
                          className="form-control"
                          id="designation"
                          onChange={this.onChange}
                          placeholder="Designation"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Tell me about your Project*
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          name="recommendationMessage"
                          onChange={this.onChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark float-right"
                        style={{ backgroundColor: "pink" }}
                      >
                        Lot's of Love!
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
        }}
      </Consumer>
    );
  }
}

export default WriteRecommendationConatiner;
