'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function ScrollThreeSection () {
  const pinContainer = useRef(null)
  const scrollContainerRef = useRef(null)
  const insidePin = useRef(null)
  const box1Ref = useRef(null)

  const bigImgRef1 = useRef(null)
  const bigImgRef2 = useRef(null)
  const bigImgRef3 = useRef(null)

  const lastPin = useRef(null)

  useEffect(() => {
    const box1 = box1Ref.current
    const scrollSpeedFactor = 1.6
    const pinSection = pinContainer.current
    const scrollContainer = scrollContainerRef.current
    const LastPin = lastPin.current

    const totalScrollWidth =
      (scrollContainer.scrollWidth - window.innerWidth) * scrollSpeedFactor

    const horizontalScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: pinSection,
        start: 'top top',
        end: `+=${totalScrollWidth}`,
        scrub: true,
        pin: true, 
      }
    })

 
    const containerpinTL = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        start: `+=${totalScrollWidth}`, // Start pinning at the end of horizontal scroll
        end: `+=500`, // Keep pinned for 500px scroll distance
        pin: true,
        scrub: 1,
      },
    });

 


 



    // Main Scroll Animation
    horizontalScrollTL.to(scrollContainer, {
      x: -(scrollContainer.scrollWidth - window.innerWidth),
        
      ease: 'none'
    })

    const parallaxElements = [{ element: bigImgRef1.current, speed: 1.3,  }]

    // ✅ Parallax Effect (Images Move Slower Than Scroll)
    parallaxElements.forEach(({ element, speed }) => {
      gsap.to(element, {
        // x: () => -(scrollContainer.scrollWidth - window.innerWidth) * speed,
        x: () => -totalScrollWidth * (1 - speed),
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: `+=${totalScrollWidth}`,
          scrub: true
        }
      },'-=100')
    })

   

    const parallaxElements2 = [
      { element: bigImgRef2.current, speed: 1.05 },
      { element: bigImgRef3.current, speed: 1.1 }
    ]

    parallaxElements2.forEach(({ element, speed }) => {
      if (element) {
        gsap.to(element, {
          x: () => -totalScrollWidth * (1 - speed),
          ease: 'none',
          scrollTrigger: {
            trigger: element, // Trigger animation when this element enters
            start: 'left right', // Start when the element enters the viewport
            end: 'right left', // End when the element leaves the viewport
            scrub: true,
            containerAnimation: horizontalScrollTL
          }
        })
      }
    })




    const scaleTL = gsap.timeline()
    scaleTL.fromTo(
      box1,
      { scale: 0.1 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          delay: 10,
        }
      }
    )

    const lastPinTL = gsap.timeline({
      scrollTrigger: {
        trigger: LastPin,
        start: 'left left',
        end:900,
        pin: true
      }
    })

    const insidePinElement = insidePin.current // Ensure ref is set
    if (!insidePinElement) return

    const insidepinTL = gsap.timeline({
      scrollTrigger: {
        trigger: insidePinElement,
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 1
      }
    })

    
 

  }, [])

  return (
    <>
      <div className='h-screen pinContainer' ref={pinContainer}>
        <div
          className='flex flex-row h-screen scrollContainer'
          ref={scrollContainerRef}
        >
          <div className='h-screen section1'>
            <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
              <div
                className='h-screen overflow-hidden bigImgBack'
                ref={box1Ref}
              >
                <div
                  className='absolute h-screen bigImg'
                  ref={bigImgRef1}
                ></div>

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
          <div className='h-screen section2'>
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

                    <div className='relative flex flex-1 justify-center items-center rounded-xl h-full overflow-hidden'>
                      {/* <img
                        src='/middle-box-img.avif'
                        alt='Main'
                        className='rounded-xl w-full h-full object-cover'
                        ref={bigImgRef2}
                      /> */}

                      <div
                        className='absolute h-screen bigImg3'
                        ref={bigImgRef2}
                      ></div>

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
          <div className='h-screen section1' ref={lastPin}>
            <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
              <div className='h-screen overflow-hidden bigImgBack'>
                <div
                  className='absolute h-screen bigImg2'
                  ref={bigImgRef3}
                ></div>

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

      <section
        className='-z-10 bg-yellow-300 mt-[-50vh] w-screen h-[60vh]'
        ref={insidePin}
      >
        <h1 className='text-white text-4xl'>Inside Pin</h1>
      </section>

      <section className='flex justify-center items-center bg-orange-600 h-screen'>
        <h1 className='text-white text-4xl'>End of Scroll</h1>
      </section>
    </>
  )
}

export default ScrollThreeSection
