import React, { useEffect } from "react";
import python from '../assets/img/python.png'
import php from '../assets/img/php.png'
import Prog from '../assets/img/Cprogramming.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import Reacts from '../assets/img/React.png'
import git from '../assets/img/git.png'
import postman from '../assets/img/postman1.png'
import xamps from '../assets/img/xamps.png'
import canva from '../assets/img/canva.png'
import figma from '../assets/img/figma.png'
import boot from '../assets/img/boot.png'
import Mysql from '../assets/img/mysql.png'
import mongo from '../assets/img/mongo.png'
import cpp from "../assets/img/cppimage.png"

export default function Skills() {
  const skillsData = [
   
    {
      category: "FrontEnd",
      skills: [html, css, js, Reacts]
    },
    {
        category: "Languages",
        skills: [cpp, python, php, Prog]
      },
      
    {
        category: "Databases & Others",
        skills: [Mysql, boot, mongo]
      },
    {
      category: "Tools",
      skills: [git, postman, xamps,canva,figma]
    }
  ];

  const SkillCategory = ({ category, skills }) => {
    useEffect(() => {
      const skillElements = document.querySelectorAll(`.skill-category[data-category="${category}"] .skill`);
      const angle = 360 / skills.length;
      skillElements.forEach((skill, index) => {
        skill.style.transform = `rotate(${angle * index}deg) translate(100px) rotate(-${angle * index}deg)`;
      });
    }, [category, skills]);

    return (
        <>
      
      <div className="skill-category" id="skillsection" data-category={category}>
        <div className="skill-inner rotating mb-4 mt-4">
          <h6 className="category-text">{category} </h6>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <img src={skill} alt={`Skill ${index}`} style={{ width: '300%', height:'150%', borderRadius: '50%' }} />
                </div>
            ))}
          </div>
        </div>
      </div>
        </>
    );
  };

  return (
    <div className="skills-container">
      {skillsData.map((data, index) => (
        <SkillCategory key={index} category={data.category} skills={data.skills} />
      ))}
    </div>
  );
}