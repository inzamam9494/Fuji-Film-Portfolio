import React from 'react'

const PictureCard = ({
    img 
}) => {
  return (
    <div className="">
      <img className='shadow-[0_0_50px_rgba(0,0,0,0.8)] border-10 border-white object-cover h-[250px] w-1/4' src={img} alt="" />
    </div>
  )
}

export default PictureCard

//https://images.pexels.com/photos/3182452/pexels-photo-3182452.jpeg