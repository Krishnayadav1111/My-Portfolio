import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projectpage from "./components/Projectpage";
import BlogPage from "./components/BlogPage";
import RecommendationSection from "./components/RecommendationSection";
import SkillSection from "./components/SkillSection";
import Aboutme from "./components/Aboutme";
import Title from "./components/Title";
import BlogSection from "./components/BlogSection";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import WriteRecommendation from "./components/WriteRecommendation";
import NotFound from "./components/NotFound";
// import HomePage from "./components/HomePage";
import AddProject from "./components/AddProject";
import { Provider } from "./components/context";
import ProjectSection from "./components/ProjectSection";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Title
              name="Krishna Yadav"
              leadText="I am a frontend Developer from India"
            />
            <RecommendationSection />
            <SkillSection />
            <ProjectSection />
            <Aboutme />
            <BlogSection />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/write-a-recommendation"
            component={WriteRecommendation}
          />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/Blog/add" component={AddBlog} />
          <Route exact path="/allprojects" component={AllProjects} />
          <Route exact path="/allblogs" component={AllBlogs} />
          <Route exact path="/project/:id" component={Projectpage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
