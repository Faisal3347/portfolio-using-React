import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import skinDiseaseProject from '../assests/image/skinDiseaseProject.png';
import gymProject from '../assests/image/gymProject.png';
import MealProject from '../assests/image/MealProject.png';
import portfolioProject from '../assests/image/portfolioProject.png';
import jarvis from '../assests/image/jarvis.png'; 
import importExportProject from '../assests/image/importExportProject.png';

export default function Projects() {
  const projects = [
    { title: 'SkinDisease Prediction', imageUrl: skinDiseaseProject, info: `
    Developed a dual-interface platform using ReactJS, Flask, and Deep Learning, enabling a classifier model that predicts skin diseases through image analysis using a Convolutional Neural Network (CNN). This project involved creating an intuitive user interface and implementing  deep learning techniques for accurate predictions.`, linkUrl: 'https://github.com/KhanSaibaz/Skin-Disease' },

    
    { title: 'Meal Connect', imageUrl: MealProject, info: `Developed "Meal Connect," a PHP-based web application to reduce food wastage and hunger. In a 2-day hackathon, our team created a solution aligned with the UN's Zero Hunger initiative. The app lets users list excess food inventory, which non-profits can claim and redistribute. Demonstrated rapid learning and use of new technologies to build impactful solutions`, linkUrl: 'https://drive.google.com/file/d/1h7tNgMCXkdkDMAyXHI4Pzilbtwy3fJDD/view?usp=sharing' },
    
    { title: 'GymManagement System ', imageUrl: gymProject, info: `Created a comprehensive gym administration system using PHP, SQL, and modern web technologies. This system allows gym administrators to manage gym subscriptions, package availability, member profiles, class schedules, equipment maintenance, staff schedules, billing, and much more, ensuring efficient and smooth operations.`, linkUrl: 'https://github.com/KhanSaibaz/FOOD-WASTE' },

    { title: 'Portfolio', imageUrl: portfolioProject, info: `My portfolio showcases a responsive design with interactive features and a polished interface. Explore a variety of projects demonstrating proficiency in web development and software engineering. Each project reflects my dedication to creating user-centered solutions and leveraging modern technologies to achieve impactful results`, linkUrl: 'https://github.com/KhanSaibaz/saibaz-portfolio' },

    { title: 'virtual assistant', imageUrl: jarvis, info: `Developed a Jarvis-like assistant using Python to perform tasks such as opening applications, checking the time, and executing various commands. This project demonstrates my skills in Python programming and my ability to create practical, voice-activated solutions for everyday tasks`, linkUrl: 'https://github.com/KhanSaibaz/Jarvis' },

    { title: 'Import Export', imageUrl: importExportProject, info: `Developed an import-export project using HTML, CSS, JavaScript, Bootstrap, MySQL, PHP, and XAMPP. This project streamlines the management of import-export data, featuring a user-friendly interface and robust backend. It showcases my ability to integrate front-end and back-end technologies to create efficient, functional web applications.`, linkUrl: 'https://github.com/KhanSaibaz/Import-Export' },
  ];

  return (
    <>
      <div className="project-header" id='projectSection'>
        <h1 style={{textAlign:"center", marginTop:"3rem", fontFamily:'comicPillow'}} className='main_header_text'>PROJECTS</h1>
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
    </>
  );
}