import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import aafiyaproject from '../assets/img/aafiyaproject2.png';
import dustechproject from '../assets/img/dustechproject.png';
import Dermassist from '../assets/img/dermassistproject.png';
import portfolioProject from "../assets/img/portfolioproject.png"
import MealProject from '../assets/img/MealProject.png'; 
import mmnf from '../assets/img/mmnfproject.jpeg';

export default function Projects() {
  const projects = [
    { title: 'Aafiya Mediretreats ', imageUrl: aafiyaproject, info: `
    Developed a comprehensive hospital management system, Aafiya MediRetreats, using HTML, CSS, and JavaScript. This project involved designing an intuitive front-end interface for managing hospital operations and treatment plans, ensuring seamless user experience and efficient system functionality.`, 
    linkUrl: 'https://github.com/Faisal3347/Aafiya-Mediretreats-Faisal-khan' },

    
    { title: 'Dustech Industry', imageUrl: dustechproject, info: `Created a commercial website for Dustech Industry, a metal industry company, using PHP, HTML, CSS, and JavaScript. This project involved developing a dynamic and user-friendly interface to showcase the company's services and products, enhancing their online presence and customer engagement.`, 
      linkUrl: 'https://github.com/Faisal3347/Industry' },
    
    { title: 'DermAssist ', imageUrl: Dermassist, info: `Developed DermAssist, a skin disease prediction platform, using React for the front end, Python for model building, and Flask for integration. This project featured an intuitive user interface and a robust backend to support the deep learning model, enabling accurate predictions through image analysis using a Convolutional Neural Network (CNN).`, 
      linkUrl: 'https://github.com/Faisal3347/DermAssist' },
      
    { title: 'MMNF Product Listing & Sales', imageUrl: mmnf, info: `Created MMNF Product Listing and Sales, a dynamic website for product management and sales, using HTML, CSS, JavaScript, PHP, and SQL. This project featured a comprehensive admin panel allowing administrators to upload, update, and delete products efficiently, ensuring seamless inventory management and enhanced user experience.`, 
      linkUrl: 'https://github.com/Faisal3347/MMNF' },

    { title: 'Portfolio', imageUrl: portfolioProject, info: `Developed a responsive portfolio website using ReactJS and CSS, showcasing certificates, projects, and skills. This project involved creating a visually appealing and user-friendly interface to highlight personal achievements and professional expertise, ensuring optimal viewing across various devices.`, 
      linkUrl: 'https://github.com/Faisal3347/portfolio-using-React' },

    { title: 'Meal Connect', imageUrl: MealProject, info: `Developed MealConnect, a food donation platform, using HTML, CSS, JavaScript, and SQL. This project allows donors to register and donate food through a form, while NGOs and distributors can access the information to collect and distribute the donations to those in need, promoting efficient food waste management and helping the community.`, linkUrl: 'https://github.com/Faisal3347/MealConnect' },

    
  ];

  return (
    <>
      <div id='projects' className='project-main'>
      <div className="project-header" id='projectSection'>
        <h1 style={{textAlign:"center", marginTop:"0rem", fontFamily:'ui-sans-serif',fontSize:"60px"}} className='main_header_text'>PROJECTS<hr></hr></h1>
      </div>
      <div id="Project" className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt={project.title} />
            <h4 className='mt-2 mb-5' style={{color:'#dfaaaa'}}>{project.title}</h4>
            <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className='viewProject'>
               View source code <span className='arrowsview'><ArrowRightCircle/></span>
            </a>
            <div className="project-info">
              {project.info}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}