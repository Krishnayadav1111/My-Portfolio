import React from "react";
import Title from "./Title";
import RecommendationSection from "./RecommendationSection";
import SkillSection from "./SkillSection";
import Aboutme from "./Aboutme";
import BlogSection from "./BlogSection";
function HomePage() {
  return (
    <div>
      <Title
        name="Krishna Yadav"
        leadText="I am a frontend Developer from India"
      />
      <RecommendationSection />
      <SkillSection />
      <Aboutme />
      <BlogSection />
    </div>
  );
}

export default HomePage;
