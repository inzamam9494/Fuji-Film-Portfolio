import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col leading-tight'>
        <h1 style={{ fontFamily: 'My Custom Font', fontSize: '3rem', fontWeight: 'normal', color: '#973F0B' }}
        className='m-0 p-0' >
          FUJIFILM
        </h1>
        <p className=' text-center text-[0.5rem] font-bold tracking-[0.2em] -mt-4 whitespace-pre'>
          F O C U S  S N A P
        </p>
      </div>
      <button className='cursor-pointer bg-[#973F0B] text-white mx-4 px-3 py-2 hover:bg-[#7a2f08] transition-colors duration-300'>
          <h1 className='text-[0.8rem] font-bold whitespace-pre '>B U Y  N O W</h1>
      </button>
    </div>
  )
}

export default Header
