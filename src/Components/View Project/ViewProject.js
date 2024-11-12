import React, { useEffect } from 'react'
import './Style.css'
import {  useNavigate, useParams } from 'react-router-dom';
import {  useSelector} from 'react-redux'
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function ViewProject() {
  const params=useParams()
  const navigate=useNavigate()
  const {projects}=useSelector(state=>state.projects)
  
   const filter =projects?.find(item=>item.id==params.id)
   console.log(filter.image);
   
function alertFunction() {
  alert("Not Available in Live Demo")
}
function refreshPage(){ 
  if(filter==''){
        navigate('/My_Portfolio/')
  }
   
}
useEffect(()=>{
refreshPage()

},[])
  return (
    <div className='project-page' >
      <div className='style'>
        {/* <div className='video'>
        <video  className="videoTag" controls autoPlay loop muted>
      <source src="C:\Users\LENOVO\Desktop\project\portfolio\public\React App — Mozilla Firefox 2024-01-02 23-39-43.mp4" type="video/mp4"/>
     </video>      
     </div> */}
      </div>
      <div className='project-navbar'>
        <div className='container nav'>
          <h3 className='nav-tittle'>Project</h3>
          <Link to={-1} className='close-button'><IoCloseCircleSharp /></Link>
        </div>
      </div>
      {filter?
        <div className='container project-details'>
        <div className='Project-contant'>
            <div className='project-main-contant'>
              <div className='project-main-contant-left'>
                <h2 className='project-tittle'>{filter.title} </h2>
                {/* <p >{}</p> */}
               <div className='project-links'>
                  <a href={filter.github} target="_blank"  className='link link-git'>Github</a>
                  {
                    filter?.liverepo?
                    <a href={filter.liverepo} target="_blank" className='link link-live'>live</a>
                    : <a className='link link-live' onClick={alertFunction} >Live </a>
                    }
               </div>
              </div>
            </div>          
         
            <div className='project-overview'>
              <h3 className='project-Overview-tittle text-yellow-100'>PROJECT OVERVIEW</h3 >
              <p className='project_Overview-para'><span className='text-orange-200'>Description  : </span>{filter.description}</p>
              <h4 className='project_Overview-objectives text-yellow-100' >Objectives</h4>
            </div>
            <div className='project-technology-links'>
            <p className='project-techonology ' ><span className='text-orange-200 '>Technologies using :</span> {filter.technologies} </p>
            </div>
            <div className='Project-scope'>
              <h3 className='project-scope-tittle text-yellow-100'>Project-scope</h3>
              <p className='project-scope-para'>What is included and excluded from the project</p>
              <p className='project-scope-condition'>Boundaries and limitations</p>
  
            </div>
            <div className='project-photo'>
           
  
            {filter?.image?.map(item=>(
              <div className='photo_card'>
              <img src={item.photo} alt='project image unuploaded'></img>
              <div className='photo-content'>
                <p className='photo-content-name '>{item.contant}</p>
              </div>
            </div>
            ))
              }
           
                    
          </div>
       
            <div className='Next_steps'>
              <h3 className='tittle text-start text-yellow-100'>Next Steps</h3>
              <p className='parag'>Outline of what needs to be done next</p>
              <p >Action items</p>
            </div>
            <div className='Conclusion'>
              <h1 className='conclusion-tittle text-yellow-100'>Conclusion</h1>
              <p className='conclusion-para'>Summary of key points</p>
              <p className='conclusion-remark'>Any final thoughts or remarks</p>
            </div>
  <div className='Contact-information '>
            <h3 className='contact-information-tittle text-yellow-100'>Contact-information</h3>
            <p className='contact-information-para'>Your contact information for further inquiries</p>
          </div>         
          </div>
         </div>
         
        :<p >data unload please reload</p>
      }
    </div>


  )
}

export default ViewProject