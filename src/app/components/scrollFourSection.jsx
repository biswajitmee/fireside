'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function ScrollFourSection() {
  const pinCircel = useRef(null)
  const leftCircel = useRef(null)
  const rightCircel = useRef(null)
  const middleCircel = useRef(null)
  const middleCircelContent = useRef(null)
  const rectangle = useRef(null)

  useEffect(() => {
    const pinCircelPin = pinCircel.current

    const viewportWidth = window.innerWidth
    const circleWidth = window.innerHeight // 50vh in pixels
    const lastPosition = (viewportWidth - circleWidth) / 2 // Center position calculation

    // Calculate the total duration of all animations
    const totalAnimationTime = 14 + 1 + 20 + 1 // Sum of all durations inside timeline
    const endValue = `+=${totalAnimationTime * 100}` // Convert to pixels or adjust as needed

    const CircelPinlTL = gsap.timeline({
      scrollTrigger: {
        trigger: pinCircelPin,
        start: 'top top',
        end: endValue, // Dynamically set end value
        scrub: true,
        pin: true
      }
    })

    // Move circles within the pinned section
    CircelPinlTL.fromTo(
      leftCircel.current,
      { left: '7vw', opacity: 1 },
      { left: lastPosition, duration: 14, ease: 'power2.out', opacity: 0.1 },
      5 // Delay the start of this animation by 5 seconds
    )
      .fromTo(
        rightCircel.current,
        { right: '7vw', opacity: 1 },
        { right: lastPosition, duration: 14, ease: 'power2.out', opacity: 0.1 },
        '<' // Ensures it starts at the same time as the leftCircel animation
      )

      .fromTo(
        middleCircel.current,
        { left: lastPosition, opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible', ease: 'power2.out', duration: 1 },
        '-=4'
      )
      .to(
        middleCircelContent.current,
        { display: 'block', opacity: 1, duration: 1 },
        '-=4'
      )
      .to(middleCircel.current, { scale: 2.5, duration: 20 }, '-=2')
      .to(
        rectangle.current,
        { display: 'block', zIndex: 20, duration: 1 },
        '-=8'
      )

      .to(middleCircel.current, { display: 'none' }, '-=5')
  }, [])

  return (
    <>
      <section
        className='relative flex justify-center items-center h-screen'
        ref={pinCircel}
      >
        <div
          className='leftBoxCircel z-10 absolute flex justify-center items-center p-4 rounded-full w-full h-full overflow-hidden -translate-y-1/2 transform'
          ref={leftCircel}
        >
          <div className='flex flex-col justify-center items-center p-6 w-4/5 h-full centerDiv'>
            <h1 className='text-4xl'>Solo</h1>
            <p className='text-xl'>Retain autonomy your practice, your way.</p>
            <ul className='circelInside'>
              <li>
                <ul>
                  <li>Industry confusing by design</li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>Pay too much or spend hours finding deals</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>No Support</li>
                </ul>
              </li>
            </ul>
            <p className='text-xl text-center'>
              Are you doing things the right way? No-one <br /> to bounce ideas
              off of.
            </p>
          </div>
        </div>

        <div
          className='rightBoxCircel z-10 absolute flex justify-center items-center p-4 rounded-full -translate-y-1/2 transform'
          ref={rightCircel}
        >
          <div className='flex flex-col justify-center items-center p-6 w-4/5 h-full centerDiv'>
            <h1 className='text-4xl'>DSO</h1>
            <p className='text-xl'>
              Best practices for greater profitability, negotiated group
              savings, corporate support.
            </p>
            <ul className='circelInside'>
              <li>
                <ul>
                  <li>Intergration plan </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>Staff disruption</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Lose autonomy</li>
                </ul>
              </li>
            </ul>
            <p className='text-xl text-center'>
              Are you doing things the right way? No-one <br /> to bounce ideas
              off of.
            </p>
          </div>
        </div>

        <div
          className='z-10 absolute flex justify-center items-center middleCircelBox'
          ref={middleCircel}
        ></div>
        <div
          className='z-10 flex flex-col justify-center items-center p-6 centerDiv3'
          ref={middleCircelContent}
        >
          <h1 className='text-4xl text-center'>Solo</h1>
          <p className='text-xl text-center'>
            Retain autonomy your practice, your way.
          </p>
          <ul className='circelInside'>
            <li>
              <ul>
                <li>Industry confusing by design</li>
              </ul>
            </li>

            <li>
              <ul>
                <li>Pay too much or spend hours finding deals</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>No Support</li>
              </ul>
            </li>
          </ul>
          <p className='text-xl text-center'>
            Are you doing things the right way? No-one <br /> to bounce ideas
            off of.
          </p>
        </div>

        <div className='rectangle' ref={rectangle}>
          <div className='flex flex-row items-center bg-[#3C4235] p-[5rem]'>
            <div className='basis-1/2 flex justify-center items-center'>
              <img className='w-[32vw]' src="/bg-red.avif" alt="" />
            </div>
            <div className='basis-1/2 p-[4rem]'>
              <h3 className='text-5xl font-IvyOraheadline2 text-white leading-[3.5rem]'><span className='font-IvyOraheadline'>Lay the right foundation</span><br /> for your practice.</h3>
              <p className='text-lg mt-8 text-white'>Whether it’s setting up your practice or finding ways to save, we’re here to make the process smoother and less stressful.
                <br />
                <br />
                Learn from fellow dentists, share real experiences, and find comfort knowing you’re part of a community that cares.
              </p>
              <button className='mt-[4rem] bg-[#4F5348] px-8 py-4 rounded-xl text-[1.1rem text-white font-medium'>Community</button>
            </div>
          </div>
        </div>
      </section>
      <section className='-z-30 w-screen h-screen'></section>
    </>
  )
}

export default ScrollFourSection;
