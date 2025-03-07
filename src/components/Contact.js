import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const form = useRef();
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({ success: false, message: '' });

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm('service_azfza5h', 'template_j6u6ntp', form.current, 'O89otZUtWNd-Xgg6j')
      .then(
        (result) => {
          setButtonText('Send');
          toast.success('Successfully Send the mail!', {
            duration: 4000,
            style: {
              borderRadius: '10px',
              background: '#fffff',
              color: '#212121',
            },
          })
          setFormDetails({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        },
        (error) => {
          setButtonText('Send');
          toast.error('Failed to Send  mail!', {
            duration: 3000,
            style: {
              borderRadius: '10px',
              background: '#fffff',
              color: '#212121',
            },
          })
        }
      );
  };

  return (

    <>
    <Toaster
        position="top-right"
        reverseOrder={false} />
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="text" name="first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input  required type="text" name="last_name" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      <Col >
                        {status.message && (
                          <p style={{color:"white",marginLeft:"-0.5rem"}} className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        )}
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  );
};
