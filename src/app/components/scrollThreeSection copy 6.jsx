'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function ScrollThreeSection () {
  const pinContainer = useRef(null)
  const scrollContainerRef = useRef(null)

  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)
  const sec3Ref = useRef(null)

  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)

  const bigImgRef1 = useRef(null)
  const bigImgRef2 = useRef(null)
  const bigImgRef3 = useRef(null)

  useEffect(() => {
    const scrollSpeedFactor = 1.9
    const pinSection = pinContainer.current
    const scrollContainer = scrollContainerRef.current

    const totalScrollWidth =
      (scrollContainer.scrollWidth - window.innerWidth) * scrollSpeedFactor

    const parallaxElements = [
      { element: sec1Ref.current, speed: 0 },
      { element: sec2Ref.current, speed: 0 },
      { element: sec3Ref.current, speed: 0 },

      { element: box1Ref.current, speed: 0 },
      { element: box2Ref.current, speed: 0 },
      { element: box3Ref.current, speed: 0 },

      { element: bigImgRef1.current, speed:0 },
      { element: bigImgRef2.current, speed: 0 },
      { element: bigImgRef3.current, speed: 0 },
    ]

    const horizontalScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: pinSection,
        start: 'top top',
        end: `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,

        // ✅ Delay at Start (Forward Scroll)
        onEnter: () => gsap.to(scrollContainer, { delay: 20 }),

        // ✅ Delay at End (Forward Scroll)
        onLeave: () => gsap.to(scrollContainer, { delay: 20 }),

        // ✅ Delay at Start (Backward Scroll)
        onEnterBack: () => gsap.to(scrollContainer, { delay: 20 }),

        // ✅ Delay at End (Backward Scroll)
        onLeaveBack: () => gsap.to(scrollContainer, { delay: 20 })
      }
    })

    // Main Scroll Animation
    horizontalScrollTL.to(scrollContainer, {
      x: -(scrollContainer.scrollWidth - window.innerWidth),
      delay: 0.05,
      ease: 'none'
    })

    // ✅ Parallax Effect (Images Move Slower Than Scroll)
    parallaxElements.forEach(({ element, speed }) => {
      gsap.to(element, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth) * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: `+=${totalScrollWidth}`,
          scrub: true
        }
      })
    })
  }, [])

  return (
    <>
      <div className='h-screen pinContainer' ref={pinContainer}>
        <div
          className='flex flex-row h-screen scrollContainer'
          ref={scrollContainerRef}
        >
          <div className='h-screen section1'  >
            <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
              <div
                className='h-screen overflow-hidden bigImgBack' >
                <div className='absolute h-screen bigImg'  ></div>

                <div className='content-end w-screen h-screen'>
                  <div className='grid grid-cols-2 p-10 w-screen h-80'>
                    <div className='leftAlignDiv flex justify-start items-center p-16'>
                      <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                        Stay independent , <br />
                        <br />
                        <span className='font-IvyOraheadline'>
                          not isolated
                        </span>
                      </h1>
                    </div>

                    <div className='rightAlignDiv flex justify-end items-center p-4'>
                      <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                        <p>
                          Get the support you need to grow your practice while
                          staying independent. We're bringing together the most
                          successful, likeminded independent practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-screen section2'  >
            <div className='flex justify-center items-center w-[150vw] min-w-[150vw] h-screen text-white text-4xl bigImgBack'>
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
                <div className='h-screen basis-8/12'>
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

                    <div
                      className='relative flex flex-1 justify-center items-center h-full'
                      ref={box2Ref}
                    >
                      <img
                        src='/middle-box-img.avif'
                        alt='Main'
                        className='rounded-xl w-full h-full object-cover'
                        ref={bigImgRef2}
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
          </div>
          <div className='h-screen section3'  >
            <div className='flex justify-center items-center ml-40 w-screen h-screen text-white text-4xl'>
              <div
                className='w-screen h-screen overflow-hidden bigImgBack'
                
              >
                <div className='h-screen bigImg2' ></div>
                <div className='content-end w-screen h-screen'>
                  <div className='grid grid-cols-2 p-10 w-screen h-80'>
                    <div className='leftAlignDiv flex justify-start items-center p-16'>
                      <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                        Stay independent , <br />
                        <br />
                        <span className='font-IvyOraheadline'>
                          not isolated
                        </span>
                      </h1>
                    </div>

                    <div className='rightAlignDiv flex justify-end items-center p-4'>
                      <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                        <p>
                          Get the support you need to grow your practice while
                          staying independent. We're bringing together the most
                          successful, likeminded independent practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-blue-800 mt-[-100vh] w-screen h-screen'>
        <h1 className='text-white text-4xl'>Inside Pin</h1>
      </section>

      <section className='flex justify-center items-center bg-orange-600 h-screen'>
        <h1 className='text-white text-4xl'>End of Scroll</h1>
      </section>
    </>
  )
}

export default ScrollThreeSection
