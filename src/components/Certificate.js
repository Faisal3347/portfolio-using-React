import React from 'react';
import Slider from 'react-slick';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Udemy from "../assets/img/mernstack.png";
import google2 from "../assets/img/google2.png";
import Hackerrank from "../assets/img/hackerrank.png";
import pythonfordatascience from "../assets/img/pythonfordatascience.png";
import forage from "../assets/img/forage.PNG";
import data101 from "../assets/img/data101.PNG";

export default function Certificate() {
  const certificates = [
    { title: 'MERN Stack by Udemy', imageUrl: Udemy, linkUrl: 'https://drive.google.com/file/d/16yyl7tckhXcYAw0b80gHmNA3kLB7fkDf/view?usp=drive_link' },
    { title: 'Google Cloud Study Jams', imageUrl: google2, linkUrl: 'https://drive.google.com/file/d/12_AtKYdN-0bc-5BkQTu29B2vkjY1E0-v/view?usp=sharing' },
    { title: 'SQL By Hackerrank', imageUrl: Hackerrank, linkUrl: 'https://link-to-certificate3.com' },
    { title: 'python for Data Sciecnce', imageUrl: pythonfordatascience, linkUrl: 'https://drive.google.com/file/d/1IUX7g3DlpbkS8ECdn7ur9QPu3QUO414r/view?usp=sharing' },
    { title: 'Data Analytics & visualization', imageUrl: forage, linkUrl: 'https://drive.google.com/file/d/1WoXOv7WvZqbU40CX8FDW3olRc3ZwPrcc/view?usp=sharing' },
    { title: 'python For Data Science', imageUrl: data101, linkUrl: 'https://drive.google.com/file/d/1op9i6KTPSG9ZklZ4NR4qDy3Cs1UGXdVE/view?usp=sharing' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    cssEase: 'linear',
    pauseOnHover: true, 
    rtl: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 4000,
          infinite: true,
           rtl: true, 
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
         speed: 5000,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <div className="certificate-header" id='certificateSection'>
        <h1 style={{textAlign:"center", marginTop:"0rem",fontFamily:'comicPillow',fontFamily:"ui-sans-serif",fontSize:"60px"}}>Certificate<hr></hr></h1>
      </div>
      <div id="certificate" className="certificate-container">
        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate">
              <img src={certificate.imageUrl} alt={certificate.title} />
              <h4 className='mt-2 mb-5'>{certificate.title}</h4>
              <a href={certificate.linkUrl} target="_blank" rel="noopener noreferrer" className='viewCertificate'>
                Click to View  <span className='arrowsview'><ArrowRightCircle/></span>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}