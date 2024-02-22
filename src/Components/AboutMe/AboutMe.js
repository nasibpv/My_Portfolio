import {React, useEffect} from 'react';
import './Style.css';
import { Button } from 'react-bootstrap';

function AboutMe() {

    
  return (
    <div id='about' className='container'>
      <div className='content'>
        <div className='right-side'>
          <div className='right-box-1'>
          </div>
          <div className='right-box-2'></div>
        </div>
        <div className='left-side'>
          <p className='about-tittle'>ABOUT ME</p>
          <p className='about-content'>Loram koooooooooooooooooooooooooooooooooooooooooo</p>
          <div className='button'>
            <Button className='hire-me-button'>HIRE ME</Button>
            <Button className='resume-button'>RESUME</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe