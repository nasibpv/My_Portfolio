import React, { useState } from 'react';
import './Style.css';
import { Col, Row } from 'react-bootstrap';
import { IoCallSharp } from "react-icons/io5";
import { CiMail, CiLocationOn } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';

function Contact() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // Prevent default form submission

      // Log the values from the inputs
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Message: ", message);

      // Show an alert message after successful submission
      window.alert('Your message has been successfully sent!');

      // Reset the form fields after submission (Optional)
      setName('');
      setEmail('');
      setMessage('');
    }

    setValidated(true);
  };

  return (
    <div id='contact'>
      <h2 className='tittle p-0 pt-3'>CONTACT</h2>
      <div className='box-style'>
        <div className='box box-1'></div>
        <div className='box box-2'></div>
      </div>
      <div className='container contact-contant '>
        <Row>
          <Col className='left-side '>
            <h5>Drop Me a Message</h5>
            <p className='contact-content'>
              Have a project in mind or just want to say hello? I'd love to hear from you!
              Feel free to drop me a message using the form below. I'll get back to you as soon as possible.
            </p>
            <p className='contact-content'>Looking forward to connecting with you!</p>
            <a href='tel:+918078210951' className='contact-details'>
              <p className='icons'><IoCallSharp /></p> +918078210951
            </a>
            <a href='mailto:nasibnpv@gmail.com' className='contact-details'>
              <span className='icons'><CiMail /></span> nasibnpv@gmail.com
            </a>
            <a target='_blank' href='https://www.google.com/maps/place/Irikkur+Bus+Stand/@11.9855607,75.5554058,83m/data=!3m1!1e3!4m6!3m5!1s0x3ba4374d373f1301:0xee7d22e994714d74!8m2!3d11.9836519!4d75.5541946!16s%2Fg%2F11h6t9dbxm?authuser=0&entry=ttu' className='contact-details'>
              <span className='icons '><CiLocationOn /></span> Irikkur Kannur, Kerala
            </a>
          </Col>
          <Col lg='5' md='5' className='right-side-contact'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className='input'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className='input'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={5}
                  style={{ height: '100%' }}
                  name='message'
                  placeholder='Message'
                  className='input'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="dark" type="submit" className='ps-5 pe-5 d-flex'>Send</Button>
            </Form>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
