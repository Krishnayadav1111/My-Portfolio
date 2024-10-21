import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class RecommendationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }
  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { name, designation, company, message } = this.props.recommendation;

    const trimmedMessage = message.substr(0, 10);

    return (
      <>
        <div className="col-12 col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">{trimmedMessage}...</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
                {designation} at {company}
              </p>

              <Link
                to="/"
                onClick={this.handleShow}
                className="stretched-link"
              ></Link>
              <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{message}'s </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center font-weight-bold">
                  {name}
                </Modal.Body>
                <Modal.Body className="text-center font-weight-bold">
                  {designation} at {company}
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RecommendationCard;
