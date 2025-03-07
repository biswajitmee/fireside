import React from 'react'
import ScrollOneSection from './components/scrollOneSection'
import ScrollTwoSection from './components/scrollTwoSection'
import ScrollThreeSection from './components/scrollThreeSection'
import ScrollFourSection from './components/scrollFourSection'
import ScrollFiveSection from "./components/ScrollFiveSection";
import ScrollSevenSection from './components/scrollSevenSection'

import ClientWrapper from './clientWrapper'
export default function Home() {
  return (
    <>
  <ClientWrapper>
      <ScrollOneSection />
      <ScrollTwoSection />
      <ScrollThreeSection />
      <ScrollFourSection />
      <ScrollFiveSection />
      <ScrollSevenSection/>
      </ClientWrapper>
    </>
  )
}
