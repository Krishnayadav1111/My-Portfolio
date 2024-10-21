import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import WriteRecommendation from "pages/WriteRecommendation";
import AddProject from "pages/AddProject";
import AddBlog from "pages/AddBlog";
import AllProjects from "containers/AddProject/AllProjects";
import AllBlogs from "containers/Blogs/AllBlogs";
import { Provider } from "helpers/context";
import ScrollToTop from "helpers/ScrollToTop";
import NotFound from "helpers/NotFound";
import BlogPage from "containers/Blogs/BlogPage";
import Projects from "pages/Projects";
import ContactUsContainer from "containers/ContactUs/ContactUsContainer";
import LayoutHeader from "components/Layout/LayoutHeader";
import LayoutFooter from "components/Layout/LayoutFooter";

const AppNavigation = () => {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <LayoutHeader />
        <Switch>
          <Route exact path="/">
          <HomePage/>
          </Route>
          <Route exact path="/contact" component={ContactUsContainer} />
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
};

export default AppNavigation;
