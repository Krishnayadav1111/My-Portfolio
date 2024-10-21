import React from "react";
import "./App.css";
import LayoutHeader from "./components/layout/LayoutHeader";
import LayoutFooter from "./components/layout/LayoutFooter";
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
import { Provider } from "./helpers/context";
import ProjectSection from "./components/ProjectSection";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import AddBlog from "pages/AddBlog";
import ScrollToTop from "./components/ScrollToTop";
import AddProject from './pages/AddProject';
import Projects from "pages/Projects";



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <LayoutHeader />
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
          <Route exact path="/project/:id" component={Projects} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>

        <LayoutFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
