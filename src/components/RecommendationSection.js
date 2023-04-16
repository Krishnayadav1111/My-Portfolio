import React from "react";
import RecommendationCard from "./RecommendationCard";
import { v4 as uuid } from "uuid";

function RecommendationSection() {
  const Recommendations = [
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
  ];
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
          {Recommendations.map((recommendation) => (
            <RecommendationCard key={uuid()} recommendation={recommendation} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RecommendationSection;
