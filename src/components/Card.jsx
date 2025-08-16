import React from 'react'

const Card = ({
    title = "RGB",
    subtitle = "Battery 1 remaining power",
    batteryLevel = "55",
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ipsa? Aliquid"
}) => {
  return (
    <div className='bg-transparent border-3 border-black px-4 py-2 mx-4'>
      <div className='flex flex-col '>
        <h3 style={{ fontFamily: 'My Custom Font', fontSize: '1.5rem' }}>{title}</h3>
        <p className='text-[0.5rem] -mt-[10px] pb-1'>{subtitle}</p>
        <hr className='border-1' />
        <div className='flex flex-row items-center justify-between -my-8'>
            <h2 style={{fontFamily: 'My Custom Font', fontSize: '5rem'}} className='flex flex-row items-baseline mr-3'> {batteryLevel} <span className='text-[3rem]'>%</span> </h2>
            <p className='text-[0.5rem]'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
