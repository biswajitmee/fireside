"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollSevenSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !listRef.current) return;

      const container = containerRef.current;
      const list = listRef.current;
      const listHeight = list.offsetHeight;

      // Clone the list dynamically for infinite scrolling effect
      const clone = list.cloneNode(true) as HTMLUListElement;
      container.appendChild(clone);

      // GSAP animation setup
      animationRef.current = gsap.to(container, {
        y: `-${listHeight}px`,
        duration: 10,
        ease: "linear",
        repeat: -1,
        onComplete: () => {
          gsap.set(container, { y: 0 });
        },
      });
    }, containerRef); // <-- context is tied to containerRef

    return () => ctx.revert(); // Cleanup on unmount
  }, []);


  // Pause animation on hover
  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    animationRef.current?.resume();
  };

  return (
    <>


      <div
        className='relative mt-40 rounded-3xl w-full h-screen overflow-hidden heroSection'

      >

        <img data-speed="0.8" src="backgroundForrest.avif" className="bg-top object-cover" />

        <div className='bottom-14 left-8 z-10 absolute pl-14 text-white'>
          <h1 className='font-InterTight text-7xl'>
            <span className='block font-IvyOraheadline2'>Driving growth</span>
            <span className='block font-IvyOraheadline'>in independent</span>
            <span className='block font-IvyOraheadline2'>
              pediatric dentistry
            </span>
          </h1>
          <p className='mt-8 font-InterTight text-lg w-[30vw]'>
            We’re shaping the future of independent pediatric practices by offering dentists access to the tools, community, and knowledge they need to succeed.
          </p>
        </div>
      </div>


      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
          {/* Left Side */}
          <div
            className="flex justify-center items-center h-screen text-center text-[#232323]">
            <h1 className="text-[3.4vw] font-IvyOraheadline2 text-left"> Solutions <span className="font-IvyOraheadline text-[#EF4C23]">for every </span> <br /> <span className="font-IvyOraheadline text-[#EF4C23]">stage</span> of your practice
            </h1>
          </div>

          {/* Right Side: Infinite Vertical Scroller */}
          <div className="relative p-10 h-screen overflow-hidden">
            <div
              ref={containerRef}
              className="relative flex flex-col w-full h-screen"
              onMouseEnter={handleMouseEnter} // Stop on hover
              onMouseLeave={handleMouseLeave} // Resume on hover out
            >
              <ul ref={listRef} className="flex flex-col gap-4">
                {[
                  "Launching your practice",
                  "Creating your brand",
                  "Growing your patient list",
                  "Streamlining daily operations",
                  "Hiring and training staff",
                  "Keeping patients coming back",
                  "Adopting new pediatric techniques",
                  "Managing finances for growth",
                  "Meeting legal standards",
                  "Planning for future changes",
                ].map((item, index) => (
                  <li key={index} className="px-6 py-4 rounded-lg text-[1.8vw] font-InterTight text-[#232323]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>


  );
};

export default ScrollSevenSection;
