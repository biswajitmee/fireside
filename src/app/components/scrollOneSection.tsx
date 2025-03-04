'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

function ScrollOneSection () {
  const vodeoSection = useRef(null)
  const textanimation = useRef(null)

  const firstDiv = useRef(null) // Ref for the first absolute div
  const secondDiv = useRef(null) // Ref for the second absolute div
  const thirdDiv = useRef(null) // Ref for the third absolute div

  useEffect(() => {
    gsap.set(firstDiv.current, { autoAlpha: 0, scale: 0.8 })
    gsap.set(secondDiv.current, { autoAlpha: 0, scale: 0.8 })
    gsap.set(thirdDiv.current, { autoAlpha: 0, scale: 1.2 })

    const firstDivTimeline = gsap.timeline()
    const firstDivTimeline1 = gsap.timeline()
    const secondDivTimeline = gsap.timeline()
    const thirdDivTimeline = gsap.timeline()

    // Add animations to the firstDivTimeline
    firstDivTimeline.fromTo(
      firstDiv.current,
      { autoAlpha: 0, scale: 1, duration: 10 },
      { autoAlpha: 1, scale: 1.7, duration: 15, ease: 'power1.in' } // Slower animation
    )

    firstDivTimeline1.fromTo(
      firstDiv.current,
      { autoAlpha: 1, delay: 50, duration: 10 },
      { autoAlpha: 0, duration: 2 }
    )

    // Add animations to the secondDivTimeline
    secondDivTimeline.fromTo(
      secondDiv.current,
      { autoAlpha: 0, scale: 1.3, duration: 20 },
      { autoAlpha: 1, scale: 1.7, delay: 5, duration: 15, ease: 'power1.in' } // Slower animation
    )

    // Add animations to the thirdDivTimeline
    thirdDivTimeline.fromTo(
      thirdDiv.current,
      { autoAlpha: 0, scale: 1.3, duration: 13 },
      { autoAlpha: 1, scale: 1, duration: 20, delay: 20 } // Slower animation
    )

    // Create a master timeline and combine the individual timelines
    const masterTimeline = gsap.timeline()
    masterTimeline
      .add(firstDivTimeline)
      .add(firstDivTimeline1, '+=15')
      .add(secondDivTimeline, '-=2') // Overlap by 2 seconds for smoother transitions
      .add(thirdDivTimeline, '-=4') // Overlap by 2 seconds for smoother transitions

    ScrollTrigger.create({
      trigger: textanimation.current,
      pin: true, // Pin the section
      start: 'top top', // Pin when the section reaches the top of the viewport
      end: '+=350%', // Extend pin duration to match the animations
      animation: masterTimeline,
      scrub: 2
    })

  
  }, [])

  return (
    <>
      <div
        className='relative w-full h-screen overflow-hidden heroSection'
        ref={vodeoSection}
      >
        <video
          className='top-0 left-0 absolute w-full h-full object-cover'
          src='/hero-section-video.mp4'
          autoPlay
          muted
          loop
        />

        <div className='bottom-14 left-8 z-10 absolute pl-14 text-white'>
          <h1 className='font-InterTight text-7xl'>
            <span className='block'>Want more</span>
            <span className='block'>for your practice?</span>
            <span className='block font-IvyOraheadline'>
              Join us by <span className='orngColor'> the Fireside.</span>
            </span>
          </h1>
          <p className='mt-4 font-InterTight text-lg'>
            The first membership community for pediatric dentists, built by
            pediatric dentists.
          </p>
        </div>
      </div>

      <section
        className='margintop relative w-full h-screen graybg'
        ref={textanimation}
      >
        <div className='relative w-full h-screen'>
          <div className='z-10 absolute inset-0 flex justify-center items-center'>
            <h1
              className='font-IvyOraheadline2 text-center heading'
              ref={firstDiv}
            >
              <span>A membership community for the</span>
              <br />
              <span>
                future{' '}
                <span className='font-IvyOraheadline'>
                  of pediatric dentistry
                </span>
              </span>
            </h1>
          </div>

          <div className='z-10 absolute inset-0 flex justify-center items-center'>
            <h1
              className='font-IvyOraheadline2 text-center heading'
              ref={secondDiv}
            >
              <span>Here to provide pediatric dentists access to</span>
              <br />
              <span>meaningful savings and a collaborative community.</span>
            </h1>
          </div>

          <div
            className='z-0 absolute inset-0 flex justify-center items-center'
            ref={thirdDiv}
          >
            <Image
              src='/bg-icon.avif'
              alt='Background Icon'
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollOneSection
