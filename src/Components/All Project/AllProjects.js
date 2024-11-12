import  {React, useEffect, useState } from 'react'
import '../All Project/Style.css'
import Table from 'react-bootstrap/Table';
import {useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoCloseCircleSharp } from "react-icons/io5";

function AllProjects() {
    const [data,setData]=useState([])
    const navigate=useNavigate()    
    const {allProject}=useSelector(state=>state.allProjects)    
    function refreshPage(){ 
       if(allProject==''){
             navigate('/My_Portfolio/')
       }        
    }
    useEffect(()=>{
        refreshPage()
        setData(allProject)
    },[])
  return (
    <div className=''>
    <div className='allProject-navbar '>
            <div className='container nav'>
              <h3 className='nav-tittle'>All Projects</h3>
              <Link to={-1} className='close-button'><IoCloseCircleSharp /></Link>
            </div>
          </div>
    <div className='allProject'>
        <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Name</th>
                      <th>View Project</th>
                    </tr>
                  </thead>
         {
          data?
          data?.map((item,index)=>(
          
                  <tbody>
                    <tr>
                      <td>{index+1}</td>
                      <td>{item?.title}</td>
                      <td><Link  to={`/project/${item?.id}`} className='project_links' >View Project</Link></td>
                    </tr>
                  </tbody>
                
          )):
          <p >Data Loading Problems</p>
        
          }
          </Table>
    </div>
    
        </div>
  )
}

export default AllProjects