import React, { useState, useEffect } from 'react'
import './Style.css';
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { BiRightArrowAlt } from "react-icons/bi";
import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';

function Projects() {
  const location=useNavigate()
  const dispatch=useDispatch()
  const [project, setData] = useState([])
  // console.log(project);
  const [ error,setError]=useState(true)
    
  const {dataList}=useSelector((state)=>state.projects)
const filter =dataList?.map(item=>item)?.slice(0,3)
const Allproject=()=>{
  location(`/allproject`)
}
  useEffect(() => {

  }, [])

  
  return (
    <div id='project' className='container'>
      <h2 className='text-center p-1 m-0'>PORTFOLIO</h2>

      {
        filter?.map((item,index) => (
          <Row className='row '>
            <Col lg='6' md='6' sm='6' className='left-side m-0'>
              <div className='left-side-content'>
                <h2 className='project-number'>Project {index+1}</h2>
                <h5 className='project-name'>{item.title}</h5>
                <p className='project-description'>{item.description}</p>
                <p className='read-more'>
                  <Link  type='button' to={`/project/${item.id}`}  className='read-more-link'><BiRightArrowAlt className='read-more-icon'/> Read more</Link></p>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' className='right-side d-flex justify-content-center'>
              <div className='right-side-main'>
                <div className='right-side-box-1'>
                  <ImageCard image={item.image[0]}/>
                </div>
                <div className='right-side-box-2'>
                </div>
              </div>
            </Col>
            
          </Row>
        ))
          

      }
<div className='w-100 text-center pt-3 pb-3'>
  
  <Button onClick={Allproject}>View All </Button>
</div>
    </div>

  )
}

export default Projects