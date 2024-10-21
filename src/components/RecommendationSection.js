import React from "react";
import RecommendationCard from "./RecommendationCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../helpers/context";

function RecommendationSection() {
  return (
    <Consumer>
      {(value) => {
        const { Recommendations } = value;
        return (
          <>
            <div className="container-fluid my-5">
              <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                {Recommendations.map((recommendation) => (
                  <RecommendationCard
                    key={uuid()}
                    recommendation={recommendation}
                  />
                ))}
              </div>
            </div>
          </>
        );
      }}
    </Consumer>
  );
}

export default RecommendationSection;
