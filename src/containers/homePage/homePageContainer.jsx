import React from "react";
import Title from "./Title";
import ProjectSection from "containers/Project/ProjectSection";
import RecommendationSection from "containers/Recommendation/RecommendationSection";
import SkillSection from "./SkillSection";
import AboutMeContainer from "containers/AboutMe/AboutMeContainer";
import BlogsSection from "containers/Blogs/BlogsSection";

function HomePageContainer() {
  return (
    <div>
      <Title
        name="Krishna Yadav"
        leadText="I am a frontend Developer from India"
      />
      <RecommendationSection />
      <SkillSection />
      <ProjectSection />
      <AboutMeContainer />
      <BlogsSection />
    </div>
  );
}

export default HomePageContainer;
