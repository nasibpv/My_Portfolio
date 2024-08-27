import React from 'react'
import './style.css'
import { FaInstagram,FaFacebook,FaLinkedin,FaGithub   } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
{/* <CiLinkedin /> */}

function Footer() {

  return (

    <div className='contact-footer container'>
    <div className='footer-left'>
    <h3 className='m-0 footer-tittle'></h3>
    </div>
    <div className='footer-center'>
      <p className='m-0 '>2024-Nasib Pv,All right reserved</p>
    </div>
    <div className='footer-right'>
      <a href='' className='footer-link'><FaFacebook /></a>
      <a href='https://instagram.com/nasib_pv?igshid=bTYxODVqazI0bDlw' className='footer-link'><FaInstagram /></a>
      <a href='https://www.linkedin.com/in/nasib-pv/' className='footer-link'><FaLinkedin /></a>
      <a href='https://github.com/nasibpv' className='footer-link'><FaGithub /></a>
    </div>
</div>

  )
}

export default Footer