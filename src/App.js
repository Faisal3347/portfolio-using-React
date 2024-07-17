import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Project from "./components/Project";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Faisal Khan Portfolio';
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <hr></hr><h2 
        className="container text-center skill-text mt-3" 
        id='skillsSect' 
        style={{display: 'block', textAlign: 'center', fontFamily: "ui-sans-serif", fontSize: "60px", marginTop: "-2rem"}}
      >
        MY Skills
      </h2>
      <Skills />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
