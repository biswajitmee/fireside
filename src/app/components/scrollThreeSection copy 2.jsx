'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function ScrollThreeSection () {
  const pinSectionRef = useRef(null)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const pinSection = pinSectionRef.current
    const scrollContainer = scrollContainerRef.current

    const totalScrollWidth = scrollContainer.scrollWidth - window.innerWidth // Ensure full movement

    gsap.to(scrollContainer, {
      x: -totalScrollWidth, // Move the full width
      ease: 'none',
      scrollTrigger: {
        trigger: pinSection,
        start: 'top top',
        end: `+=${totalScrollWidth}`, // Ensures full scrolling distance
        scrub: 1,
        pin: true, // Pin the section while scrolling
        anticipatePin: 1
      }
    })

    // Second pin
    ScrollTrigger.create({
      trigger: scrollContainer,
      start: `top+=${totalScrollWidth} top`,  
      end: `+=300`,  
      pin: true,
      pinSpacing: false,
      scrub: 1
    })
  }, [])

  return (
    <>
      {/* Horizontal Scroll Section */}
      <section
        ref={pinSectionRef}
        className='z-10 relative h-screen'
      >
        <div ref={scrollContainerRef} className='flex w-max h-screen'>
          <div className='flex justify-center items-center bg-red-500 w-[100vw] h-screen'>
            <h1 className='text-white text-4xl'>Section 1</h1>
          </div>
          <div className='flex justify-center items-center bg-blue-800 w-[50vw] h-screen'>
            <h1 className='text-white text-4xl'>Section 2</h1>
          </div>
          <div className='flex justify-center items-center bg-blue-500 w-[50vw] h-screen'>
            <h1 className='text-white text-4xl'>Section 3</h1>
          </div>
          <div className='flex justify-center items-center bg-yellow-500 w-[70vw] h-screen'>
            <h1 className='text-white text-4xl'>Section 4</h1>
          </div>
          <div className='flex justify-center items-center bg-purple-500 w-[100vw] h-screen'>
            <h1 className='text-white text-4xl'>Section 5</h1>
          </div>
        </div>

        
      </section>

      {/* Final Section */}
      <section className="z-[20] relative flex justify-center items-center bg-green-600 mt-[-200vh] h-screen">
        <h1 className='text-white text-4xl'>End of Scroll</h1>
      </section>
    </>
  )
}

export default ScrollThreeSection
