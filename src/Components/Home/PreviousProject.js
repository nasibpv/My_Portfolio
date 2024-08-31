import React from 'react'
import { Button } from 'react-bootstrap';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router';

function PreviousProject() {
    const location=useNavigate()
    const {latests}=useSelector(state=>state.latest)
    const project=(e)=>{ 
        location(`/project/${latests.id}`)
      }
   
  return (
    <div>
        <Button   onClick={project} > Previous Project</Button>
    </div>
  )
}

export default PreviousProject