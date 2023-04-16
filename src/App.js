import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Aboutme from "./components/Aboutme.js";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import SkillSection from "./components/SkillSection";
import RecommendationSection from "./components/RecommendationSection";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Title
        name="Krishna Yadav"
        leadText="I am Frontend Developer from India"
      />
      <RecommendationSection />
      <SkillSection />
      <ProjectSection />
      <Aboutme />
      <BlogSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
