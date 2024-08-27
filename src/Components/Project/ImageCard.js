import React from 'react'
import './Style.css'
function ImageCard({image}) {
  return (
    <div className=''>      
        <img className='image-card' src={image.photo} alt='#'></img>
    </div>
  )
}

export default ImageCard