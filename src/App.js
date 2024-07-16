import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import  Certificate  from "./components/Certificate";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Project from "./components/Project"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <h1 class="skill-header" >Skills</h1><hr></hr>

      <Skills />

      <Project />
      <Certificate />
      <Contact />
      <Footer />
      
      
      
    </div>
  );
}

export default App;
