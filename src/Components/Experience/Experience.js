import React, { useEffect, useState } from 'react';
import './Style.css'
import { Link } from 'react-scroll';
function Experience({experience}) {
  console.log(experience);

  
  useEffect(()=>{
  },[])
  return (
    <div id='experience' className='container'>
      <h2 className='tittle'> EXPERIENCE</h2>

      <div className='content'>
        {experience? 
          experience?.map(item=>(
             <Link to='/' className='skill-'>
          <img src={item.icons} alt='react image' className='ecperience-icon'></img>
          <h5 className='skill-name'>{item.name}</h5>
        </Link  >
          ))
          :<p >data unload</p>
        }
       
       
      </div>
    </div>
  )
}

export default Experience