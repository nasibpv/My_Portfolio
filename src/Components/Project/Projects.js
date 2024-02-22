import React from 'react'
import './Style.css';
import { Col, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
function Projects() {
  return (
    <div style={{height:'100vh'}} id='project' className='container'>
      <Row className='row'>
        <Col lg='6' md='6' sm='6' className='left-side'>
        <div className='left-side-content'>
          <h2 className='project-number'>Project 1</h2>
          <h5 className='project-name'>Dating mobile app desing</h5>
          <p className='project-content'>lorammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
          <p className='read-more'><FaArrowRightLong /> 
        <a href='' className='read-more-link'> Read more</a></p>
        </div>
        </Col>
        <Col lg='6' md='6' sm='6' className='right-side'>
        <div className='right-box-1'>
          </div>
          <div className='right-box-2'></div>
        </Col>
      </Row>
    </div>
  )
}

export default Projects