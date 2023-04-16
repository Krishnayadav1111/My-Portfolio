import React from "react";
import html from "../asset/html.png";
import css from "../asset/css.png";
import javascript from "../asset/javascript.png";
import bootstrap from "../asset/bootstrap.jpg";
import React1 from "../asset/React1.png";
import mysql from "../asset/mysql.png";
import python from "../asset/python.png";
import Flask1 from "../asset/Flask1.png";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";

function SkillSection() {
  const Skills = [
    {
      id: 1,
      name: "HTML5",
      imageUrl2: html,
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 2,
      name: "CSS",
      imageUrl2: css,
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 3,
      name: "Js",
      imageUrl2: javascript,
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 4,
      name: "Bootstrap",
      imageUrl2: bootstrap,
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 5,
      name: "React",
      imageUrl2: React1,
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 6,
      name: "MySQL",
      imageUrl2: mysql,
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 7,
      name: "Python",
      imageUrl2: python,
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 8,
      name: "Flask",
      imageUrl2: Flask1,
      starsTotal: 3,
      starsActive: 1,
    },
  ];
  const finalSkillRow = [];
  for (let i = 0; i < 2; i++) {
    let skillRow = Skills.slice(i * 4, (i + 1) * 4);
    finalSkillRow.push(
      <div key={uuid()} className="d-flex justify-content-around py-3">
        {skillRow.map((skill) => (
          <Skill key={uuid()} skill={skill} />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="bg-light w-100">
        <div className="container text-center py-5">
          <h1 className="font-weight-light">
            <span className="text-info">Technology</span> stack
          </h1>
          <div className="lead pb-5">
            I design, develop and deliver with these weapons
          </div>
          {finalSkillRow}
        </div>
      </div>
    </>
  );
}

export default SkillSection;
