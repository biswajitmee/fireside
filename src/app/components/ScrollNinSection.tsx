import React from 'react';

const ScrollNinSection = () => {
  return (
    <>
      <section className='mt-32 bg-[#4E4A46]'>
        <div className='w-[99vw] h-full relative'>
          <video
            className='object-cover w-full h-full rounded-3xl'
            autoPlay
            loop
            muted
            src="ScrollSectionNinVideo.mp4"
          >
          </video>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg rounded-2xl p-10 px-4 w-[90vw] lg:w-[60vw] bg-[#06060666]'>
            <div className='flex flex-col items-center text-center'>
              <h2 className='lg:text-[4.76vw] text-[9.8vw] font-IvyOraheadline2 text-white mb-2 py-4'>
                It starts with a conversation
              </h2>
              <p className='lg:text-lg text-base text-[#f3efec] lg:w-[38%] w-full'>
                Because running a practice doesn’t have to be a lonely journey.
              </p>
              <button className='mt-6 px-8 lg:px-10 py-2.5 lg:py-3.5 text-white lg:text-lg text-base bg-[#EF4C23] rounded-lg'>
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollNinSection;
