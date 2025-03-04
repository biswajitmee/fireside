'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, CustomEase)

function ScrollThreeSection () {
  const scrollRef = useRef(null)
  const pinRef = useRef(null)
  const bigImgBackRef = useRef(null)
  const bigImgRef = useRef(null)
  const secondSection = useRef(null)
  const thirdSection = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollContainer = scrollRef.current
    const totalScrollWidth = scrollContainer.scrollWidth - window.innerWidth

    // Pin the section first (without horizontal scrolling)
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: 'top top',
      end: '+=5000', // ⬅️ Increase pinning duration (was 4000)
      pin: true,
      pinSpacing: true,
      scrub: 10,
      ease: 'power1.in'
    })

    // Horizontal scrolling animation (make it slower)
    gsap.to(scrollContainer, {
      x: () => -totalScrollWidth, // Move left
      ease: 'power1.out',
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top+=800 top', // Start after pinning delay
        end: () => `+=${totalScrollWidth * 2}`, // ⬅️ Increase scroll distance (was totalScrollWidth)
        scrub: 1, // ⬅️ Higher scrub makes scrolling smoother and slower
        
      }
    })

    // Parallax Effects (make them slower)
    const parallaxElements = [
      { element: bigImgBackRef.current, speed: 0.5 },
      { element: bigImgRef.current, speed: 1.8 },
      { element: secondSection.current, speed: 0.5 },
      { element: thirdSection.current, speed: 0.5 }
    ]

    parallaxElements.forEach(({ element, speed }) => {
      gsap.to(element, {
        x: () => -totalScrollWidth * (1 - speed),
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top+=800 top', // Start after pinning delay
          end: () => `+=${totalScrollWidth * 4}`, // ⬅️ Make it move slower
          scrub: 3 // ⬅️ Slow down the parallax effect
        }
      })
    })

    // Scale animation for bigImgBack
    gsap.fromTo(
      bigImgBackRef.current,
      { scale: 0.1 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      }
    )
  }, [])

  return (
    <>
      {/* First Section */}
      <section className='flex justify-center items-center h-screen graybg'>
        <div className='flex flex-col items-center text-center'>
          <div className='textBox'>
            <h1 className='font-IvyOraheadline2 text-7xl darkFont'>
              The first membership group designed specifically to help pediatric
              dentists
              <span className='font-IvyOraheadline'>like you grow</span>
            </h1>
          </div>
          <br />
          <div className='textBox2'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find
              meaningful savings, resources, and a network of peers who
              understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className='h-screen graybg graybg pinsection' ref={pinRef}>
        <div ref={scrollRef} className='flex h-screen graybg horizentalScroll'>
        
        
          <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
            <div
              className='bg-red-600 h-screen overflow-hidden bigImgBack'
              ref={bigImgBackRef}
            >
              <div className='fixed h-screen bigImg' ref={bigImgRef}></div>

              <div className='content-end w-screen h-screen'>
                <div className='grid grid-cols-2 p-10 w-screen h-80'>
                  <div className='leftAlignDiv flex justify-start items-center p-16'>
                    <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                      Stay independent , <br />
                      <br />
                      <span className='font-IvyOraheadline'>not isolated</span>
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

       

          <div
            className='flex justify-center items-center ml-40 w-screen h-screen text-white text-4xl'
            ref={thirdSection}
          >
            <div className='w-screen h-screen overflow-hidden bigImgBack'>
              <div className='fixed h-screen bigImg2'></div>
              <div className='content-end w-screen h-screen'>
                <div className='grid grid-cols-2 p-10 w-screen h-80'>
                  <div className='leftAlignDiv flex justify-start items-center p-16'>
                    <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                      Stay independent , <br />
                      <br />
                      <span className='font-IvyOraheadline'>not isolated</span>
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
      </section>
    </>
  )
}

export default ScrollThreeSection
