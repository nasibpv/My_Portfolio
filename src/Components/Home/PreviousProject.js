import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router';

function PreviousProject() {
    const dispatch=useDispatch()
    const location=useNavigate()
    const {latests}=useSelector(state=>state.latest)
    console.log(latests);
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