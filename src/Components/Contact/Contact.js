import React from 'react'
import './Style.css'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { CiMail,CiLocationOn  } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';
function Contact() {
  return (
    <div id='contact'>
      <h2 className='tittle'>CONTACT</h2>
      <div className='box-style'>
        <div className='box box-1'></div>
        <div className='box box-2'></div>
      </div>
      <div className='container contact-contant '>
        
        <Row>
          <Col lg='7' md='7' sm='7' className='left-side' >
            <h5 >Drop Me a Message</h5>
            <p >Lorammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            <p className='contact-details'><p className='icons'><IoCallSharp /></p> +918078210951</p>
            <p className='contact-details'><span className='icons'><CiMail /></span> nasibnpv@gmail.com</p>
            <p className='contact-details'><span className='icons '><CiLocationOn /></span> +918078210951</p>
            </Col >
          <Col lg='5' md='5' sm='5' className='right-side-contact'>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail " >
        <Form.Control type="email" placeholder="Name" className='input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Email" className='input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} style={{height:'100%'}} placeholder='Message' className='input'/>
      </Form.Group>
      <Button variant="dark" type="submit" className='ps-5 pe-5'>
        Send
      </Button>
    </Form>

          </Col >
        </Row>
       
      </div>
     <Footer/>
    </div>
  )
}

export default Contact