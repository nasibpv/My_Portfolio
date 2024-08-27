import React, { useEffect } from 'react'
import './Style.css'
import { useDispatch, useSelector } from 'react-redux'
import { restList } from '../../action/restaction'


function Certificate() {
  const dispatch=useDispatch()
 const {dataList}=useSelector(state=>state.certificate)
 console.log(dataList);
  useEffect(()=>{
    dispatch(restList())
  },[])
  return (
    <div id='certificate' className='container'>
        <h1 className='title'>Certificate</h1>
        <div className='certificate-box'>
           {
            dataList?.map((item)=>(
               <div className='certificate-image'>

            <img src={item.certificate } alt='certificate image'></img>
    
            </div>
            ))
           
            }
           
            
        </div>
    </div>
  )
}

export default Certificate