import {React} from 'react';
import './Style.css';
import { Button } from 'react-bootstrap';

function AboutMe() {

  return (
    <div id='about' className='container'>
      <h5 className='about-tittle'>ABOUT ME</h5>
      <div className='content'>
        <div className='right-side'>
          <div className='box '>
            <div className='right-box-1'>
              <img src='https://i.postimg.cc/jdRBbHw3/Whats-App-Image-2024-04-03-at-12-38-34-90029b34.jpg' alt='#'></img>
            </div>
            <div className='right-box-2'></div>
          </div>
        </div>
        <div className='left-side'>
          <p className='about-content'>Hello! I'm Nasib, a full-stack developer based in India. With expertise in both front-end and back-end technologies, I specialize in crafting dynamic web solutions that blend creativity with functionality.
          <span> My journey into programming started with a fascination for problem-solving, leading me to master languages like JavaScript, HTML, CSS, and frameworks such as React and Node.js. I thrive on tackling complex challenges and delivering scalable, user-centric applications. My commitment to staying updated with industry trends and my passion for continuous learning drive me to explore new technologies and methodologies. Outside of coding, I enjoy immersing myself in the vibrant tech community, contributing to open-source projects, and embracing diverse perspectives. I'm dedicated to leveraging my skills to create impactful digital experiences and contribute to the ever-evolving tech landscape
          </span>
          </p>
          <div className='button-row'>
            <a href='whatsapp://send?abid=+919188214423&text=Hello%2C%20World!' target='_blank' className='hire-me-button'>HIRE ME</a>
            {/* <a href='https://wa.me/+919188124423?text=I%27d%20like%20to%20chat%20with%20you' target='_blank' className='hire-me-button'>HIRE ME</a> */}
            <a href='NASIB PV.pdf' download={'NASIB PV.pdf'} className='resume-button'>RESUME</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe