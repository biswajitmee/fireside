'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, CustomEase)

function ScrollThreeSection () {
  const pinSectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const bigImgBackRef = useRef(null)
  const lastPin = useRef(null)
  const insidePin = useRef(null)
  const bigImgRef = useRef(null)
  const secondSection = useRef(null)
 

  useEffect(() => {
    const pinSection = pinSectionRef.current
    const scrollContainer = scrollContainerRef.current
    const bigImgBack = bigImgBackRef.current
    const LastPin = lastPin.current
    const insidePinElement = insidePin.current

    if (!pinSection || !scrollContainer || !bigImgBack || !LastPin || !insidePinElement) return;

    const totalScrollWidth = scrollContainer.scrollWidth - window.innerWidth
    const scrollSpeedFactor = 0.5 // Adjust (Lower = Slower)

    // Parallax Effect
const parallaxElements = [
  { element: bigImgRef.current, speed: 1.4 },     
    { element: bigImgBackRef.current, speed: 0.9 },
    { element: secondSection.current, speed: 0.9 },
    { element: lastPin.current, speed: 0.9 }
];

parallaxElements.forEach(({ element, speed }) => {
  gsap.to(element, {
    x: () => -totalScrollWidth * (1 - speed),
    scrollTrigger: {
      trigger: scrollContainer,
      start: 'top+=800 top', // Start after pinning delay
      end: () => `+=${totalScrollWidth * 4}`, // Moves slower
      scrub: 3 // Smooth and gradual effect
    }
  });
});


    // 🔹 Horizontal Scroll Timeline
    const horizontalScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: pinSection,
        start: 'top top',
        end: `+=${totalScrollWidth*2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    })

    horizontalScrollTL.to(scrollContainer, {
      x: (-totalScrollWidth*2) * scrollSpeedFactor, // Slowed down
      ease: "none",
      delay:0.05,
    })

    // 🔹 Scaling Image Animation
    const scaleTL = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      }
    }).fromTo(bigImgBack, { scale: 0.01 }, { scale: 1,duration:120,  ease:"none" })

    // 🔹 Last Section Pinning
    const lastPinTL = gsap.timeline({
      scrollTrigger: {
        trigger: LastPin,
        start: `top+=${totalScrollWidth*2} top`,
        end: `+=800`,
        pin: true,
        scrub: 1,
      }
    })

    // 🔹 Inside Pinning
    const insidePinTL = gsap.timeline({
      scrollTrigger: {
        trigger: insidePinElement,
        start: "top top",
        end: "+=1600",
        pin: true,
        scrub: 1,
        pinSpacing:true,
      }
    })

    // 🔹 Master Timeline
    const masterTL = gsap.timeline()
    masterTL.add(scaleTL)
            .add(horizontalScrollTL )
            .add(lastPinTL)
            .add(insidePinTL, '-=60')

    ScrollTrigger.refresh() // Refresh after setup

  }, [])

  return (
    <>
      <section className='flex justify-center items-center h-screen graybg'>
        <div className='flex flex-col items-center text-center'>
          <div className='textBox'>
            <h1 className='font-IvyOraheadline2 text-7xl darkFont'>
              The first membership group designed specifically to help pediatric dentists
              <span className='font-IvyOraheadline'> like you grow</span>
            </h1>
          </div>
          <br />
          <div className='textBox2'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find meaningful savings, resources, and a network of peers who understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={pinSectionRef} className='z-10 w-screen h-screen'>
        <div ref={scrollContainerRef} className='flex w-max h-screen'>

          {/* First Section */}
          <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
            <div className='h-screen overflow-hidden bigImgBack' ref={bigImgBackRef}>
              <div className='absolute h-screen bigImg' ref={bigImgRef}></div>
              <div className='content-end w-screen h-screen'>
                <div className='grid grid-cols-2 p-10 w-screen h-80'>
                  <div className='leftAlignDiv flex justify-start items-center p-16'>
                    <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                      Stay independent, <br /><br />
                      <span className='font-IvyOraheadline'>not isolated</span>
                    </h1>
                  </div>
                  <div className='rightAlignDiv flex justify-end items-center p-4'>
                    <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                      <p>
                        Get the support you need to grow your practice while staying independent. We're bringing together the most successful, likeminded independent practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div
            className='flex justify-center items-center w-[150vw] min-w-[150vw] h-screen text-white text-4xl bigImgBack'
              ref={secondSection}
          >
            <div className='flex flex-row w-full'>
              <div className='h-full basis-4/12'>
                <div className='relative min-h-screen'>
                  <div className='bottom-10 left-40 absolute max-w-lg'>
                    <h1 className='font-IvyOraheadline2 font-medium text-black text-7xl leading-tight'>
                      Save money
                    </h1>
                    <h2 className='font-IvyOraheadline text-black text-7xl leading-tight'>
                      without the hassle
                    </h2>
                    <p className='mt-4 text-gray-600 text-lg'>
                      Gain access to exclusive deals and discounts that don't
                      require hours of price-shopping.
                    </p>
                    <button className='bg-[#2f3d2c] hover:bg-[#263226] mt-6 px-6 py-3 rounded-lg font-medium text-white text-lg transition'>
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <div className='h-screen basis-8/12 bg3'>
                <div className='flex gap-5 bg-[#F5F1EE] p-10 w-full h-screen'>
                  <div className='flex flex-col justify-between gap-5 w-1/4 h-full'>
                    <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                      <img
                        src='/icon1.svg'
                        alt='Icon'
                        className='mb-4 w-10 h-10'
                      />
                      <h2 className='font-medium text-gray-600 text-3xl'>
                        15-20%
                      </h2>
                      <p className='text-gray-600 text-lg'>
                        Clinical Supply costs savings per year
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                      <img
                        src='/icon2.svg'
                        alt='Icon'
                        className='mb-4 w-10 h-10'
                      />
                      <h2 className='font-medium text-gray-600 text-3xl'>
                        20-100%
                      </h2>
                      <p className='text-gray-600 text-lg'>
                        Payment processing savings per year
                      </p>
                    </div>
                  </div>

                  <div className='relative flex flex-1 justify-center items-center h-full'>
                    <img
                      src='/middle-box-img.avif'
                      alt='Main'
                      className='rounded-xl w-full h-full object-cover'
                    />
                    <div className='bottom-5 left-1/2 absolute bg-white/70 backdrop-blur-md p-6 rounded-xl text-center -translate-x-1/2 transform'>
                      <h2 className='font-medium text-gray-600 text-3xl'>
                        $15,000-$50,000+
                      </h2>
                      <p className='text-gray-600 text-lg'>
                        Total Estimated Profit increase by location
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-between gap-5 w-1/4 h-full'>
                    <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                      <img
                        src='/icon3.svg'
                        alt='Icon'
                        className='mb-4 w-10 h-10'
                      />
                      <h2 className='font-medium text-gray-600 text-3xl'>
                        150 hours
                      </h2>
                      <p className='text-gray-600 text-lg'>
                        Time and Labor savings per year
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                      <img
                        src='/icon4.svg'
                        alt='Icon'
                        className='mb-4 w-10 h-10'
                      />
                      <h2 className='font-medium text-gray-600 text-3xl'>
                        $475/month
                      </h2>
                      <p className='text-gray-600 text-lg'>
                        Fireside Membership Fee
                        <br />
                        $125 for additional locations
                        <br />
                        All backed by risk-free guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Last Section Pinning */}
          <div className='flex justify-center items-center ml-40 w-screen h-screen text-white text-4xl' ref={lastPin}>
            <div className='w-screen h-screen overflow-hidden bigImgBack'>
              <div className='fixed h-screen bigImg2'></div>
              <div className='content-end w-screen h-screen'>
                <div className='grid grid-cols-2 p-10 w-screen h-80'>
                  <div className='leftAlignDiv flex justify-start items-center p-16'>
                    <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                      Stay independent, <br /><br />
                      <span className='font-IvyOraheadline'>not isolated</span>
                    </h1>
                  </div>
                  <div className='rightAlignDiv flex justify-end items-center p-4'>
                    <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                      <p>Get the support you need to grow your practice while staying independent. We're bringing together the most successful, likeminded independent practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
      </section>

      {/* Inside Pin Section */}
      <section className='mt-[-100vh] w-screen h-[60vh]' ref={insidePin}>
      <div className='flex flex-col items-center text-center'>
          <div className='textBox'>
            <h1 className='font-IvyOraheadline2 text-7xl darkFont'>
              The first membership group designed specifically to help pediatric dentists
              <span className='font-IvyOraheadline'> like you grow</span>
            </h1>
          </div>
          <br />
          <div className='textBox2'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find meaningful savings, resources, and a network of peers who understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className='z-20 flex justify-center items-center bg-orange-600 h-screen'>
        <h1 className='text-white text-4xl'>End of Scroll</h1>
      </section>
    </>
  )
}

export default ScrollThreeSection
