import React from 'react'
import ClientWrapper from './clientWrapper'


import ScrollOneSection from './components/scrollOneSection'
import ScrollTwoSection from './components/scrollTwoSection'
import ScrollThreeSection from './components/scrollThreeSection'
import ScrollFourSection from './components/scrollFourSection'
import ScrollFiveSection from './components/ScrollFiveSection'
import ScrollSixSection from './components/ScrollSixSection'
import ScrollSevenSection from './components/scrollSevenSection'
import ScrollNineSection from './components/ScrollNinSection'


export default function Home() {
  return (
    <>
      <ClientWrapper>
        <div className='bg-[#F3EFEC]'>
        <ScrollOneSection />
        <ScrollTwoSection />
        <ScrollThreeSection />
        <ScrollFourSection />
        <ScrollFiveSection />
        <ScrollSixSection />
        <ScrollSevenSection />
        </div>
        <div className="h-[80vh]"></div>
      </ClientWrapper>
    </>
  )
}
