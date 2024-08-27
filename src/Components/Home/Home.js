import React, { useEffect, useState } from 'react'
import Projects from '../Project/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import'./style.css'
import {  useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import {useDispatch, useSelector,} from 'react-redux'
import Certificate from '../Certificates/Certificate';
import { IoIosArrowUp } from "react-icons/io";
import { restList } from '../../action/restaction';
import PreviousProject from './PreviousProject';


function Home() {
  const location=useNavigate('')
  const dispatch=useDispatch()
  const [isVisible, setIsVisible] = useState(true);

  const project=(e)=>{ 
    // location(`/project/${dataList?.projects[0]?.id}`)
  }
    const {dataList}=useSelector((state)=>state.dataReducers)
    // console.log(dataList);

    // scroll top
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    };
    // scroll  button hidden
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  useEffect(()=>{

    dispatch(restList())
 window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <div className='home text-white'>
   
    <NavBar/>
    
    <div className='section-hero container' >
    <div className='section p-2 pt-4'>
<div className='section-content'>
        <h2>{dataList.name}</h2>
        <p className='section-field'>FULL STACK<br/>SOFTWARE<br/> DEVELOPER.</p>
  
</div>      
{/* <Button   onClick={project} > Previous Project</Button> */}
<PreviousProject/>
    </div>
    <button onClick={handleClick} style={{ display: isVisible ? 'flex' : 'none' }} className='scroll-button'><IoIosArrowUp/></button>    
    </div>
    <AboutMe/>
    <Projects/>
    <Experience experience={dataList.experience}/>
    {/* <Certificate/> */}
    <Contact/>
    
    

   
    </div>
  )
}

export default Home