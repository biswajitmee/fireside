import React from 'react'

const NavBar: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '999',
        width: '90vw',
        height: '50px',
        left: '5vw',
        top:"25px"
      }}
    >
      <div className='gap-4 grid grid-cols-6'>
        <div className='col-start-1 col-end-1'>
            <div className="bg-white rounded-lg w-10 h-10 logoBox"></div>
        </div>
        <div className='col-span-2 col-end-7 menuGrid'>
          <div className='flex flex-nowrap rounded-lg text-white nav-bg'>
            <div className='flex flex-1 justify-center items-center p-3 text-center'>
              About
            </div>
            <div className='flex flex-1 justify-center items-center p-3 text-center'>
              Community
            </div>
            <div className='flex flex-1 justify-center items-center p-3 text-center'>
              Blog
            </div>
            <div className='flex flex-1 justify-center items-center m-2 p-3 rounded-lg text-center btn-color'>
              Join Us
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
