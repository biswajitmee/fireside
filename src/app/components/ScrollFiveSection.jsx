import React from 'react';

const ScrollFiveSection = () => {
  return (
    <>
      <section className='px-[7rem] pt-[10rem]'>
        <div>
          <div>
            <h2 className='text-[4.6vw] font-IvyOraheadline2 leading-[5.5rem] text-[#232323]'>Meet a few <br /> of our members</h2>
          </div>
          <div></div>
        </div >

        <div className='flex justify-between items-center pt-[3.3rem]'>
          <div className='w-1/2'>
            <p className='text-xl'>Our founders are pediatric dentists who know the struggles firsthand and are committed to creating a community where we can be better, together.</p>
          </div>
          <div>
            <button className='bg-[#3C4235] text-white px-12 py-4 text-[1.1rem] font-medium rounded-xl'>About Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollFiveSection;
