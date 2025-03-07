import React from 'react'
import ClientWrapper from './clientWrapper'


import ScrollOneSection from './components/scrollOneSection'
import ScrollTwoSection from './components/scrollTwoSection'
import ScrollThreeSection from './components/scrollThreeSection'
import ScrollFourSection from './components/scrollFourSection'
import ScrollFiveSection from './components/ScrollFiveSection'
import ScrollSixSection from './components/ScrollSixSection'
import ScrollSevenSection from './components/scrollSevenSection'


export default function Home () {
  return (
    <>
      <ClientWrapper>
        <ScrollOneSection />
        <ScrollTwoSection />
        <ScrollThreeSection />
        <ScrollFourSection />
        <ScrollFiveSection />
        <ScrollSixSection />
        <ScrollSevenSection />
      </ClientWrapper>
    </>
  )
}
