import React, { Component } from "react";
import Blog1 from "../asset/Blog1.jpg";
import Blog2 from "../asset/Blog2.jpg";
import Blog3 from "../asset/Blog3.jpg";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          Blogs: [newObject, ...this.state.Blogs],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          Recommendations: [newObject, ...this.state.Recommendations],
        });
        break;
      default:
      //do nothing
    }
  };
  state = {
    handler: this.handler,
    projects: [
      {
        id: 1,
        title: "Project 1",
        imageUrl: require("../asset/Project1.jpg"),
        excerpt: "This is my project about...",
        body: "Body 1",
      },
      {
        id: 2,
        title: "Project 2",
        imageUrl: require("../asset/project2.jpg"),
        excerpt: "This is my project about...",
        body: "Body 2",
      },
      {
        id: 3,
        title: "Project 3",
        imageUrl: require("../asset/Project3.jpg"),
        excerpt: "This is my project about...",
        body: "Body 3",
      },
      {
        id: 4,
        title: "Project 4",
        imageUrl: require("../asset/Project3.jpg"),
        excerpt: "This is my project about...",
        body: "Body 4",
      },
    ],
    Skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl2: require("../asset/html.png"),
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS",
        imageUrl2: require("../asset/css.png"),
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Js",
        imageUrl2: require("../asset/javascript.png"),
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 4,
        name: "Bootstrap",
        imageUrl2: require("../asset/bootstrap.jpg"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "React",
        imageUrl2: require("../asset/React1.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl2: require("../asset/mysql.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl2: require("../asset/python.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl2: require("../asset/Flask1.png"),
        starsTotal: 3,
        starsActive: 1,
      },
    ],
    Recommendations: [
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC company",
        designation: "CEO",
        message: "He is a good engineer",
      },
      {
        id: 2,
        name: "Random guy 1",
        company: "ABC company",
        designation: "Director",
        message: "He is a good Developer",
      },
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC company",
        designation: "Manager",
        message: "He is a good engineer",
      },
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC company",
        designation: "SDE",
        message: "He is a good engineer",
      },
    ],
    Blogs: [
      {
        id: "1",
        title1: "Blog 1",
        imageUrl1: Blog1,
        excerpt1: "This is my Blog about...",
      },
      {
        id: "2",
        title1: "Blog 2",
        imageUrl1: Blog2,
        excerpt1: "This is my Blog about...",
      },
      {
        id: "3",
        title1: "Blog 3",
        imageUrl1: Blog3,
        excerpt1: "This is my Blog about...",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
