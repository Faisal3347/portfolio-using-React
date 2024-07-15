import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import homeimage2 from "../assets/img/homeimage_prev_ui.png"

export const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", 'Web Developer', "Front-End Developer", "Back-End Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(3000 / fullText.length); // Adjust delta to make erasing take 3000ms
        } else {
            setDelta(300 - Math.random() * 100); // Reset delta for typing
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }
  

  return (
    <section className="banner" id="home">
      <Container style={{ marginTop: "-4rem" }}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Faisal Khan   `} 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " Software Engineer", " Web Developer", " Frontend Developer" ]'><span className="wrap">{text}</span></span>
                  </h1>
                  <p>Dynamic and dedicated Computer Engineering student with a passion for software development. Eager to leverage
solid theoretical knowledge and practical experience to create innovative and impactful software solutions for societal
benefit.</p>

<button onClick={() => console.log('connect')}>
                               <a  href={'https://drive.google.com/file/d/1eJaO0VD8fnwfrOQpsu0RWeT-CdsyGXQ8/view?usp=drive_link'} className="resume" target="_blank">
                               View Resume <ArrowRightCircle size={25} /> 
                                </a> </button>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img style={{marginTop:"-3rem"}} src={homeimage2} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
        
      </Container>
      
    </section>
    
  )
}
