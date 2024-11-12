import React, { useState } from 'react'
import './Style.css'
import { Col, Row } from 'react-bootstrap'
import { IoCallSharp } from "react-icons/io5";
import { CiMail, CiLocationOn } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';
function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id='contact'>
      <h2 className='tittle'>CONTACT</h2>
      <div className='box-style'>
        <div className='box box-1'></div>
        <div className='box box-2'></div>
      </div>
      <div className='container contact-contant '>

        <Row>
          <Col lg='7' md='7' sm='7' xs='12' className='left-side' >
            <h5 >Drop Me a Message</h5>
            <p className='contact-content'>Have a project in mind or just want to say hello? I'd love to hear from you! Feel free to drop me a message using the form below. I'll get back to you as soon as possible.</p>
            <p className='contact-content'>Looking forward to connecting with you!</p>
            <a href='tel:+918078210951' className='contact-details'><p className='icons'><IoCallSharp /></p> +918078210951</a>
            <a href='mailto:nasibnpv@gmail.com' className='contact-details'><span className='icons'><CiMail /></span> nasibnpv@gmail.com</a>
            <a target='_blank' href='https://www.google.com/maps/place/Irikkur+Bus+Stand/@11.9855607,75.5554058,83m/data=!3m1!1e3!4m6!3m5!1s0x3ba4374d373f1301:0xee7d22e994714d74!8m2!3d11.9836519!4d75.5541946!16s%2Fg%2F11h6t9dbxm?authuser=0&entry=ttu' className='contact-details'><span className='icons '><CiLocationOn /></span> Irikkur kannur, kerala</a>
          </Col >
          <Col lg='5' md='5' sm='5' xs='12' className='right-side-contact'>
            <Form noValidate  validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail " >
                <Form.Control type="text" placeholder="Name" className='input '  required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" className='input' required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} style={{ height: '100%' }} placeholder='Message' className='input' required />
              </Form.Group>
              <Button variant="dark" type="submit" className='ps-5 pe-5'>Send</Button>
            </Form>
          </Col >
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default Contact