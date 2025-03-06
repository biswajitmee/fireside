import React from 'react';

const ScrollSixSection = () => {
  return (
    <>
      <section className='flex items-center h-[75vh] w-full px-[6rem] gap-x-4'>
        <div className='flex-1 h-full relative group transition-all duration-1000 hover:flex-[1.2]'>
          <img className='w-full h-full rounded-3xl absolute object-cover object-center 
     opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out'
            src="/ScrollSectionSiximg-1.avif" alt="" />
          <video className='w-full h-full object-cover object-top rounded-3xl'
            autoPlay loop muted src="ScrollSectionSixVideo-1.mp4"></video>
        </div>

        <div className='flex-1 h-full relative group transition-all duration-1000 hover:flex-[1.2]'>
          <img className='w-full h-full rounded-3xl absolute object-cover object-center 
     opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out'
            src="/ScrollSectionSiximg-2.avif" alt="" />
          <video className='w-full h-full object-cover object-top rounded-3xl'
            autoPlay loop muted src="ScrollSectionSixVideo-2.mp4"></video>
        </div>

        <div className='flex-1 h-full relative group transition-all duration-1000 hover:flex-[1.2]'>
          <img className='w-full h-full rounded-3xl absolute object-cover object-center 
     opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out'
            src="/ScrollSectionSiximg-3.avif" alt="" />
          <video className='w-full h-full object-cover object-top rounded-3xl'
            autoPlay loop muted src="ScrollSectionSixVideo-3.mp4"></video>
        </div>
      </section>
    </>
  )
}

export default ScrollSixSection;
